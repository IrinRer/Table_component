import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getStatus } from 'store/data/selectors';

const StatusFilter = () => {
  const status = useAppSelector(getStatus);

  return (
    <>
      {status.map((item) => (
        <th key={item}>
          Project
          <select>
            <option value="all">All</option>
            <option value={item}>{item}</option>
          </select>
        </th>
      ))}
    </>
  );
};

export default StatusFilter;
