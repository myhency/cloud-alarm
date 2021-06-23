import { withStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

// eslint-disable-next-line import/prefer-default-export
export const StyledTooltip = withStyles({
  tooltip: {
    backgroundColor: 'rgba(0,0,0,0.72)',
    fontSize: 12,
    marginTop: 0,
  },
})(Tooltip);
