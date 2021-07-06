/* eslint-disable no-nested-ternary */
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
import EditIcon from '@material-ui/icons/Edit';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import CloseIcon from '@material-ui/icons/Close';

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
    history.push(`/ready-docs/${id}`);
  };

  function makeModalBody() {
    const chartLink = `https://m.alphasquare.co.kr/service/chart?code=${itemCode}`;

    return (
      <div className={classes.modalPaper}>
        <Box display="flex" flexDirection="row" alignItems="flex-end">
          <Box flexGrow={1} display="flex" flexDirection="row" alignItems="flex-end">
            <Typography variant="h6">{itemName}</Typography>
            <Typography variant="subtitle2">
  &nbsp;(
              {itemCode}
              )
            </Typography>
          </Box>
          <Box>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
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
                : alarmStatus}
            alarmedAt={alarmedAt}
            losscutAt={losscutAt}
          />
        </div>
        <Box display="flex" flexDirection="row">
          <StyledTooltip title="차트보기">
            <a target="_blank" href={chartLink} rel="noreferrer">
              <IconButton
                id="alarm-chart-button"
                className={classes.action}
              >
                <ShowChartIcon />
              </IconButton>
            </a>
          </StyledTooltip>
          <StyledTooltip title="수정">
            <IconButton
              id="alarm-delete-button"
              className={classes.action}
              onClick={(e) => handleOnModifyButton(e, alarmId)}
            >
              <EditIcon />
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
