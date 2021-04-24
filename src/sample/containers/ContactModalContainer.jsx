import React from 'react';

import { useSelector } from 'react-redux';

import ContactModal from '../components/ContactModal';

export default function ContactModalContainer({ openState, onClose }) {
  const { contactDetail } = useSelector((state) => ({
    contactDetail: state.contactDetail,
  }));

  return (
    <ContactModal
      name={contactDetail.name}
      phoneNumber={contactDetail.phoneNumber}
      email={contactDetail.email}
      openState={openState}
      onClose={onClose}
    />
  );
}
