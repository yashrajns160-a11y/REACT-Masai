// import { useState } from 'react'
// import React from "react";
// import Form from './components/Form'
import { AppContext } from './contexts/AppContextProvider';
import { useContext } from 'react';
import LoginHeader from './components/LoginHeader';

function App() {
  const {authState} = useContext(AppContext)
  return (
    <div>
      <div>
        {/* <Form /> */}
      </div>
      <div>
        <LoginHeader />
        <h3>{authState.token}</h3>
      </div>
    </div>
  )
}

export default App
