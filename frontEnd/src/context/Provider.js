import React, { useState } from 'react';
import { MyContext } from './MyContext';

export function MyProvider({ children }) {
  const [value, setValue] = useState({
    validIconsEdit: false,
    validIconsDelete: false,
    validIconCreate: false,
  });

  const releaseIcons = (validation) => {
    setValue({validIconsEdit: validation, validIconsDelete: validation, validIconCreate: validation})
  }

  return (
    <MyContext.Provider value={{value, releaseIcons}}>
      {children}
    </MyContext.Provider>
  );
}
