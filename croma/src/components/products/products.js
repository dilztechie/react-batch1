import React, { useState } from "react";
import mobile from '../../assets/mobiles.png'
import television from '../../assets/televisions.png'
import laptop from '../../assets/laptops.png'
import "./products.css";
import Mobiles from "../mobiles/mobiles";
import Televisions from "../televisions/televisions";
import Laptops from "../laptops/laptops";

export default function Products() {
  const [mobiles, setMobiles] = useState(false)
  const [televisions, setTelevisions] = useState(false)
  const [laptops, setLaptops] = useState(false)

  const handleClick = event => {
    setMobiles(false)
    setTelevisions(false)
    setLaptops(false)
    if (event.target.id === 'mobile') setMobiles(true)
    if (event.target.id === 'television') setTelevisions(true)
    if (event.target.id === 'laptop') setLaptops(true)
  }

  return <div className="wrapper">
    <div className="logos">
      <button onClick={handleClick}><img id="mobile" height="100" width="100" src={mobile} alt="Mobiles" /></button>
      <button onClick={handleClick}><img id="television" height="100" width="100" src={television} alt="Televisions" /></button>
      <button onClick={handleClick}><img id="laptop" height="100" width="100" src={laptop} alt="Laptops" /></button>
    </div>
    <div name="mobiles">
      {mobiles && <Mobiles />}
    </div>
    <div name="televisions">
      {televisions && <Televisions />}
    </div>
    <div name="laptops">
      {laptops && <Laptops />}
    </div>
  </div>
}