import React from "react"
import "./Skills.css"
import ImgHTML from "../images/html.png"
import ImgJS from "../images/js.png"
import ImgCss from "../images/css.png"
import ImgReact from "../images/react.png"
import ImgMongoDB from "../images/mongodb.png"
import ImgExpress from "../images/express.png"
import ImgPython from "../images/python.png"
import ImgDjango from "../images/django.png"
import ImgSQL from "../images/sql.png"


export default function Skills() {
  
  return (
    <div>
      Skills
      <div className="grid">
      <div className="cell"> <img src={ImgHTML}/><li className="skill-name">HTML </li> </div>
      <div className="cell"> <img src={ImgJS}/><li className="skill-name">JavaScript </li> </div>
       <div className="cell"> <img src={ImgCss} /><li className="skill-name">CSS </li> </div>
        <div className="cell"> <img src={ImgReact} /><li className="skill-name">React </li>  </div>
        <div className="cell"> <img src={ImgMongoDB} /><li className="skill-name">MongoDB </li> </div>
        <div className="cell"> <img src={ImgExpress} /><li className="skill-name">Express.js </li> </div>
        <div className="cell"> <img src={ImgPython} /><li className="skill-name">Python </li> </div>
        <div className="cell"> <img src={ImgDjango} /><li className="skill-name">Django </li>  </div>
        <div className="cell"> <img src={ImgSQL} /><li className="skill-name">SQL </li> </div>
        <div>
                
      </div>
      </div>


    </div>
  )

}