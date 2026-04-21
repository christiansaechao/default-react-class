import "./App.css";
import React from "react";
import { UserInfo } from "./components/UserInfo";
/**
 * 1. Display Name
 * 2. Occupation
 * 3. 1 Hobby description
 */

// parent

function App() {

  return (
    <>
      <UserInfo name="chris" occupation="Teacher" hobby="warzone" age={40} />
      <UserInfo name="Takoda" occupation="Baker" hobby="Rock Climbing" age={29} />
    </>
  );
}

export default App;
