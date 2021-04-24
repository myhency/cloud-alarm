import React from 'react';
import ContentMainLayout from '../components/ContentMainLayout';

function createData(authorName, documentTitle, createdAt) {
  return { authorName, documentTitle, createdAt };
}

const rows = [
  createData('홍길동', '근로계약서_2020_2383249875', '1시간 전'),
  createData('김철수', '근로계약서_2020_2383249875', '2시간 전'),
];

/**
 * TODO. 페이징 관련한 props 추가 해야 함
 * TODO. ordering 관련한 props 추가 해야 함
 */
export default function ContentMainContainer() {
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
    <ContentMainLayout
      handleSelectAllClick={handleSelectAllClick}
      handleOnChange={handleOnChange}
      rows={rows}
      selected={selected}
    />
  );
}
