import React, { useState } from 'react';
import './Board.css';

function Board({ onCreate }) {
  const [inputText, setInputText] = useState(false);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [openBtn, setOpenBtn] = useState(true);

  function onChangeContent(e) {
    setContent(e.target.value);
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onPost() {
    if (title === '') {
      setTitle('');
    } else if (content === '') {
      setContent('');
    } else {
      onCreate(title, content);
      alert('일기장 게시가 완료되었습니다!');
    }
    setTitle('');
    setContent('');
  }

  function onClickOpen() {
    setInputText(true);
    setOpenBtn(!openBtn);
  }

  function onClickClose() {
    setInputText(false);
    setOpenBtn(true);
  }

  return (
    <div className="Board">
      {inputText ? (
        <div>
          <button onClick={onClickClose} className="closeButton">
            닫기
          </button>
          <button onClick={onPost}>일기 쓰기</button>
          <input
            type="text"
            placeholder=" 제목을 입력하세요..."
            value={title}
            onChange={onChangeTitle}
          />
          <textarea
            type="text"
            placeholder=" 일기을 입력하세요..."
            value={content}
            onChange={onChangeContent}
          />
        </div>
      ) : (
        <div className="Close">
          <button onClick={onClickOpen}>일기장 열기</button>
        </div>
      )}
    </div>
  );
}

export default Board;
