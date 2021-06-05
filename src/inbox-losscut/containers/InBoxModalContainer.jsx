import React from 'react';

import { useSelector } from 'react-redux';

import AlarmModal from '../components/AlarmModal';

export default function InBoxModalContainer({ openState, onClose }) {
  const { alarmDetail } = useSelector((state) => ({
    alarmDetail: state.alarmDetail,
  }));

  return (
    <AlarmModal
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
    />
  );
}
