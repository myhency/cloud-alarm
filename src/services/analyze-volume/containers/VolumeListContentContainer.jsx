import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  IconButton,
  TextField,
  Box,
  TableContainer,
  Table,
  Collapse,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@material-ui/core';

// Icons
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { useStyles } from '../../../common/components/Styles';
import {
  CssTextField,
  CssAutocomplete,
} from '../../../common/components/TextFields';
import { NextButton, BackButton } from '../../../common/components/Buttons';

import {
  loadVolumeDateList,
  loadVolumeDataListByFilter,
} from '../../../state/analyzeVolumeSlice';

const searchOptions = [
  { condition: '종목명', code: 1 },
  { condition: '테마', code: 2 },
];

function Row(props) {
  const { row, title } = props;
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {title}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>종목명</TableCell>
                  <TableCell align="right">현재가(원)</TableCell>
                  <TableCell align="right">등락(%)</TableCell>
                  <TableCell align="right">거래량</TableCell>
                  <TableCell align="right">유통 주식수 대비 거래량(%)</TableCell>
                  <TableCell align="right">거래대금(억)</TableCell>
                  <TableCell align="right">시가총액(억원)</TableCell>
                  <TableCell>테마</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((volumeData) => {
                  const volumeBy = Math.round((volumeData.volume / (volumeData.numberOfOutstandingShares * 1000)) * 100 * 100) / 100;
                  const amount = Math.round((volumeData.volume * volumeData.closingPrice) / 100000000);
                  const chartLink = `https://alphasquare.co.kr/home/stock/stock-summary?code=${volumeData.itemCode}`;

                  return (
                    <TableRow key={volumeData.id}>
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
                })}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function VolumeListContentContainer() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchCondition, setSearchCondition] = React.useState(1);
  const [searchKeyword, setSearchKeyword] = React.useState('');
  const [onSearching, setOnSearching] = React.useState(false);
  const [collapsedVolumeDateList, setCollapsedVolumeDateList] = React.useState([]);

  const { volumeDateList } = useSelector((state) => ({
    volumeDateList: state.analyzeVolume.volumeDateList,
  }));

  const { filteredVolumeDataList } = useSelector((state) => ({
    filteredVolumeDataList: state.analyzeVolume.filteredVolumeDataList,
  }));

  useEffect(() => {
    dispatch(loadVolumeDateList());
  }, []);

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let obj = {};
    filteredVolumeDataList.forEach((v) => {
      if (!(`${v.createdDate.split('T')[0]}` in obj)) {
        const key = v.createdDate.split('T')[0];
        obj[key] = [];
      }
    });
    filteredVolumeDataList.forEach((item) => {
      const key = item.createdDate.split('T')[0];
      obj[key].push({
        ...item,
      });
    });

    // eslint-disable-next-line prefer-const
    let arr = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(obj)) {
      // eslint-disable-next-line prefer-const
      let o = {};
      const k = key;
      o[k] = value;
      arr.push(o);
    }

    setCollapsedVolumeDateList(arr);
  }, [filteredVolumeDataList]);

  const handleDetailOpen = (e, volumeDate) => {
    e.preventDefault();
    history.push(`/service/analyze/volume/${volumeDate}`);
  };

  function handleOnSearchConditionChange(e, v) {
    setSearchCondition(v.code);
  }

  const handleSearchKeyworkOnChange = React.useCallback(
    (e) => {
      if (!e.target.value) {
        // setSevenBreadItemList(sevenBreads);
      }
      setSearchKeyword(e.target.value);
    }, [searchKeyword],
  );

  const handleSearchButtonOnClick = () => {
    setOnSearching(true);
    dispatch(loadVolumeDataListByFilter(searchCondition, searchKeyword));
  };

  function handleOnKeyDown(e) {
    if (e.keyCode === 13) {
      handleSearchButtonOnClick();
    }
  }

  const handleRefreshButtonOnClick = () => {
    setSearchKeyword('');
    setOnSearching(false);
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
            getOptionSelected={(option, value) => option.condition === value.condition}
            renderInput={(params) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <TextField {...params} label="검색조건" variant="outlined" />
            )}
            onChange={(event, value) => handleOnSearchConditionChange(event, value)}
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
        {onSearching ? (
          <TableContainer>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell width="3%" />
                  <TableCell>포착일</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {collapsedVolumeDateList.map(
                  (row, i) => (
                    <Row
                      key={Object.keys(row) + String(i)}
                      row={row[Object.keys(row)[0]]}
                      title={Object.keys(row)[0]}
                    />
                  ),
                )}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size="medium"
              aria-label="enhanced table"
            >
              <TableBody>
                {volumeDateList.map((volumeDate) => {
                  const labelId = `enhanced-table-checkbox-${volumeDate}`;

                  return (
                    <TableRow
                      id={volumeDate}
                      style={{ cursor: 'pointer', height: '4vh' }}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={volumeDate}
                    >
                      <TableCell className={classes.checkbox}>
                        <Typography align="center">▪️</Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        onClick={(e) => handleDetailOpen(e, volumeDate)}
                      >
                        <Box display="flex" flexDirection="column">
                          <Typography>{volumeDate}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </main>
  );
}
