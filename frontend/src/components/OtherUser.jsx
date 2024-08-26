import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';


const OtherUser = ({user}) => {
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(store => store.user);
    const selectedUserHandler = (user) => {
        console.log(user);
        dispatch(setSelectedUser(user));
    }

  return (
    <>
    <div onClick={() => selectedUserHandler(user)} 
    className={`${selectedUser?._id === user?._id ? 'bg-slate-200 text-green-700' : ''} flex gap-2 items-center text-white hover:bg-slate-200 rounded p-2 cursor-pointer hover:text-black hover:font-semibold`}> 
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src={user?.profilePhoto} alt='user-profile'/>
                </div>             
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex justify-between gap-2'>
                    <p>{user?.fullName}</p>
                </div>             
            </div>
        </div>
        <div className='divider my-0 py-0 '></div>
</>
  )
}

export default OtherUser