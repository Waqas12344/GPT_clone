import './App.css';
import gptLogo from "./assets/chatgpt.svg";
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import homeIcon from './assets/home.svg';
import savedIcon from './assets/bookmark.svg';
import rocketIcon from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.jpeg';
import gptImgLogo from './assets/chatgptLogo.svg';
import compass_icon from './assets/compass_icon.png'
import bulb_icon from './assets/bulb_icon.png'
import message_icon from './assets/message_icon.png'
import addIcon from './assets/add-30.png'
import { useContext } from 'react';
import { Context } from './context/Context';
function App() {
  const {onSent,recentPrompt,showResult,resultData, setInput, input}=useContext(Context)

  return (
 <div className="App">
  <div className="sideBar">
    <div className="upperSide">
      <div className="upperSideTop">
        <img className='logo' src={gptLogo} alt="logo" />
        <span className='brand'>ChatGPT</span>
      </div>
      <div className="midBtn">
        <img src={addBtn} alt="new Chat" className='addBtn' />
        New Chat
      </div>
      <div className="upperSideBottom">
        <button className="query">
          <img src={msgIcon} alt="Query" />
          What is Programming ?
        </button>
        <button className="query">
          <img src={msgIcon} alt="Query" />
          How to use an API
        </button>
      </div>
    </div>
    <div className="lowerSide">
      <div className="listItems">
        <img src={homeIcon} alt="" className="listitemImg" />
        Home
      </div>
      <div className="listItems">
        <img src={savedIcon} alt="" className="listItemImg" />
        Saved
      </div>
      <div className="listItems">
        <img src={rocketIcon} alt="" className="listitemImg" />
        Upgrated
      </div>
    </div>
  </div>
  <div className="main">
  <div className="nav">
            <p>ChatGPT</p>
            <img src={userIcon} alt="" />
        </div>

    {
      !showResult
      ?
      <>
                  <div className="greet">
                <p><span>Hello,Waqas</span></p>
                <p>How can i help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful place to see on an upcoming road trip</p>
                    <img src={compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful place to see on an upcoming road trip</p>
                    <img src={bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful place to see on an upcoming road trip</p>
                    <img src={message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful place to see on an upcoming road trip</p>
                    <img src={addIcon} alt="" />
                </div>
            </div>
                </>
                :
                <div className="chats">
  <div className="chat">
    <img className='chatImg' src={userIcon} alt="" />
    <p className="txt">
      {recentPrompt}
    </p>
  </div>
  <div className="chat bot">
    <img className='chatImg' src={gptImgLogo} alt="" />
    <p className="txt" dangerouslySetInnerHTML={{__html:resultData}}>
  
    </p>
  </div>

</div>

    }

<div className="chatFooter">
  <div className="inp">
    <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Send message ..' type="text" />
    <button onClick={()=>onSent()} className="send">
      <img  src={sendBtn} alt="send" />
    </button>
  </div>
  <p>ChatGPT my produce incorrect result</p>
</div>
  </div>
 </div>
  );
}

export default App;
