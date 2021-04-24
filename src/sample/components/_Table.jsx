import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import HTableRow from './_TableRow';

const useStyles = makeStyles((theme) => ({
  root: {
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

export default function EnhancedTable({
  rows,
  handleOnChange,
  selected,
}) {
  const classes = useStyles();
  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
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
            {rows.map((row, index) => {
              const isItemSelected = isSelected(row.authorName);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <HTableRow
                  key={row.authorName}
                  authorName={row.authorName}
                  documentTitle={row.documentTitle}
                  createdAt={row.createdAt}
                  selected={isItemSelected}
                  labelId={labelId}
                  handleOnChange={handleOnChange}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
