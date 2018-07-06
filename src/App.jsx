import React, { Fragment } from "react";
import "./styles/main.scss";
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import Header from "./components/Header";

const App = () => {
  return (
    <Fragment>
      <Header />
      {renderRoutes(routes)}
    </Fragment>
  );  
};

export default App;
