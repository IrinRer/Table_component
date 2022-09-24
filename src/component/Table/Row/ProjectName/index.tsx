import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getName } from 'store/data/selectors';

const ProjectName = () => {
  const names = useAppSelector(getName);

  return (
    <tr>
      {names.map((item) => (
        <td>{item}</td>
      ))}
    </tr>
  );
};

export default ProjectName;
