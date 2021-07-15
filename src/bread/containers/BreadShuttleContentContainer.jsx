/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Box,
  TextField,
  Grid,
  Paper,
  IconButton,
  Checkbox,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

// Icons
import HelpIcon from '@material-ui/icons/Help';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import GetAppIcon from '@material-ui/icons/GetApp';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import RefreshIcon from '@material-ui/icons/Refresh';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { CssAutocomplete } from '../../common/components/TextFields';

import { useStyles } from '../../common/components/Styles';
import { SearchInput } from '../../common/components/Inputs';
import { StyledTooltip } from '../../common/components/Tooltips';

import NaverLogo from '../../assets/images/naver.jpg';
import FnLogo from '../../assets/images/fn.jpg';
import AlphaLogo from '../../assets/images/alpha.jpg';

import {
  loadAlarmList,
  loadAlarmDetail,
  clearAlarmDetail,
  removeAlarmDocument,
  clearCreatedAlarm,
} from '../../state/slice';

function BreadItem({ id, itemName, itemCode }) {
  const classes = useStyles();
  const alphaLink = `https://alphasquare.co.kr/home/stock/stock-summary?code=${itemCode}`;
  const fnLink = `http://comp.fnguide.com/SVO2/ASP/SVD_Main.asp?pGB=1&gicode=A${itemCode}`;
  const naverLink = `https://finance.naver.com/item/main.nhn?code=${itemCode}`;

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', padding: '5px' }}>
      <Box className={classes.boxForBreadItem}>
        <Box className={classes.boxForBreadItemNumber}>
          {id}
        </Box>
        <Typography
          style={{ color: '#00233E' }}
        >
          {itemName}
        </Typography>
      </Box>
      <Box className={classes.boxForBreadItemFooter}>
        <Box style={{ flexGrow: 1 }} />
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
    </Box>
  );
}

export default function BreadShuttleContentContainer() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { alarms } = useSelector((state) => ({
    alarms: state.alarms,
  }));

  useEffect(() => {
    dispatch(loadAlarmList());
  }, []);
  const [selected, setSelected] = React.useState([]);
  const [hoveredId, setHoveredId] = React.useState(null);
  const [warningOpen, setWarningOpen] = React.useState(false);
  const [toBeDeletedId, setToBeDeletedId] = React.useState(0);
  const [detailModalOpened, setDetailModalOpened] = React.useState(false);

  const numSelected = selected.length;
  const rowCount = alarms.length;

  function handleCancelClose() {
    setWarningOpen(false);
  }

  const handleDetailOpen = (e, id) => {
    dispatch(loadAlarmDetail(id));
    setDetailModalOpened(true);
  };

  function handleDetailClose() {
    dispatch(clearAlarmDetail());
    setDetailModalOpened(false);
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = alarms.map((alarm) => alarm.alarmId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

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

  const handleOnModifyButton = (e, id) => {
    history.push(`/ready-docs/${id}`);
  };

  const handleOnDeleteButton = (e, id) => {
    setWarningOpen(true);
    setToBeDeletedId(id);
  };

  const handleConfirmClose = () => {
    const id = toBeDeletedId;
    dispatch(removeAlarmDocument(id));
    dispatch(clearCreatedAlarm());
    setWarningOpen(false);
    window.location.reload();
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.tableHeaderRoot_2}>
        <Box style={{ flexGrow: 1 }}>
          <Typography
            variant="h5"
            style={{ color: '#303C6C' }}
          >
            오늘의 빅파이
          </Typography>
        </Box>
        <Box style={{ width: '300px', height: '50px' }}>
          <CssAutocomplete
            id="combo-box"
            // options={stockItems}
            getOptionLabel={(stockItem) => stockItem.itemName}
            getOptionSelected={(option, value) => option.itemName === value.itemName}
            renderInput={(params) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <TextField {...params} label="오늘의 빅파이" variant="outlined" />
            )}
            onChange={(event, value) => handleOnChange(event, value)}
          />
        </Box>
        <IconButton style={{ margin: '0 0 0 10px', color: '#303C6C' }}>
          <HelpIcon />
        </IconButton>
      </div>
      <div className={classes.breadRoot}>
        <Grid container className={classes.forTest}>
          <Grid item xs={12}>
            <Paper className={classes.paperForTest}>
              <Typography
                variant="h6"
                style={{ color: 'white' }}
              >
                단타용
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} className={classes.breadItem}>
            <BreadItem id={1} itemName="슈프리마아이디" itemCode="" />
          </Grid>
        </Grid>
        <Grid container className={classes.forTest2}>
          <Grid item xs={12}>
            <Paper className={classes.paperForTest}>
              <Typography
                variant="h6"
                style={{ color: 'white' }}
              >
                스윙용
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.breadItem}>
            <BreadItem id={1} itemName="슈프리마아이디" itemCode="" />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.breadItem}>
            <BreadItem id={2} itemName="젬백스지오" itemCode="" />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.breadItem}>
            <BreadItem id={3} itemName="클리노믹스" itemCode="" />
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
