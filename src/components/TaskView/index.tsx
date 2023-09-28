import { useState } from "react";
import { observer } from "mobx-react";
import { useMst } from "@models/Root";
import { v4 as uuid } from "uuid";

const TaskView = observer(() => {
  const { task } = useMst();
  const [value, setValue] = useState("");
  return (
    <div className='flex flex-col justify-center'>
      <div className='mb-1'>
        <label htmlFor='hs-trailing-button-add-on' className='sr-only'>
          Label
        </label>
        <div className='flex rounded-md shadow-sm'>
          <input
            type='text'
            id='hs-trailing-button-add-on'
            name='hs-trailing-button-add-on'
            placeholder='new todo'
            value={value}
            onChange={e => setValue(e.target.value)}
            className='py-3 px-4 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
          />
          <button
            type='button'
            onClick={() => {
              if (!value) return;
              task.add({
                id: uuid(),
                details: value,
                is_done: false
              });
              setValue("");
            }}
            className='py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm'>
            ADD
          </button>
        </div>
      </div>
      {task.Todo.map(t => (
        <div
          className='p-3 my-1 rounded-md border bg-gray-300 flex flex-row justify-between items-center'
          key={t.id}>
          <span className='font-serif text-white'>{t.details}</span>
          <button
            className='py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm'
            onClick={() => {
              task.remove(t.id);
            }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
});

export default TaskView;
