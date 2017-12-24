import React from "react";
import { Route, Switch } from "react-router-dom"

const Head = () => (
  <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <>
            <meta name="description" content="Home description" />
            <title>Home page great stuff</title>
          </>
        )}
      />
      <Route
        path="/about"
        render={() => (
          <>
            <meta name="description" content="About description" />
            <title>About page</title>
          </>
        )}
      />
      <Route
        path="/topics/:id"
        render={({ match }) => (
          <>
            <meta name="description" content="Topics description" />
            <title>{`Topics - ${match.params.id}`}</title>
          </>
        )}
      />
      <Route
        path="/topics"
        render={() => (
          <>
            <meta name="description" content="Topics description" />
            <title>Topics in general</title>
          </>
        )}
      />
    </Switch>
  </>
)
export default Head;
