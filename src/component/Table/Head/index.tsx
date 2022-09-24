import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getStatus } from 'store/data/selectors';
import { setFilterStatus, setFilterType } from 'store/data/slice';
import { getType } from 'store/type/selectors';
import styles from './index.module.scss';

const Head = () => {
  const status = useAppSelector(getStatus);
  const types = useAppSelector(getType);
  const dispatch = useAppDispatch();

  const handleChangeStatus = (e) => {
    dispatch(setFilterStatus(e.target.value));
  };

  const handleChangeType = (e) => {
    dispatch(setFilterType(e.target.value));
  };

  return (
    <thead>
      <tr>
        <th>
          Project
          <select className={styles.select} onChange={handleChangeStatus}>
            <option value="all">All</option>
            {status.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </th>

        <th>
          Token Type
          <select className={styles.select} onChange={handleChangeType}>
            <option value="all">All</option>
            {types.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </th>
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
