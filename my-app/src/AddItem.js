import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'

function AddItem({newItem, setNewItem, handleSubmit}) {
    const inputRef = useRef();
   return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input value={newItem} 
        ref={inputRef}
        onChange={(e) => setNewItem(e.target.value)} 
        autoFocus 
        id='addItem' 
        type="text" 
        placeholder='add item' 
        required 
       />

      <button onClick={() => inputRef.current.focus()} type='submit' aria-label='Add Item'>
        <FaPlus />
      </button>

    </form>
  )
}

export default AddItem

