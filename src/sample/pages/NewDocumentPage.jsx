import * as React from 'react';
import NewDocumentContainer from '../containers/NewDocumentContainer';
import SampleDrawerPage from './DrawerPage';

export default function NewDocumentPage() {
  return (
    <SampleDrawerPage>
      <NewDocumentContainer />
    </SampleDrawerPage>
  );
}
