import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { useSelector } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import RootPage from './RootPage';

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
    fontFamily: ['Spoqa Han Sans Neo', 'sans-serif'].join(','),
  },
});

export default function App() {
  const { localeText } = useSelector((state) => ({
    localeText: state.localeText,
  }));

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <RootPage localeText={localeText} />
    </MuiThemeProvider>
  );
}
