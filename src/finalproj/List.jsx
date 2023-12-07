import React, { useState } from 'react';
import './List.css';
import Item from './Item';

function List({ form, onClear, deleteForm, setForm }) {
  const [search, setSearch] = useState('');
  function onChangeSearch(e) {
    setSearch(e.target.value);
  }
  function searchResult() {
    return search === ''
      ? form
      : form.filter((item) => item.postTitle.includes(search));
  }
  return (
    <div className="List">
      <input
        className="searchbar"
        placeholder="이전 일기 검색"
        value={search}
        onChange={onChangeSearch}
      />
      <div>
        {searchResult().map((text) => (
          <Item
            key={text.id}
            {...text}
            onClear={onClear}
            deleteForm={deleteForm}
            form={form}
            setForm={setForm}
          ></Item>
        ))}
      </div>
    </div>
  );
}

export default List;
