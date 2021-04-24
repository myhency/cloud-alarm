import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import { setLocale } from '../../state/slice';

import LocaleSelectBoxContainer from './LocaleSelectBoxContainer';

function renderLocaleSelectBoxContainer() {
  return render((
    <LocaleSelectBoxContainer />
  ));
}

jest.mock('react-redux');

describe('LocaleSelectBoxContainer', () => {
  const localeButtons = ['ko', 'en'];
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders the locale select buttons', () => {
    const { container } = renderLocaleSelectBoxContainer();

    localeButtons.forEach((localeButton) => {
      expect(container).toHaveTextContent(localeButton);
    });
  });

  it('listens the button click event', () => {
    const { getByText } = renderLocaleSelectBoxContainer();

    localeButtons.forEach((localeButton) => {
      fireEvent.click(getByText(localeButton));

      expect(dispatch).toBeCalledWith(setLocale(localeButton));
    });
  });
});
