import React from 'react';
import {
  makeStyles,
  withStyles,
} from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@material-ui/core';
import StepTitle from '../../common/components/StepTitle';
import NewDocumentToolBar from '../components/NewDocumentToolBar';
import DropZone from '../components/DropZone';

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

export default function NewDocumentUserInputLayout() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <NewDocumentToolBar />
      <Grid container spacing={0}>
        <Grid item xs={10}>
          <Box
            display="flex"
            alignItems="center"
            p={1}
            m={1}
          >
            <StepTitle
              step="1단계"
              title="서명할 문서를 선택하세요"
            />
          </Box>
        </Grid>
        <Grid item xs={2}>
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
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.baseBox}>
            <DropZone />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            display="flex"
            alignItems="center"
            p={1}
            m={1}
          >
            <StepTitle
              step="2단계"
              title="서명할 대상을 입력하세요"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.baseBox}>
            서명인 입력란
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}
