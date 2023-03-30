import React, { useState } from 'react';
import { MyContext } from './MyContext';

export function MyProvider({ children }) {
  const [valueContext, setValue] = useState({
    validIconsEdit: false,
    validIconsDelete: false,
    validIconCreate: false,
    currentFilter: "",
  });

  const releaseIcons = (validation) => {
    setValue({validIconsEdit: validation, validIconsDelete: validation, validIconCreate: validation})
  }

  const handleCurrentFilter = (filter) => {
    setValue({...valueContext, currentFilter: filter});
  };

  return (
    <MyContext.Provider value={{ valueContext, releaseIcons, handleCurrentFilter}}>
      {children}
    </MyContext.Provider>
  );
}
