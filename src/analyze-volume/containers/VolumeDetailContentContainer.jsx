import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Box,
  IconButton,
  Checkbox,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core';

// Icons
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import RedoIcon from '@material-ui/icons/Redo';
import RefreshIcon from '@material-ui/icons/Refresh';
import ShowChartIcon from '@material-ui/icons/ShowChart';

import { useStyles } from '../../common/components/Styles';
import { SearchInput } from '../../common/components/Inputs';
import { StyledTooltip } from '../../common/components/Tooltips';

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

export default function VolumeDetailContentContainer({ date }) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { volumeDataList } = useSelector((state) => ({
    volumeDataList: state.volumeDataList,
  }));

  console.log(date);

  useEffect(() => {
    dispatch(loadVolumeDataList(date));
  }, []);
  const [selected, setSelected] = React.useState([]);
  const [value, setValue] = React.useState(0);
  const [hoveredId, setHoveredId] = React.useState(null);

  const numSelected = selected.length;
  const rowCount = volumeDataList.length;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = volumeDataList.map((volumeData) => volumeData);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

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

  const handleDetailOpen = (e, volumeDate) => {
    e.preventDefault();
    history.push(`/analyze/volume/${volumeDate}`);
  };

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
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6">종목명</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6">현재가(원)</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6">등락(%)</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6">거래량</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6">유통 주식수 대비 거래량(%)</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6">거래대금(억)</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    padding="none"
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
                {volumeDataList.map((volumeData) => {
                  const volumeBy = Math.round((volumeData.volume / (volumeData.numberOfOutstandingShares * 1000)) * 100 * 100) / 100;
                  const amount = Math.round((volumeData.volume * volumeData.closingPrice) / 100000000);

                  if (volumeData.marketType === 'Kospi') {
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
        </TabPanel>
        <TabPanel value={value} index={1}>
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
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6">종목명</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6">현재가(원)</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6">등락(%)</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6">거래량</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6">유통 주식수 대비 거래량(%)</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6">거래대금(억)</Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    padding="none"
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
                {volumeDataList.map((volumeData) => {
                  const volumeBy = Math.round((volumeData.volume / (volumeData.numberOfOutstandingShares * 1000)) * 100 * 100) / 100;
                  const amount = Math.round((volumeData.volume * volumeData.closingPrice) / 100000000);

                  if (volumeData.marketType === 'Kosdaq') {
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
        </TabPanel>
      </div>
    </main>
  );
}
