import React, { useEffect } from "react";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Button,
  Paper,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// Icons
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import FaceIcon from "@material-ui/icons/Face";
import BusinessIcon from "@material-ui/icons/Business";
import StopIcon from "@material-ui/icons/Stop";
import HelpIcon from "@material-ui/icons/Help";

import { useStyles } from "../../../common/components/Styles";
import { StyledTooltip } from "../../../common/components/Tooltips";
import { CssTextField } from "../../../common/components/TextFields";
import { NextButton, BackButton } from "../../../common/components/Buttons";

import {
  loadSevenBreadList,
  loadSevenBreadStatisticsData,
  removeSevenBreadItemDocument,
  clearDeletedSevenBreadItem,
} from "../../../state/sevenBreadSlice";

const columns = [
  {
    id: "1",
    label: "포착일",
    width: "11%",
  },
  {
    id: "2",
    label: "종목명",
    width: "11%",
  },
  {
    id: "3",
    label: "포착일종가",
    width: "11%",
    align: "right",
  },
  {
    id: "4",
    label: "최고점갱신일 (소요일)",
    width: "15%",
  },
  {
    id: "5",
    label: "최고가",
    width: "11%",
    align: "right",
  },
  {
    id: "6",
    label: "최저점갱신일",
    width: "11%",
  },
  {
    id: "7",
    label: "최저가",
    width: "11%",
    align: "right",
  },
  {
    id: "8",
    label: "포착일종가 대비 최고 수익",
    width: "12%",
    align: "right",
  },
  {
    id: "9",
    label: "포착일종가 대비 최저 수익",
    width: "12%",
    align: "right",
  },
];

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: "#faffff",
  },
}))(TableCell);

export default function SevenBreadStatisticsContentContainer() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { sevenBreads } = useSelector((state) => ({
    sevenBreads: state.sevenBread.sevenBreadStatisticsData,
  }));

  const [sevenBreadItemList, setSevenBreadItemList] = React.useState([]);

  useEffect(() => {
    dispatch(loadSevenBreadStatisticsData());
  }, []);

  useEffect(() => {
    setSevenBreadItemList(sevenBreads);
  }, [sevenBreads]);

  const [hoveredId, setHoveredId] = React.useState(null);
  const [warningOpen, setWarningOpen] = React.useState(false);
  const [toBeDeletedId, setToBeDeletedId] = React.useState(0);
  const [themeSearchKeyword, setThemeSearchKeyword] = React.useState("");

  function handleCancelClose() {
    setWarningOpen(false);
  }

  const handleConfirmClose = (e, action) => {
    const id = toBeDeletedId;
    console.log(action);
    console.log(id);
    dispatch(removeSevenBreadItemDocument(id, action)); //delete api call
    dispatch(clearDeletedSevenBreadItem()); //화면에서 삭제
    setWarningOpen(false);
    dispatch(loadSevenBreadList());
  };

  const handleOnDeleteButton = (e, id) => {
    const accessToken = Cookies.get("accessToken");
    const key = "breadstockcloud";
    const res = jwt.verify(accessToken, key);
    if (res.sub !== "admin") {
      alert("관리자만 접근할 수 있습니다.");
      return;
    }
    setWarningOpen(true);
    setToBeDeletedId(id);
  };

  const handleNewSevenBreadItemOnClick = (e) => {
    e.preventDefault();
    history.push("/service/seven-bread/item/add");
  };

  const handleThemeSearchKeyworkOnChange = React.useCallback(
    (e) => {
      if (!e.target.value) {
        setSevenBreadItemList(sevenBreads);
      }
      setThemeSearchKeyword(e.target.value);
    },
    [themeSearchKeyword]
  );

  const handleThemeSearchButtonOnClick = () => {
    let arr = sevenBreadItemList;
    arr = arr.filter((item) => {
      const theme = item.theme ? item.theme : "";
      return theme.includes(themeSearchKeyword);
    });
    setSevenBreadItemList(arr);
  };

  const handleRefreshListButtonOnClick = () => {
    dispatch(loadSevenBreadList());
  };

  function handleOnKeyDown(e) {
    if (e.keyCode === 13) {
      handleThemeSearchButtonOnClick();
    }
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.root}>
        <Box style={{ flexGrow: 1 }}>
          {/* <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              padding: "10px 10px 0 10px",
            }}
          >
            <CssTextField
              size="small"
              label="테마검색"
              variant="outlined"
              style={{ marginRight: "5px" }}
              value={themeSearchKeyword}
              onChange={handleThemeSearchKeyworkOnChange}
              onKeyDown={handleOnKeyDown}
            />
            <NextButton
              style={{ marginRight: "5px" }}
              onClick={handleThemeSearchButtonOnClick}
            >
              검색
            </NextButton>
            <BackButton onClick={handleRefreshListButtonOnClick}>
              초기화
            </BackButton>
          </Box> */}
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "2rem 1rem 1rem 1rem",
            }}
          >
            <Paper
              style={{
                minWidth: "22rem",
                minHeight: "7rem",
                backgroundColor: "#303C6C",
                color: "white",
                fontSize: "1.5rem",
                textAlign: "center",
                flexGrow: 1,
                margin: "0 10px 0 10px",
              }}
            >
              통계기간
            </Paper>
            <Paper
              style={{
                minWidth: "22rem",
                minHeight: "7rem",
                backgroundColor: "#303C6C",
                color: "white",
                fontSize: "1.5rem",
                textAlign: "center",
                flexGrow: 1,
                margin: "0 10px 0 10px",
              }}
            >
              전체종목수
            </Paper>
            <Paper
              style={{
                minWidth: "22rem",
                minHeight: "7rem",
                backgroundColor: "#303C6C",
                color: "white",
                fontSize: "1.5rem",
                textAlign: "center",
                flexGrow: 1,
                margin: "0 10px 0 10px",
              }}
            >
              15% 이상 수익낼 수 있는 종목 비율
            </Paper>
            <Paper
              style={{
                minWidth: "22rem",
                minHeight: "7rem",
                backgroundColor: "#303C6C",
                color: "white",
                fontSize: "1.5rem",
                textAlign: "center",
                flexGrow: 1,
                margin: "0 10px 0 10px",
              }}
            >
              5%이상 수익낼 수 있는 종목 수
            </Paper>
            <Paper
              style={{
                minWidth: "22rem",
                minHeight: "7rem",
                backgroundColor: "#303C6C",
                color: "white",
                fontSize: "1.5rem",
                textAlign: "center",
                flexGrow: 1,
                margin: "0 10px 0 10px",
              }}
            >
              5%이상 수익낼 수 있는 종목들의 평균 소요일
            </Paper>
          </Box>
          <Grid container>
            <Grid item lg={12} sm={12} xs={12}>
              <Box style={{ padding: "10px" }}>
                <Box style={{ border: "1px solid lightgrey", padding: "10px" }}>
                  {/* <div className={classes.tableHeaderRoot}>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        alignItems: "center",
                        paddingBottom: "10px",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          borderRight: "1px solid lightgrey",
                          paddingRight: "10px",
                        }}
                      >
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <BusinessIcon
                            fontSize="small"
                            style={{ color: "#2e2f35" }}
                          />
                          &nbsp;
                          <Typography variant="caption">기관매수</Typography>
                        </Box>
                        <Box
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          <FaceIcon
                            fontSize="small"
                            style={{ color: "#dda900" }}
                          />
                          &nbsp;
                          <Typography variant="caption">외인매수</Typography>
                        </Box>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          flexGrow: 1,
                          marginLeft: "10px",
                        }}
                      >
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <StopIcon fontSize="small" style={{ color: "red" }} />
                          &nbsp;
                          <Typography variant="caption">
                            현재가가 포착일 종가보다
                          </Typography>
                          &nbsp;
                          <Typography
                            variant="subtitle2"
                            style={{ fontWeight: "bold" }}
                          >
                            높은
                          </Typography>
                          &nbsp;
                          <Typography variant="caption">
                            경우 (포착일 종가를 손절가격으로 설정)
                          </Typography>
                        </Box>
                        <Box
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          <StopIcon
                            fontSize="small"
                            style={{ color: "grey" }}
                          />
                          &nbsp;
                          <Typography variant="caption">
                            현재가가 포착일 종가보다
                          </Typography>
                          &nbsp;
                          <Typography
                            variant="subtitle2"
                            style={{ fontWeight: "bold" }}
                          >
                            낮은
                          </Typography>
                          &nbsp;
                          <Typography variant="caption">
                            경우 (포착일 종가를 매수가격으로 설정)
                          </Typography>
                        </Box>
                      </Box>
                      <StyledTooltip title="종목추가">
                        <IconButton
                          id="alarm-modify-button"
                          className={classes.action}
                          onClick={handleNewSevenBreadItemOnClick}
                        >
                          <AddIcon />
                        </IconButton>
                      </StyledTooltip>
                      <StyledTooltip title="도움말">
                        <IconButton
                          id="alarm-modify-button"
                          className={classes.action}
                        >
                          <HelpIcon />
                        </IconButton>
                      </StyledTooltip>
                    </Box>
                  </div> */}

                  <div className={classes.root}>
                    <TableContainer>
                      <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size="medium"
                        aria-label="sticky table"
                        stickyHeader
                      >
                        <TableHead>
                          <TableRow>
                            {columns.map((column) => (
                              <StyledTableCell
                                key={column.id}
                                align={column.align}
                                width={column.width}
                              >
                                {column.label}
                              </StyledTableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {sevenBreadItemList.map((sevenBread) => {
                            const highestBenefit = (
                              100 -
                              (sevenBread.capturedPrice /
                                sevenBread.highestPrice) *
                                100
                            ).toFixed(2);
                            const lowestBenefit = (
                              100 -
                              (sevenBread.capturedPrice /
                                sevenBread.lowestPrice) *
                                100
                            ).toFixed(2);
                            const chartLink = `https://alphasquare.co.kr/home/stock/stock-summary?code=${sevenBread.itemCode}`;
                            const rowColor =
                              (String(sevenBread.capturedDate)
                                .substr(0, 10)
                                .substr(8, 9) *
                                1) %
                                2 ===
                              0
                                ? "#fafafa"
                                : "#ffffff";
                            const fluctuationByRecommendPrice = (
                              (100 * sevenBread.closingPrice) /
                                sevenBread.capturedPrice -
                              100
                            ).toFixed(2);

                            const capturedDateByStr = new Date(
                              sevenBread.capturedDate
                            );
                            const highestDateByStr = new Date(
                              sevenBread.highestDate
                            );
                            var diff = Math.abs(
                              capturedDateByStr.getTime() -
                                highestDateByStr.getTime()
                            );
                            diff = Math.ceil(diff / (1000 * 3600 * 24));

                            if (
                              sevenBread.capturedDate < "2021-09-06" ||
                              // && highestBenefit < 0
                              highestBenefit < -30
                            ) {
                              return;
                            }

                            return (
                              <TableRow
                                key={sevenBread.itemCode}
                                id={sevenBread.id}
                                style={{
                                  // cursor: 'pointer',
                                  // height: '4vh',
                                  backgroundColor: `${rowColor}`,
                                }}
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                onMouseOver={() => setHoveredId(sevenBread.id)}
                                onMouseLeave={() => setHoveredId(null)}
                              >
                                <TableCell>
                                  <Typography>
                                    {String(sevenBread.capturedDate).substr(
                                      0,
                                      10
                                    )}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  {/* <a
                                    target="_blank"
                                    href={chartLink}
                                    rel="noreferrer"
                                  > */}
                                  <Typography style={{ color: "#0061B0" }}>
                                    {/* {sevenBread.itemName} */}
                                    ******
                                  </Typography>
                                  {/* </a> */}
                                </TableCell>
                                <TableCell
                                  align="right"
                                  style={{
                                    flexDirection: "column",
                                    fontWeight: "bold",
                                  }}
                                >
                                  <Typography>
                                    {new Intl.NumberFormat("ko-KR").format(
                                      sevenBread.capturedPrice
                                    )}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Box
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                  >
                                    <Typography>
                                      {String(sevenBread.highestDate).substr(
                                        0,
                                        10
                                      )}
                                    </Typography>
                                    <Typography
                                      style={{
                                        color:
                                          diff < 14 && highestBenefit > 10
                                            ? "red"
                                            : "",
                                      }}
                                    >
                                      &nbsp;({diff}일)
                                    </Typography>
                                  </Box>
                                </TableCell>
                                <TableCell
                                  align="right"
                                  style={{ flexDirection: "column" }}
                                >
                                  <Typography>
                                    {new Intl.NumberFormat("ko-KR").format(
                                      sevenBread.highestPrice
                                    )}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {String(sevenBread.lowestDate).substr(
                                      0,
                                      10
                                    )}
                                  </Typography>
                                </TableCell>
                                <TableCell
                                  align="right"
                                  style={{ flexDirection: "column" }}
                                >
                                  <Typography>
                                    {new Intl.NumberFormat("ko-KR").format(
                                      sevenBread.lowestPrice
                                    )}
                                  </Typography>
                                </TableCell>
                                <TableCell
                                  align="right"
                                  style={{
                                    flexDirection: "column",
                                    color:
                                      highestBenefit <= 10 ? "grey" : "red",
                                    fontWeight:
                                      highestBenefit <= 10 ? "" : "bold",
                                  }}
                                >
                                  <Typography>{highestBenefit}</Typography>
                                </TableCell>
                                <TableCell
                                  align="right"
                                  style={{
                                    flexDirection: "column",
                                    color: lowestBenefit < 0 ? "grey" : "red",
                                    fontWeight: lowestBenefit < 0 ? "" : "bold",
                                  }}
                                >
                                  <Typography>{lowestBenefit}</Typography>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </main>
  );
}
