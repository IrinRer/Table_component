import React from 'react';
import Head from './Head';
import Rows from './Row';
import styles from './index.module.scss';

const Table = () => {
  return (
    <table className={styles.table}>
      <Head />
      <tbody>
        <Rows />
      </tbody>
    </table>
  );
};

export default Table;
