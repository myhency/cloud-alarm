/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
} from '@material-ui/core';

// Icons
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import EditIcon from '@material-ui/icons/Edit';
import RefreshIcon from '@material-ui/icons/Refresh';
import ShowChartIcon from '@material-ui/icons/ShowChart';

import { useStyles } from '../../common/components/Styles';
import { SearchInput } from '../../common/components/Inputs';
import { StyledTooltip } from '../../common/components/Tooltips';

import {
  loadAlarmedAlarmList,
  loadHistoryAlarmDetail,
  clearAlarmDetail,
} from '../../state/slice';

import InBoxModalContainer from './InBoxModalContainer';

export default function InBoxContentContainer() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { alarms } = useSelector((state) => ({
    alarms: state.alarmedAlarms,
  }));

  useEffect(() => {
    dispatch(loadAlarmedAlarmList());
  }, []);
  const [selected, setSelected] = React.useState([]);
  const [hoveredId, setHoveredId] = React.useState(null);
  const [detailModalOpened, setDetailModalOpened] = React.useState(false);

  const numSelected = selected.length;
  const rowCount = alarms.length;

  const handleDetailOpen = (e, id) => {
    dispatch(loadHistoryAlarmDetail(id));
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

  const handleOnModifyButton = (e, id) => {
    history.push(`/ready-docs/${id}`);
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
              <IconButton>
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
            <Typography>2 개 중 1-50</Typography>
            <IconButton disabled>
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton>
              <KeyboardArrowRightIcon />
            </IconButton>
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
            <TableBody>
              <TableRow
                id="head"
                style={{ cursor: 'pointer', height: '4vh', backgroundColor: '#FBFBFB' }}
                role="checkbox"
                tabIndex={-1}
                key="head"
              >
                <TableCell className={classes.checkbox}>
                  {/* <Checkbox
                    checked={false}
                    inputProps={{ 'aria-labelledby': 0 }}
                  /> */}
                </TableCell>
                <TableCell
                  component="th"
                  id="col1"
                  scope="row"
                  padding="none"
                  width="10%"
                >
                  <Box display="flex" flexDirection="column">
                    <Typography variant="subtitle2">종목명</Typography>
                  </Box>
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  padding="none"
                  width="10%"
                >
                  <Box display="flex" flexDirection="column">
                    <Typography variant="subtitle2">
                      돌파가격
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  padding="none"
                  width="10%"
                >
                  <Box display="flex" flexDirection="column">
                    <Typography variant="subtitle2">
                      손절가격
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  padding="none"
                >
                  <Box display="flex" flexDirection="column">
                    <Typography variant="subtitle2">
                      코멘트
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right" width="10%">
                  <Typography variant="subtitle2">
                    알림상태
                  </Typography>
                </TableCell>
                <TableCell align="right" width="15%">
                  <Typography variant="subtitle2">
                    최근 업데이트
                  </Typography>
                </TableCell>
              </TableRow>
              {alarms.map((alarm) => {
                const isItemSelected = isSelected(alarm.alarmId);
                const labelId = `enhanced-table-checkbox-${alarm.alarmId}`;
                const chartLink = `https://alphasquare.co.kr/home/stock/stock-summary?code=${alarm.itemCode}`;

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
                            : alarm.alarmStatus}
                      </Typography>
                    </TableCell>
                    {hoveredId === alarm.alarmId ? (
                      <TableCell align="right" width="15%" style={{ padding: '0 5 0 0' }}>
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
                          <StyledTooltip title="수정">
                            <IconButton
                              id="alarm-delete-button"
                              className={classes.action}
                              onClick={(e) => handleOnModifyButton(e, alarm.alarmId)}
                            >
                              <EditIcon />
                            </IconButton>
                          </StyledTooltip>
                          <StyledTooltip title="삭제">
                            <IconButton className={classes.action}>
                              <DeleteIcon />
                            </IconButton>
                          </StyledTooltip>
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
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  );
}
