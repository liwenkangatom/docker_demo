import { observer } from "mobx-react";
import { useMst } from "../../models/Root";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const TaskView = observer(() => {
  const { task } = useMst();
  const [value, setValue] = useState("");
  return (
    <div>
      <input placeholder='new todo' value={value} onChange={e => setValue(e.target.value)} />
      <button
        onClick={() => {
          task.add({
            id: uuid(),
            details: value,
            is_done: false
          });
        }}>
        Add
      </button>
      {task.Todo.map(t => (
        <div key={t.id}>{t.details}</div>
      ))}
    </div>
  );
});

export default TaskView;
