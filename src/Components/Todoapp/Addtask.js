import React, { useState } from 'react'

const Addtask = ({ addTask }) => {
    const [value, setValue] = useState("");


    function addItem() {

        addTask(value);
        setValue('')
    };

    return (
        <div className="inputcontainer">
            <input
                type="text"
                className='input'
                placeholder='Add new task'
                value={value}
                onChange={(e) => { setValue(e.target.value); }}
            />
            <button onClick={addItem} className='add-button'>ADD</button>
        </div>
    )
}

export default Addtask