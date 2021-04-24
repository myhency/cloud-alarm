import React from 'react';

import { useDispatch } from 'react-redux';

import { setLocale } from '../../state/slice';

export default function LocaleSelectBoxContainer() {
  const dispatch = useDispatch();

  function handleKorean() {
    dispatch(setLocale('ko'));
  }

  function handleEnglish() {
    dispatch(setLocale('en'));
  }

  return (
    <>
      <button type="button" onClick={handleKorean}>ko</button>
      <button type="button" onClick={handleEnglish}>en</button>
    </>
  );
}
