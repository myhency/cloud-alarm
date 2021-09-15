/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Button,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Icons
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import FaceIcon from '@material-ui/icons/Face';
import BusinessIcon from '@material-ui/icons/Business';
import StopIcon from '@material-ui/icons/Stop';
import HelpIcon from '@material-ui/icons/Help';

import { useStyles } from '../../../common/components/Styles';
import { StyledTooltip } from '../../../common/components/Tooltips';
import {
  CssTextField,
} from '../../../common/components/TextFields';
import { NextButton, BackButton } from '../../../common/components/Buttons';

import {
  loadSevenBreadList,
  removeSevenBreadItemDocument,
  clearDeletedSevenBreadItem,
} from '../../../state/sevenBreadSlice';

const columns = [
  {
    id: '1', label: '종목명', width: '11%',
  },
  {
    id: '2', label: '현재가', width: '8%', align: 'right',
  },
  {
    id: '3', label: '포착일종가', width: '10%', align: 'right',
  },
  {
    id: '4', label: '테마',
  },
  {
    id: '5', label: '투자자', width: '6%', align: 'center',
  },
  {
    id: '6', label: '포착일', width: '8%',
  },
];

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
    sevenBreads: state.sevenBread.sevenBreadList,
  }));

  const [sevenBreadItemList, setSevenBreadItemList] = React.useState([]);

  const { deletedSevenBreadItem } = useSelector((state) => ({
    deletedSevenBreadItem: state.sevenBread.deletedSevenBreadItem,
  }));

  useEffect(() => {
    dispatch(loadSevenBreadList());
  }, [deletedSevenBreadItem]);

  useEffect(() => {
    setSevenBreadItemList(sevenBreads);
  }, [sevenBreads]);

  const [hoveredId, setHoveredId] = React.useState(null);
  const [warningOpen, setWarningOpen] = React.useState(false);
  const [toBeDeletedId, setToBeDeletedId] = React.useState(0);
  const [themeSearchKeyword, setThemeSearchKeyword] = React.useState('');

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
    const accessToken = Cookies.get('accessToken');
    const key = 'breadstockcloud';
    const res = jwt.verify(accessToken, key);
    if (res.sub !== 'admin') {
      alert('관리자만 접근할 수 있습니다.');
      return;
    }
    setWarningOpen(true);
    setToBeDeletedId(id);
  };

  const handleNewSevenBreadItemOnClick = (e) => {
    e.preventDefault();
    history.push('/service/seven-bread/item/add');
  };

  const handleThemeSearchKeyworkOnChange = React.useCallback(
    (e) => {
      if (!e.target.value) {
        setSevenBreadItemList(sevenBreads);
      }
      setThemeSearchKeyword(e.target.value);
    }, [themeSearchKeyword],
  );

  const handleThemeSearchButtonOnClick = () => {
    let arr = sevenBreadItemList;
    arr = arr.filter((item) => {
      const theme = item.theme ? item.theme : '';
      return theme.includes(themeSearchKeyword);
    });
    setSevenBreadItemList(arr);
  };

  const handleRefreshListButtonOnClick = () => {
    dispatch(loadSevenBreadList());
  };

  function handleOnKeyDown(e) {
    if (e.keyCode === 13) {
      handleThemeSearchButtonOnClick();
    }
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.root}>
        <Box style={{ flexGrow: 1 }}>
          <Box style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            padding: '10px 10px 0 10px',
          }}
          >
            <CssTextField
              size="small"
              label="테마검색"
              variant="outlined"
              style={{ marginRight: '5px' }}
              value={themeSearchKeyword}
              onChange={handleThemeSearchKeyworkOnChange}
              onKeyDown={handleOnKeyDown}
            />
            <NextButton
              style={{ marginRight: '5px' }}
              onClick={handleThemeSearchButtonOnClick}
            >
              검색
            </NextButton>
            <BackButton
              onClick={handleRefreshListButtonOnClick}
            >
              초기화
            </BackButton>
          </Box>
          <Grid container>
            <Grid item lg={12} sm={12} xs={12}>
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
                    <TableContainer>
                      <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size="medium"
                        aria-label="sticky table"
                        stickyHeader
                      >
                        <TableHead>
                          <TableRow>
                            {columns.map((column) => (
                              <StyledTableCell key={column.id} align={column.align} width={column.width}>
                                {column.label === '포착일종가' ? (
                                  <>
                                    <Typography variant="subtitle2">{column.label}</Typography>
                                    <Typography variant="caption">(현재가대비%)</Typography>
                                  </>
                                ) : column.label}
                              </StyledTableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {sevenBreadItemList.map((sevenBread) => {
                            const chartLink = `https://alphasquare.co.kr/home/stock/stock-summary?code=${sevenBread.itemCode}`;
                            const rowColor = ((String(sevenBread.capturedDate).substr(0, 10).substr(8, 9) * 1) % 2) === 0
                              ? '#fafafa' : '#ffffff';
                            const fluctuationByRecommendPrice = (((100 * sevenBread.closingPrice) / sevenBread.capturedPrice) - 100).toFixed(2);

                            return (
                              <TableRow
                                key={sevenBread.id}
                                id={sevenBread.id}
                                style={{
                                  // cursor: 'pointer',
                                  // height: '4vh',
                                  backgroundColor: `${rowColor}`,
                                }}
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                onMouseOver={() => setHoveredId(sevenBread.id)}
                                onMouseLeave={() => setHoveredId(null)}
                              >
                                <TableCell>
                                  <a target="_blank" href={chartLink} rel="noreferrer">
                                    <Typography style={{ color: '#0061B0' }}>
                                      {sevenBread.itemName}
                                    </Typography>
                                  </a>
                                </TableCell>
                                <TableCell align="right" style={{ flexDirection: 'column' }}>
                                  <Typography>
                                    {new Intl.NumberFormat('ko-KR').format(sevenBread.closingPrice)}
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
                                  <Typography
                                    variant="caption"
                                    style={{
                                      color: fluctuationByRecommendPrice > 0 ? 'red' : 'blue',
                                    }}
                                  >
                                    (
                                    {fluctuationByRecommendPrice}
                                    %)
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {sevenBread.theme == null ? ''
                                      : sevenBread.theme.length > 89 ? `${sevenBread.theme.substring(0, 89)}...`
                                        : sevenBread.theme}
                                  </Typography>
                                </TableCell>
                                <TableCell align="center">
                                  {sevenBread.majorHandler === 'B' ? (
                                    <>
                                      <FaceIcon fontSize="small" style={{ color: '#dda900' }} />
                                      <BusinessIcon fontSize="small" style={{ color: '#2e2f35' }} />
                                    </>
                                  )
                                    : sevenBread.majorHandler === 'G' ? (<BusinessIcon fontSize="small" style={{ color: '#2e2f35' }} />)
                                      : (<FaceIcon fontSize="small" style={{ color: '#dda900' }} />)}
                                </TableCell>
                                {hoveredId !== sevenBread.id ? (
                                  <TableCell>
                                    <Typography>
                                      {String(sevenBread.capturedDate).substr(0, 10)}
                                    </Typography>
                                  </TableCell>
                                ) : (
                                  <TableCell>
                                    <Box style={{ display: 'flex', flexDirection: 'row' }}>
                                      <Box style={{ flexGrow: 1 }} />
                                      <Box>
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
