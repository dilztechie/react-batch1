import React from "react";
import { useSelector } from "react-redux";
import Mobile from "../mobile/mobile";
import "./mobiles.css";

export default function Mobiles() {
  const mobiles = useSelector(state => state.mobiles)

  return <>
    {mobiles.map(mobile => <Mobile key={mobile.id} mobile={mobile} />)}
  </>
}