/* eslint-disable import/prefer-default-export */
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: indigo[700],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: indigo[700],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: indigo[700],
      },
      '&:hover fieldset': {
        borderColor: indigo[700],
      },
      '&.Mui-focused fieldset': {
        borderColor: indigo[700],
      },
    },
  },
})(TextField);
