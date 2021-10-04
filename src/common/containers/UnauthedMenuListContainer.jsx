/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import {
  List,
  ListItemSecondaryAction,
  Typography,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";

// Icons
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import TimelineIcon from "@material-ui/icons/Timeline";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { BaseBox, NewDocumentBox } from "../components/Boxes";
import MenuListItem from "../components/ListItems";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function UnauthedMenuListContainer({
  totalCount = "",
  state2Count = "",
  state3Count = "",
}) {
  const history = useHistory();
  const classes = useStyles();

  const { search } = history.location;

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [expandAlarm, setExpandAlarm] = React.useState(
    history.location.pathname.includes("/service/alarm")
  );
  const [expandSevenBread, setExpandSevenBread] = React.useState(
    history.location.pathname.includes("/service/seven-bread")
  );
  const [expandBookmark, setExpandBookmark] = React.useState(true);

  function handleClick(event, link, index) {
    event.preventDefault();
    setSelectedIndex(index);
    history.push(link);
  }

  function handleOnExpandAlarm() {
    setExpandAlarm(!expandAlarm);
  }

  function handleOnExpandSevenBread() {
    setExpandSevenBread(!expandSevenBread);
  }

  function handleOnExpandBookmark() {
    setExpandBookmark(!expandBookmark);
  }

  useEffect(() => {
    // eslint-disable-next-line no-nested-ternary
    const initIndex =
      history.location.pathname === "/service/seven-bread/statistics" ? 10 : 0;
    setSelectedIndex(initIndex);
  }, []);

  return (
    <BaseBox>
      <List>
        <MenuListItem
          className={classes.nested}
          button
          selected={selectedIndex === 10}
          key={10}
          onClick={(e) => handleClick(e, "/service/seven-bread/statistics", 10)}
        >
          <ListItemIcon>
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary="007빵 통계" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{totalCount}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem>
        <a
          target="_blank"
          href="https://www.youtube.com/c/Cloud%EC%9D%98%EC%A3%BC%EC%8B%9D%EC%9D%B4%EC%95%BC%EA%B8%B0"
          rel="noreferrer"
        >
          <MenuListItem
            className={classes.nested}
            button
            key={12}
            // onClick={(e) => handleClick(e, '/service/seven-bread/realtime', 9)}
          >
            <ListItemIcon>
              <YouTubeIcon />
            </ListItemIcon>
            {/* 알림완료 */}
            <ListItemText primary="Youtube 채널 바로가기" />
            <ListItemSecondaryAction>
              <Typography variant="subtitle1">{state2Count}</Typography>
            </ListItemSecondaryAction>
          </MenuListItem>
        </a>
        <a
          target="_blank"
          href="https://instagram.com/cloudstocktv?utm_medium=copy_link"
          rel="noreferrer"
        >
          <MenuListItem
            className={classes.nested}
            button
            key={12}
            // onClick={(e) => handleClick(e, '/service/seven-bread/realtime', 9)}
          >
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
            {/* 알림완료 */}
            <ListItemText primary="Instagram 바로가기" />
            <ListItemSecondaryAction>
              <Typography variant="subtitle1">{state2Count}</Typography>
            </ListItemSecondaryAction>
          </MenuListItem>
        </a>
      </List>
    </BaseBox>
  );
}
