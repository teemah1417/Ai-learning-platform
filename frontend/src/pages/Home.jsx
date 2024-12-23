import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@mui/material";
import { Helmet } from "react-helmet";
import "../styles/App.css";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="This is the home page of our application." />
        </Helmet>

        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <Button
            variant="contained"
            onClick={() => setCount((count) => count + 1)}
            className="rounded-3xl bg-red-600"
          >
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
    </>
  );
};

export default Home;
