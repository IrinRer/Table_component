import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getData} from 'store/data/selectors';
import styles from './index.module.scss';

const Rows = () => {
  const data = useAppSelector(getData);

  return (
    <>
      {data.map((item) => (
        <tr data-color={item.status} className={styles.row} key={item.id}>
          <td className={styles.td_name}>
            <div
              className={styles.dot}
              style={{ backgroundColor: item.status }}
            />
            {item.name}
          </td>
          <td>{item.type}</td>
          <td>{item.conditions}</td>
          <td>$ {item.volume}</td>
          <td>{item.roi}</td>
          <td>{item.free}</td>
          <td>{item.hedge} %</td>
        </tr>
      ))}
    </>
  );
};

export default Rows;
