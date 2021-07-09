import React from 'react';
import { useHistory } from 'react-router-dom';

import Modal from '@material-ui/core/Modal';
import {
  Box,
  Divider,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
  handleParentConfirmClose,
}) {
  const classes = useMobileStyles();
  const history = useHistory();

  const [warningOpen, setWarningOpen] = React.useState(false);
  const [toBeDeletedId, setToBeDeletedId] = React.useState(0);

  function handleCancelClose() {
    setWarningOpen(false);
  }

  const handleOnDeleteButton = (e, id) => {
    setWarningOpen(true);
    setToBeDeletedId(id);
  };

  const handleConfirmClose = () => {
    setWarningOpen(false);
    handleParentConfirmClose(toBeDeletedId);
  };

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
            alarmStatus={alarmStatus}
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
            <IconButton
              className={classes.action}
              onClick={(e) => handleOnDeleteButton(e, alarmId)}
            >
              <DeleteIcon />
            </IconButton>
          </StyledTooltip>
        </Box>
        <Dialog
          open={warningOpen}
          onClose={handleCancelClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            알람을 삭제합니다.
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              알람을 삭제하면 해당 종목의 알림을 받을 수 없습니다. 계속 진행하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelClose} color="secondary" autoFocus>
              취소
            </Button>
            <Button onClick={handleConfirmClose} color="secondary" autoFocus>
              확인
            </Button>
          </DialogActions>
        </Dialog>
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
