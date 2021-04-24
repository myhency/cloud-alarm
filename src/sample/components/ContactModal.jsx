import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Divider } from '@material-ui/core';

import HContactModalHeader from './_ContactModalHeader';
import HContactModalContent from './_ContactModalContent';

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
    borderRadius: '1rem',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    margin: '1rem 0rem',
    fontSize: '2rem',
  },
}));

export default function ContactModal({
  name, phoneNumber, email, openState, onClose,
}) {
  const classes = useStyles();

  function makeModalBody() {
    return (
      <div className={classes.paper}>
        <h2 id="simple-modal-title" className={classes.title}>연락처</h2>
        <Divider />
        <div className="simple-modal-description">
          <HContactModalHeader userName={name} />
          <Divider />
          <HContactModalContent email={email} phoneNumber={phoneNumber} />
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
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {makeModalBody()}
      </Modal>
    </>
  );
}
