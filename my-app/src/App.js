import { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1: 1;
    const myItem = {id, checked: false, item};
    const listItems = [...items, myItem];
    setAndSaveItems(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id? {...item, checked: !item.checked}: item);
    setAndSaveItems(listItems)
  }

  const handleDelete = (id) => {
    const remove_item = items.filter((item) => item.id !== id);
    setAndSaveItems(remove_item);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setNewItem('');
    addItem(newItem);
  }

  return (
    <div className="App">
      <Header title="Hello Praise 🎄"/>
      <AddItem 
        newItem={newItem} 
        setNewItem={setNewItem} 
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch}/>
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
