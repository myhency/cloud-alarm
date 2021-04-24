const contactList = {
  content: [
    {
      contactId: 1,
      internalUserId: 1,
      name: '홍길동',
      title: '외부인 연락처',
      email: 'external01@gmail.com',
      phoneNumber: '01012341234',
      company: '블로코',
      position: 'SW',
      comment: '블로코 계약 담당자',
    },
    {
      contactId: 2,
      internalUserId: 1,
      name: '김철수',
      title: '외부인 연락처',
      email: 'external02@gmail.com',
      phoneNumber: '01012345678',
      company: '블로코',
      position: 'SW',
      comment: '블로코 계약 담당자',
    },
  ],
  pageable: {
    sort: {
      sorted: false,
      unsorted: true,
      empty: true,
    },
    pageNumber: 0,
    pageSize: 10,
    offset: 0,
    paged: true,
    unpaged: false,
  },
  last: true,
  totalPages: 1,
  totalElements: 1,
  sort: {
    sorted: false,
    unsorted: true,
    empty: true,
  },
  size: 10,
  number: 0,
  numberOfElements: 2,
  first: true,
  empty: false,
};

const contactDetail1 = contactList.content[0];

const contactDetail2 = contactList[1];

export {
  contactList,
  contactDetail1,
  contactDetail2,
};
