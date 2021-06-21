import React from "react";
import { useState } from "react";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import Albums from "./components/Albums/Albums";
import News from "./components/News/News";

function setPage(p){
  if(p === "store"){
    return <Store />
  }else if(p === "album"){
    return <Albums/>;
  }else if(p === "news"){
    return <News/>;
  }else{
    return <Home/>
  }
}

function App() {
  const [page, changePage] = useState("home");
  return (
    <div>
      <NavBar p={changePage} />
      {console.log("page "+page)}
      {setPage(page)}
    </div>
  );
}

export default App;
