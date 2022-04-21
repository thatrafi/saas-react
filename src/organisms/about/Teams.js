import React from 'react';
import TeamItem from 'molecules/team/TeamItem';
import styles from './Teams.module.scss';
import { teamData } from 'data/aboutData';

const Teams = () => {
  return (
    <div className={styles.teamItems}>
      {teamData &&
        teamData.map((team, key) => (
          <TeamItem key={key} name={team.name} img={team.img} job={team.job} />
        ))}
    </div>
  );
};

export default Teams;
