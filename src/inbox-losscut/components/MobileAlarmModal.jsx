import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {
  Box,
  Divider,
  Typography,
  Tooltip,
  IconButton,
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import RedoIcon from '@material-ui/icons/Redo';

import InBoxModalContent from './_InBoxModalContent';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: '90vw',
    height: '90vh',
    overflow: 'scroll',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '0.5rem',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    margin: '1rem 0rem',
    fontSize: '2rem',
  },
}));

const StyledTooltip = withStyles({
  tooltip: {
    backgroundColor: 'rgba(0,0,0,0.72)',
    fontSize: 12,
    marginTop: 0,
  },
})(Tooltip);

export default function MobileAlarmModal({
  alarmId,
  itemName,
  itemCode,
  recommendPrice,
  losscutPrice,
  comment,
  theme,
  createdAt,
  lastUpdatedAt,
  alarmStatus,
  alarmedAt,
  losscutAt,
  openState,
  onClose,
}) {
  const classes = useStyles();
  const history = useHistory();

  const handleOnModifyButton = (e, id) => {
    history.push(`/ready-docs/${id}`);
  };

  function makeModalBody() {
    return (
      <div className={classes.paper}>
        <Box display="flex" flexDirection="row" alignItems="flex-end">
          <Typography variant="h4">{itemName}</Typography>
          <Typography variant="h6">
&nbsp;(
            {itemCode}
            )
          </Typography>
        </Box>
        <Divider />
        <div className="modal-description">
          <Divider />
          <InBoxModalContent
            recommendPrice={recommendPrice}
            losscutPrice={losscutPrice}
            comment={comment}
            theme={theme}
            createdAt={createdAt}
            lastUpdatedAt={lastUpdatedAt}
            alarmStatus={alarmStatus}
            alarmedAt={alarmedAt}
            losscutAt={losscutAt}
          />
        </div>
        <Box display="flex" flexDirection="row">
          <StyledTooltip title="수정">
            <IconButton
              id="alarm-delete-button"
              className={classes.action}
              onClick={(e) => handleOnModifyButton(e, alarmId)}
            >
              <RedoIcon />
            </IconButton>
          </StyledTooltip>
          <StyledTooltip title="삭제">
            <IconButton className={classes.action}>
              <DeleteIcon />
            </IconButton>
          </StyledTooltip>
        </Box>
      </div>
    );
  }

  return (
    <>
      <Modal
        open={openState}
        onClose={onClose}
        className={classes.modal}
        aria-labelledby="item-title"
        aria-describedby="modal-description"
      >
        {makeModalBody()}
      </Modal>
    </>
  );
}
