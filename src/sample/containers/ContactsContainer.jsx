import React from 'react';

import ContactsLayout from '../components/ContactsLayout';

function createData(authorName, documentTitle, createdAt) {
  return { authorName, documentTitle, createdAt };
}

const rows = [
  createData('홍길동', 'test.01@gmail.com', '+8212341234', 'A-Company'),
  createData('홍길동', 'test.02@gmail.com', '+8212341234', 'B-Company'),
];

export default function ContactsContainer() {
  const [selected, setSelected] = React.useState([]);
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.authorName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const handleOnChange = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  return (
    <ContactsLayout
      handleSelectAllClick={handleSelectAllClick}
      handleOnChange={handleOnChange}
      rows={rows}
      selected={selected}
    />
  );
}
