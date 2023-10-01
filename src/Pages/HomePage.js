
import Blob from '../components/Blob';
import Navbar from '../components/Navbar';
import './HomePage.css'
import Footer from '../components/Footer';
import ChatBox from '../components/ChatBox';
import { MdSend } from "react-icons/md";
import { useState, useEffect } from 'react';
import { PulseLoader } from 'react-spinners'


const HomePage = () => {
  const [start, setStart] = useState(false);
  const [isAItyping, setAItyping] = useState(true);
  const [messages, setMessages] = useState([
    {
      message: "You are a career counsellor expert in counselling students in 10th class, helping them choose diploma or stream for their 11, 12 CBSE board class or an ITI course or go for the preparation of any government Jobs. So ask me as many questions to gain all the relevant information to determine what stream and career options would be most suited for me. In the first reply tell me the total no. of questions approximately that I have to answer, then only ask one question, once I reply to that, ask the second question and so on. Start the conversation with a greeting. In the end of the whole conversation promt me to ask any further query if I like to.",
      sentTime: "just now",
      sender: "user",
      display: false,
    }
  ]);
  const [userInput, setUserInput] = useState("");
  if (!start) {
    console.log("start");
    setStart(true);
    messageToAi(messages);
  }

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [messages]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (isAItyping || userInput.trim().length === 0) {
      console.log('waiting for ai or empty input');
      return;
    }
    const newMessage = {
      message: userInput,
      direction: 'outgoing',
      sender: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setUserInput('');
    setAItyping(true);
    await messageToAi(newMessages);
  }
  async function messageToAi(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message};
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        ...apiMessages
      ],
    }

    await fetch("https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + process.env.REACT_APP_OPENAI_API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      }).then((data) => {
        return data.json();
      }).then((data) => {
        // console.log(data);
        // console.log('before', messages);
        setMessages([...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]);
        // console.log('after', messages);
      });
    setAItyping(false);
  }

  return (
    <div className='mainWrap'>
      <Navbar />
      <div className="hide-on-mobile">
        <Blob />
      </div>
      <div className="homeWrap">
        <div className="chatWrap" id="chatWrap">
          {messages.map((message, index) => (
            (message.display === undefined || message.display) ?
              <ChatBox key={index} content={message.message} isAi={message.sender === "ChatGPT"} />
              : null
          ))}
        </div>
        <PulseLoader
          loading={isAItyping}
          color={"#ACBBBF"}
          style={{marginBottom: '1em'}}
          size={9}
        />
        <form className="inputWrap" onSubmit={handleSubmit}>
          <input type="text"
            placeholder="Enter msg..."
            value={userInput}
            autoFocus
            onChange={(e) => setUserInput(e.target.value)} />
          <MdSend className='sendBtn' onClick={handleSubmit} />
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage