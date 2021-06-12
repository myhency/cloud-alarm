import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles, withStyles, fade } from '@material-ui/core/styles';
import {
  Box,
  IconButton,
  Checkbox,
  Tooltip,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  InputBase,
  Divider,
} from '@material-ui/core';

import {
  loadAlarmList,
  loadAlarmDetail,
  clearAlarmDetail,
} from '../../state/slice';

import MobileInBoxModalContainer from './MobileInBoxModalContainer';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    height: '100%',
    // backgroundColor: '#FBE8A6',
  },
  tableHeaderRoot: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid lightgrey',
    height: '60px',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  tableRoot: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  checkbox: {
    width: '48px',
    padding: '0 0 0 0',
  },
  typographySub: {
    color: 'grey',
  },
}));

const StyledTooltip = withStyles({
  tooltip: {
    backgroundColor: 'rgba(0,0,0,0.72)',
    fontSize: 12,
    marginTop: 0,
  },
})(Tooltip);

const SearchInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    backgroundColor: '#ced4da',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    minWidth: '300px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: '#ced4da',
      backgroundColor: 'white',
    },
  },
}))(InputBase);

export default function InBoxContentContainer() {
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
  const [detailModalOpened, setDetailModalOpened] = React.useState(false);

  const numSelected = selected.length;
  const rowCount = alarms.length;

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

  return (
    <main className={classes.content}>
      <MobileInBoxModalContainer
        openState={detailModalOpened}
        onClose={handleDetailClose}
      />
      {alarms.map((alarm) => {
        const key = alarm.alarmId;
        return (
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              margin: '10px 10px 5px 10px',
              borderBottom: '1px solid lightgrey',
            }}
            onClick={(e) => handleDetailOpen(e, alarm.alarmId)}
            key={key}
          >
            <Box style={{
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              <div>
                <Typography style={{ color: '#303C6C', fontSize: '17px' }}>
                  {alarm.itemName}
                </Typography>
              </div>
              <div>
                <Typography style={{ color: 'red' }}>
                  {new Intl.NumberFormat('ko-KR').format(alarm.recommendPrice)}
                </Typography>
              </div>
              <div>
                <Typography style={{ color: 'blue' }}>
                  {new Intl.NumberFormat('ko-KR').format(alarm.losscutPrice)}
                </Typography>
              </div>
            </Box>
            <Box style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              // flex: '2 1 1 4',
              flexGrow: 1,
            }}
            >
              <div style={{
                flexGrow: 1,
                justifyContent: 'center',
              }}
              >
                <Typography style={{ color: '#adadad', fontSize: '12px' }}>
                  {alarm.modifiedDate}
                </Typography>
              </div>
              <div>
                <Typography style={{ color: '#747171', fontSize: '14px' }}>
                  {alarm.alarmStatus}
                </Typography>
              </div>
            </Box>
          </Box>
        );
      })}
    </main>
  );
}
