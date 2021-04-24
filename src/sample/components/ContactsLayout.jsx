import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HTableHeader from './_TableHeader';
import HTable from './_Table';

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
}));

export default function ContentMainLayout({
  handleSelectAllClick,
  rows,
  selected,
  handleOnChange,
}) {
  const classes = useStyles();
  const numSelected = selected.length;
  const rowCount = rows.length;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <HTableHeader
        onSelectAllClick={handleSelectAllClick}
        numSelected={numSelected}
        rowCount={rowCount}
      />
      <HTable
        rows={rows}
        handleOnChange={handleOnChange}
        selected={selected}
      />
    </main>
  );
}
