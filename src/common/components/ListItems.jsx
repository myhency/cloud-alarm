import { withStyles } from '@material-ui/core/styles';
import { ListItem } from '@material-ui/core';

const MenuListItem = withStyles({
  root: {
    '& .MuiListItemIcon-root': {
      color: '#303C6C',
    },
    color: '#303C6C',
    borderRadius: '0px 30px 30px 0px',
    marginRight: '10px',
    '&$selected': {
      backgroundColor: '#f4976c',
      color: '#303C6C',
      '& .MuiListItemIcon-root': {
        color: '#303C6C',
      },
    },
    '&$selected:hover': {
      backgroundColor: '#ffcb9a',
      color: '#303C6C',
      '& .MuiListItemIcon-root': {
        color: '#303C6C',
      },
    },
    '&:hover': {
      backgroundColor: '#ffdb9a',
      color: '#303C6C',
      '& .MuiListItemIcon-root': {
        color: '#303C6C',
      },
    },
  },
  selected: {},
})(ListItem);

export default MenuListItem;
