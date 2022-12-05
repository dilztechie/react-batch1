import React from "react";
import { useSelector } from "react-redux";
import Restaurant from "../restaurant/restaurant";
import "./vada-restaurants.css";

export default function VadaRestaurants() {
  const vadaRestaurants = useSelector(state => state.vada)

  return <>
    <h3>Vada Restaurants</h3>
    {vadaRestaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />)}
  </>
}