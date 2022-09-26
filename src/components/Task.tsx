import { Trash } from "phosphor-react";
import { ChangeEvent, useState } from "react";

import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  content: string;
  isComplete: boolean;
  onDelete: (idFromTaskToDelete: string) => void;
  onChangeTaskState: (idFromTaskToChangeState: string) => void;
}

export function Task({id, content, isComplete, onDelete, onChangeTaskState}: TaskProps) {
  const [checkbox, setCheckbox] = useState(isComplete);

  function handleCheck(event: ChangeEvent<HTMLInputElement>){
    onChangeTaskState(id);
    setCheckbox(!checkbox);
  } 

  function handleDeleteTask(){
    onDelete(id);
  }

  return (
    <div className={styles.task}>
      <input onChange={handleCheck} checked={checkbox} type="checkbox" />
      <p>
        {content}
      </p>
      <button onClick={handleDeleteTask}>
        <Trash size={14} />
      </button>
    </div>
  );
}
