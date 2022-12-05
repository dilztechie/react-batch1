import React from "react";
import { useSelector } from "react-redux";
import Television from "../television/television";
import "./televisions.css";

export default function Televisions() {
  const televisions = useSelector(state => state.televisions)

  return <>
    {televisions.map(television => <Television key={television.id} television={television} />)}
  </>
}