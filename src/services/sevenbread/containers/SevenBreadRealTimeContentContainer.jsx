/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
import {
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Divider,
} from '@material-ui/core';

// Icons
import FaceIcon from '@material-ui/icons/Face';
import BusinessIcon from '@material-ui/icons/Business';
import AddIcon from '@material-ui/icons/Add';
import HelpIcon from '@material-ui/icons/Help';

import { useStyles } from '../../../common/components/Styles';
import { SearchInput } from '../../../common/components/Inputs';
import { StyledTooltip } from '../../../common/components/Tooltips';
import { CssAutocomplete } from '../../../common/components/TextFields';

import NaverLogo from '../../../assets/images/naver.jpg';
import FnLogo from '../../../assets/images/fn.jpg';
import AlphaLogo from '../../../assets/images/alpha.jpg';

import {
  loadSevenBreadList,
  onSevenBreadItemAdd,
  onSevenBreadItemUpdate,
  loadSevenBreadItems,
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
  majorHandler,
}) {
  const classes = useStyles();
  const alphaLink = `https://alphasquare.co.kr/home/stock/stock-summary?code=${itemCode}`;
  const fnLink = `http://comp.fnguide.com/SVO2/ASP/SVD_Main.asp?pGB=1&gicode=A${itemCode}`;
  const naverLink = `https://finance.naver.com/item/main.nhn?code=${itemCode}`;

  return (
    <Grid item xs={6} sm={3}>
      <Card key={id} style={{ backgroundColor: '#fffdec' }}>
        <CardContent style={{ padding: '7px' }}>
          <Box style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          >
            <Box>
              {majorHandler === 'B' ? (
                <>
                  <FaceIcon fontSize="small" style={{ color: '#dda900' }} />
                  <BusinessIcon fontSize="small" style={{ color: '#2e2f35' }} />
                </>
              )
                : majorHandler === 'G' ? (<BusinessIcon fontSize="small" style={{ color: '#2e2f35' }} />)
                  : (<FaceIcon fontSize="small" style={{ color: '#dda900' }} />)}
            </Box>
            <Typography variant="button" style={{ flexGrow: 1, fontSize: '1rem' }}>
              &nbsp;
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
    </Grid>
  );
}

const searchOptions = [
  { condition: '전체보기', code: 1 },
  { condition: '현재가 > 기관매수가', code: 2 },
  { condition: '현재가 < 기관매수가', code: 3 },
];

const sortOptions = [
  { condition: '포착시간 순', code: 1 },
  { condition: '수익률 순', code: 2 },
  { condition: '금일 상승률 순', code: 3 },
  { condition: '포착일 순', code: 4 },
];

export default function SevenBreadRealTimeContentContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchCondition, setSearchCondition] = React.useState(1);
  const [sortCondition, setSortCondition] = React.useState(1);
  const [sevenBreadRealTimeItems, setSevenBreadRealTimeItems] = React.useState([]);

  const { sevenBreadRealTimeList } = useSelector((state) => ({
    sevenBreadRealTimeList: state.sevenBread.sevenBreadRealTimeList,
  }));

  useEffect(() => {
    console.log('loadSevenBreadItems');
    dispatch(loadSevenBreadItems());
  }, []);

  useEffect(() => {
    dispatch(onSevenBreadItemAdd());
  }, []);

  useEffect(() => {
    dispatch(onSevenBreadItemUpdate());
  }, []);

  useEffect(() => {
    const sevenBreadRealTimeArray = Object.entries(sevenBreadRealTimeList);

    const mapped = sevenBreadRealTimeArray.map((value, i) => ({
      index: i,
      value: sortCondition === 1 ? value[1].alarmedTime
        : sortCondition === 2 ? value[1].fluctuationRateBy
          : sortCondition === 3 ? value[1].fluctuationRate
            : sortCondition === 4 ? value[1].capturedDate
              : value[1].alarmedTime,
    }));

    mapped.sort((a, b) => +(a.value < b.value) || +(a.value === b.value) - 1);

    let arr = mapped.map((el) => sevenBreadRealTimeArray[el.index]);

    if (searchCondition === 2) {
      console.log(arr);
      arr = arr.filter((item) => item[1].presentPrice >= item[1].capturedPrice);
      console.log(arr);
    } else if (searchCondition === 3) {
      arr = arr.filter((item) => item[1].presentPrice < item[1].capturedPrice);
    }

    setSevenBreadRealTimeItems(arr);
  }, [searchCondition]);

  useEffect(() => {
    const sevenBreadRealTimeArray = Object.entries(sevenBreadRealTimeList);

    const mapped = sevenBreadRealTimeArray.map((value, i) => ({
      index: i,
      value: sortCondition === 1 ? value[1].alarmedTime
        : sortCondition === 2 ? value[1].fluctuationRateBy
          : sortCondition === 3 ? value[1].fluctuationRate
            : sortCondition === 4 ? value[1].capturedDate
              : value[1].alarmedTime,
    }));

    mapped.sort((a, b) => +(a.value < b.value) || +(a.value === b.value) - 1);

    let arr = mapped.map((el) => sevenBreadRealTimeArray[el.index]);

    if (searchCondition === 2) {
      arr = arr.filter((item) => item[1].presentPrice >= item[1].capturedPrice);
    } else if (searchCondition === 3) {
      arr = arr.filter((item) => item[1].presentPrice < item[1].capturedPrice);
    }

    setSevenBreadRealTimeItems(arr);
  }, [sortCondition]);

  useEffect(() => {
    const sevenBreadRealTimeArray = Object.entries(sevenBreadRealTimeList);

    const mapped = sevenBreadRealTimeArray.map((value, i) => ({
      index: i,
      value: sortCondition === 1 ? value[1].alarmedTime
        : sortCondition === 2 ? value[1].fluctuationRateBy
          : sortCondition === 3 ? value[1].fluctuationRate
            : sortCondition === 4 ? value[1].capturedDate
              : value[1].alarmedTime,
    }));

    mapped.sort((a, b) => +(a.value < b.value) || +(a.value === b.value) - 1);

    let arr = mapped.map((el) => sevenBreadRealTimeArray[el.index]);

    if (searchCondition === 2) {
      arr = arr.filter((item) => item[1].presentPrice >= item[1].capturedPrice);
    } else if (searchCondition === 3) {
      arr = arr.filter((item) => item[1].presentPrice < item[1].capturedPrice);
    }

    setSevenBreadRealTimeItems(arr);
  }, [sevenBreadRealTimeList]);

  function handleOnSearchConditionChange(e, v) {
    setSearchCondition(v.code);
  }

  function handleOnSortConditionChange(e, v) {
    setSortCondition(v.code);
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.root}>
        <Box style={{ flexGrow: 1, padding: '1rem 1rem 0 1rem' }}>
          {/* <Grid item lg={12} sm={12} xs={12}> */}
          <Box style={{ padding: '10px' }}>
            {Object.keys(sevenBreadRealTimeList).length === 0 ? (
              <Box style={{ marginTop: '20px' }}>
                <Typography style={{ textAlign: 'center' }}>
                  실시간 가격 감시중...
                </Typography>
              </Box>
            ) : (
              <>
                <Box style={{
                  display: 'flex', flexDirection: 'row', justifyContent: 'flex-start',
                }}
                >
                  <CssAutocomplete
                    style={{ minWidth: '15vw', margin: '0 1rem 1rem 0' }}
                    id="combo-box1"
                    options={searchOptions}
                    getOptionLabel={(searchOption) => searchOption.condition}
                    defaultValue={searchOptions[0]}
                    getOptionSelected={(option, value) => option.condition === value.condition}
                    renderInput={(params) => (
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      <TextField {...params} label="조건검색" variant="outlined" />
                    )}
                    onChange={(event, value) => handleOnSearchConditionChange(event, value)}
                  />
                  <CssAutocomplete
                    style={{ minWidth: '15vw', margin: '0 1rem 1rem 0' }}
                    id="combo-box2"
                    autoComplete
                    options={sortOptions}
                    getOptionLabel={(sortOption) => sortOption.condition}
                    defaultValue={sortOptions[0]}
                    getOptionSelected={(option, value) => option.condition === value.condition}
                    renderInput={(params) => (
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      <TextField {...params} label="정렬" variant="outlined" />
                    )}
                    onChange={(event, value) => handleOnSortConditionChange(event, value)}
                  />
                </Box>
                <Divider />
                <Grid container spacing={3} style={{ marginTop: '0.1rem' }}>
                  {sevenBreadRealTimeItems
                    .map((item) => (
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
                    ))}
                </Grid>
              </>
            )}
          </Box>
          {/* </Grid> */}
        </Box>
      </div>
    </main>
  );
}
