import { createTheme } from '@mui/material/styles';

import { color } from 'src/constants/colors';

export const theme = createTheme({
  typography: {
    subtitle1: {
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          textTransform: 'capitalize',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          background: color.gray[500],
          '&.mobile': {
            'th, td': {
              padding: '6px 10px',
            },
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td': {
            border: 0,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: color.gray[50],
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        outlined: {
          background: color.gray[500],
          borderRadius: 8,
        },
      },
    },
  },
  palette: {
    primary: {
      light: color.gray[300],
      main: color.gray[500],
      dark: color.gray[900],
    },
    secondary: {
      main: color.gray[50],
    },
    error: {
      main: color.coral[600],
    },
    warning: {
      main: color.pumpkin[400],
    },
    info: {
      main: color.blue[400],
      dark: color.blue[700],
    },
    success: {
      main: color.turquoise[500],
    },
    text: {
      primary: color.gray[900],
    },
  },
});
