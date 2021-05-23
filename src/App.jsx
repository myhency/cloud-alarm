import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { useSelector } from 'react-redux';

import RootPage from './RootPage';
import axios from 'axios';

const theme = createMuiTheme({
  overrides: {
    MuiDataGrid: {
      root: {
        backgroundColor: '#FFFFFF',
      },
    },
  },
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    subtitle1: {
      fontSize: 10,
    },
  },
});

export default function App() {
  const { localeText } = useSelector((state) => ({
    localeText: state.localeText,
  }));

  return (
    <MuiThemeProvider theme={theme}>
      <RootPage localeText={localeText} />
    </MuiThemeProvider>
  );
}
