import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getStatus } from 'store/data/selectors';
import { setFilter } from 'store/data/slice';
import styles from './index.module.scss';

const Head = () => {
  const status = useAppSelector(getStatus);
  const dispatch = useAppDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <thead>
      <tr>
        <th>
          Project
          <select className={styles.select} onChange={handleChange}>
            <option value="all">All</option>
            {status.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </th>

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
