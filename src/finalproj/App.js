import Header from './Header';
import Board from './Board';
import './App.css';
import List from './List';
import { useRef, useState, useEffect } from 'react';

function App() {
  const [form, setForm] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    // 로컬 스토리지에서 데이터를 가져옵니다.
    const rawData = localStorage.getItem('form');

    // 가져온 데이터가 없으면 함수를 종료합니다.
    if (!rawData) {
      return;
    }

    try {
      // JSON 형식의 데이터를 파싱합니다.
      const localData = JSON.parse(rawData);

      // 가져온 데이터가 배열인지 확인하고, 빈 배열이거나 잘못된 데이터 형식이면 함수를 종료합니다.
      if (!Array.isArray(localData) || localData.length === 0) {
        return;
      }

      // 데이터를 id를 기준으로 내림차순으로 정렬합니다.
      localData.sort((a, b) => Number(b.id) - Number(a.id));

      // 다음 아이디를 설정합니다.
      idRef.current = localData[0].id + 1;

      // 정렬된 데이터를 상태로 설정합니다.
      setForm(localData);
    } catch (error) {
      // 데이터 파싱 또는 처리 과정에서 오류가 발생하면 콘솔에 오류를 출력합니다.
      console.error('Error parsing or processing local data:', error);
    }
  }, []);

  function onCreate(postTitle, postContent) {
    const newForm = {
      id: idRef.current,
      postTitle,
      createDate: new Date().getTime(),
      postContent,
    };
    const newPost = [newForm, ...form];
    setForm(newPost);
    localStorage.setItem('form', JSON.stringify(newPost));
    idRef.current += 1;
  }

  function onClear(targetId) {
    const newPost = form.map((item) =>
      item.id === targetId ? { ...item, check: !item.check } : item
    );
    setForm(newPost);
    localStorage.setItem('form', JSON.stringify(newPost));
  }

  function deleteForm(targetId) {
    const newPost = form.filter((item) => item.id !== targetId);
    setForm(newPost);
    localStorage.setItem('form', JSON.stringify(newPost));
  }

  return (
    <div className="App">
      <Header></Header>
      <Board onCreate={onCreate}></Board>
      <List
        form={form}
        onClear={onClear}
        deleteForm={deleteForm}
        setForm={setForm}
      ></List>
    </div>
  );
}

export default App;
