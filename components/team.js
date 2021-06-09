import React from "react";
import { Container } from "react-bootstrap";
import TeamCard from "@components/team-card";
import { TEAM_DATA } from "@data/index";

const Team = () => {
  return (
    <section className="team-one" id="team">
      <Container>
        <div className="block-title text-center">
          <p>
            <span></span>OUR TEAM MEMBERS
          </p>
          <h4>
            JB General Trading Co. Ltd is administered and operated by a fully
            experienced and qualified professional team of managers, marketers,
            staff and skillful working force to enhance best service delivery to
            our <br /> esteem <span>customers.</span>
          </h4>
        </div>

        <div className="team-one__4-col">
          {TEAM_DATA.map((team, index) => (
            <TeamCard key={`team-card-key-${index}`} data={team} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
