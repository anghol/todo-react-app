import { DeleteButton } from './Buttons';

function TaskList( { tasks, deleteTask, changeCheckbox } ) {
    const listItems = tasks.map(task => 
      <li key={task.id} className='task-item'>
        <label>
          <input
            type="checkbox"
            checked={task.type === 'completed'}
            onChange={() => changeCheckbox(task.id)}
          />
          <p>{task.text}</p>
        </label>
          <DeleteButton text='Удалить' onClick={() => deleteTask(task.id)} />
      </li>
    )
  
    return (
      Boolean(listItems.length) && <ul className='task-list'>{listItems}</ul>
    )  
}

export default TaskList;