import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  makeStyles,
  withStyles,
  fade,
} from '@material-ui/core/styles';
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
  LinearProgress,
  InputBase,
} from '@material-ui/core';

// Icons
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import RefreshIcon from '@material-ui/icons/Refresh';
import DoneIcon from '@material-ui/icons/Done';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

import { loadDocumentList } from '../../state/slice';
import { loadAlarmList } from '../../state/slice';

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
    backgroundColor: '#FFFFFF',
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

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 7,
    borderRadius: 0,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 100],
  },
  bar: {
    borderRadius: 0,
    backgroundColor: 'blue',
  },
}))(LinearProgress);

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
  const classes = useStyles();
  const dispatch = useDispatch();
  const { alarms } = useSelector((state) => ({
    alarms: state.alarms,
  }));

  useEffect(() => {
    dispatch(loadAlarmList());
  }, []);
  const [selected, setSelected] = React.useState([]);
  // const [hovered, setHovered] = React.useState(false);
  const [hoveredId, setHoveredId] = React.useState(null);
  const numSelected = selected.length;
  const rowCount = alarms.length;
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = alarms.map((alarms) => alarms.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const isSelected = (id) => selected.indexOf(id) !== -1;
  const handleOnChange = (event, id) => {
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

  function handleReceiver(receivers) {
    // TODO. 구현해
    return '';
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.tableHeaderRoot}>
        <Box display="flex" flexDirection="row" style={{ width: '100%' }}>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={handleSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
          {(rowCount > 0 && numSelected === rowCount)
            || (numSelected > 0 && numSelected < rowCount)
            ? (
              <>
                <StyledTooltip title="삭제">
                  <IconButton className={classes.action}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTooltip>
                <StyledTooltip title="내려받기">
                  <IconButton className={classes.action}>
                    <GetAppIcon />
                  </IconButton>
                </StyledTooltip>
              </>
            ) : (
              <IconButton>
                <RefreshIcon />
              </IconButton>
            )}
          <SearchInput
            placeholder="검색"
          />
          <Box display="flex" alignItems="center" flexGrow={1} justifyContent="flex-end" fontSize={12}>
            <Typography>2 개 중 1-50</Typography>
            <IconButton disabled>
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton>
              <KeyboardArrowRightIcon />
            </IconButton>
          </Box>
        </Box>
      </div>
      <div
        className={classes.root}
      >
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <TableBody>
              {alarms.map((alarm) => {
                const isItemSelected = isSelected(alarm.id);
                const labelId = `enhanced-table-checkbox-${alarm.id}`;
                // const completeRatio = (document.completeCount / document.totalCount) * 100;

                return (
                  <TableRow
                    style={{ cursor: 'pointer', height: '4vh' }}
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={alarm.id}
                    selected={isItemSelected}
                    onMouseOver={() => setHoveredId(alarm.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <TableCell className={classes.checkbox}>
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={(event) => handleOnChange(event, alarm.id)}
                      />
                    </TableCell>
                    {/* <TableCell width="3%" padding="none">
                      {(document.completeCount === document.totalCount)
                        ? <DoneIcon style={{ color: 'green' }} />
                        : <ReportProblemIcon style={{ color: 'GoldenRod' }} />}
                    </TableCell> */}
                    <TableCell component="th" id={labelId} scope="row" padding="none" width="10%">
                      <Box display="flex" flexDirection="column">
                        <Typography>{alarm.itemName}</Typography>
                        {/* <Typography className={classes.typographySub}>
                          {`수신인: ${handleReceiver(document.receiver)}`}
                        </Typography> */}
                      </Box>
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none" width="10%">
                      <Box display="flex" flexDirection="column">
                        <Typography style={{ color: "red" }}>{alarm.recommendPrice}</Typography>
                        {/* <Typography className={classes.typographySub}>
                          {`수신인: ${handleReceiver(document.receiver)}`}
                        </Typography> */}
                      </Box>
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none" width="10%">
                      <Box display="flex" flexDirection="column">
                        <Typography style={{ color: "blue" }}>{alarm.losscutPrice}</Typography>
                        {/* <Typography className={classes.typographySub}>
                          {`수신인: ${handleReceiver(document.receiver)}`}
                        </Typography> */}
                      </Box>
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      <Box display="flex" flexDirection="column">
                        
                        {/* <Typography className={classes.typographySub}>
                          {`수신인: ${handleReceiver(document.receiver)}`}
                        </Typography> */}
                      </Box>
                    </TableCell>
                    {/* <TableCell width="10%">
                      <Box display="flex" flexDirection="column">
                        {completeRatio === 100
                          ? <Typography>완료됨</Typography>
                          : (
                            <Box display="flex" flexDirection="column">
                              <BorderLinearProgress
                                variant="determinate"
                                value={completeRatio}
                              />
                              <Typography className={classes.typographySub}>
                                {document.completeCount}
                                /
                                {document.totalCount}
                                {' '}
                                완료
                              </Typography>
                              <Typography>서명해야 함</Typography>
                            </Box>
                          )}

                      </Box>
                    </TableCell> */}
                    {hoveredId === alarm.id ? (
                      <>
                        <TableCell align="right" width="10%">
                          <Typography>{alarm.state}</Typography>
                        </TableCell>
                      <TableCell align="right" style={{ padding: '0' }}>
                        <Box>
                          <StyledTooltip title="삭제">
                            <IconButton className={classes.action}>
                              <DeleteIcon />
                            </IconButton>
                          </StyledTooltip>
                          <StyledTooltip title="내려받기">
                            <IconButton className={classes.action}>
                              <GetAppIcon />
                            </IconButton>
                          </StyledTooltip>
                        </Box>
                        </TableCell>
                        </>
                    ) : (
                      <>
                        <TableCell align="right" width="10%">
                          <Typography>{alarm.state}</Typography>
                        </TableCell>
                        <TableCell align="right" width="15%">
                          <Typography>{alarm.updatedAt}</Typography>
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  );
}
