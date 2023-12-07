import React, { useState } from 'react';
import './Item.css';

function Item({
  id,
  createDate,
  postContent,
  postTitle,
  deleteForm,
  setForm,
  form,
}) {
  const [showcontent, setShowcontent] = useState(false);
  const [tryEdit, setTryEdit] = useState(false);
  const [editContent, setEditContent] = useState(postContent);
  const [showBox, setShowBox] = useState(true);

  function onClickShow() {
    setShowcontent(true);
  }

  function onClickNoShow() {
    setShowcontent(false);
    setEditContent('');
    setTryEdit(false);
    setShowBox(true);
  }

  function postDelete() {
    deleteForm(id);
    alert('일기가 삭제되었습니다.');
  }

  function onChangeEdit(e) {
    setEditContent(e.target.value);
  }

  function editForm(targetId) {
    if (editContent === '') {
      alert('편집할 내용을 입력하세요.');
      return;
    }
    const updatedForm = form.map((item) =>
      item.id === targetId ? { ...item, postContent: editContent } : item
    );
    setForm(updatedForm);
    localStorage.setItem('form', JSON.stringify(updatedForm));
    alert('수정 되었습니다!');
    setTryEdit(false);
    setShowBox(true);
  }

  function onClickEdit() {
    setTryEdit(true);
    setShowBox(false);
  }

  return (
    <div className="Item">
      <div className="Allelement">
        <div className="title">{postTitle}</div>
        <div className="date">{new Date(createDate).toLocaleDateString()}</div>
        <button className="delBtn" onClick={postDelete}>
          삭제
        </button>
        <button className="repBtn" onClick={onClickShow}>
          확인
        </button>
      </div>
      {showcontent && (
        <div>
          <div className="check">
            <button onClick={onClickNoShow} className="Review">
              X
            </button>
            {tryEdit ? (
              <div>
                <button onClick={() => editForm(id)}>저장</button>
                <textarea
                  value={editContent}
                  onChange={onChangeEdit}
                ></textarea>
              </div>
            ) : (
              <div>
                <button onClick={onClickEdit}>수정</button>
              </div>
            )}
          </div>
          <textarea value={postContent} readOnly />
        </div>
      )}
    </div>
  );
}

export default Item;
