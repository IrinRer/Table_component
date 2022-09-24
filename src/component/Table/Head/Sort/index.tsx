import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React from 'react';
import { onSortDown, onSortUp } from 'store/data/slice';
import styles from './index.module.scss';

interface IProps {
  field: string;
}

const Sort: React.FC<IProps> = ({ field }) => {
  const dispatch = useAppDispatch();

  const onSortUpHandler = () => {
    dispatch(onSortUp(field));
  };

  const onSortDownHandler = () => {
    dispatch(onSortDown(field));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sort_up} onClick={onSortUpHandler} />
      <div className={styles.sort_down} onClick={onSortDownHandler} />
    </div>
  );
};

export default Sort;
