import React from "react";
import ImageOne from "../images/1a.png";
import ImageTwo from "../images/1b.png";
import ImageThree from "../images/2a.png";
import ImageFour from "../images/2b.png";
import ImageFive from "../images/2c.png";
import ImageSix from "../images/3a.png";
import ImageSeven from "../images/3b.png";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="proj-container">
      Projects
      <div>
        <ul id="scroll-bar">
          <li>
            <a href="https://lyndons-rando-country-generator.netlify.app/">
              Project 1
            </a>

            <h4>Random Country Genenator</h4>
            <img src={ImageOne} />
            <img src={ImageTwo} />
            <p>
              You click the button and the name, capital and the popaltion of a
              random country will pop up. The API I used was made by one of my
              classmates, It was created using MongoDB for the front-end I used
              React.
            </p>
          </li>

          <li>
            <a href="https://lyndonyrb.github.io/fly-swatter/">Project 2</a>

            <h4>Fly Swatter</h4>
            <img className="img-two" src={ImageThree} />

            <img className="img-two" src={ImageFive} />
            <p>
              A simple game that utilize the mouse click and collision
              detection, made in JavaScript, HTML and CSS. The objective is to
              click on the fly to kill it before it touches the cake. Evertime
              you win and opt to play again an extra fly will be added making
              the game more difficult.
            </p>
          </li>

          <li>
            <a href="https://flask--manager-app.herokuapp.com/">Project 3</a>

            <h4>Flask Task Manager</h4>
            <img src={ImageSix} />
            <img src={ImageSeven} />
            <p>
              A task manager app made with Python-Flask. You simply input a task
              in the text field and press the "Add Task" button to add it to the
              list of tasks along with the date added, you also have the option
              to udate and delete each task.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
