import React from "react";
import { useSelector } from "react-redux";
import mobile from '../../assets/mobiles.png'
import television from '../../assets/televisions.png'
import laptop from '../../assets/laptops.png'
import "./products.css";

export default function Products() {
  const mobiles = useSelector(state => state.mobiles)
  const televisions = useSelector(state => state.televisions)
  const laptops = useSelector(state => state.laptops)

  return <div className="wrapper">
    <div className="logos">
      <a href="#mobiles"><img height="100" width="100" src={mobile} alt="Mobiles" /></a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="#televisions"><img height="100" width="100" src={television} alt="Televisions" /></a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="#laptops"><img height="100" width="100" src={laptop} alt="Laptops" /></a>
    </div>
    <div name="mobiles">
      {mobiles.map(mobile => <>
        <h2>{mobile.brand} {mobile.model}</h2>
        <h3>Specifications</h3>
        <dl>
          <dt><strong>Display</strong></dt><dd>{mobile.display}</dd>
          <dt><strong>Memory</strong></dt><dd>{mobile.memory}</dd>
          <dt><strong>Processor</strong></dt><dd>{mobile.processor}</dd>
          <dt><strong>Camera</strong></dt><dd>{mobile.camera}</dd>
          <dt><strong>Battery</strong></dt><dd>{mobile.battery}</dd>
        </dl>
      </>)}
    </div>
    <div name="televisions">
      {televisions.map(television => <>
        <h2>{television.brand} {television.model}</h2>
        <h3>Specifications</h3>
        <dl>
          <dt><strong>Display</strong></dt><dd>{television.display}</dd>
          <dt><strong>OS</strong></dt><dd>{television.os}</dd>
          <dt><strong>Sound</strong></dt><dd>{television.sound}</dd>
          <dt><strong>Features</strong></dt><dd>{television.features}</dd>
        </dl>
      </>)}
    </div>
    <div name="laptops">
      {laptops.map(laptop => <>
        <h2>{laptop.brand} {laptop.model}</h2>
        <h3>Specifications</h3>
        <dl>
          <dt><strong>Processor</strong></dt><dd>{laptop.processor}</dd>
          <dt><strong>Display</strong></dt><dd>{laptop.display}</dd>
          <dt><strong>Memory</strong></dt><dd>{laptop.memory}</dd>
          <dt><strong>OS</strong></dt><dd>{laptop.os}</dd>
        </dl>
      </>)}
    </div>
  </div>
}