import { useState } from 'react';
import './App.css';

const ShoppingList = () => {
  const [item, setItem] = useState([]);
  const [newItem, setNewItem] = useState('');

  function addItem(){
    if (newItem){
    setItem([...item, {name: newItem, isEdit: false, status: false}]);
    setNewItem('');
    }
  }

  function changeStatus (index){
    setItem((item.map((item, i) => 
      i === index ? {...item, status: !item.status} : item
    )));
  }

  function removeItem (index) {
    setItem ((item.filter((_, i) => i !== index)));
  }

  function editItem (index){
    setItem(item.map((item, i) => i === index ? {...item, isEdit: !item.isEdit} : item));
  }

  function saveEdit (index, newName){
    setItem(item.map((item, i) => 
      i === index ? { ...item, name: newName, isEdit: false } : item
    ));
  }

  return (
    <>
      <div className='box'>
        <div>
          <h2>Shopping List</h2>
        </div>
        <div>
          <input className='input' placeholder='Add item' 
          onChange={(e) => setNewItem(e.target.value)} value={newItem}/>
          <button className='addbutton' onClick={addItem}>Add</button>
        </div>

        <ul>
          {item.map((item, index) => (
            <div className='boxlist'>
            
            <li
              key={index} onClick={() => changeStatus(index)} className={item.status ? 'changeStatus' : ''}
            >
              {item.isEdit ? ( 
                  <input defaultValue={item.name}
                    onBlur={(e) => saveEdit(index, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') saveEdit(index, e.target.value)}
                    }
                    autoFocus
                  />
              ) : (
                item.name)
              }

              
              <button className='editbutton' onClick={(e) => {e.stopPropagation(); editItem(index);}}>
                Edit
              </button>
              
              <button className='removebutton' onClick={(e) =>{e.stopPropagation(); removeItem(index); }}>
                remove
              </button>
              
              

            </li>
            
            </div>
          ))}
        </ul>
        
      </div>
    
    </>
  );
};
export default ShoppingList;

