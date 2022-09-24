import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { setFilterStatus, setFilterType } from 'store/data/slice';
import { getStatus } from 'store/status/selectors';
import { getType } from 'store/type/selectors';
import styles from './index.module.scss';
import Sort from './Sort';

const Head = () => {
  const status = useAppSelector(getStatus);
  const types = useAppSelector(getType);
  const dispatch = useAppDispatch();

  const onFilterStatus = (e) => {
    dispatch(setFilterStatus(e.target.value));
  };

  const onFilterType = (e) => {
    dispatch(setFilterType(e.target.value));
  };

  return (
    <thead>
      <tr>
        <th>
          <select className={styles.select} onChange={onFilterStatus}>
            <option value="all">All</option>
            {status.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          Project
        </th>

        <th>
          <select className={styles.select} onChange={onFilterType}>
            <option value="all">All</option>
            {types.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          Token Type
        </th>
        <th>Conditions</th>
        <th>
          <div className={styles.sort}>
            <p>Volume</p> <Sort field="volume" />
          </div>
        </th>

        <th>
          <div className={styles.sort}>
            <p>ROI</p> <Sort field="roi" />
          </div>
        </th>

        <th className={styles.sort}>
          <div className={styles.sort}>
            <p>Free float</p>
            <Sort field="free" />
          </div>
        </th>
        <th>
          <div className={styles.sort}>
            <p>Insuranse hedge</p>
            <Sort field="hedge" />
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default Head;
