/* eslint-disable no-nested-ternary */
import React from 'react';
import { useStyles } from '../../../common/components/Styles';

export default function MobileBreadShuttleContentContainer() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div>
        <iframe
          id="bread-shuttle"
          name="bread"
          title="bread"
          frameBorder="0"
          src="https://corn-bread.web.app/"
          style={{
            overflow: 'auto',
            width: '100%',
            minHeight: '90vh',
          }}
        />
      </div>
    </main>
  );
}
