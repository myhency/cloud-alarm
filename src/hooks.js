import React from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

// eslint-disable-next-line import/prefer-default-export
export const useAuthed = () => {
  const [authed, setAuthed] = React.useState(() => {
    try {
      const accessToken = Cookies.get('accessToken');
      const key = 'breadstockcloud';
      const res = jwt.verify(accessToken, key);
      return {
        authed: true,
        role: res.roles[0],
      };
    } catch (err) {
      return {
        authed: false,
        role: undefined,
      };
    }
  });
  return authed;
};
