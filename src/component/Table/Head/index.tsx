import React from 'react';
import styles from './index.module.scss';

const Head = () => {
  return (
    <thead>
      <tr>
        <th>Project</th>
        <th>Token Type</th>
        <th>Conditions</th>
        <th>Volume</th>
        <th>ROI</th>
        <th>Free float</th>
        <th>Insuranse hedge</th>
      </tr>
    </thead>
  );
};

export default Head;
