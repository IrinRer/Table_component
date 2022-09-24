import Table from 'component/Table';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React, { useEffect } from 'react';
import { fetchDataAction } from 'store/data/thunk';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);
  
  return <Table/>;
};

export default App;
