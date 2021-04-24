import React from 'react';

import {
  makeStyles,
  withStyles,
} from '@material-ui/core/styles';

import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

export default function ButtonSampleContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>버튼의 종류</h2>
      <h3>속이 찬 버튼</h3>
      <Button variant="contained" color="primary">Primary</Button>
      <h3>윤곽선만 있는 버튼</h3>
      <Button variant="outlined" color="primary">Primary</Button>
      <h3>텍스트 버튼</h3>
      <Button variant="contained" color="primary">Primary</Button>
      <Divider />

      <h2>색상 조정</h2>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Divider />

      <h2>비활성화 버튼</h2>
      <Button variant="contained" disabled>Disabled</Button>
      <Divider />

      <h2>링크가 걸린 버튼</h2>
      <Button variant="contained" href="https://www.google.com">
        Link
      </Button>
      <Divider />

      <h2>업로드 버튼</h2>
      <p>- 버튼 태그가 아니라 input, label 태그 조합으로 이루어짐</p>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <Divider />

      <h2>크기 조절</h2>
      <Button size="small" variant="outlined">small</Button>
      <Button size="medium" variant="outlined">medium(default)</Button>
      <Button size="large" variant="outlined">large</Button>
      <Divider />

      <h2>라벨 달린 아이콘 버튼</h2>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        시작부분에 아이콘
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        endIcon={<DeleteIcon />}
      >
        끝부분에 아이콘
      </Button>
      <Divider />

      <h2>아이콘만 있는 버튼</h2>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <DeleteIcon />
      </IconButton>
      <Divider />

      <h2>Custom CSS</h2>
      <h3>withStyles 이용</h3>
      <ColorButton variant="contained" color="primary" className={classes.margin}>
        Custom CSS
      </ColorButton>

      <h3>themeProvider 이용</h3>
      <p>- 이걸 사용할 경우 현재 페이지의 모든 theme이 덮어써짐</p>
      <p>- CSS 오버라이드 방법을 확실히 익히고 사용할 것</p>
      <Button variant="contained" href="https://material-ui.com/customization/components/">
        관련문서로 이동
      </Button>

      <h3>bootstrap 이용</h3>
      <BootstrapButton variant="contained" color="primary" className={classes.margin}>
        Bootstrap
      </BootstrapButton>
      <Divider />
    </div>
  );
}
