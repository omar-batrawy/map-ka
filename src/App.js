import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Map from "./Component/Map/Map";
import SideBar from "./Component/SIdeBar/SideBar";

function App() {
  const [result, setResult] = useState(null);
  console.log(result);

  return (
    <div className="App">
      <Header />
      <div className="mapandsearchcontainer">
        <div id="viewDiv">
          <Map onresult={(result) => setResult(result)} />
        </div>
        {result && (
          <div className="result">
            {result?.results[0]?.results.map((item) => (
              <h4>{item?.target.attributes.City}</h4>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
