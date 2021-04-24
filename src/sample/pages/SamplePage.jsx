import React from 'react';

import {
  useHistory,
} from 'react-router-dom';

import Button from '@material-ui/core/Button';

const rootRoute = '/sample';

export default function SamplePage() {
  const buttonPage = `${rootRoute}/buttons`;

  const history = useHistory();

  function toButtons(event) {
    event.preventDefault();
    history.push(buttonPage);
  }

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={toButtons}
    >
      버튼 샘플
    </Button>
  );
}
