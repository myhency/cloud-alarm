import React from 'react';

import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function parseContent(content, localeText) {
  if (content === 'error') {
    return 'Error';
  }
  if (content === null) {
    return 'loading...';
  }
  return `${content} ${localeText.document_unit_name}`;
}

export default function SignProgressBox({ title, content, localeText }) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <p>{title}</p>
      <p>{parseContent(content, localeText)}</p>
    </Paper>
  );
}
