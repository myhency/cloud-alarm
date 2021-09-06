/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import {
  Box,
  IconButton,
  Checkbox,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
  TableHead,
  TableSortLabel,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Icons
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import GetAppIcon from '@material-ui/icons/GetApp';
import RefreshIcon from '@material-ui/icons/Refresh';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AddIcon from '@material-ui/icons/Add';
import HelpIcon from '@material-ui/icons/Help';
import RedoIcon from '@material-ui/icons/Redo';

import { useStyles } from '../../../common/components/Styles';
import { SearchInput } from '../../../common/components/Inputs';
import { StyledTooltip } from '../../../common/components/Tooltips';

import {
  loadAlarmList,
  loadAlarmDetail,
  clearAlarmDetail,
  removeAlarmDocument,
  clearNewAlarm,
  loadHistoryAlarmDetail,
  setAlarm,
} from '../../../state/alarmSlice';

import InBoxModalContainer from './InBoxModalContainer';

const headCells = [
  { id: 'itemName', numeric: false, disablePadding: true, label: '종목명' },
  { id: 'closingPrice', numeric: false, disablePadding: true, label: '현재가' },
  { id: 'recommendPrice', numeric: false, disablePadding: true, label: '돌파가격' },
  { id: 'losscutPrice', numeric: false, disablePadding: true, label: '손절가격' },
  { id: 'comment', numeric: false, disablePadding: true, label: '코멘트' },
  { id: 'alarmStatus', numeric: true, disablePadding: false, label: '알람상태' },
  { id: 'modifiedDate', numeric: true, disablePadding: false, label: '최근 업데이트' },
];

function EnhancedTableHead(props) {
  const { status, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow
        style={{ height: '4vh', backgroundColor: '#FBFBFB' }}
      >
        <TableCell padding="checkbox" key="check">
          <></>
        </TableCell>
        {headCells.map((headCell) => {
          if (status === 'losscut' && headCell.id === 'closingPrice') {
            return null;
          }
          if (headCell.id === 'recommendPrice') {
            return (
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? 'right' : 'left'}
                padding={headCell.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >
                  <Box display="flex" flexDirection="column">
                    <Typography variant="subtitle2">
                      {headCell.label}
                    </Typography>
                    {status === 'losscut' ? (
                      <></>
                    ) : (
                      <Typography variant="caption">(현재가대비%)</Typography>
                    )}
                  </Box>
                </TableSortLabel>
              </TableCell>
            );
          }
          return (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}

function descendingComparator(a, b, orderBy) {
  if (orderBy === 'recommendPrice') {
    return (100 - ((a.recommendPrice / a.closingPrice) * 100)).toFixed(2)
      - (100 - ((b.recommendPrice / b.closingPrice) * 100)).toFixed(2);
  }

  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function AlarmListContent() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { alarms } = useSelector((state) => ({
    alarms: state.alarm.alarms,
  }));

  const { deletedAlarm } = useSelector((state) => ({
    deletedAlarm: state.alarm.deletedAlarm,
  }));

  const { search } = history.location;
  const queryObj = queryString.parse(search);
  const { status } = queryObj;

  useEffect(() => {
    dispatch(loadAlarmList(status || 'active'));
  }, [deletedAlarm, status]);

  const [selected, setSelected] = React.useState([]);
  const [hoveredId, setHoveredId] = React.useState(null);
  const [warningOpen, setWarningOpen] = React.useState(false);
  const [toBeDeletedId, setToBeDeletedId] = React.useState(0);
  const [detailModalOpened, setDetailModalOpened] = React.useState(false);
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('modifiedDate');

  const numSelected = selected.length;
  const rowCount = alarms.length;

  function handleCancelClose() {
    setWarningOpen(false);
  }

  const handleDetailOpen = (e, id) => {
    if (status === 'losscut') {
      dispatch(loadHistoryAlarmDetail(id));
    } else {
      dispatch(loadAlarmDetail(id));
    }
    setDetailModalOpened(true);
  };

  function handleDetailClose() {
    dispatch(clearAlarmDetail());
    setDetailModalOpened(false);
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = alarms.map((alarm) => alarm.alarmId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleOnChange = (e, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleOnModifyButton = (e, alarm) => {
    dispatch(setAlarm(alarm));
    history.push(`/service/alarm/update/ready/${alarm.alarmId}`);
  };

  const handleOnReAddButton = (e, id) => {
    history.push(`/service/alarm/readd/ready/${id}`);
  };

  const handleOnDeleteButton = (e, id) => {
    setWarningOpen(true);
    setToBeDeletedId(id);
  };

  const handleConfirmClose = () => {
    const id = toBeDeletedId;
    dispatch(removeAlarmDocument(id));
    dispatch(clearNewAlarm());
    setWarningOpen(false);
    dispatch(loadAlarmList());
  };

  function handleNewAlarmOnClick(event) {
    event.preventDefault();
    history.push('/service/alarm/new/add');
  }

  function handleRefresh() {
    history.go(0);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <main className={classes.content}>
      <InBoxModalContainer
        openState={detailModalOpened}
        onClose={handleDetailClose}
      />
      <div className={classes.toolbar} />
      <div className={classes.tableHeaderRoot}>
        <Box display="flex" flexDirection="row" style={{ width: '100%' }}>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={handleSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
          {(rowCount > 0 && numSelected === rowCount)
            || (numSelected > 0 && numSelected < rowCount)
            ? (
              <>
                <StyledTooltip title="삭제">
                  <IconButton className={classes.action}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTooltip>
                <StyledTooltip title="내려받기">
                  <IconButton className={classes.action}>
                    <GetAppIcon />
                  </IconButton>
                </StyledTooltip>
              </>
            ) : (
              <IconButton onClick={handleRefresh}>
                <RefreshIcon />
              </IconButton>
            )}
          <SearchInput placeholder="검색" />
          <Box
            display="flex"
            alignItems="center"
            flexGrow={1}
            justifyContent="flex-end"
            fontSize={12}
          >
            {/* <Typography>2 개 중 1-50</Typography>
            <IconButton disabled>
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton>
              <KeyboardArrowRightIcon />
            </IconButton> */}
            <StyledTooltip title="종목추가">
              <IconButton
                id="alarm-modify-button"
                className={classes.action}
                onClick={handleNewAlarmOnClick}
              >
                <AddIcon />
              </IconButton>
            </StyledTooltip>
            <StyledTooltip title="도움말">
              <IconButton
                id="alarm-modify-button"
                className={classes.action}
              >
                <HelpIcon />
              </IconButton>
            </StyledTooltip>
          </Box>
        </Box>
      </div>
      <div className={classes.root}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              status={status}
            />
            <TableBody>
              {stableSort(alarms, getComparator(order, orderBy))
                .map((alarm) => {
                  const isItemSelected = isSelected(alarm.alarmId);
                  const labelId = `enhanced-table-checkbox-${alarm.alarmId}`;
                  const chartLink = `https://alphasquare.co.kr/home/stock/stock-summary?code=${alarm.itemCode}`;
                  // const losscutBy = (100 - ((alarm.losscutPrice / alarm.closingPrice) * 100)).toFixed(2);
                  const recommendBy = (100 - ((alarm.recommendPrice / alarm.closingPrice) * 100)).toFixed(2);

                  return (
                    <TableRow
                      id={alarm.alarmId}
                      style={{ cursor: 'pointer', height: '4vh' }}
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={alarm.alarmId}
                      selected={isItemSelected}
                      onMouseOver={() => setHoveredId(alarm.alarmId)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <TableCell className={classes.checkbox}>
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          onChange={(event) => handleOnChange(event, alarm.alarmId)}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        width="10%"
                        // onClick={(e) => handleDetailOpen(e, alarm.alarmId)}
                      >
                        <Box display="flex" flexDirection="column">
                          <a target="_blank" href={chartLink} rel="noreferrer">
                            <Typography style={{ color: '#0061B0' }}>
                              {alarm.itemName}
                            </Typography>
                          </a>
                        </Box>
                      </TableCell>
                      {status === 'losscut' ? (
                        <></>
                      ) : (
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          width="10%"
                          onClick={(e) => handleDetailOpen(e, alarm.alarmId)}
                        >
                          <Box display="flex" flexDirection="column">
                            <Typography style={{ color: '#505157' }}>
                              {new Intl.NumberFormat('ko-KR').format(alarm.closingPrice)}
                            </Typography>
                          </Box>
                        </TableCell>
                      )}
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        width="10%"
                        onClick={(e) => handleDetailOpen(e, alarm.alarmId)}
                      >
                        <Box display="flex" flexDirection="column">
                          <Typography style={{ color: 'red' }}>
                            {new Intl.NumberFormat('ko-KR').format(alarm.recommendPrice)}
                          </Typography>
                          {status === 'losscut' ? (
                            <></>
                          ) : (
                            <Typography variant="caption" style={{ color: recommendBy > 0 ? '#f76565' : '#4d79ff' }}>
                              (
                              {recommendBy}
                              %)
                            </Typography>
                          )}
                        </Box>
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        width="10%"
                        onClick={(e) => handleDetailOpen(e, alarm.alarmId)}
                      >
                        <Box display="flex" flexDirection="column">
                          <Typography style={{ color: 'blue' }}>
                            {new Intl.NumberFormat('ko-KR').format(alarm.losscutPrice)}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        onClick={(e) => handleDetailOpen(e, alarm.alarmId)}
                      >
                        <Box display="flex" flexDirection="column">
                          <Typography className={classes.typographySub}>
                            {alarm.comment}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right" width="10%">
                        <Typography>
                          {alarm.alarmStatus === 'ALARMED' ? '알림완료'
                            : alarm.alarmStatus === 'ALARM_CREATED' ? '알림전'
                              : alarm.alarmStatus === 'PRICE_UPDATED' ? '가격수정됨'
                                : alarm.alarmStatus === 'LOSSCUT' ? '손절처리'
                                  : alarm.alarmStatus}
                        </Typography>
                      </TableCell>
                      {hoveredId === alarm.alarmId ? (
                        <TableCell align="right" width="15%" style={{ padding: '0' }}>
                          <Box flexDirection="row">
                            {/* <StyledTooltip title="차트보기">
                              <a target="_blank" href={chartLink} rel="noreferrer">
                                <IconButton
                                  id="alarm-chart-button"
                                  className={classes.action}
                                >
                                  <ShowChartIcon />
                                </IconButton>
                              </a>
                            </StyledTooltip> */}
                            {alarm.alarmStatus === 'LOSSCUT' ? (
                              <StyledTooltip title="재등록">
                                <IconButton
                                  id="alarm-delete-button"
                                  className={classes.action}
                                  onClick={(e) => handleOnReAddButton(e, alarm.alarmId)}
                                >
                                  <RedoIcon />
                                </IconButton>
                              </StyledTooltip>
                            ) : (
                              <>
                                <StyledTooltip title="수정">
                                  <IconButton
                                    id="alarm-modify-button"
                                    className={classes.action}
                                    onClick={(e) => handleOnModifyButton(e, alarm)}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </StyledTooltip>
                                <StyledTooltip title="삭제">
                                  <IconButton
                                    className={classes.action}
                                    onClick={(e) => handleOnDeleteButton(e, alarm.alarmId)}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </StyledTooltip>
                              </>
                            )}
                          </Box>
                        </TableCell>
                      ) : (
                        <TableCell align="right" width="15%">
                          <Typography>{String(alarm.modifiedDate).replace('T', ' ')}</Typography>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
              {/* {alarms.map((alarm) => {
                const isItemSelected = isSelected(alarm.alarmId);
                const labelId = `enhanced-table-checkbox-${alarm.alarmId}`;
                const chartLink = `https://alphasquare.co.kr/home/stock/stock-summary?code=${alarm.itemCode}`;
                // const losscutBy = (100 - ((alarm.losscutPrice / alarm.closingPrice) * 100)).toFixed(2);
                const recommendBy = (100 - ((alarm.recommendPrice / alarm.closingPrice) * 100)).toFixed(2);

                return (
                  <TableRow
                    id={alarm.alarmId}
                    style={{ cursor: 'pointer', height: '4vh' }}
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={alarm.alarmId}
                    selected={isItemSelected}
                    onMouseOver={() => setHoveredId(alarm.alarmId)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <TableCell className={classes.checkbox}>
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={(event) => handleOnChange(event, alarm.alarmId)}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      width="10%"
                      onClick={(e) => handleDetailOpen(e, alarm.alarmId)}
                    >
                      <Box display="flex" flexDirection="column">
                        <Typography>{alarm.itemName}</Typography>
                      </Box>
                    </TableCell>
                    {status === 'losscut' ? (
                      <></>
                    ) : (
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        width="10%"
                        onClick={(e) => handleDetailOpen(e, alarm.alarmId)}
                      >
                        <Box display="flex" flexDirection="column">
                          <Typography style={{ color: '#505157' }}>
                            {new Intl.NumberFormat('ko-KR').format(alarm.closingPrice)}
                          </Typography>
                        </Box>
                      </TableCell>
                    )}
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      width="10%"
                      onClick={(e) => handleDetailOpen(e, alarm.alarmId)}
                    >
                      <Box display="flex" flexDirection="column">
                        <Typography style={{ color: 'red' }}>
                          {new Intl.NumberFormat('ko-KR').format(alarm.recommendPrice)}
                        </Typography>
                        {status === 'losscut' ? (
                          <></>
                        ) : (
                          <Typography variant="caption" style={{ color: recommendBy > 0 ? '#f76565' : '#4d79ff' }}>
                            (
                            {recommendBy}
                            %)
                          </Typography>
                        )}
                      </Box>
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      width="10%"
                      onClick={(e) => handleDetailOpen(e, alarm.alarmId)}
                    >
                      <Box display="flex" flexDirection="column">
                        <Typography style={{ color: 'blue' }}>
                          {new Intl.NumberFormat('ko-KR').format(alarm.losscutPrice)}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      onClick={(e) => handleDetailOpen(e, alarm.alarmId)}
                    >
                      <Box display="flex" flexDirection="column">
                        <Typography className={classes.typographySub}>
                          {alarm.comment}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right" width="10%">
                      <Typography>
                        {alarm.alarmStatus === 'ALARMED' ? '알림완료'
                          : alarm.alarmStatus === 'ALARM_CREATED' ? '알림전'
                            : alarm.alarmStatus === 'PRICE_UPDATED' ? '가격수정됨'
                              : alarm.alarmStatus === 'LOSSCUT' ? '손절처리'
                                : alarm.alarmStatus}
                      </Typography>
                    </TableCell>
                    {hoveredId === alarm.alarmId ? (
                      <TableCell align="right" width="15%" style={{ padding: '0' }}>
                        <Box flexDirection="row">
                          <StyledTooltip title="차트보기">
                            <a target="_blank" href={chartLink} rel="noreferrer">
                              <IconButton
                                id="alarm-chart-button"
                                className={classes.action}
                              >
                                <ShowChartIcon />
                              </IconButton>
                            </a>
                          </StyledTooltip>
                          {alarm.alarmStatus === 'LOSSCUT' ? (
                            <StyledTooltip title="재등록">
                              <IconButton
                                id="alarm-delete-button"
                                className={classes.action}
                                onClick={(e) => handleOnReAddButton(e, alarm.alarmId)}
                              >
                                <RedoIcon />
                              </IconButton>
                            </StyledTooltip>
                          ) : (
                            <>
                              <StyledTooltip title="수정">
                                <IconButton
                                  id="alarm-modify-button"
                                  className={classes.action}
                                  onClick={(e) => handleOnModifyButton(e, alarm)}
                                >
                                  <EditIcon />
                                </IconButton>
                              </StyledTooltip>
                              <StyledTooltip title="삭제">
                                <IconButton
                                  className={classes.action}
                                  onClick={(e) => handleOnDeleteButton(e, alarm.alarmId)}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </StyledTooltip>
                            </>
                          )}
                        </Box>
                      </TableCell>
                    ) : (
                      <TableCell align="right" width="15%">
                        <Typography>{String(alarm.modifiedDate).replace('T', ' ')}</Typography>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })} */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Dialog
        open={warningOpen}
        onClose={handleCancelClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          알람을 삭제합니다.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            알람을 삭제하면 해당 종목의 알림을 받을 수 없습니다. 계속 진행하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelClose} color="secondary" autoFocus>
            취소
          </Button>
          <Button onClick={handleConfirmClose} color="secondary" autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}
