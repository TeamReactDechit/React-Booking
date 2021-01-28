import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageNotFound from "./PageNotFound";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
    <Header />
      <div className="container-fluid">
      <Switch>
        <Route key="homeP" exact path="/" component={HomePage} />
        <Route component={PageNotFound} />
      </Switch>
      </div>
    <Footer />
    </>
  );
}

export default App;