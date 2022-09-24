import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getData } from 'store/data/selectors';

const Rows = () => {
  const data = useAppSelector(getData);

  return (
    <>
      {data.map((item) => (
        <tr>
          <td>{item.name}</td>
          <td>{item.type}</td>
          <td>{item.conditions}</td>
          <td>{item.volume}</td>
          <td>{item.roi}</td>
          <td>{item.free}</td>
          <td>{item.hedge}</td>
        </tr>
      ))}
    </>
  );
};

export default Rows;
