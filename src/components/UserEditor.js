import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { updateUser } from '../store/store';
import placeholder from '../assets/avatar-placeholder.png';
import './UserEditor.css';

const UserEditor = () => {
    const selectedUser = useSelector(state => state.users.selectedUser);
    const dispatch = useDispatch();
    const [user, setUser ] = useState(selectedUser);

    useEffect(() => { setUser(selectedUser); }, [selectedUser]);

    
    if (!user) return <div className='wrapperText'><h2>Выберите пользователя</h2></div>

  return (
    <div className='wrapperEditor'>
        <h2>Редактирование</h2>
        <input type='text' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value})}  className='userName'/>
        <div className='editor'>
        <img src={placeholder} alt='avatar' className='avatarIconEditor'/>
        <div className='writing'>
          <div className='line'>
            <label>Должность</label>
            <input type='text' value={user.jobTitle} onChange={(e) => setUser({ ...user, jobTitle: e.target.value})} className='inputEditor'/>
          </div>
          <div className='line'>
            <label>Отдел</label>
            <input type='text' value={user.department} onChange={(e) => setUser({ ...user, department: e.target.value})} className='inputEditor'/>
          </div>
          <div className='line'>
            <label>Компания</label>
            <input type='text' value={user.company} onChange={(e) => setUser({ ...user, company: e.target.value})} className='inputEditor'/>
          </div>
        </div>
        </div>
        <button onClick={() => dispatch(updateUser(user))}>Сохратнить</button>
    </div>
  )
}

export default UserEditor
