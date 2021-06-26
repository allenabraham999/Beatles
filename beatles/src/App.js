import React from "react";
import { useState } from "react";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
function setPage(p) {
  if (p === "music") {
    return <Music />;
  } else if (p === "news") {
    return <News />;
  } else {
    return <Home />;
  }
}

function App() {
  const [page, changePage] = useState("home");
  return (
    <div>
      <NavBar p={changePage} />
      {console.log("page " + page)}
      {setPage(page)}
      <Footer></Footer>
    </div>
  );
}

export default App;
