import React from 'react';
import InfoRow from 'atoms/row/InfoRow';
import Row from 'atoms/row/Row';
import Teams from './Teams';
import styles from './TeamMembers.module.scss';

const TeamMembers = () => {
  return (
    <Row>
      <div className={styles.membersWrapper}>
        <div className={styles.content}>
          <InfoRow
            title="Our talented Team"
            desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
          />
        </div>
        <Teams />
      </div>
    </Row>
  );
};

export default TeamMembers;
