/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  TextField,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Tabs,
  Tab,
  TableHead,
} from '@material-ui/core';

import { useStyles } from '../../../common/components/Styles';

import {
  loadVolumeDataList,
} from '../../../state/analyzeVolumeSlice';

import {
  CssTextField,
  CssAutocomplete,
} from '../../../common/components/TextFields';
import { NextButton, BackButton } from '../../../common/components/Buttons';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function VolumeDataTable({ marketType, value }) {
  const mapped = value.map((el, i) => ({ index: i, value: (el.volume / el.numberOfOutstandingShares) }));
  mapped.sort((a, b) => b.value - a.value);

  const result = mapped.map((el) => value[el.index]);

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow
            id="header"
          >
            <TableCell
              component="th"
              scope="row"
              padding="default"
              width="8%"
              key="1"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="body2">종목명</Typography>
              </Box>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              padding="default"
              width="7%"
              align="right"
              key="2"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="body2">현재가(원)</Typography>
              </Box>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              padding="default"
              width="7%"
              align="right"
              key="3"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="body2">등락(%)</Typography>
              </Box>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              padding="default"
              width="5%"
              align="right"
              key="4"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="body2">거래량</Typography>
              </Box>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              padding="default"
              width="10%"
              align="right"
              key="5"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="body2">유통 주식수 대비 거래량(%)</Typography>
              </Box>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              padding="default"
              width="8%"
              align="right"
              key="6"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="body2">거래대금(억)</Typography>
              </Box>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              padding="default"
              width="10%"
              key="7"
              align="right"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="body2">시가총액(억원)</Typography>
              </Box>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              padding="default"
              widht="45%"
              key="8"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="body2">테마</Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((volumeData) => {
            const volumeBy = Math.round((volumeData.volume / (volumeData.numberOfOutstandingShares * 1000)) * 100 * 100) / 100;
            const amount = Math.round((volumeData.volume * volumeData.closingPrice) / 100000000);
            const chartLink = `https://alphasquare.co.kr/home/stock/stock-summary?code=${volumeData.itemCode}`;

            if (volumeData.marketType === marketType) {
              return (
                <TableRow
                  id={volumeData.id}
                  key={volumeData.id}
                >
                  <TableCell
                    scope="row"
                    padding="default"
                  >
                    <Box display="flex" flexDirection="column">
                      <a target="_blank" href={chartLink} rel="noreferrer">
                        <Typography style={{ color: '#0061B0' }}>
                          {volumeData.itemName}
                        </Typography>
                      </a>
                    </Box>
                  </TableCell>
                  <TableCell
                    scope="row"
                    padding="default"
                    align="right"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography>
                        {new Intl.NumberFormat('ko-KR').format(volumeData.closingPrice)}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    scope="row"
                    padding="default"
                    align="right"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography
                        style={{
                          color: volumeData.fluctuationRate > 0 ? 'red' : 'blue',
                        }}
                      >
                        {volumeData.fluctuationRate}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    scope="row"
                    padding="default"
                    align="right"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography>
                        {new Intl.NumberFormat('ko-KR').format(volumeData.volume)}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    scope="row"
                    padding="default"
                    align="right"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography>{volumeBy}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    scope="row"
                    padding="default"
                    align="right"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography>
                        {new Intl.NumberFormat('ko-KR').format(amount)}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    scope="row"
                    padding="default"
                    align="right"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography>
                        {new Intl.NumberFormat('ko-KR').format(Math.round(volumeData.marketCap))}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    scope="row"
                    padding="default"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography>{volumeData.theme}</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              );
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const searchOptions = [
  { condition: '종목명', code: 1 },
  { condition: '테마', code: 2 },
];

export default function VolumeDetailContentContainer({ date }) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchCondition, setSearchCondition] = React.useState(1);
  const [searchKeyword, setSearchKeyword] = React.useState('');
  const [stateVolumeDataList, setStateVolumeDataList] = React.useState([]);
  const [value, setValue] = React.useState(0);

  const { volumeDataList } = useSelector((state) => ({
    volumeDataList: state.analyzeVolume.volumeDataList,
  }));

  useEffect(() => {
    dispatch(loadVolumeDataList(date));
  }, []);

  useEffect(() => {
    setStateVolumeDataList(volumeDataList);
  }, [volumeDataList]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
      key: `${index}`,
    };
  }

  function handleOnSearchConditionChange(e, v) {
    setSearchCondition(v.code);
  }

  const handleSearchKeyworkOnChange = React.useCallback(
    (e) => {
      if (!e.target.value) {
        setStateVolumeDataList(volumeDataList);
      }
      setSearchKeyword(e.target.value);
    }, [searchKeyword],
  );

  const handleSearchButtonOnClick = () => {
    let arr = stateVolumeDataList;
    if (searchCondition === 1) {
      arr = arr.filter((item) => item.itemName.includes(searchKeyword));
    } else {
      arr = arr.filter((item) => {
        const theme = item.theme ? item.theme : '';
        return theme.includes(searchKeyword);
      });
    }

    setStateVolumeDataList(arr);
  };

  function handleOnKeyDown(e) {
    if (e.keyCode === 13) {
      handleSearchButtonOnClick();
    }
  }

  const handleRefreshButtonOnClick = () => {
    history.push('/service/analyze/volume');
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.tableHeaderRoot}>
        <Box display="flex" flexDirection="row" style={{ width: '100%' }}>
          <CssAutocomplete
            style={{ minWidth: '10vw', marginRight: '5px', marginLeft: '1rem' }}
            id="combo-box1"
            size="small"
            options={searchOptions}
            getOptionLabel={(searchOption) => searchOption.condition}
            defaultValue={searchOptions[0]}
            getOptionSelected={(option, v) => option.condition === v.condition}
            renderInput={(params) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <TextField {...params} label="검색조건" variant="outlined" />
            )}
            onChange={(event, v) => handleOnSearchConditionChange(event, v)}
          />
          <CssTextField
            size="small"
            label="키워드"
            variant="outlined"
            style={{ marginRight: '5px' }}
            value={searchKeyword}
            onChange={handleSearchKeyworkOnChange}
            onKeyDown={handleOnKeyDown}
          />
          <NextButton
            style={{ marginRight: '5px' }}
            onClick={handleSearchButtonOnClick}
          >
            검색
          </NextButton>
          <BackButton
            onClick={handleRefreshButtonOnClick}
          >
            날짜선택
          </BackButton>
        </Box>
      </div>
      <div className={classes.root}>
        <Box display="flex" flexDirection="row" style={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="코스피" {...a11yProps(0)} />
            <Tab label="코스닥" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} key="kospi">
          <VolumeDataTable value={stateVolumeDataList} marketType="Kospi" />
        </TabPanel>
        <TabPanel value={value} index={1} key="kosdaq">
          <VolumeDataTable value={stateVolumeDataList} marketType="Kosdaq" />
        </TabPanel>
      </div>
    </main>
  );
}
