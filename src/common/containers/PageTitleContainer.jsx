import React from 'react';
import {
  Breadcrumbs,
  Link,
  Typography,
} from '@material-ui/core';
import {
  useHistory,
} from 'react-router-dom';

export default function PageTitleContainer({ items }) {
  const history = useHistory();

  function handleClick(event, link) {
    event.preventDefault();
    history.push(link);
  }

  return (
    <Breadcrumbs>
      {items.map((item) => (
        <Link
          key={item.title}
          color="inherit"
          href={item.link}
          onClick={(e) => handleClick(e, item.link)}
        >
          <Typography style={{ color: '#B4DFE5' }}>{item.title}</Typography>
        </Link>
      ))}
    </Breadcrumbs>
  );
}
