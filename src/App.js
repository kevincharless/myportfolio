import React, { useState, useEffect } from 'react';

import { Home } from './pages';


const App = ({theme, changeTheme}) => {
  
  return (
    <>
          <Home theme={theme} changeTheme={changeTheme} />
      
    </>
  )
}

export default App
