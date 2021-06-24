import React from 'react';

import MessageIcon from '@material-ui/icons/Message';
import CategoryIcon from '@material-ui/icons/Category';
import ScheduleIcon from '@material-ui/icons/Schedule';
import UpdateIcon from '@material-ui/icons/Update';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import {
  Box,
  InputAdornment,
} from '@material-ui/core';
import { CssTextField } from '../../common/components/TextFields';
import { useStyles } from '../../common/components/Styles';

export default function InboxModalContent({
  recommendPrice,
  losscutPrice,
  comment,
  theme,
  createdAt,
  lastUpdatedAt,
  alarmStatus,
}) {
  const classes = useStyles();

  return (
    <div className={classes.contactContentBox}>
      <Box>
        <CssTextField
          style={{ marginTop: '10px' }}
          label="돌파가격"
          fullWidth
          value={
            recommendPrice === '' || recommendPrice == null
              ? 'Loading...'
              : recommendPrice
          }
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <ArrowUpwardIcon fontSize="large" style={{ color: 'red' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <CssTextField
          style={{ marginTop: '20px' }}
          label="손절가격"
          fullWidth
          value={
            losscutPrice === '' || losscutPrice == null
              ? 'Loading...'
              : losscutPrice
          }
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <ArrowDownwardIcon fontSize="large" style={{ color: 'blue' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <CssTextField
          style={{ marginTop: '20px' }}
          label="진행상태"
          fullWidth
          value={
            alarmStatus === '' || alarmStatus == null ? '알람전' : alarmStatus
          }
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <EmojiPeopleIcon fontSize="large" style={{ color: 'black' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <CssTextField
          style={{ marginTop: '20px' }}
          label="코멘트"
          fullWidth
          multiline
          value={comment === '' ? 'Loading...' : comment}
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <MessageIcon fontSize="large" style={{ color: 'black' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <CssTextField
          style={{ marginTop: '20px' }}
          label="테마"
          fullWidth
          multiline
          value={theme === '' ? 'Loading...' : theme}
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <CategoryIcon fontSize="large" style={{ color: 'black' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <CssTextField
          style={{ marginTop: '20px' }}
          label="최초 등록일"
          fullWidth
          value={createdAt === '' ? 'Loading...' : createdAt}
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <ScheduleIcon fontSize="large" style={{ color: 'black' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <CssTextField
          style={{ marginTop: '20px' }}
          label="마지막 수정일"
          fullWidth
          value={lastUpdatedAt === '' ? 'Loading...' : lastUpdatedAt}
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <UpdateIcon fontSize="large" style={{ color: 'black' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </div>
  );
}
