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
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Card,
  CardContent,
  CardActionArea,
  Button,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Icons
import DeleteIcon from '@material-ui/icons/Delete';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AddIcon from '@material-ui/icons/Add';
import FaceIcon from '@material-ui/icons/Face';
import BusinessIcon from '@material-ui/icons/Business';
import StopIcon from '@material-ui/icons/Stop';
import HelpIcon from '@material-ui/icons/Help';

import { useStyles } from '../../common/components/Styles';
import { StyledTooltip } from '../../common/components/Tooltips';

import NaverLogo from '../../assets/images/naver.jpg';
import FnLogo from '../../assets/images/fn.jpg';
import AlphaLogo from '../../assets/images/alpha.jpg';

import {
  loadSevenBreadList,
  removeSevenBreadItemDocument,
  clearDeletedSevenBreadItem,
  onSevenBreadItemAdd,
  onSevenBreadItemUpdate,
  loadSevenBreadItems,
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
    id: '5', label: '거래량', width: '11%', align: 'right',
  },
  {
    id: '4', label: '포착일종가', width: '10%', align: 'right',
  },
  {
    id: '6', label: '테마',
  },
];

function SevenBreadItem({
  id,
  itemName,
  itemCode,
  alarmedTime,
  fluctuationRate,
  fluctuationRateBy,
  presentPrice,
  closingPrice = 0,
  losscutPrice = 0,
  capturedDate,
  capturedPrice,
  alarmStatus,
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
            {presentPrice}
          </Typography>
          <Typography variant="caption" style={{ color: fluctuationRate > 0 ? 'red' : 'blue', marginLeft: '3px' }}>
            (
            {fluctuationRate}
            %)
          </Typography>
        </Box>
      </CardContent>
      <CardActionArea>
        <Box className={classes.boxFor007ItemContent}>
          <Box style={{ display: 'flex', flexDirection: 'row' }}>
            <Typography
              variant="body2"
              style={{
                color: '#414a77',
                height: '100%',
                verticalAlign: 'middle',
              }}
            >
              포착일 종가(원/대비)
            </Typography>
            <Typography
              variant="body2"
              style={{
                flexGrow: '1',
                color: '#414a77',
                height: '100%',
                verticalAlign: 'middle',
                textAlign: 'right',
              }}
            >
              포착일
            </Typography>
          </Box>
          <Box style={{ display: 'flex', flexDirection: 'row' }}>
            <Typography
              variant="body2"
              style={{
                color: '#414a77',
                height: '100%',
                verticalAlign: 'middle',
              }}
            >
              {capturedPrice}
              /
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: fluctuationRateBy > 0 ? 'red' : 'blue',
                height: '100%',
                verticalAlign: 'middle',
              }}
            >
              (
              {fluctuationRateBy}
              %)
            </Typography>
            <Typography
              variant="body2"
              style={{
                flexGrow: '1',
                color: '#414a77',
                height: '100%',
                verticalAlign: 'middle',
                textAlign: 'right',
              }}
            >
              {capturedDate}
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
      <CardActionArea>
        <Box
          className={classes.boxFor007ItemFooter}
          style={{ backgroundColor: alarmStatus === 'UP' ? '#414a77' : 'darkgrey' }}
        >
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
            {alarmedTime}
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

  const { deletedSevenBreadItem } = useSelector((state) => ({
    deletedSevenBreadItem: state.deletedSevenBreadItem,
  }));

  const { sevenBreadRealTimeList } = useSelector((state) => ({
    sevenBreadRealTimeList: state.sevenBreadRealTimeList,
  }));

  useEffect(() => {
    dispatch(loadSevenBreadList());
  }, [deletedSevenBreadItem]);

  useEffect(() => {
    dispatch(loadSevenBreadItems());
  }, []);

  useEffect(() => {
    dispatch(onSevenBreadItemAdd());
  }, []);

  useEffect(() => {
    dispatch(onSevenBreadItemUpdate());
  }, []);

  const [hoveredId, setHoveredId] = React.useState(null);
  const [warningOpen, setWarningOpen] = React.useState(false);
  const [toBeDeletedId, setToBeDeletedId] = React.useState(0);

  function handleCancelClose() {
    setWarningOpen(false);
  }

  const handleConfirmClose = () => {
    const id = toBeDeletedId;
    dispatch(removeSevenBreadItemDocument(id));
    dispatch(clearDeletedSevenBreadItem());
    setWarningOpen(false);
    dispatch(loadSevenBreadList());
  };

  const handleOnDeleteButton = (e, id) => {
    setWarningOpen(true);
    setToBeDeletedId(id);
  };

  const handleNewSevenBreadItemOnClick = (e) => {
    e.preventDefault();
    history.push('/seven-bread/item/add');
  };

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
                <Paper elevation={2} style={{ padding: '10px', backgroundColor: '#303C6C' }}>
                  <Typography style={{ color: '#b4dfe5' }} variant="h5" align="center">
                    실시간 007빵
                  </Typography>
                </Paper>
              </Box>
              {/* 실시간 007빵 컨텐츠 */}
              <Box style={{ padding: '10px' }}>
                {Object.keys(sevenBreadRealTimeList).length === 0 ? (
                  <Box style={{ marginTop: '20px' }}>
                    <Typography style={{ textAlign: 'center' }}>
                      실시간 가격 감시중...
                    </Typography>
                  </Box>
                )
                  : Object.entries(sevenBreadRealTimeList).map((item) => (
                    <SevenBreadItem
                      key={item[1].itemCode}
                      id={item[1].itemCode}
                      itemName={item[1].itemName}
                      itemCode={item[1].itemCode}
                      fluctuationRate={item[1].fluctuationRate}
                      fluctuationRateBy={item[1].fluctuationRateBy}
                      presentPrice={new Intl.NumberFormat('ko-KR').format(item[1].presentPrice)}
                      alarmedTime={item[1].alarmedTime}
                      alarmStatus={item[1].alarmStatus}
                      closingPrice={new Intl.NumberFormat('ko-KR').format(item[1].closingPrice)}
                      capturedPrice={new Intl.NumberFormat('ko-KR').format(item[1].capturedPrice)}
                      capturedDate={String(item[1].capturedDate).substr(0, 10)}
                    />
                  ))}
              </Box>
            </Grid>
            <Grid item lg={9} sm={9} xs={12}>
              {/* <Box style={{ padding: '10px' }}>
                <Paper elevation={2} style={{ padding: '10px', backgroundColor: '#f6fdfd' }}>
                  <Typography variant="h5" align="center">
                    007빵 리스트
                  </Typography>
                </Paper>
              </Box> */}
              <Box style={{ padding: '10px' }}>
                <Box style={{ border: '1px solid lightgrey', padding: '10px' }}>
                  <div className={classes.tableHeaderRoot}>
                    <Box style={{
                      display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', paddingBottom: '10px',
                    }}
                    >
                      <Box style={{
                        display: 'flex', flexDirection: 'column', borderRight: '1px solid lightgrey', paddingRight: '10px',
                      }}
                      >
                        <Box style={{
                          display: 'flex', flexDirection: 'row',
                        }}
                        >
                          <BusinessIcon fontSize="small" style={{ color: '#2e2f35' }} />
                          &nbsp;
                          <Typography variant="caption">
                            기관매수
                          </Typography>
                        </Box>
                        <Box style={{
                          display: 'flex', alignItems: 'center', flexDirection: 'row',
                        }}
                        >
                          <FaceIcon fontSize="small" style={{ color: '#dda900' }} />
                          &nbsp;
                          <Typography variant="caption">
                            외인매수
                          </Typography>
                        </Box>
                      </Box>
                      <Box style={{
                        display: 'flex', flexDirection: 'column', flexGrow: 1, marginLeft: '10px',
                      }}
                      >
                        <Box style={{
                          display: 'flex', flexDirection: 'row',
                        }}
                        >
                          <StopIcon fontSize="small" style={{ color: 'red' }} />
                          &nbsp;
                          <Typography variant="caption">
                            현재가가 포착일 종가보다
                          </Typography>
                          &nbsp;
                          <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                            높은
                          </Typography>
                          &nbsp;
                          <Typography variant="caption">
                            경우 (포착일 종가를 손절가격으로 설정)
                          </Typography>
                        </Box>
                        <Box style={{
                          display: 'flex', alignItems: 'center', flexDirection: 'row',
                        }}
                        >
                          <StopIcon fontSize="small" style={{ color: 'grey' }} />
                          &nbsp;
                          <Typography variant="caption">
                            현재가가 포착일 종가보다
                          </Typography>
                          &nbsp;
                          <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                            낮은
                          </Typography>
                          &nbsp;
                          <Typography variant="caption">
                            경우 (포착일 종가를 매수가격으로 설정)
                          </Typography>
                        </Box>
                      </Box>
                      <StyledTooltip title="종목추가">
                        <IconButton
                          id="alarm-modify-button"
                          className={classes.action}
                          onClick={handleNewSevenBreadItemOnClick}
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
                  </div>
                  <div className={classes.root}>
                    <TableContainer style={{ height: '80vh' }}>
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
                            const rowColor = ((String(sevenBread.capturedDate).substr(0, 10).substr(8, 9) * 1) % 2) === 0
                              ? '#fafafa' : '#ffffff';

                            return (
                              <TableRow
                                key={sevenBread.id}
                                id={sevenBread.id}
                                style={{
                                  // cursor: 'pointer',
                                  height: '4vh',
                                  backgroundColor: `${rowColor}`,
                                }}
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                onMouseOver={() => setHoveredId(sevenBread.id)}
                                onMouseLeave={() => setHoveredId(null)}
                              >
                                <TableCell>
                                  <Typography>
                                    {String(sevenBread.capturedDate).substr(0, 10)}
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  {/* <Typography>
                                    {sevenBread.majorHandler === 'B' ? '외,기'
                                      : sevenBread.majorHandler === 'G' ? '기'
                                        : '외'}
                                  </Typography> */}
                                  {sevenBread.majorHandler === 'B' ? (
                                    <>
                                      <FaceIcon fontSize="small" style={{ color: '#dda900' }} />
                                      <BusinessIcon fontSize="small" style={{ color: '#2e2f35' }} />
                                    </>
                                  )
                                    : sevenBread.majorHandler === 'G' ? (<BusinessIcon fontSize="small" style={{ color: '#2e2f35' }} />)
                                      : (<FaceIcon fontSize="small" style={{ color: '#dda900' }} />)}
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {sevenBread.itemName}
                                  </Typography>
                                </TableCell>
                                <TableCell align="right" style={{ flexDirection: 'column' }}>
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
                                  <Typography>
                                    {new Intl.NumberFormat('ko-KR').format(sevenBread.volume)}
                                  </Typography>
                                </TableCell>
                                <TableCell align="right">
                                  <Typography style={{
                                    // 현재가가 포착일종가보다 크면 포착일종가는 손절가가되고
                                    // 작으면 돌파가격이 된다.
                                    color: sevenBread.capturedPrice >= sevenBread.closingPrice ? 'grey' : 'red',
                                    fontWeight: sevenBread.capturedPrice >= sevenBread.closingPrice ? '' : 'bold',
                                  }}
                                  >
                                    {new Intl.NumberFormat('ko-KR').format(sevenBread.capturedPrice)}
                                  </Typography>
                                </TableCell>
                                {hoveredId !== sevenBread.id ? (
                                  <TableCell>
                                    <Typography>
                                      {sevenBread.theme == null ? ''
                                        : sevenBread.theme.length > 89 ? `${sevenBread.theme.substring(0, 89)}...`
                                          : sevenBread.theme}
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
      <Dialog
        open={warningOpen}
        onClose={handleCancelClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          종목을 삭제합니다.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            종목을 삭제하면 해당 종목의 실시간 감시를 할 수 없습니다. 계속 진행하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelClose} color="secondary">
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
