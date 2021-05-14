import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  withStyles,
} from '@material-ui/core/styles';
import {
  Typography,
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { indigo } from '@material-ui/core/colors';
import ProgressToolBar from '../components/ProgressToolBar';

import { loadStockItemList, setAlarmDocument } from '../../state/slice';

const useStyles = makeStyles((theme) => ({
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
    backgroundColor: '#FFFFFF',
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid lightgrey',
    height: '60px',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  contentRoot: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '5px',
  },
  exitButton: {
    marginLeft: '10px',
  },
  nextButton: {
    marginRight: '10px',
  },
  stepTitle: {
    '& > *': {
      margin: theme.spacing(0),
    },
    color: theme.palette.text.secondary,
    display: 'flex',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  stepContent: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  dropZone: {
    backgroundColor: 'pink',
    marginTop: theme.spacing(4),
    width: '30%',
    height: '50px',
    overflowX: 'auto',
    // marginBottom: theme.spacing(2),
    margin: 'auto',
  },
  formControl: {
    margin: theme.spacing(1, 2),
    minWidth: 170,
    display: 'flex',
    justifyContent: 'space-between',
    height: '5px',
  },
  baseBox: {
    display: 'flex',
    border: '1px solid',
    borderColor: '#D3D3D3',
    borderRadius: '5px 5px 5px 5px',
    margin: '0 15px 0 15px',
    padding: '10px',
    justifyContent: 'center',
  },
}));

const CssAutocomplete = withStyles({
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
})(Autocomplete);

const NextButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[700]),
    backgroundColor: indigo[700],
    '&:hover': {
      backgroundColor: indigo[900],
    },
  },
}))(Button);

export default function AddDocumentContentContainer({ contentsLink }) {
  const history = useHistory();
  const classes = useStyles();

  const [items, setItems] = React.useState({ itemName: '', itemCode: '' });
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { stockItems } = useSelector((state) => ({
    stockItems: state.stockItems,
  }));

  useEffect(() => {
    dispatch(loadStockItemList());
  }, []);

  function handleOnClick(event, link) {
    if (items.itemName === '') {
      setOpen(true);
    } else {
      event.preventDefault();
      dispatch(
        setAlarmDocument({
          itemName: items.itemName,
          itemCode: items.itemCode,
        }),
      );
      history.push(link);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOnChange(event, value) {
    console.log(value);
    setItems({ itemName: value.itemName, itemCode: value.itemCode });
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ProgressToolBar />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
          <Typography
            variant="h4"
            style={{ marginTop: '10px', marginBottom: '10px' }}
          >
            종목추가
          </Typography>
          <Box style={{ margin: '30px 0 30px 0' }}>
            <CssAutocomplete
              id="combo-box"
              options={stockItems}
              getOptionLabel={(stockItem) => stockItem.itemName}
              renderInput={(params) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <TextField {...params} label="종목명" variant="outlined" />
              )}
              onChange={(event, value) => handleOnChange(event, value)}
            />
          </Box>
          <Box display="flex">
            <Box display="flex" flexDirection="row">
              {/* <Link
                color="inherit"
                // to={contentsLink.link}
              > */}
              <NextButton onClick={(e) => handleOnClick(e, contentsLink.link)}>
                다음
              </NextButton>
              {/* </Link> */}
            </Box>
            <Box display="flex" flexDirection="row-reverse" flexGrow="1" />
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              종목명을 입력하지 않으셨나요?
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                정확한 종목명을 입력하였는지 확인해 주세요.
                종목명을 입력하지 않았거나 정확하지 않은 종목명을 입력하셨다면 다음단계로 진행할 수 없습니다.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary" autoFocus>
                확인
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </main>
  );
}
