import { contactList } from '../../../fixture/contacts';

export async function fetchContacts(contactId, internalUserId) {
  if (contactId !== 1 && internalUserId !== 1) {
    return {
      result: false,
      data: [],
    };
  }

  return new Promise((resolve, _) => setTimeout(() => resolve({
    result: true,
    data: contactList,
  }), 500));
}

export async function fetchContactDetail(id) {
  return new Promise((resolve, _) => setTimeout(() => resolve({
    result: true,
    data: contactList.filter((contact) => contact.id === id)[0],
  }), 500));
}
