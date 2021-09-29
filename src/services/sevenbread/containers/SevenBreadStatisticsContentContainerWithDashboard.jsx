import React, { useEffect } from "react";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import columns from "../components/Columns";
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
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";

import { useStyles } from "../../../common/components/Styles";
import { StyledTooltip } from "../../../common/components/Tooltips";
import { CssTextField } from "../../../common/components/TextFields";
import { NextButton, BackButton } from "../../../common/components/Buttons";
import HorizontalBarChart from "../components/HorizontalBarChart";
import DoughnutChart from "../components/DoughnutChart";
import VerticalBarChart from "../components/VerticalBarChart";

import {
  loadSevenBreadList,
  loadSevenBreadStatisticsData,
  removeSevenBreadItemDocument,
  clearDeletedSevenBreadItem,
} from "../../../state/sevenBreadSlice";

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: "#f8f9ff",
  },
}))(TableCell);

const StyledPaper = withStyles(() => ({
  root: {
    // minWidth: "22rem",
    display: "flex",
    minHeight: "9rem",
    backgroundColor: "#f8f9ff",
    color: "#1c1e91",
    fontSize: "1.5rem",
    textAlign: "center",
    flexGrow: 1,
    flexDirection: "row",
    margin: "0 10px 0 10px",
    borderRadius: "10px",
  },
}))(Paper);

const TopCard = (props) => {
  const { title, icon, content } = props;

  return (
    <StyledPaper>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          flexGrow: 1,
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          {icon}
          <Typography variant="body1" style={{ marginLeft: "5px" }}>
            {title}
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            minHeight: "5rem",
          }}
        >
          <Typography variant="h3">{content}</Typography>
        </Box>
      </Box>
    </StyledPaper>
  );
};

export default function SevenBreadStatisticsContentContainerWithDashboard() {
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
    let arr = sevenBreads
      .map((item) => {
        return item.capturedDate;
      })
      .sort((a, b) => {
        return a - b;
      });
    console.log(arr[0]);
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

  const periodArr = sevenBreads
    .map((item) => {
      return item.capturedDate;
    })
    .sort((a, b) => {
      return a - b;
    });

  let period = Math.abs(new Date() - new Date(periodArr[0]));
  period = Math.ceil(period / (1000 * 3600 * 24));

  const maxBenefitArr = sevenBreads
    .map((item) => {
      return (100 - (item.capturedPrice / item.highestPrice) * 100).toFixed(2);
    })
    .sort((a, b) => {
      return b - a;
    });

  const benefitItems = sevenBreads.map((item) => {
    if ((100 - (item.capturedPrice / item.highestPrice) * 100).toFixed(2) > 0) {
      return 1;
    }
    return 0;
  });

  let benefitItemCount = benefitItems.reduce(
    (cnt, element) => cnt + (1 === element),
    0
  );

  const sevenBreadItemsSortedByBenefitArr = sevenBreads
    .map((item) => {
      return {
        benefit: (100 - (item.capturedPrice / item.highestPrice) * 100).toFixed(
          2
        ),
        itemName: item.itemName,
      };
    })
    .sort((a, b) => {
      return b.benefit - a.benefit;
    });

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.root}>
        <Box style={{ flexGrow: 1 }}>
          <Grid
            container
            // rowSpacing={1}
            // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ padding: "1rem 0 0 0" }}
          >
            <Grid item xs={3}>
              <TopCard
                title="통계기간"
                content={period + "일전 부터"}
                icon={<CalendarTodayIcon style={{ fontSize: 14 }} />}
              />
            </Grid>
            <Grid item xs={3}>
              <TopCard
                title="전체종목수"
                content={sevenBreads.length + "개"}
                icon={<ListAltIcon style={{ fontSize: 14 }} />}
              />
            </Grid>
            <Grid item xs={3}>
              <TopCard
                title="최고수익률"
                content={maxBenefitArr[0] + "%"}
                icon={<ThumbUpIcon style={{ fontSize: 14 }} />}
              />
            </Grid>
            <Grid item xs={3}>
              <TopCard
                title="수익종목 비율"
                content={
                  ((benefitItemCount / sevenBreads.length) * 100).toFixed(2) +
                  "%"
                }
                icon={<DonutLargeIcon style={{ fontSize: 14 }} />}
              />
            </Grid>
          </Grid>
          <Grid
            container
            // rowSpacing={1}
            // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ padding: "1rem 0 0 0" }}
          >
            <Grid item xs={4}>
              <StyledPaper
                style={{
                  height: "100%",
                  padding: "1rem",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    alignItems: "stretch",
                  }}
                >
                  <HorizontalBarChart
                    items={sevenBreadItemsSortedByBenefitArr}
                  />
                </Box>
              </StyledPaper>
            </Grid>
            <Grid item xs={5}>
              <StyledPaper
                style={{
                  display: "flex",
                  height: "100%",
                  padding: "1rem",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <VerticalBarChart items={sevenBreadItemsSortedByBenefitArr} />
                </Box>
              </StyledPaper>
            </Grid>
            <Grid item xs={3}>
              <StyledPaper
                style={{
                  display: "flex",
                  height: "100%",
                  padding: "1rem",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <DoughnutChart items={sevenBreads} />
                </Box>
              </StyledPaper>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={12} sm={12} xs={12}>
              <Box style={{ padding: "10px" }}>
                <Box style={{ border: "1px solid lightgrey", padding: "10px" }}>
                  <div className={classes.root}>
                    <TableContainer>
                      <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size="small"
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
