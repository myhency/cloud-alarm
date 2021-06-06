import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const LoginButton = withStyles(() => ({
  root: {
    width: '100%',
    color: '#5F6366',
    backgroundColor: '#B4DFE5',
    '&:hover': {
      backgroundColor: '#D2FDFF',
    },
  },
}))(Button);

export default LoginButton;
