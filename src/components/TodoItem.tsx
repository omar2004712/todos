'use client';

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <li className='flex gap-1 items-center'>
      <input
        id={id}
        defaultChecked={complete}
        type='checkbox'
        className='cursor-pointer peer'
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className='peer-checked:line-through peer-checked:text-slate-500 selection:bg-transparent cursor-pointer'
      >
        {title}
      </label>
    </li>
  );
}
