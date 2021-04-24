import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  IconButton,
  Tooltip,
  withStyles,
} from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import GetApp from '@material-ui/icons/GetApp';

const useStyles = makeStyles(() => ({
  checkbox: {
    width: '48px',
    padding: '0 0 0 0',
  },
  action: {
    color: 'rgba(0, 0, 0, 0.54)',
    '&:hover': {
      color: '#000000',
    },
  },
}));

const StyledTooltip = withStyles({
  tooltip: {
    backgroundColor: 'rgba(0,0,0,0.72)',
    fontSize: 12,
    marginTop: 0,
  },
})(Tooltip);

/**
 * COMPLETE. hover 일 때 버튼이 나오게 해야 함
 * COMPLETE. hover 일 때 나오는 버튼은 삭제, 내려받기 등등
 * COMPLETE. 컬럼은 체크박스, 발신인, 문서제목, 우측끝에 문서작성시간
 * COMPLETE. 발신인, 문서제목, 우측끝에 문서작성시간 은 props 로 받아야 함
 * COMPLETE. 체크박스가 checked 일 때는 ContentHeader에 버튼이 나오게 해야 함
 * TODO. 체크박스가 checked 일 때는 TableRow의 bgColor가 hover 때랑은 확연히 다른 색으로 변경되어야 함
 */
export default function HTableRow({
  authorName,
  documentTitle,
  createdAt,
  selected,
  labelId,
  handleOnChange,
}) {
  const classes = useStyles();
  const [hovered, setHovered] = React.useState(false);

  return (
    <TableRow
      hover
      role="checkbox"
      aria-checked={selected}
      tabIndex={-1}
      key="1"
      selected={selected}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <TableCell
        className={classes.checkbox}
      >
        <Checkbox
          checked={selected}
          inputProps={{ 'aria-labelledby': labelId }}
          onChange={(event) => handleOnChange(event, authorName)}
        />
      </TableCell>
      <TableCell component="th" id={labelId} scope="row" padding="none">
        {authorName}
      </TableCell>
      <TableCell>{documentTitle}</TableCell>
      {hovered ? (
        <TableCell align="right" style={{ padding: '0' }}>
          <Box>
            <StyledTooltip title="삭제">
              <IconButton className={classes.action}>
                <Delete />
              </IconButton>
            </StyledTooltip>
            <StyledTooltip title="내려받기">
              <IconButton className={classes.action}>
                <GetApp />
              </IconButton>
            </StyledTooltip>
          </Box>
        </TableCell>
      ) : (
        <TableCell align="right">{createdAt}</TableCell>
      )}
    </TableRow>
  );
}
