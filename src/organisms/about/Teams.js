import React from 'react';
import TeamItem from 'molecules/team/TeamItem';
import styles from './Teams.module.css';
import { teamData } from 'data/aboutData';

const Teams = (props) => {
  const data = props.teams || teamData;
  return (
    <div className={styles.teamItems}>
      {data &&
        data.map((team, key) => (
          <TeamItem key={key} name={team.name} img={team.img} job={team.job} />
        ))}
    </div>
  );
};

export default Teams;
