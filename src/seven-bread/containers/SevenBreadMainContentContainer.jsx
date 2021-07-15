/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Checkbox,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
} from '@material-ui/core';

// Icons
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import GetAppIcon from '@material-ui/icons/GetApp';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import RefreshIcon from '@material-ui/icons/Refresh';
import ShowChartIcon from '@material-ui/icons/ShowChart';

import { useStyles } from '../../common/components/Styles';
import { SearchInput } from '../../common/components/Inputs';
import { StyledTooltip } from '../../common/components/Tooltips';

import NaverLogo from '../../assets/images/naver.jpg';
import FnLogo from '../../assets/images/fn.jpg';
import AlphaLogo from '../../assets/images/alpha.jpg';

import {
  loadAlarmList,
  loadAlarmDetail,
  clearAlarmDetail,
  removeAlarmDocument,
  clearCreatedAlarm,
} from '../../state/slice';

function SevenBreadItem({
  id, itemName, itemCode, insertTime, fluctuationRate, closingPrice = 0, losscutPrice = 0,
}) {
  const classes = useStyles();
  const alphaLink = `https://alphasquare.co.kr/home/stock/stock-summary?code=${itemCode}`;
  const fnLink = `http://comp.fnguide.com/SVO2/ASP/SVD_Main.asp?pGB=1&gicode=A${itemCode}`;
  const naverLink = `https://finance.naver.com/item/main.nhn?code=${itemCode}`;

  return (
    <Card key={id} style={{ marginBottom: '12px', backgroundColor: '#fffdec' }}>
      <CardContent>
        <Box style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
        >
          <Typography variant="button" style={{ flexGrow: 1, fontSize: '1.15rem' }}>
            {itemName}
          </Typography>
          <Typography>
            {closingPrice}
          </Typography>
          <Typography variant="caption" style={{ color: 'red', marginLeft: '3px' }}>
            (
            {fluctuationRate}
            %)
          </Typography>
        </Box>
      </CardContent>
      <CardActionArea>
        <Box className={classes.boxFor007ItemContent}>
          <Typography
            variant="body2"
            style={{
              flexGrow: '1',
              color: '#414a77',
              height: '100%',
              verticalAlign: 'middle',
            }}
          >
            기준가격
            &nbsp;
            {losscutPrice}
            원
          </Typography>
        </Box>
      </CardActionArea>
      <CardActionArea>
        <Box className={classes.boxFor007ItemFooter}>
          <Typography
            variant="body2"
            style={{
              flexGrow: '1',
              color: '#ffdea9',
              height: '100%',
              verticalAlign: 'middle',
            }}
          >
            ⏲️
            &nbsp;
            {insertTime}
          </Typography>
          <a target="_blank" href={alphaLink} rel="noreferrer">
            <img src={AlphaLogo} alt="logo" />
          </a>
          <a target="_blank" href={fnLink} rel="noreferrer">
            <img src={FnLogo} alt="logo" />
          </a>
          <a target="_blank" href={naverLink} rel="noreferrer">
            <img src={NaverLogo} alt="logo" />
          </a>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default function SevenBreadMainContentContainer() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { alarms } = useSelector((state) => ({
    alarms: state.alarms,
  }));

  const [selected, setSelected] = React.useState([]);
  const [hoveredId, setHoveredId] = React.useState(null);

  const numSelected = selected.length;
  const rowCount = alarms.length;

  function handleCancelClose() {
    setWarningOpen(false);
  }

  const handleDetailOpen = (e, id) => {
    dispatch(loadAlarmDetail(id));
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

  const handleOnDeleteButton = (e, id) => {
    setWarningOpen(true);
    setToBeDeletedId(id);
  };

  useEffect(() => {
    dispatch(loadAlarmList());
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {/* <div className={classes.tableHeaderRoot}>
        tableheader
      </div> */}
      <div className={classes.root}>
        <Box style={{ flexGrow: 1, padding: '1rem 1rem 0 1rem' }}>
          <Grid container>
            <Grid item lg={3} sm={3} xs={12}>
              {/* 타이틀 */}
              <Box style={{ padding: '10px' }}>
                <Paper elevation={2} style={{ padding: '10px', backgroundColor: '#fffef8' }}>
                  <Typography variant="h5" align="center">
                    실시간 007빵
                  </Typography>
                </Paper>
              </Box>
              {/* 실시간 007빵 컨텐츠 */}
              <Box style={{ padding: '10px' }}>
                <SevenBreadItem
                  id="1"
                  itemName="효성중공업"
                  itemCode="298040"
                  fluctuationRate="4.69"
                  insertTime="09:02:04"
                  closingPrice="82,600"
                  losscutPrice="78,900"
                />
                <SevenBreadItem
                  id="2"
                  itemName="에이스토리"
                  itemCode="241840"
                  fluctuationRate="2.17"
                  insertTime="09:10:19"
                  closingPrice="40,000"
                  losscutPrice="39,150"
                />
              </Box>
            </Grid>
            <Grid item lg={9} sm={9} xs={12}>
              <Box style={{ padding: '10px' }}>
                <Paper elevation={2} style={{ padding: '10px', backgroundColor: '#f6fdfd' }}>
                  <Typography variant="h5" align="center">
                    007빵 리스트
                  </Typography>
                </Paper>
              </Box>
              <Box style={{ padding: '10px' }}>
                <Box style={{ border: '1px solid lightgrey', padding: '10px' }}>
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
                                        : alarm.alarmStatus === 'PRICE_UPDATED' ? '가격수정됨'
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
                                      <StyledTooltip title="수정">
                                        <IconButton
                                          id="alarm-modify-button"
                                          className={classes.action}
                                          onClick={(e) => handleOnModifyButton(e, alarm.alarmId)}
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
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </main>
  );
}
