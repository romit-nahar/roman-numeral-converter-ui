export const CONFIG = {
    API: {
      BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080',
      ENDPOINTS: {
        ROMAN_NUMERAL: '/romannumeral'
      }
    },
    VALIDATION: {
      MIN_NUMBER: 1,
      MAX_NUMBER: 3999
    }
  };