import React from 'react';
import { useHistory } from 'react-router-dom';

import Modal from '@material-ui/core/Modal';
import {
  Box,
  Divider,
  Typography,
  IconButton,
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import RedoIcon from '@material-ui/icons/Redo';

import InBoxModalContent from './_InBoxModalContent';

import { StyledTooltip } from '../../common/components/Tooltips';
import { useMobileStyles } from '../../common/components/Styles';

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
  const classes = useMobileStyles();
  const history = useHistory();

  const handleOnModifyButton = (e, id) => {
    history.push(`/readd-ready-docs/${id}`);
  };

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
