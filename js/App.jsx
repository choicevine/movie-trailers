// @flow
import React from 'react';
import type { Match } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const FourOFour = () => <h1>Hey you are lost</h1>;
const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={() => <Search preload={preload.shows} />} />

        <Route
          path="/details/:id"
          component={(props: Match) => {
            const { id } = props.match.params;
            const movie = preload.shows.find(show => show.imdbID === id);
            return <Details {...movie} />;
          }}
        />
        <Route component={FourOFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
