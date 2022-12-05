import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import idli from '../../assets/idli.avif'
import vada from '../../assets/vada.avif'
import dosa from '../../assets/dosa.avif'
import "./restaurants.css";
import IdliRestaurants from "../idli-restaurants/idli-restaurants";
import VadaRestaurants from "../vada-restaurants/vada-restaurants";
import DosaRestaurants from "../dosa-restaurants/dosa-restaurants";

export default class Restaurants extends React.Component {
  render = () => <div className="wrapper">
    <h3>Best Restaurants in Mangalore</h3>
    <div className="logos">
      <a href="/idli"><img src={idli} alt="idli" /></a>
      <a href="/vada"><img src={vada} alt="vada" /></a>
      <a href="/dosa"><img src={dosa} alt="dosa" /></a>
    </div>
    <div className="restaurants">
      <BrowserRouter>
        <Switch>
          <Route path="/idli">
            <IdliRestaurants />
          </Route>
          <Route path="/vada">
            <VadaRestaurants />
          </Route>
          <Route path="/dosa">
            <DosaRestaurants />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  </div>
}