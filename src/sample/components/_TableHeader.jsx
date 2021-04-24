import React from 'react';
import {
  Box,
  IconButton,
  Checkbox,
  Tooltip,
  withStyles,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid lightgrey',
    height: '60px',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
}));

const StyledTooltip = withStyles({
  tooltip: {
    backgroundColor: 'rgba(0,0,0,0.72)',
    fontSize: 12,
    marginTop: 0,
  },
})(Tooltip);

export default function HTableHeader({
  onSelectAllClick,
  numSelected,
  rowCount,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box>
        <Checkbox
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={rowCount > 0 && numSelected === rowCount}
          onChange={onSelectAllClick}
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
      </Box>
      <Box
        display="inline-flex"
        alignItems="center"
        ml="auto"
      >
        <Box fontSize={12}>
          1,971 개 중 1-50
        </Box>
        <IconButton disabled>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </div>
  );
}
