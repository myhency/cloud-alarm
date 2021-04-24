import React from 'react';
import {
  Button,
} from '@material-ui/core';
import {
  makeStyles,
  withStyles,
} from '@material-ui/core/styles';
import { pink, indigo } from '@material-ui/core/colors';
import NewDocumentToolBar from '../components/NewDocumentToolBar';
import NewDocumentUserInputLayout from '../components/NewDocumentUserInputLayout';

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
    margin: theme.spacing(1),
    minWidth: 170,
  },
}));

const ExitButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[400],
    '&:hover': {
      backgroundColor: pink[900],
    },
  },
}))(Button);

const NextButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[700]),
    backgroundColor: indigo[700],
    '&:hover': {
      backgroundColor: indigo[900],
    },
  },
}))(Button);

export default function NewDocumentContainer() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <NewDocumentToolBar />
      <NewDocumentUserInputLayout />
      {/* <div className={classes.contentRoot}>
        <Box className={classes.stepTitle}>
          <IconButton>
            <DirectionsRunIcon />
          </IconButton>
          <Typography>
            1단계
          </Typography>
          <Typography variant="h6" gutterBottom style={{ marginLeft: '15px' }}>
            서명할 문서를 선택하세요
          </Typography>
        </Box>
        <Box
          display="inline-flex"
          alignItems="center"
          ml="auto"
        >
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">템플릿 양식 선택</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="template"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className={classes.stepContent}>
        <Paper
          variant="outlined"
          style={{
            width: '100%',
          }}
        >
          <Paper
            className={classes.dropZone}
          >
            <Typography align="center">
              Dropzone 위치
            </Typography>
          </Paper>
        </Paper>
      </div>
      <Box className={classes.stepTitle}>
        <IconButton>
          <DirectionsRunIcon />
        </IconButton>
        <Typography>
          2단계
        </Typography>
        <Typography variant="h6" gutterBottom style={{ marginLeft: '15px' }}>
          서명할 대상을 입력하세요
        </Typography>
      </Box>
      <div className={classes.stepContent}>
        <Grid container style={{ flexGrow: 1 }} spacing={2}>
          <Grid item xs={12}>
            <Grid item>
              <Paper
                variant="outlined"
                style={{
                  width: '100%',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div> */}
    </main>
  );
}
