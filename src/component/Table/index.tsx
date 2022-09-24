import React from 'react';
import styles from './index.module.scss';

const Table = () => {
  return (
    <table>
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
      <tbody>
        <tr>
          <td>1</td>
          <td>9.1</td>
          <td>Зелёная миля</td>
          <td>1999</td>
        </tr>
        <tr>
          <td>2</td>
          <td>9.1</td>
          <td>Побег из Шоушенка</td>
          <td>1994</td>
        </tr>
        <tr>
          <td>3</td>
          <td>8.6</td>
          <td>Властелин колец: Возвращение Короля</td>
          <td>2003</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
