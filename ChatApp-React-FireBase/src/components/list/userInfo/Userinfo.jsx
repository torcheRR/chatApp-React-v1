import { BsCameraVideoFill, BsThreeDots } from 'react-icons/bs'
import './userInfo.css'
import { FiEdit } from 'react-icons/fi'
import {useUserStore} from "../../../lib/userStore"


const Userinfo = () => {
  const {currentUser} = useUserStore();
  return (
    <div className='userinfo'>
        <div className='user'>
            <img src={currentUser.avatar || "./avatar.JPG"} alt="" />
            <h2>{currentUser.username}</h2>
        </div>
        <div className='icons'>
        <BsThreeDots className='icon'/>
        <BsCameraVideoFill className='icon'/>
        <FiEdit className='icon'/>
        </div>
    </div>
  )
}

export default Userinfo