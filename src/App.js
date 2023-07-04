import { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { DeleteButton } from "./Buttons";
import { FilterPannel, Info } from "./Pannels";

// Типо база данных
const myTasks = [];

function App() {
  const [nextId, setNextId] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [activeCount, setActiveCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  function handleSubmit(taskText) {
    /* Получение значения из формы и создание новой задачи */

    // Обработка текста задачи и проверка на пустой ввод
    const trimmedText = taskText.trim();
    if (trimmedText.length === 0) {
      return;
    }

    // Добавить задание и увеличить счётчик активных задач
    const task = {id: nextId, text: trimmedText, type: 'active'};
    myTasks.push(task);
    const newTasks = myTasks.slice();
    setTasks(newTasks);
    setActiveCount(activeCount + 1);
    setNextId(nextId + 1);
  }

  function handleDeleteTask(id) {
    /* Удалить отдельную задачу */

    // Удалить задачу по id из базы
    let index = myTasks.map(task => task.id).indexOf(id);
    const status = myTasks[index].type;
    myTasks.splice(index, 1);
    
    index = tasks.map(task => task.id).indexOf(id);
    const newTasks = tasks.slice();
    newTasks.splice(index, 1);
    setTasks(newTasks);

    // Обновить счётчик в зависимости от типа задачи
    if (status === 'completed') {
      setCompletedCount(completedCount - 1);
    } else {
      setActiveCount(activeCount - 1);
    }
  }

  function handleDeleteAll() {
    /* Удалить все задачи */

    myTasks.splice(0, myTasks.length);
    setTasks(myTasks);
    setActiveCount(0);
    setCompletedCount(0);
  }

  function handleChangeStatus(id) {
    /* Изменить статус задачи (активно / завершено) */

    const index = myTasks.map(task => task.id).indexOf(id);
    const status = myTasks[index].type;

    if (status === 'active') {
      myTasks[index].type = 'completed';
      setActiveCount(activeCount - 1);
      setCompletedCount(completedCount + 1);
    } else {
      myTasks[index].type = 'active';
      setActiveCount(activeCount + 1);
      setCompletedCount(completedCount - 1);
    }
  }

  function handleFilter(status) {
    /* Фильтрация задач по статусу (все / активные / завер) */

    let newTasks;

    if (status === 'active') {
      newTasks = myTasks.filter(task => task.type === 'active');
    } else if (status === 'completed') {
      newTasks = myTasks.filter(task => task.type === 'completed');
    } else {
      newTasks = myTasks.slice();
    }

    setTasks(newTasks);
  }

  return (
    <>
      <h1 className="header">Список задач</h1>
      <div className="container">
        <NewTaskForm addTask={handleSubmit} />
        <Info activeCount={activeCount} completedCount={completedCount} />
        <FilterPannel onClickFilter={handleFilter} />
        <TaskList tasks={tasks} deleteTask={handleDeleteTask} changeCheckbox={handleChangeStatus}/>
        {Boolean(myTasks.length) && <DeleteButton text='Удалить всё' onClick={handleDeleteAll} />}
      </div>
    </>
  );
}

export default App;