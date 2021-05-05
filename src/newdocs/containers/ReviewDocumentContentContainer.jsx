import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
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
} from "@material-ui/core";
import { pink, indigo } from "@material-ui/core/colors";
import ProgressToolBar from "../components/ProgressToolBar";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    backgroundColor: "#FFFFFF",
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  contentRight: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    borderLeft: "1px solid lightgrey",
    height: "89vh",
  },
}));

const NextButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[700]),
    backgroundColor: indigo[700],
    "&:hover": {
      backgroundColor: indigo[900],
    },
  },
}))(Button);

const BackButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[700]),
    backgroundColor: pink[700],
    "&:hover": {
      backgroundColor: pink[900],
    },
  },
}))(Button);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: indigo[700],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: indigo[700],
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: indigo[700],
      },
      "&:hover fieldset": {
        borderColor: indigo[700],
      },
      "&.Mui-focused fieldset": {
        borderColor: indigo[700],
      },
    },
  },
})(TextField);

export default function ReviewDocumentContentContainer({ contentsLink }) {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();
  const { alarmDocument } = useSelector((state) => ({
    alarmDocument: state.alarmDocument,
  }));

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ProgressToolBar />
      <Grid lg={12} xs={12} item={true}>
        <Grid container justify="center">
          <Grid lg={8} xs={8} item={true}>
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h4"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  검토 및 저장
                </Typography>
                <Typography
                  variant="h5"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  {alarmDocument.itemName}({alarmDocument.itemCode})에 대한 요약
                </Typography>
                <Box style={{ margin: "10px 0 0 0" }}>
                  <CssTextField
                    name="recommendPrice"
                    label="돌파가격"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    value={alarmDocument.recommendPrice}
                  />
                </Box>
                <Box style={{ margin: "10px 0 0px 0" }}>
                  <CssTextField
                    name="losscutPrice"
                    label="손절가격"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    value={alarmDocument.losscutPrice}
                  />
                </Box>
                <Box style={{ margin: "10px 0 0px 0" }}>
                  <CssTextField
                    name="comment"
                    label="코멘트"
                    multiline={true}
                    rows={5}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    value={alarmDocument.comment}
                  />
                </Box>
                <Box style={{ margin: "10px 0 30px 0" }}>
                  <CssTextField
                    name="theme"
                    label="테마"
                    multiline={true}
                    rows={5}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    value={alarmDocument.theme}
                  />
                </Box>
                <Box display="flex">
                  <Box display="flex" flexDirection="row">
                    <NextButton
                      style={{
                        backgroundColor: "hotpink",
                        margin: "0 5px 0 0",
                      }}
                    >
                      뒤로
                    </NextButton>
                    <Link
                      color="inherit"
                      to={contentsLink.link}
                      onClick={(e) => handleOnClick(e, contentsLink.link)}
                    >
                      <NextButton>저장</NextButton>
                    </Link>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row-reverse"
                    flexGrow="1"
                  ></Box>
                </Box>
              </div>
            </div>
          </Grid>
          {/* <Grid lg={4} xs={4}>
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
          </Grid> */}
        </Grid>
      </Grid>
    </main>
  );
}
