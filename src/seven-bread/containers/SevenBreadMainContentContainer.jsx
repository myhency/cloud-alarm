/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Checkbox,
  TableContainer,
  Table,
  TableHead,
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
import AddIcon from '@material-ui/icons/Add';

import { useStyles } from '../../common/components/Styles';
import { SearchInput } from '../../common/components/Inputs';
import { StyledTooltip } from '../../common/components/Tooltips';

import NaverLogo from '../../assets/images/naver.jpg';
import FnLogo from '../../assets/images/fn.jpg';
import AlphaLogo from '../../assets/images/alpha.jpg';

import {
  loadSevenBreadList,
  loadAlarmList,
  loadAlarmDetail,
  clearAlarmDetail,
  removeAlarmDocument,
  clearCreatedAlarm,
} from '../../state/slice';

const columns = [
  {
    id: '0', label: '포착일', width: '9%',
  },
  {
    id: '1', label: '투자자', width: '6%', align: 'center',
  },
  {
    id: '2', label: '종목명', width: '11%',
  },
  {
    id: '3', label: '현재가', width: '12%', align: 'right',
  },
  {
    id: '4', label: '포착일종가', width: '10%', align: 'right',
  },
  {
    id: '5', label: '거래량', width: '11%', align: 'right',
  },
  {
    id: '6', label: '테마',
  },
];

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

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#faffff',
  },
}))(TableCell);

export default function SevenBreadMainContentContainer() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { sevenBreads } = useSelector((state) => ({
    sevenBreads: state.sevenBreadList,
  }));

  const [selected, setSelected] = React.useState([]);
  const [hoveredId, setHoveredId] = React.useState(null);

  const numSelected = selected.length;
  const rowCount = sevenBreads.length;

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
      const newSelecteds = sevenBreads.map((sevenBread) => sevenBread.id);
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
    dispatch(loadSevenBreadList());
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
                      <StyledTooltip title="종목추가">
                        <IconButton
                          id="alarm-modify-button"
                          className={classes.action}
                        >
                          <AddIcon />
                        </IconButton>
                      </StyledTooltip>
                    </Box>
                  </div>
                  <div className={classes.root}>
                    <TableContainer style={{ height: '70vh' }}>
                      <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size="medium"
                        aria-label="sticky table"
                        stickyHeader
                      >
                        <TableHead>
                          <TableRow>
                            {columns.map((column) => (<StyledTableCell key={column.id} align={column.align} width={column.width}>{column.label}</StyledTableCell>))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {sevenBreads.map((sevenBread) => {
                            const chartLink = `https://alphasquare.co.kr/home/stock/stock-summary?code=${sevenBread.itemCode}`;

                            return (
                              <TableRow
                                key={sevenBread.id}
                                id={sevenBread.id}
                                style={{ cursor: 'pointer', height: '4vh' }}
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                onMouseOver={() => setHoveredId(sevenBread.id)}
                                onMouseLeave={() => setHoveredId(null)}
                              >
                                <TableCell>
                                  <Typography>
                                    {sevenBread.createdDate}
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  <Typography>
                                    {sevenBread.majorHandler === 'B' ? '외,기'
                                      : sevenBread.majorHandler === 'G' ? '기'
                                        : '외'}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {sevenBread.itemName}
                                  </Typography>
                                </TableCell>
                                <TableCell align="right" flexDirection="column">
                                  <Typography>
                                    {new Intl.NumberFormat('ko-KR').format(sevenBread.closingPrice)}
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    style={{
                                      color: sevenBread.fluctuationRate > 0 ? 'red' : 'blue',
                                    }}
                                  >
                                    (
                                    {sevenBread.fluctuationRate}
                                    %)
                                  </Typography>
                                </TableCell>
                                <TableCell align="right">
                                  <Typography style={{
                                    // 현재가가 포착일종가보다 크면 포착일종가는 손절가가되고
                                    // 작으면 돌파가격이 된다.
                                    color: sevenBread.capturedPrice >= sevenBread.closingPrice ? 'red' : 'blue',
                                    fontWeight: 'bold',
                                  }}
                                  >
                                    {new Intl.NumberFormat('ko-KR').format(sevenBread.capturedPrice)}
                                  </Typography>
                                </TableCell>
                                <TableCell align="right">
                                  <Typography>
                                    {new Intl.NumberFormat('ko-KR').format(sevenBread.volume)}
                                  </Typography>
                                </TableCell>
                                {hoveredId !== sevenBread.id ? (
                                  <TableCell>
                                    <Typography>
                                      {sevenBread.theme.length > 130 ? `${sevenBread.theme.substring(0, 130)}...` : sevenBread.theme}
                                    </Typography>
                                  </TableCell>
                                ) : (
                                  <TableCell>
                                    <Box style={{ display: 'flex', flexDirection: 'row' }}>
                                      <Box style={{ flexGrow: 1 }} />
                                      <Box>
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
                                        {/* <StyledTooltip title="수정">
                                          <IconButton
                                            id="alarm-modify-button"
                                            className={classes.action}
                                            onClick={(e) => handleOnModifyButton(e, sevenBread.id)}
                                          >
                                            <EditIcon />
                                          </IconButton>
                                        </StyledTooltip> */}
                                        <StyledTooltip title="삭제">
                                          <IconButton
                                            className={classes.action}
                                            onClick={(e) => handleOnDeleteButton(e, sevenBread.id)}
                                          >
                                            <DeleteIcon />
                                          </IconButton>
                                        </StyledTooltip>
                                      </Box>
                                    </Box>
                                  </TableCell>
                                )}
                              </TableRow>
                            );
                          })}
                          {/* {alarms.map((alarm) => {
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
                          })} */}
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
