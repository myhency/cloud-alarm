const documentList = [
  {
    id: 1,
    name: 'doc01',
    receiver: [
      {
        id: 1,
        name: 'receiver01',
        email: 'receiver01@test.com',
        isSigned: true,
        signOrder: 1,
      },
      {
        id: 2,
        name: 'receiver02',
        email: 'receiver02@test.com',
        isSigned: true,
        signOrder: 1,
      },
    ],
    lastUpdated: '2020/01/01 23:00:00',
  },
  {
    id: 2,
    name: 'doc02',
    receiver: [
      {
        id: 1,
        name: 'receiver01',
        email: 'receiver01@test.com',
        isSigned: true,
        signOrder: 1,
      },
      {
        id: 2,
        name: 'receiver02',
        email: 'receiver02@test.com',
        isSigned: false,
        signOrder: 1,
      },
    ],
    lastUpdated: '2020/01/01 23:00:00',
  },
  {
    id: 3,
    name: 'doc03',
    receiver: [
      {
        id: 1,
        name: 'receiver01',
        email: 'receiver01@test.com',
        isSigned: false,
        signOrder: 1,
      },
      {
        id: 2,
        name: 'receiver02',
        email: 'receiver02@test.com',
        isSigned: false,
        signOrder: 1,
      },
    ],
    lastUpdated: '2020/01/01 23:00:00',
  },
];

export {
  documentList,
};

// 서명해야함, xx를 대기 중, 완료됨