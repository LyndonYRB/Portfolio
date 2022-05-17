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
import ImgSQL from "../images/sql.jpg"


export default function Skills() {
  
  return (
    <div>
      Skills
                <div>
                  HTML5
                  JAVASCRIPT
                  css
                  React
                  MONGODB
                  EXPRESS
                  PYTHON
                  DJANGO
                  SQL
      </div>
      <div className="grid">
      <div className="cell"> <img src={ImgHTML}/> </div>
      <div className="cell"> <img src={ImgJS}/> </div>
       <div className="cell"> <img src={ImgCss} /> </div>
        <div className="cell"> <img src={ImgReact} /> </div>
        <div className="cell"> <img src={ImgMongoDB} /> </div>
        <div className="cell"> <img src={ImgExpress} /> </div>
        <div className="cell"> <img src={ImgPython} /> </div>
        <div className="cell"> <img src={ImgDjango} /> </div>
        <div className="cell"> <img src={ImgSQL}/> </div>
      </div>


    </div>
  )

}