import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import DrawerContainer from './DrawerContainer';

jest.mock('../../assets');

function renderDrawerContainer() {
  return render((
    <DrawerContainer />
  ));
}

describe('DrawerContainer', () => {
  it('Drawer on 버튼을 눌렀을 때 Drawer 가 열린다.', () => {

  });
});
