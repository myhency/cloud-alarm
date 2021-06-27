import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Typography,
} from '@material-ui/core';

import {
  loadAlarmedAlarmList,
  loadHistoryAlarmDetail,
  clearAlarmDetail,
} from '../../state/slice';

import MobileInBoxModalContainer from './MobileInBoxModalContainer';
import { useMobileStyles } from '../../common/components/Styles';

export default function InBoxContentContainer() {
  const classes = useMobileStyles();
  const dispatch = useDispatch();
  const { alarms } = useSelector((state) => ({
    alarms: state.losscutAlarms,
  }));

  useEffect(() => {
    dispatch(loadAlarmedAlarmList());
  }, []);

  const [detailModalOpened, setDetailModalOpened] = React.useState(false);

  const handleDetailOpen = (e, id) => {
    dispatch(loadHistoryAlarmDetail(id));
    setDetailModalOpened(true);
  };

  function handleDetailClose() {
    dispatch(clearAlarmDetail());
    setDetailModalOpened(false);
  }

  return (
    <main className={classes.content}>
      <MobileInBoxModalContainer
        openState={detailModalOpened}
        onClose={handleDetailClose}
      />
      {alarms.map((alarm) => {
        const key = alarm.alarmId;
        return (
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              margin: '10px 10px 5px 10px',
              borderBottom: '1px solid lightgrey',
            }}
            onClick={(e) => handleDetailOpen(e, alarm.alarmId)}
            key={key}
          >
            <Box style={{
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              <div>
                <Typography style={{ color: '#303C6C', fontSize: '17px' }}>
                  {alarm.itemName}
                </Typography>
              </div>
              <div>
                <Typography style={{ color: 'red' }}>
                  {new Intl.NumberFormat('ko-KR').format(alarm.recommendPrice)}
                </Typography>
              </div>
              <div>
                <Typography style={{ color: 'blue' }}>
                  {new Intl.NumberFormat('ko-KR').format(alarm.losscutPrice)}
                </Typography>
              </div>
            </Box>
            <Box style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              // flex: '2 1 1 4',
              flexGrow: 1,
            }}
            >
              <div style={{
                flexGrow: 1,
                justifyContent: 'center',
              }}
              >
                <Typography style={{ color: '#adadad', fontSize: '12px' }}>
                  {alarm.modifiedDate}
                </Typography>
              </div>
              <div>
                <Typography style={{ color: '#747171', fontSize: '14px' }}>
                  {alarm.alarmStatus}
                </Typography>
              </div>
            </Box>
          </Box>
        );
      })}
    </main>
  );
}
