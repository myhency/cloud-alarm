import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Box, Divider, Typography } from '@material-ui/core';

import InBoxModalHeader from './_InBoxModalHeader';
import InBoxModalContent from './_InBoxModalContent';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 500,
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

export default function AlarmModal({
  itemName, itemCode, recommendPrice, losscutPrice, comment, theme, createdAt, lastUpdatedAt, alarmStatus, alarmedAt, losscutAt, openState, onClose,
}) {
  const classes = useStyles();

  function makeModalBody() {
    return (
      <div className={classes.paper}>
        {/* <h2 id="item-title" className={classes.title}>
          {itemName}
        </h2> */}
        <Box display="flex" flexDirection="row" alignItems="flex-end">
          <Typography variant="h4">{itemName}</Typography>
          <Typography variant="h6">
            &nbsp;({itemCode})
          </Typography>
        </Box>
        <Divider />
        <div className="modal-description">
          <InBoxModalHeader recommendPrice={recommendPrice} losscutPrice={ losscutPrice}/>
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
