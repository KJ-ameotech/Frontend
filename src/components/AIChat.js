import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aiChatMessage } from "../Redux/Actions/AuthAction";
import { baseUrl } from "../Utils/ApiUrl";
// import "./AIChat.css";

const AIChat = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.Auth);
  const { aiMessageData, aiMessageLoading } = authState;
  const [messages, setMessages] = useState([]);
  const [sendMessage, setSendMessage] = useState("");

  useEffect(() => {
    if (aiMessageData?.answer) {
      const aiMessage = { name: "ai", message: aiMessageData?.answer };
      setMessages((messages) => [...messages, aiMessage]);
    }
  }, [aiMessageData]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (sendMessage != "") {
      const userMessage = { name: "user", message: sendMessage };
      setMessages((messages) => [...messages, userMessage]);
      setSendMessage('');
      dispatch(aiChatMessage(sendMessage));
    }
  };

  return (
    <>
      <div class="container">
        <div class="chatbox">
          <div class="chatbox__support">
            <div class="chatbox__header">
              <div class="chatbox__image--header">
                <img
                  src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                  alt="image"
                />
              </div>
              <div class="chatbox__content--header">
                <h4 class="chatbox__heading--header">Ameo Bot</h4>
                <p class="chatbox__description--header">
                  Hi. My name is Ameo. How can I help you?
                </p>
              </div>
            </div>
            <div class="chatbox__messages">
              <div className="body-chat-message-user">
                {!!messages?.length &&
                  messages?.map((item) => {
                    return (
                      <div
                        className={
                          item?.name == "user"
                            ? "message-user-right"
                            : "message-user-left"
                        }
                      >
                        <div
                          className={
                            item?.name == "user"
                              ? "message-user-right-img"
                              : "message-user-left-img"
                          }
                        >
                          {/* <img src={item.image ? baseUrl + item.image :
                                    "/assets/images/background/bg.jpg"} alt="" /> */}
                          <p className="mt-0 mb-0">
                            <strong>{item.name}</strong>
                          </p>
                        </div>
                        <div
                          className={
                            item?.name == "user"
                              ? "message-user-right-text"
                              : "message-user-left-text"
                          }
                        >
                          <strong>{item.message}</strong>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div class="chatbox__footer">
              <input
                type="text"
                placeholder="Write a message..."
                value={sendMessage}
                onChange={(e) => setSendMessage(e.target.value)}
              />
              <button
                class="chatbox__send--footer send__button"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
          <div class="chatbox__button">
            <button>
              <img src="{{ url_for('static', filename='images/chatbox-icon.svg') }}" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;
