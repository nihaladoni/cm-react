import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import NavBar from "./common/navBar";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Rental from "./components/rentals";
import Customer from "./components/customers";
import NotFound from "./components/notFound";
import LoginForm from "./common/loginForm";
import Register from "./common/register";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={LoginForm} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/customers" component={Customer} />
          <Route path="/rentals" component={Rental} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/movies" component={Movies} />
          <Redirect exact from="/" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
