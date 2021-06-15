import { withStyles } from '@material-ui/core/styles';
import { Button, IconButton } from '@material-ui/core';

export const NewDocumentButton = withStyles(() => ({
  root: {
    backgroundColor: '#303C6C',
    marginTop: '15px',
    marginBottom: '5px',
    boxShadow: '0 1px 2px 0 grey',
    borderRadius: '30px 30px 30px 30px',
    paddingRight: '20px',
    paddingLeft: '15px',
    '&:hover': {
      backgroundColor: '#262f53',
    },
  },
}))(Button);

export const SmallNewDocumentButton = withStyles(() => ({
  root: {
    backgroundColor: '#303C6C',
    marginTop: '15px',
    marginBottom: '5px',
    boxShadow: '0 1px 2px 0 grey',
    borderRadius: '30px 30px 30px 30px',
    '&:hover': {
      backgroundColor: '#262f53',
    },
  },
}))(IconButton);

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

export const LoginButton = withStyles(() => ({
  root: {
    width: '100%',
    color: '#5F6366',
    backgroundColor: '#B4DFE5',
    '&:hover': {
      backgroundColor: '#D2FDFF',
    },
  },
}))(Button);
