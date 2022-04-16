import React from 'react';
import Card from 'atoms/card/Card';
import RoundedImage from 'atoms/image/RoundedImage';
import styles from 'molecules/team/TeamItem.module.css';

const TeamItem = (props) => {
  return (
    <Card className="team violet fit rounded">
      <div className={styles.imgWrapper}>
        <RoundedImage src={props.img || 'team1.png'} />
        <div className={styles.teamInfo}>
          <h5>{props.name || 'Name'}</h5>
          <p>{props.job || 'Job'}</p>
        </div>
      </div>
    </Card>
  );
};

export default TeamItem;
