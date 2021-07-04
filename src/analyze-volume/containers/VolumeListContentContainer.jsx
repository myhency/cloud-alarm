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
  loadVolumeDateList,
} from '../../state/slice';

export default function VolumeListContentContainer() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { volumeDateList } = useSelector((state) => ({
    volumeDateList: state.volumeDateList,
  }));

  useEffect(() => {
    dispatch(loadVolumeDateList());
  }, []);
  const [selected, setSelected] = React.useState([]);
  const [hoveredId, setHoveredId] = React.useState(null);

  const numSelected = selected.length;
  const rowCount = volumeDateList.length;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = volumeDateList.map((volumeDate) => volumeDate);
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

  const handleDetailOpen = (e, volumeDate) => {
    e.preventDefault();
    history.push(`/analyze/volume/${volumeDate}`);
  };

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
          <SearchInput placeholder="검색" />
          <Box
            display="flex"
            alignItems="center"
            flexGrow={1}
            justifyContent="flex-end"
            fontSize={12}
          >
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
      <div className={classes.root}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <TableBody>
              {volumeDateList.map((volumeDate) => {
                const isItemSelected = isSelected(volumeDate);
                const labelId = `enhanced-table-checkbox-${volumeDate}`;

                return (
                  <TableRow
                    id={volumeDate}
                    style={{ cursor: 'pointer', height: '4vh' }}
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={volumeDate}
                    selected={isItemSelected}
                    onMouseOver={() => setHoveredId(volumeDate)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <TableCell className={classes.checkbox}>
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={(event) => handleOnChange(event, volumeDate)}
                      />
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
      </div>
    </main>
  );
}
