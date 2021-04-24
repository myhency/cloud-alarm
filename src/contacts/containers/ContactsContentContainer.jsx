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
  InputBase,
} from '@material-ui/core';

// Icons
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import RefreshIcon from '@material-ui/icons/Refresh';

import {
  loadContacts,
  loadContactDetail,
  clearContactDetail,
} from '../../state/slice';

import ContactModalContainer from '../../sample/containers/ContactModalContainer';

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

export default function ContactContentContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selected, setSelected] = React.useState([]);
  const [hovered, setHovered] = React.useState(false);
  const [detailModalOpened, setDetailModalOpened] = React.useState(false);

  useEffect(() => {
    dispatch(loadContacts());
  }, []);

  const { contacts } = useSelector((state) => ({
    contacts: state.contacts,
  }));

  const numSelected = selected.length;
  const rowCount = contacts.length;

  function handleDetailOpen(userId) {
    dispatch(loadContactDetail(userId));
    setDetailModalOpened(true);
  }

  function handleDetailClose() {
    dispatch(clearContactDetail());
    setDetailModalOpened(false);
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = contacts.map((n) => n.authorName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const handleOnChange = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  return (
    <main className={classes.content}>
      <ContactModalContainer
        openState={detailModalOpened}
        onClose={handleDetailClose}
      />
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
              {contacts.length === 0
                ? (
                  <TableRow>
                    <TableCell>
                      Loading...
                    </TableCell>
                  </TableRow>
                )
                : contacts.map((row, index) => {
                  const isItemSelected = isSelected(row.authorName);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      style={{ cursor: 'pointer' }}
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.contactId}
                      selected={isItemSelected}
                      onClick={() => handleDetailOpen(row.contactId)}
                      onMouseOver={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      <TableCell
                        className={classes.checkbox}
                      >
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          onChange={(event) => handleOnChange(event, row.name)}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.phoneNumber}</TableCell>
                      {hovered ? (
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
                      ) : (
                        <TableCell align="right">{row.company}</TableCell>
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
