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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function VolumeDataTable({ marketType, value }) {
  const mapped = value.map((el, i) => ({ index: i, value: (el.volume / el.numberOfOutstandingShares) }));
  mapped.sort((a, b) => {
    return b.value - a.value;
  });

  const result = mapped.map((el) => {
    return value[el.index];
  });

  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow
            id="header"
            key="header"
          >
            <TableCell
              component="th"
              scope="row"
              padding="none"
              width="10%"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="h6">종목명</Typography>
              </Box>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              padding="none"
              width="5%"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="h6">현재가(원)</Typography>
              </Box>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              padding="none"
              width="5%"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="h6">등락(%)</Typography>
              </Box>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              padding="none"
              width="5%"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="h6">거래량</Typography>
              </Box>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              padding="none"
              width="8%"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="h6">유통 주식수 대비 거래량(%)</Typography>
              </Box>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              padding="none"
              width="5%"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="h6">거래대금(억)</Typography>
              </Box>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              padding="none"
              width="5%"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="h6">시가총액(억원)</Typography>
              </Box>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              padding="none"
              widht="15%"
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="h6">테마</Typography>
              </Box>
            </TableCell>
          </TableRow>
          {result.map((volumeData) => {
            const volumeBy = Math.round((volumeData.volume / (volumeData.numberOfOutstandingShares * 1000)) * 100 * 100) / 100;
            const amount = Math.round((volumeData.volume * volumeData.closingPrice) / 100000000);

            if (volumeData.marketType === marketType) {
              return (
                <TableRow
                  id={volumeData.id}
                  key={volumeData.id}
                >
                  <TableCell
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography>{volumeData.itemName}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography>{volumeData.closingPrice}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography>{volumeData.fluctuationRate}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography>{volumeData.volume}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography>{volumeBy}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography>{amount}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography>{Math.round(volumeData.marketCap)}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    scope="row"
                    padding="none"
                    widht="15%"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography>{volumeData.theme}</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              );
            } return (<></>);
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

  console.log(date);

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
