/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core';

import { useMobileStyles } from '../../../common/components/Styles';

import {
  loadVolumeDataList,
} from '../../../state/analyzeVolumeSlice';

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
        <Box p={3}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function VolumeDataTable({ marketType, value }) {
  const mapped = value.map((el, i) => ({
    index: i,
    value: (el.volume / el.numberOfOutstandingShares),
  }));

  mapped.sort((a, b) => b.value - a.value);

  const result = mapped.map((el) => value[el.index]);

  return (
    <>
      <Box style={{
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid lightgrey',
      }}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
          key="header"
        >
          <Box style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          >
            <div>
              <Typography variant="caption" style={{ color: '#303C6C' }}>
                종목명
              </Typography>
            </div>
            <div>
              <Typography variant="caption">
                현재가
              </Typography>
            </div>
            <div>
              <Typography variant="caption">
                등락율
              </Typography>
            </div>
          </Box>
          <Box style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            flexGrow: 1,
          }}
          >
            <div style={{
              flexGrow: 1,
              justifyContent: 'center',
            }}
            >
              <Typography variant="subtitle2">
                유통주식수대비 거래량
              </Typography>
            </div>
            <div>
              <Typography variant="caption" style={{ color: '#747171' }}>
                거래대금
              </Typography>
            </div>
            <div>
              <Typography variant="caption" style={{ color: '#747171' }}>
                시가총액
              </Typography>
            </div>
          </Box>
        </Box>
        <Box style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '3px 0 0 0',
        }}
        >
          <Typography variant="caption" style={{ color: '#747171' }}>
            테마
          </Typography>
        </Box>
      </Box>
      {result.map((volumeData) => {
        const volumeBy = Math.round((volumeData.volume / (volumeData.numberOfOutstandingShares * 1000)) * 100 * 100) / 100;
        const amount = Math.round((volumeData.volume * volumeData.closingPrice) / 100000000);
        const chartLink = `https://m.alphasquare.co.kr/service/chart?code=${volumeData.itemCode}`;
        const chartEmoji = volumeData.fluctuationRate > 0 ? '📈 ' : '📉 ';
        const shortHandTheme = volumeData.theme == null
          ? '' : volumeData.theme.length > 35
            ? `${volumeData.theme.substring(0, 35)}...`
            : volumeData.theme;

        if (volumeData.marketType === marketType) {
          return (
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderBottom: '1px solid lightgrey',
              }}
              key={volumeData.id}
            >
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  margin: '10px 0px 5px 0px',
                }}
                key="header"
              >
                <Box style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
                >
                  <div>
                    <a target="_blank" href={chartLink} rel="noreferrer">
                      <Typography style={{ color: '#0061B0' }}>
                        {volumeData.itemName}
                      </Typography>
                    </a>
                  </div>
                  <div>
                    <Typography variant="caption">
                      {new Intl.NumberFormat('ko-KR').format(volumeData.closingPrice)}
                      원
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      style={{
                        color: volumeData.fluctuationRate > 0 ? 'red' : 'blue',
                      }}
                    >
                      {chartEmoji}
                      {volumeData.fluctuationRate}
                      %
                    </Typography>
                  </div>
                </Box>
                <Box style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  flexGrow: 1,
                }}
                >
                  <div style={{
                    flexGrow: 1,
                    justifyContent: 'center',
                  }}
                  >
                    <Typography>
                      {volumeBy}
                      %
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="caption" style={{ color: '#747171' }}>
                      {new Intl.NumberFormat('ko-KR').format(amount)}
                      억
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="caption" style={{ color: '#747171' }}>
                      {new Intl.NumberFormat('ko-KR').format(Math.round(volumeData.marketCap))}
                      억
                    </Typography>
                  </div>
                </Box>
              </Box>
              <Box style={{
                display: 'flex',
                flexDirection: 'column',
              }}
              >
                <Typography variant="caption" style={{ color: '#747171' }}>
                  {shortHandTheme}
                </Typography>
              </Box>
            </Box>
          );
        }
      })}
    </>
  );
}

export default function MobileVolumeDetailContentContainer({ date }) {
  const classes = useMobileStyles();
  const dispatch = useDispatch();
  const { volumeDataList } = useSelector((state) => ({
    volumeDataList: state.analyzeVolume.volumeDataList,
  }));

  useEffect(() => {
    dispatch(loadVolumeDataList(date));
  }, []);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <main className={classes.content}>
      <div className={classes.tableHeaderRoot}>
        <Box display="flex" flexDirection="row" style={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="코스피" {...a11yProps(0)} />
            <Tab label="코스닥" {...a11yProps(1)} />
          </Tabs>
        </Box>
      </div>
      <div className={classes.root}>
        <TabPanel value={value} index={0}>
          <VolumeDataTable value={volumeDataList} marketType="Kospi" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <VolumeDataTable value={volumeDataList} marketType="Kosdaq" />
        </TabPanel>
      </div>
    </main>
  );
}
