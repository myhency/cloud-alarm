/* eslint-disable no-nested-ternary */
import React from 'react';

import Modal from '@material-ui/core/Modal';
import { Box, Divider, Typography } from '@material-ui/core';

import InBoxModalContent from './_InBoxModalContent';

import { useStyles } from '../../../common/components/Styles';

export default function AlarmModal({
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

  function makeModalBody() {
    return (
      <div className={classes.modalPaper}>
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
            alarmStatus={alarmStatus === 'ALARMED' ? '알림완료'
              : alarmStatus === 'ALARM_CREATED' ? '알림전'
                : alarmStatus === 'PRICE_UPDATED' ? '가격수정됨'
                  : alarmStatus === 'LOSSCUT' ? '손절처리'
                    : alarmStatus}
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
