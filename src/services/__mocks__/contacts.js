import {
  contactList,
  contactDetail1,
  contactDetail2,
} from '../../../fixture/contacts';

export async function fetchContacts(contactId, internalUserId) {
  if (contactId !== 1 && internalUserId !== 1) {
    return {
      result: false,
      data: [],
    };
  }
  return {
    result: true,
    data: contactList,
  };
}

export async function fetchContactDetail(id) {
  if (id === 1) {
    return {
      result: true,
      data: contactDetail1,
    };
  }
  if (id === 2) {
    return {
      result: true,
      data: contactDetail2,
    };
  }
  return ({
    result: false,
    data: null,
  });
}
