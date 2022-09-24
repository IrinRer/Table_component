import React from 'react';
import Head from './Head';
import styles from './index.module.scss';
import ProjectName from './Row/ProjectName';

const Table = () => {
  return (
    <table>
      <Head />
      <tbody>
        <ProjectName/>
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
