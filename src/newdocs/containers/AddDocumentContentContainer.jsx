import React from 'react';
import {
  makeStyles,
  withStyles,
} from '@material-ui/core/styles';
import {
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import DropZone from '../components/DropZone';
import ProgressToolBar from '../components/ProgressToolBar';

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

const NextButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[700]),
    backgroundColor: indigo[700],
    '&:hover': {
      backgroundColor: indigo[900],
    },
  },
}))(Button);

const AddTemplateLink = withStyles(() => ({
  root: {
    color: 'mediumblue',
    '&:hover': {
      color: 'dodgerblue',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
}))(Typography);

export default function AddDocumentContentContainer() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [files, setFiles] = React.useState([]);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function handleOnLoadEnd(value) {
    console.log(value);
    const newFiles = [...files, ...value];
    setFiles(newFiles);
  }

  function handleOnDeleteFile(value) {
    setFiles(files.filter((file) => file !== value));
  }

  function handleOnClick(event) {
    // console.log(event);
    event.preventDefault();
  }

  function handleOnClickAddTemplate(event) {
    console.log(event);
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ProgressToolBar />
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
          <Typography variant="h4" style={{ marginTop: '10px', marginBottom: '10px' }}>문서추가</Typography>
          {files.map((file, index) => (
            <Typography
              key={index}
              onClick={handleOnDeleteFile}
            >
              {file.path}
            </Typography>
          ))}
          <Box style={{ margin: '30px 0 30px 0' }}>
            <DropZone
              onLoadEnd={handleOnLoadEnd}
              onClick={handleOnClick}
            />
          </Box>
          <Box display="flex">
            <Box display="flex" flexDirection="row">
              <AddTemplateLink onClick={handleOnClickAddTemplate}>템플릿 추가</AddTemplateLink>
            </Box>
            <Box display="flex" flexDirection="row-reverse" flexGrow="1">
              <NextButton>다음</NextButton>
              <FormControlLabel
                control={<Checkbox checked={false} onChange={handleChange} name="checkedA" />}
                label="나는 유일한 서명자"
              />
            </Box>
          </Box>
        </div>
      </div>
      {/* <Grid container spacing={0}>
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
      </Grid> */}
    </main>
  );
}
