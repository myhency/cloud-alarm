import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import StepTitle from './StepTitle';
import HDropDown from './_DropDown';

export default function NewDocumentUserInputLayout() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={10}>
        <StepTitle
          step="1단계"
          title="서명할 문서를 선택하세요"
        />
      </Grid>
      <Grid item xs={2}>
        <HDropDown />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2">
          DropZone 위치
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2">
          2단계 타이틀 자리
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2">
          서명인 입력란
        </Typography>
      </Grid>
    </Grid>
  );
}
