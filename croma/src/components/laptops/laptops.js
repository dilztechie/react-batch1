import React from "react";
import { useSelector } from "react-redux";
import Laptop from "../laptop/laptop";
import "./laptops.css";

export default function Laptops() {
  const laptops = useSelector(state => state.laptops)

  return <>
    {laptops.map(laptop => <Laptop key={laptop.id} laptop={laptop} />)}
  </>
}