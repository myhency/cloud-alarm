import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const BaseBox = withStyles(() => ({
  root: {
    // display: 'flex',
    backgroundColor: '#FBE8A6',
    height: '100vh',
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

// export const LogoImageBox = withStyles(() => ({
//   root: {
//     display: 'flex',
//     flex: 2,
//     justifyContent: 'center',
//     // borderRadius: '8px 8px 0 0',
//     // padding: '50px 20px 10px 20px',
//     // backgroundColor: '#FFFFFF',
//   },
// }))(Box);

export const LoginBaseBox = withStyles(() => ({
  root: {
    height: '100vh',
    backgroundColor: '#FBE8A6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))(Box);

export const LoginContentsBox = withStyles(() => ({
  root: {
    width: '35vw',
    borderRadius: '10px',
    backgroundColor: '#303C6C',
    // padding: '50px 20px 50px 20px',
    display: 'flex',
    flexDirection: 'column',
  },
}))(Box);

export const LoginContentsSmallBox = withStyles(() => ({
  root: {
    width: '70vw',
    // height: '70vh',
    borderRadius: '10px',
    backgroundColor: '#303C6C',
    // padding: '50px 20px 50px 20px',
    display: 'flex',
    flexDirection: 'column',
  },
}))(Box);

export const LogoImageBox = withStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '8px 8px 0 0',
    padding: '50px 20px 10px 20px',
    backgroundColor: '#FFFFFF',
  },
}))(Box);
