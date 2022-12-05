import React from "react";
import "./idli-restaurants.css";
import { useSelector } from 'react-redux'
import Restaurant from "../restaurant/restaurant";

export default function IdliRestaurants() {
  const idliRestaurants = useSelector(state => state.idli)
  return <>
    <h3>Idli Restaurants</h3>
    {idliRestaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />)}
  </>
}