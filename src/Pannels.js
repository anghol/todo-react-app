import { useState } from "react";
import { FilterButton } from "./Buttons";

export function FilterPannel({ onClickFilter }) {
    const [activeButton, setActiveButton] = useState([true, false, false]);
  
    return (
      <div className="filter-pannel">
        <FilterButton
          text='Все' isActive={activeButton[0]}
          onClick={() => { 
            onClickFilter('all');
            setActiveButton([true, false, false]);
            }
          }
        />
        <FilterButton
          text='Активные' isActive={activeButton[1]}
          onClick={() => { 
            onClickFilter('active');
            setActiveButton([false, true, false]);
            }
          }
        />
        <FilterButton
          text='Завершенные' isActive={activeButton[2]}
          onClick={() => { 
            onClickFilter('completed');
            setActiveButton([false, false, true]);
            }
          }
        />
      </div>
    )
}
  
export function Info({ activeCount, completedCount }) {
    return (
      <div className="info">
        <p>Активно: {activeCount}</p>
        <p>Завершено: {completedCount}</p>
        <p>Всего: {activeCount + completedCount}</p>
      </div>
    )
}