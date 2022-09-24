import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getBuyId, getData } from 'store/data/selectors';
import { setBuy } from 'store/data/slice';
import styles from './index.module.scss';

const Rows = () => {
  const data = useAppSelector(getData);
  const id = useAppSelector(getBuyId);
  const dispatch = useAppDispatch();

  const onBuy = (id: number) => {
    dispatch(setBuy(id));
  };

  return (
    <>
      {data.map((item) => (
        <tr data-color={item.status} className={styles.row} key={item.id}>
          <td className={styles.td_name}>
            <div
              className={styles.dot}
              style={{ backgroundColor: item.status }}
            />
            <a href={`${item.id}`}>{item.name}</a>
          </td>
          <td>
            <a href={`${item.id}`}>{item.type}</a>
          </td>
          <td>
            <a href={`${item.id}`}>{`${
              item.conditions[0]
            } ${item.conditions.slice(1)}`}</a>
          </td>
          <td>
            <a href={`${item.id}`}>$ {item.volume.toLocaleString('ru-RU')}</a>
          </td>
          <td>
            <a href={`${item.id}`}>{item.roi}</a>
          </td>
          <td>
            <a href={`${item.id}`}>{item.free}</a>
          </td>
          <td>
            <a href={`${item.id}`}>{item.hedge} %</a>
          </td>
          <td>
            <button
              type="button"
              className={styles.btn}
              onClick={() => onBuy(item.id)}
              disabled={id.includes(String(item.id))}
            >
              Buy
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Rows;
