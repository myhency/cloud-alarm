import React from 'react';
import {
  makeStyles,
  withStyles,
  useTheme,
} from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  Box,
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';
import { pink, indigo } from '@material-ui/core/colors';
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
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  contentRight: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    borderLeft: '1px solid lightgrey',
    height: '89vh',
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

const BackButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[700]),
    backgroundColor: pink[700],
    '&:hover': {
      backgroundColor: pink[900],
    },
  },
}))(Button);

function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function ReviewDocumentContentContainer() {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ProgressToolBar />
      <Grid lg={12} xs={12}>
        <Grid container justify="center">
          <Grid lg={8} xs={8}>
            <div style={{
              width: '100%',
              justifyContent: 'center',
              padding: '20px',
            }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
                <Typography variant="h4" style={{ marginTop: '10px', marginBottom: '10px' }}>검토 및 보내기</Typography>
                <Typography variant="h5" style={{ marginTop: '10px', marginBottom: '10px' }}>수신인에게 보내는 메세지</Typography>
                <form className={classes.form} noValidate autoComplete="off">
                  <TextField required id="standard-required" label="이메일 제목" color="secondary" />
                  <TextareaAutosize aria-label="minimum height" rowsMin={10} placeholder="이메일 메세지" />
                </form>
                <Box display="flex" flexDirection="row-reverse">
                  <NextButton style={{ marginLeft: '10px' }}>다음</NextButton>
                  <BackButton>뒤로</BackButton>
                </Box>
              </div>
            </div>
          </Grid>
          <Grid lg={4} xs={4}>
            <div className={classes.contentRight}>
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="secondary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="요약" {...a11yProps(0)} />
                  <Tab label="옵션" {...a11yProps(1)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0} dir={theme.direction}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
              </TabPanel>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}
