import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
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

import { useStyles } from '../../common/components/Styles';

import {
  loadVolumeDataList,
} from '../../state/slice';

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
  const mapped = value.map((el, i) => ({ index: i, value: (el.volume / el.numberOfOutstandingShares) }));
  mapped.sort((a, b) => b.value - a.value);

  const result = mapped.map((el) => value[el.index]);

  console.log(result);

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

export default function VolumeDetailContentContainer({ date }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { volumeDataList } = useSelector((state) => ({
    volumeDataList: state.volumeDataList,
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
      key: `${index}`,
    };
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.tableHeaderRoot}>
        <Box display="flex" flexDirection="row" style={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="코스피" {...a11yProps(0)} />
            <Tab label="코스닥" {...a11yProps(1)} />
          </Tabs>
        </Box>
      </div>
      <div className={classes.root}>
        <TabPanel value={value} index={0} key="kospi">
          <VolumeDataTable value={volumeDataList} marketType="Kospi" />
        </TabPanel>
        <TabPanel value={value} index={1} key="kosdaq">
          <VolumeDataTable value={volumeDataList} marketType="Kosdaq" />
        </TabPanel>
      </div>
    </main>
  );
}
