import React from 'react'
import './detail.css'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { FaDownload } from 'react-icons/fa6'
import { auth, db } from '../../lib/firebase'
import { useUserStore } from '../../lib/userStore'
import { useChatStore } from '../../lib/chatStore'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'



const Detail = () => {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock, resetChat } =
    useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    auth.signOut();
    resetChat()
  };

  return (
    <div className='detail'>

      <div className="user">
        <img src={user?.avatar || "./default.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>


      <div className="info">
      <div className="option">
        <div className="title">
          <span>Chat Settings</span>
          <IoIosArrowUp className='icon'/>
        </div>
      </div>
      
      <div className="option">
        <div className="title">
          <span>Privacy & Help</span>
          <IoIosArrowUp className='icon'/>
        </div>
      </div>

      <div className="option">
        <div className="title">
          <span>Shared Photos</span>
          <IoIosArrowDown className='icon'/>
        </div>


        <div className="photos">
          <div className="photoItem">
            <div className="photoDetail">
            <img src="./karım.jpg" alt="" />
            <span>photo_2024_8.png</span>
            </div>
            <FaDownload className='icon'/>
          </div>
        </div>

      </div>

      <div className="option">
        <div className="title">
          <span>Shared Files</span>
          <IoIosArrowUp className='icon'/>
        </div>
      </div>
      <button onClick={handleBlock}>
      {isCurrentUserBlocked
            ? "You are Blocked!"
            : isReceiverBlocked
            ? "User blocked"
            : "Block User"}
      </button>
      <button className='logout' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Detail