import React from 'react'

const Listtask = ({task,index,removeTask}) => {
    function deletebtn(e){
console.log(e);

    }

  return (
    <>
    <div className='list-task'>
        {task.title}
        <buton className="delete-btn" onClick={()=> {removeTask(index)}}  >Delete</buton>
    </div>
    </>
  )
}

export default Listtask