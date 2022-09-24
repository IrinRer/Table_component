import Table from 'component/Table';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React, { useEffect } from 'react';
import { fetchDataAction } from 'store/data/thunk';
import { fetchStatusAction } from 'store/status/thunk';
import { fetchTypesAction } from 'store/type/thunk';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDataAction());
    dispatch(fetchTypesAction());
    dispatch(fetchStatusAction());
  }, [dispatch]);
  
  return <Table/>;
};

export default App;
