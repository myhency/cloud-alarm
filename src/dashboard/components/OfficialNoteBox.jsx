import React from 'react';

import {
  Grid, Paper, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function OfficalNoteBox({ localeText }) {
  const styles = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Paper className={styles.paper}>{localeText.service2}</Paper>
    </Grid>
  );
}
