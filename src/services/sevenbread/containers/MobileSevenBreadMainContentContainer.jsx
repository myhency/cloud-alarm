/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import iconv from 'iconv-lite';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Paper, Typography, Card, CardContent, CardActionArea, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Icons
import FaceIcon from '@material-ui/icons/Face';
import BusinessIcon from '@material-ui/icons/Business';

import { useStyles } from '../../../common/components/Styles';

import NaverLogo from '../../../assets/images/naver.jpg';
import FnLogo from '../../../assets/images/fn.jpg';
import AlphaLogo from '../../../assets/images/alpha.jpg';

import { fDateStringFormat } from '../../../utils/formatTime';

import {
  loadSevenBreadList,
  clearDeletedSevenBreadItem,
  onSevenBreadItemAdd,
  onSevenBreadItemUpdate,
  loadSevenBreadItems
} from '../../../state/sevenBreadSlice';

function SevenBreadItem({
  id,
  itemName,
  itemCode,
  alarmedTime,
  fluctuationRate,
  fluctuationRateBy,
  presentPrice,
  capturedDate,
  capturedPrice,
  alarmStatus,
  majorHandler
}) {
  const classes = useStyles();
  const alphaLink = `https://m.alphasquare.co.kr/service/chart?code=${itemCode}`;
  const fnLink = `http://comp.fnguide.com/SVO2/ASP/SVD_Main.asp?pGB=1&gicode=A${itemCode}`;
  const naverLink = `https://finance.naver.com/item/main.nhn?code=${itemCode}`;
  const PATH_HANKYUNG_LINK = (searchText) => {
    const buffer = iconv.encode(searchText, 'euc-kr');
    const param = escape(buffer.toString('binary'));
    const sdate = fDateStringFormat(new Date().setDate(new Date().getDate() - 93));
    const edate = fDateStringFormat(new Date());
    return `http://consensus.hankyung.com/apps.analysis/analysis.list?sdate=${sdate}&edate=${edate}&now_page=1&search_value=&report_type=&pagenum=20&search_text=${param}&business_code=`;
  };

  return (
    <Card key={id} style={{ marginBottom: '12px', backgroundColor: '#fffdec' }}>
      <CardContent style={{ padding: '10px' }}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Box>
            {majorHandler === 'B' ? (
              <>
                <FaceIcon fontSize="small" style={{ color: '#dda900' }} />
                <BusinessIcon fontSize="small" style={{ color: '#2e2f35' }} />
              </>
            ) : majorHandler === 'G' ? (
              <BusinessIcon fontSize="small" style={{ color: '#2e2f35' }} />
            ) : (
              <FaceIcon fontSize="small" style={{ color: '#dda900' }} />
            )}
          </Box>
          <Typography variant="button" style={{ flexGrow: 1, fontSize: '1rem' }}>
            &nbsp;
            {itemName}
          </Typography>
          <Typography>{presentPrice}</Typography>
          <Typography variant="caption" style={{ color: fluctuationRate > 0 ? 'red' : 'blue', marginLeft: '3px' }}>
            ({fluctuationRate}
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
                verticalAlign: 'middle'
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
                textAlign: 'right'
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
                verticalAlign: 'middle'
              }}
            >
              {capturedPrice}/
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: fluctuationRateBy > 0 ? 'red' : 'blue',
                height: '100%',
                verticalAlign: 'middle'
              }}
            >
              ({fluctuationRateBy}
              %)
            </Typography>
            <Typography
              variant="body2"
              style={{
                flexGrow: '1',
                color: '#414a77',
                height: '100%',
                verticalAlign: 'middle',
                textAlign: 'right'
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
              verticalAlign: 'middle'
            }}
          >
            ⏲️ &nbsp;
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
          <a target="_blank" href={PATH_HANKYUNG_LINK(itemName)} rel="noreferrer">
            <img src="http://consensus.hankyung.com/images/btn_attached.gif" alt="logo" />
          </a>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default function MobileSevenBreadMainContentContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { deletedSevenBreadItem } = useSelector((state) => ({
    deletedSevenBreadItem: state.sevenBread.deletedSevenBreadItem
  }));

  const { sevenBreadRealTimeList } = useSelector((state) => ({
    sevenBreadRealTimeList: state.sevenBread.sevenBreadRealTimeList
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

  const [warningOpen, setWarningOpen] = React.useState(false);

  function handleCancelClose() {
    setWarningOpen(false);
  }

  const handleConfirmClose = () => {
    dispatch(clearDeletedSevenBreadItem());
    setWarningOpen(false);
    dispatch(loadSevenBreadList());
  };

  const sevenBreadRealTimeArray = Object.entries(sevenBreadRealTimeList);

  const mapped = sevenBreadRealTimeArray.map((value, i) => ({
    index: i,
    value: value[1].alarmedTime
  }));

  mapped.sort((a, b) => +(a.value < b.value) || +(a.value === b.value) - 1);

  const sevenBreadRealTimeItems = mapped.map((el) => sevenBreadRealTimeArray[el.index]);

  return (
    <main className={classes.content}>
      <div className={classes.root}>
        <Box style={{ flexGrow: 1, padding: '0.3rem 0.3rem 0 0.3rem' }}>
          <Grid container>
            <Grid item lg={3} sm={3} xs={12}>
              {/* 타이틀 */}
              <Box style={{ padding: '10px' }}>
                <Paper elevation={2} style={{ padding: '10px', backgroundColor: '#303C6C' }}>
                  <Typography style={{ color: '#b4dfe5' }} variant="subtitle2" align="center">
                    실시간 007빵 (모바일은 실시간만 제공합니다)
                  </Typography>
                </Paper>
              </Box>
              {/* 실시간 007빵 컨텐츠 */}
              <Box style={{ padding: '10px' }}>
                {Object.keys(sevenBreadRealTimeList).length === 0 ? (
                  <Box style={{ marginTop: '20px' }}>
                    <Typography style={{ textAlign: 'center' }}>실시간 가격 감시중...</Typography>
                  </Box>
                ) : (
                  sevenBreadRealTimeItems.map((item) => (
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
                      majorHandler={item[1].majorHandler}
                    />
                  ))
                )}
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
        <DialogTitle id="alert-dialog-title">종목을 삭제합니다.</DialogTitle>
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
