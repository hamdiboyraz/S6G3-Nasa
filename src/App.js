import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  console.log(data);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "cmHeJzz1arxtP0sT0YAjk4mQmayvTxoX3xUItuVE",
          date: date,
        },
      })
      .then(function(res) {
        console.log(res);
        setData(res.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }, [date]);

  if (!data)
    return (
      <div className="App">
        <h1>Yükleniyor...</h1>
      </div>
    );

  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${data.hdurl})`,
      }}
    >
      {data && (
        <div className="container">
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <h1>{data.title}</h1>
          <h2>{data.copyright}</h2>
          {/* <h3>{data.date}</h3> */}
          <p>{data.explanation}</p>
          {/* <img src={data.url} alt={data.title} /> */}
        </div>
      )}
    </div>
  );
}

export default App;
