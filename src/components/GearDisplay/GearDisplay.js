import React from "react"
import head from "../../images/UIheadslot.png"
import neck from "../../images/UIneckslot.png"
import shoulder from "../../images/UIshoulderslot.png"
import chest from "../../images/UIchestslot.png"
import back from "../../images/UIbackslot.png"
import wrist from "../../images/UIwristslot.png"
import glove from "../../images/UIhandslot.png"
import waist from "../../images/UIwaistslot.png"
import legs from "../../images/UIlegslot.png"
import boots from "../../images/UIfeetslot.png"
import finger from "../../images/UIfingerslot.png"
import trinket from "../../images/UItrinketslot.png"
import mainhand from "../../images/UImainhandslot.png"
import offhand from "../../images/UIoffhandslot.png"

const GearDisplay = () => {
  return(
    <div>
      <div>
        <img src={head}></img>
        <img src={neck}></img>
        <img src={shoulder}></img>
        <img src={chest}></img>
        <img src={back}></img>
        <img src={wrist}></img>
      </div>
      <div>
        <img src={glove}></img>
        <img src={waist}></img>
        <img src={legs}></img>
        <img src={boots}></img>
        <img src={finger}></img>
        <img src={finger}></img>
        <img src={trinket}></img>
        <img src={trinket}></img>
      </div>
      <div>
        <img src={mainhand}></img>
        <img src={offhand}></img>
      </div>
  </div>
  )
}

export default GearDisplay
