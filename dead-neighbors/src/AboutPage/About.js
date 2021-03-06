import React from "react";
import DeadPeople from "../HomePage/DeadPeople";

const About = ({ deadPerson }) => {
  return (
      <div className="about">
              <DeadPeople /* display dead person count */
          deadPersonCount={deadPerson}
          key={deadPerson} /*key change forces render(updated props are sent)*/
        />
        <div className="content">
          <h3>About Dead Neighbors</h3>
          <p>
            The mission of Dead Neighbors is to help show you that the numbers
            you see on the screen actually represent your children, mothers,
            fathers, grandparents, friends and neighbors.
          </p>
          <p>
            In today's day and age, it is so easy to move on to the next thing
            very quickly. There is so much information out in the world and it
            distracts us from the fact that people are sick, suffering, and
            dying.
          </p>
          <p>
            Please take a moment to let the numbers soak in and feel the
            struggle and loss in your neighbors' hearts.
          </p>
        </div>
      </div>
  );
};
export default About;
