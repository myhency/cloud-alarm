import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const BaseBox = withStyles(() => ({
  root: {
    backgroundColor: '#FBE8A6',
    height: '100%',
  },
}))(Box);

export const NewDocumentBox = withStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px',
    marginBottom: '5px',
    backgroundColor: '#FBE8A6',
  },
}))(Box);
