import React from 'react';

import { useSelector } from 'react-redux';

import MobileAlarmModal from '../components/MobileAlarmModal';

export default function MobileInBoxModalContainer({ openState, onClose, handleConfirmClose }) {
  const { alarmDetail } = useSelector((state) => ({
    alarmDetail: state.alarm.alarmDetail,
  }));

  return (
    <MobileAlarmModal
      alarmId={alarmDetail.alarmId}
      itemName={alarmDetail.itemName}
      itemCode={alarmDetail.itemCode}
      recommendPrice={alarmDetail.recommendPrice}
      losscutPrice={alarmDetail.losscutPrice}
      comment={alarmDetail.comment}
      theme={alarmDetail.theme}
      createdAt={alarmDetail.createdDate}
      lastUpdatedAt={alarmDetail.modifiedDate}
      alarmStatus={alarmDetail.alarmStatus}
      alarmedAt={alarmDetail.alarmedAt}
      losscutAt={alarmDetail.losscutAt}
      openState={openState}
      onClose={onClose}
      handleParentConfirmClose={handleConfirmClose}
    />
  );
}
