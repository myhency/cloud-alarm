import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const NextButton = withStyles(() => ({
  root: {
    color: '#b4dfe5',
    backgroundColor: '#303C6C',
    '&:hover': {
      backgroundColor: '#262f53',
    },
  },
}))(Button);

export const BackButton = withStyles(() => ({
  root: {
    color: '#b4dfe5',
    backgroundColor: '#F4976C',
    '&:hover': {
      backgroundColor: '#e98455',
    },
  },
}))(Button);
