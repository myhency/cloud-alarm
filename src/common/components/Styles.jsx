import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line import/prefer-default-export
export const useStyles = makeStyles((theme) => ({
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
    height: '100%',
    // backgroundColor: '#FBE8A6',
  },
  tableHeaderRoot: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid lightgrey',
    height: '60px',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  tableRoot: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  checkbox: {
    width: '48px',
    padding: '0 0 0 0',
  },
  typographySub: {
    color: 'grey',
  },
  newContactBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px',
    marginBottom: '5px',
  },
  inbox: {
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#000000',
  },
  listItem: {
    borderRadius: '30px 30px 30px 30px',
    justifyContent: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    backgroundColor: '#303C6C',
    width: 250,
  },
  contactContentBox: {
    fontSize: '1.2rem',
    margin: '1rem 0rem',
  },
  flexRowBox: {
    display: 'flex',
    alignItems: 'center',
    margin: '0.4rem 0.4rem',
    width: '100%',
  },
  rowContent: {
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  rowType: {
    width: '8rem',
    fontSize: '0.8rem',
    color: 'grey',
  },
  inboxHeaderBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '1rem 0rem',
  },
  profileBox: {
    fontSize: '1.2rem',
    width: '5em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonGroupBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '0.5rem',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  progressToolBarRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#f4976c',
    margin: '0px',
  },
}));

export const useMobileStyles = makeStyles((theme) => ({
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
    height: '100%',
    // backgroundColor: '#FBE8A6',
  },
  tableHeaderRoot: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid lightgrey',
    height: '60px',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  tableRoot: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  checkbox: {
    width: '48px',
    padding: '0 0 0 0',
  },
  typographySub: {
    color: 'grey',
  },
  modalPaper: {
    position: 'absolute',
    width: '90vw',
    height: '80vh',
    overflow: 'scroll',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '0.5rem',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
