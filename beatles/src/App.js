import React from "react";
import {useState} from "react";
import NavBar from "./components/Navbar/Navbar";
function App() {
  const [page,changePage] = useState("home");
  return (
    <div>
      <NavBar p = {changePage}/>
      {console.log(page)}
    </div>
  );
}

export default App;
