import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  Input,
  InputLabel,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { indigo } from "@material-ui/core/colors";
import DropZone from "../components/DropZone";
import ProgressToolBar from "../components/ProgressToolBar";

import { loadAlarmDocument, setAlarmDocument } from "../../state/slice";

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
  root: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid lightgrey",
    height: "60px",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  contentRoot: {
    display: "flex",
    alignItems: "center",
    paddingTop: "5px",
  },
  exitButton: {
    marginLeft: "10px",
  },
  nextButton: {
    marginRight: "10px",
  },
  stepTitle: {
    "& > *": {
      margin: theme.spacing(0),
    },
    color: theme.palette.text.secondary,
    display: "flex",
    alignContent: "space-between",
    alignItems: "center",
  },
  stepContent: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  dropZone: {
    backgroundColor: "pink",
    marginTop: theme.spacing(4),
    width: "30%",
    height: "50px",
    overflowX: "auto",
    // marginBottom: theme.spacing(2),
    margin: "auto",
  },
  formControl: {
    margin: theme.spacing(1, 2),
    minWidth: 170,
    display: "flex",
    justifyContent: "space-between",
    height: "5px",
  },
  baseBox: {
    display: "flex",
    border: "1px solid",
    borderColor: "#D3D3D3",
    borderRadius: "5px 5px 5px 5px",
    margin: "0 15px 0 15px",
    padding: "10px",
    justifyContent: "center",
  },
}));

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

const NextButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[700]),
    backgroundColor: indigo[700],
    "&:hover": {
      backgroundColor: indigo[900],
    },
  },
}))(Button);

const AddTemplateLink = withStyles(() => ({
  root: {
    color: "mediumblue",
    "&:hover": {
      color: "dodgerblue",
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}))(Typography);

export default function ReadyDocumentContentContainer({ contentsLink }) {
  const history = useHistory();
  const classes = useStyles();

  const [itemInfo, setItemInfo] = React.useState({
    recommendPrice: "",
    losscutPrice: "",
    comment: "",
    theme: "",
  });

  const { recommendPrice, losscutPrice, comment, theme } = itemInfo;

  const dispatch = useDispatch();
  const { alarmDocument } = useSelector((state) => ({
    alarmDocument: state.alarmDocument,
  }));

  useEffect(() => {
    dispatch(loadAlarmDocument());
  }, []);

  function handleOnChange(event) {
    const { name, value } = event.target;

    setItemInfo({
      ...itemInfo,
      [name]: value,
    });
  }

  function handleOnClick(event, link) {
    event.preventDefault();
    dispatch(
      setAlarmDocument({
        itemName: alarmDocument.itemName,
        itemCode: alarmDocument.itemCode,
        recommendPrice: itemInfo.recommendPrice || alarmDocument.recommendPrice,
        losscutPrice: itemInfo.losscutPrice || alarmDocument.losscutPrice,
        comment: itemInfo.comment || alarmDocument.comment,
        theme: itemInfo.theme || alarmDocument.theme,
      })
    );
    history.push(link);
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ProgressToolBar />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
          <Typography
            variant="h4"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            정보입력
          </Typography>
          <Box style={{ margin: "30px 0 0 0" }}>
            <CssTextField
              label="종목명"
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={alarmDocument.itemName}
            />
          </Box>
          <Box style={{ margin: "10px 0 0 0" }}>
            <CssTextField
              label="종목코드"
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={alarmDocument.itemCode}
            />
          </Box>
          <Box style={{ margin: "10px 0 0 0" }}>
            <CssTextField
              name="recommendPrice"
              label="돌파가격"
              variant="outlined"
              fullWidth
              onChange={handleOnChange}
              value={
                (itemInfo.recommendPrice
                  ? itemInfo.recommendPrice
                  : alarmDocument.recommendPrice) || ""
              }
            />
          </Box>
          <Box style={{ margin: "10px 0 0px 0" }}>
            <CssTextField
              name="losscutPrice"
              label="손절가격"
              variant="outlined"
              fullWidth
              onChange={handleOnChange}
              value={
                (itemInfo.losscutPrice
                  ? itemInfo.losscutPrice
                  : alarmDocument.losscutPrice) || ""
              }
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
              onChange={handleOnChange}
              value={
                (itemInfo.comment ? itemInfo.comment : alarmDocument.comment) ||
                ""
              }
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
              onChange={handleOnChange}
              value={
                (itemInfo.theme ? itemInfo.theme : alarmDocument.theme) || ""
              }
            />
          </Box>
          <Box display="flex">
            <Box display="flex" flexDirection="row">
              <NextButton
                style={{ backgroundColor: "hotpink", margin: "0 5px 0 0" }}
              >
                뒤로
              </NextButton>
              <Link
                color="inherit"
                to={contentsLink.link}
                onClick={(e) => handleOnClick(e, contentsLink.link)}
              >
                <NextButton>다음</NextButton>
              </Link>
            </Box>
            <Box display="flex" flexDirection="row-reverse" flexGrow="1"></Box>
          </Box>
        </div>
      </div>
    </main>
  );
}
