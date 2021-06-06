import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Box,
  Button,
  TextField,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { indigo } from '@material-ui/core/colors';
import ProgressToolBar from '../components/ProgressToolBar';

import {
  setAlarmDocument,
  loadLosscutAlarmDetail,
} from '../../state/slice';

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

const CssTextField = withStyles({
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

const NextButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[700]),
    backgroundColor: indigo[700],
    '&:hover': {
      backgroundColor: indigo[900],
    },
  },
}))(Button);

export default function ReaddReadyDocumentContentContainer({ contentsLink, id }) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { alarmDetail } = useSelector((state) => ({
    alarmDetail: state.alarmDetail,
  }));

  useEffect(() => {
    dispatch(loadLosscutAlarmDetail(id));
  }, []);

  const [open, setOpen] = React.useState(false);

  const [itemInfo, setItemInfo] = React.useState({
    // TODO. Review에서 뒤로 버튼으로 넘어왔을 때 alarmDocument 내용으로 보여줘야 함
    itemName: alarmDetail.itemName,
    itemCode: alarmDetail.itemCode,
    recommendPrice: alarmDetail.recommendPrice,
    losscutPrice: alarmDetail.losscutPrice,
    comment: alarmDetail.comment,
    theme: alarmDetail.theme,
  });

  function handleOnChange(event) {
    const { name, value } = event.target;

    setItemInfo({
      ...itemInfo,
      [name]: value,
    });
  }

  function handleOnClick(event, link) {
    if (alarmDetail.itemName === '' || alarmDetail.itemCode === ''
    || (itemInfo.recommendPrice === '' && alarmDetail.recommendPrice === '') || (itemInfo.losscutPrice === '' && alarmDetail.losscutPrice === '')) {
      setOpen(true);
    } else {
      event.preventDefault();
      dispatch(
        setAlarmDocument({
          itemName: alarmDetail.itemName,
          itemCode: alarmDetail.itemCode,
          recommendPrice: itemInfo.recommendPrice || alarmDetail.recommendPrice,
          losscutPrice: itemInfo.losscutPrice || alarmDetail.losscutPrice,
          comment: itemInfo.comment || alarmDetail.comment,
          theme: itemInfo.theme || alarmDetail.theme,
        }),
      );
      history.push(`${link}/${id}`);
    }
  }

  function handleOnBackClick() {
    history.goBack();
  }

  function handleClose() {
    setOpen(false);
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
            손절알림 재등록
          </Typography>
          <Box style={{ margin: '30px 0 0 0' }}>
            <CssTextField
              required
              label="종목명"
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={alarmDetail.itemName}
            />
          </Box>
          <Box style={{ margin: '10px 0 0 0' }}>
            <CssTextField
              required
              label="종목코드"
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={alarmDetail.itemCode}
            />
          </Box>
          <Box style={{ margin: '10px 0 0 0' }}>
            <CssTextField
              required
              name="recommendPrice"
              label="돌파가격"
              variant="outlined"
              fullWidth
              onChange={handleOnChange}
              value={itemInfo.recommendPrice ? itemInfo.recommendPrice : alarmDetail.recommendPrice}
            />
          </Box>
          <Box style={{ margin: '10px 0 0px 0' }}>
            <CssTextField
              required
              name="losscutPrice"
              label="손절가격"
              variant="outlined"
              fullWidth
              onChange={handleOnChange}
              value={itemInfo.losscutPrice ? itemInfo.losscutPrice : alarmDetail.losscutPrice}
            />
          </Box>
          <Box style={{ margin: '10px 0 0px 0' }}>
            <CssTextField
              name="comment"
              label="코멘트"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
              onChange={handleOnChange}
              value={itemInfo.comment ? itemInfo.comment : alarmDetail.comment}
            />
          </Box>
          <Box style={{ margin: '10px 0 30px 0' }}>
            <CssTextField
              name="theme"
              label="테마"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
              onChange={handleOnChange}
              value={itemInfo.theme ? itemInfo.theme : alarmDetail.theme}
            />
          </Box>
          <Box display="flex">
            <Box display="flex" flexDirection="row">
              <NextButton
                style={{ backgroundColor: 'hotpink', margin: '0 5px 0 0' }}
                onClick={(e) => handleOnBackClick(e)}
              >
                뒤로
              </NextButton>
              <NextButton onClick={(e) => handleOnClick(e, contentsLink.link)}>
                다음
              </NextButton>
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
              필수항목을 입력하지 않으셨나요?
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                필수항목 필드를 작성하지 않으셨다면 다음단계로 진행할 수
                없습니다.
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
