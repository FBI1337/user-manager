import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from './store/store';
import { generateUsers } from './mockData';
import UserList from './components/UserList';
import UserEditor from './components/UserEditor';
import './Styles/App.css';

const App = () => {
  const dispatch = useDispatch();

  const [isListLoaded, setIsListLoaded] = useState(false)

  useEffect(() => {
    const users = generateUsers(1000000);
    dispatch(setUsers(users));
  }, [dispatch]);

  return (
    <div className="wrapper">
      <UserList onListLoaded={() => setIsListLoaded(true)}/>
      <UserEditor isListLoaded={isListLoaded} />
    </div>
  );
};

export default App;
