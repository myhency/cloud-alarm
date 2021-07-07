import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Typography,
} from '@material-ui/core';

import { useMobileStyles } from '../../common/components/Styles';

import {
  loadVolumeDateList,
} from '../../state/slice';

export default function VolumeListContentContainer() {
  const history = useHistory();
  const classes = useMobileStyles();
  const dispatch = useDispatch();
  const { volumeDateList } = useSelector((state) => ({
    volumeDateList: state.volumeDateList,
  }));

  useEffect(() => {
    dispatch(loadVolumeDateList());
  }, []);

  const handleDetailOpen = (e, volumeDate) => {
    e.preventDefault();
    history.push(`/analyze/volume/${volumeDate}`);
  };

  return (
    <main className={classes.content}>
      <div className={classes.root}>
        {volumeDateList.map((volumeDate) => (
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              margin: '15px 10px 5px 10px',
              borderBottom: '1px solid lightgrey',
            }}
            key={volumeDate}
            onClick={(e) => handleDetailOpen(e, volumeDate)}
          >
            <Box style={{
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              <div>
                <Typography style={{ color: '#303C6C', fontSize: '17px' }}>
                  {volumeDate}
                </Typography>
              </div>
            </Box>
          </Box>
        ))}
      </div>
    </main>
  );
}
