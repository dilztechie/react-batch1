import React from "react";
import { useSelector } from "react-redux";
import Restaurant from "../restaurant/restaurant";
import "./dosa-restaurants.css";

export default function DosaRestaurants() {
  const dosaRestaurants = useSelector(state => state.dosa)

  return <>
    <h3>Dosa Restaurants</h3>
    {dosaRestaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />)}
  </>
}