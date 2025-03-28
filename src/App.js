import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from './store/store';
import { generateUsers } from './mockData';
import UserList from './components/UserList';
import UserEditor from './components/UserEditor';
import './Styles/App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const users = generateUsers(1000000);
    dispatch(setUsers(users));
  }, [dispatch]);

  return (
    <div className="wrapper">
      <UserList />
      <UserEditor />
    </div>
  );
};

export default App;
