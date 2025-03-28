import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { useSelector, useDispatch } from 'react-redux'; 
import { selectUser } from '../store/store';
import placeholder from '../assets/avatar-placeholder.png';
import './UserList.css';

const UserList = () => {

    const users = useSelector(state => state.users.list);
    const dispatch = useDispatch();
    const [listHeight, setListHeight] = useState(window.innerHeight - 20);

    useEffect(() => {
      const updateHeight = () => setListHeight(window.innerHeight - 20);
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }, []);


    const Row = ({ index, style }) => (
        <div
        className="userListItem"
        style={style}
        onClick={() => dispatch(selectUser(users[index]))}
        >
            <img src={placeholder} alt='avatar' className='avatarIcon'/>
            {users[index].name}
        </div>
    )
  return (

    <div className="wrapperList">
      <List
      height={listHeight}
      itemCount={users.length}
      itemSize={50}
      width={300}
    >
      {Row}
      </List>
    </div>
  )
}

export default UserList
