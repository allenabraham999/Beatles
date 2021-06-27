import React from "react";
import "./About.css";

function About() {
  return (
    <div class="back-ground">
      <div className="mainn">
        <div className="holder row valign-wrapper">
          <div className="stuff col s10 m5 l4">
            <h2>History</h2>
            <span class="white-text">
              <p>
                The Beatles are arguably the most famous, critically-acclaimed,
                and successful rock band of all time.They started out as four teenagers
                playing grimy basement clubs in Liverpool and Hamburg, but they
                progressed to become world-beating rock stars who are still
                influential to this day. John Lennon first formed a skiffle
                group called The Quarrymen in March 1957.A fifteen-year-old
                Paul McCartney joined shortly thereafter,eventually inviting
                his friend George Harrison to audition for the band. After
                finally impressing John with his guitar skills, George was asked
                to join—but this juncture would be short lived as John’s
                departure to college signaled the other quarrymen to go their
                separate ways.
              </p>
            </span>
          </div>

          <div class="stuff col s10 m5 l4">
            <h2>Legacy</h2>
            <span class="white-text">
              <p>
                Former Rolling Stone associate editor Robert Greenfield compared
                the Beatles to Picasso, as "artists who broke through the
                constraints of their time period to come up with something that
                was unique and original In the form of popular music, no one
                will ever be more revolutionary, more creative and more
                distinctive ..."The British poet Philip Larkin described their
                work as "an enchanting and intoxicating hybrid of Negro
                rock-and-roll with their own adolescent romanticism", and "the
                first advance in popular music since the War".
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
