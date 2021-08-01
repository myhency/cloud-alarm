import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Typography,
} from '@material-ui/core';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { Mobile, Desktop } from '../../../utils/screenSelector';

import { useStyles } from '../../../common/components/Styles';

const Step = ({ mention, isActive }) => {
  const activeColor = '#D2FDFF';
  const inActiveColor = 'lightgrey';

  return (
    <>
      <Desktop>
        <RadioButtonCheckedIcon
          style={{
            color: isActive ? activeColor : inActiveColor,
          }}
        />
        <Typography
          style={{
            color: isActive ? activeColor : inActiveColor,
            marginLeft: '5px',
          }}
        >
          {mention}
        </Typography>
      </Desktop>
      <Mobile>
        <RadioButtonCheckedIcon
          fontSize="small"
          style={{
            color: isActive ? activeColor : inActiveColor,
          }}
        />
        <Typography
          style={{
            color: isActive ? activeColor : inActiveColor,
            marginLeft: '5px',
            fontSize: '10px',
          }}
        >
          {mention}
        </Typography>
      </Mobile>
    </>
  );
};

const StepSeperator = () => (
  <Box display="flex" alignItems="center">
    <div style={{
      height: '1px',
      width: '15px',
      backgroundColor: 'lightgrey',
      margin: '0 10px 0 10px',
    }}
    />
  </Box>
);

export default function ProgressToolBar() {
  const classes = useStyles();
  const history = useHistory();

  const { pathname } = history.location;

  return (
    <div className={classes.progressToolBarRoot}>
      <Box display="flex" flexDirection="row" flexGrow="1" justifyContent="center" p={1} m={1}>
        <Step isActive={pathname.includes('new')} mention="종목추가" />
        <StepSeperator />
        <Step isActive={pathname.includes('ready')} mention="정보입력" />
        <StepSeperator />
        <Step isActive={pathname.includes('review')} mention="검토 및 저장" />
      </Box>
    </div>
  );
}
