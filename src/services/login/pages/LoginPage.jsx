import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { Mobile, Desktop } from "../../../utils/screenSelector";

import {
  LoginBaseBox,
  LoginContentsBox,
  LoginContentsSmallBox,
  LogoImageBox,
} from "../../../common/components/Boxes";
import { LoginButton } from "../../../common/components/Buttons";
import { LoginInput } from "../../../common/components/Inputs";

import BreadStockLogoImage from "../../../assets/images/bread-stock-logo.png";

import { getLoginToken, clearAccessToken } from "../../../state/authSlice";

const useStyles = makeStyles(() => ({
  logo: {
    height: "30px",
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => ({
    accessToken: state.auth.accessToken,
  }));

  const [password, setPassword] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [alertOpen, setAlertOpen] = React.useState(false);

  function handleOnChangePassword(e) {
    const { value } = e.target;

    setPassword(value);
  }

  function handleOnChangeUserName(e) {
    const { value } = e.target;

    setUserName(value);
  }

  function handleLoginButtonOnClick() {
    dispatch(
      getLoginToken({
        userName,
        password,
      })
    );
  }

  function handleGoStatisticsButtonOnClick() {
    history.push("/service/seven-bread/statistics");
  }

  function handleOnKeyDown(e) {
    if (e.keyCode === 13) {
      handleLoginButtonOnClick();
    }
  }

  function handleAlertClose() {
    setPassword("");
    setAlertOpen(false);
  }

  useEffect(() => {
    if (accessToken === "FAIL") {
      setAlertOpen(true);
      return;
    }
    if (accessToken !== null) {
      history.push("/");
      dispatch(clearAccessToken());
    }
  }, [accessToken]);

  return (
    <>
      <Desktop>
        <LoginBaseBox>
          <LoginContentsBox>
            <LogoImageBox>
              <img
                className={classes.logo}
                src={BreadStockLogoImage}
                alt="logo"
                style={{ width: "25vw", height: "auto" }}
              />
            </LogoImageBox>
            <Typography
              variant="h4"
              align="center"
              style={{
                margin: "40px 0 0 0",
                color: "#e3e2df",
              }}
            >
              {/* ????????? ????????? */}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{
                marginBottom: "60px",
                color: "#e3e2df",
              }}
            >
              {/* ????????? ???????????? ?????? */}
            </Typography>
            <LoginInput
              placeholder="??????????????? ???????????????"
              type="text"
              style={{ margin: "0 20px 10px 20px" }}
              onChange={handleOnChangeUserName}
              value={userName}
            />
            <LoginInput
              placeholder="??????????????? ???????????????"
              type="password"
              style={{ margin: "0 20px 10px 20px" }}
              onChange={handleOnChangePassword}
              value={password}
              onKeyDown={handleOnKeyDown}
            />
            <Box style={{ margin: "0 20px 40px 20px" }}>
              <LoginButton onClick={handleLoginButtonOnClick}>
                <Typography variant="h6">?????????</Typography>
              </LoginButton>
            </Box>
            <Box style={{ margin: "0 20px 40px 20px" }}>
              <LoginButton
                onClick={handleGoStatisticsButtonOnClick}
                style={{ backgroundColor: "orange" }}
              >
                <Typography variant="h6">????????? ????????????</Typography>
              </LoginButton>
            </Box>
          </LoginContentsBox>
          <Dialog
            open={alertOpen}
            onClose={handleAlertClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              ???????????? ?????????????????????.
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                ??????????????? ???????????? ?????????????????? ????????? ?????????.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleAlertClose} color="secondary" autoFocus>
                ??????
              </Button>
            </DialogActions>
          </Dialog>
        </LoginBaseBox>
      </Desktop>
      <Mobile>
        <LoginBaseBox>
          <LoginContentsSmallBox>
            <LogoImageBox>
              <img
                className={classes.logo}
                src={BreadStockLogoImage}
                alt="logo"
                style={{ width: "60vw", height: "auto" }}
              />
            </LogoImageBox>
            <Typography
              variant="h4"
              align="center"
              style={{
                margin: "40px 0 0 0",
                color: "#e3e2df",
              }}
            >
              {/* ????????? ????????? */}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{
                marginBottom: "60px",
                color: "#e3e2df",
              }}
            >
              {/* ????????? ???????????? ?????? */}
            </Typography>
            <LoginInput
              placeholder="??????????????? ???????????????"
              type="text"
              style={{ margin: "0 20px 10px 20px" }}
              onChange={handleOnChangeUserName}
              value={userName}
            />
            <LoginInput
              placeholder="??????????????? ???????????????"
              type="password"
              style={{ margin: "0 20px 10px 20px" }}
              onChange={handleOnChangePassword}
              value={password}
            />
            <Box style={{ margin: "0 20px 40px 20px" }}>
              <LoginButton onClick={handleLoginButtonOnClick}>
                <Typography variant="h6">?????????</Typography>
              </LoginButton>
            </Box>
          </LoginContentsSmallBox>
          <Dialog
            open={alertOpen}
            onClose={handleAlertClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              ???????????? ?????????????????????.
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                ??????????????? ???????????? ?????????????????? ????????? ?????????.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleAlertClose} color="secondary" autoFocus>
                ??????
              </Button>
            </DialogActions>
          </Dialog>
        </LoginBaseBox>
      </Mobile>
    </>
  );
}
