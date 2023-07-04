import { useState } from "react";

function NewTaskForm( {addTask} ) {
    const [value, setValue] = useState('');
  
    return (
      <form
        className="task-form"
        onSubmit={event => {
          event.preventDefault();
          addTask(value);
          setValue('');
          }
        }
      >
        <input
          className="task-input"
          type="text"
          placeholder="Новая задача"
          onChange={event => { setValue(event.target.value); }}
          value={value}
        />
        <button className="add-btn" type="submit">Добавить</button>
      </form>
    )
}

export default NewTaskForm;