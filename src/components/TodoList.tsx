import { FC, useState } from 'react';
import { useStorage } from '../hooks/useStorage';
import { ITodoItem } from '../models/todo';

export const TodoList: FC = () => {
  const {
    storedValue: todos,
    setStorageValue: setTodos,
  } = useStorage<ITodoItem[]>({
    key          : 'todo',
    storageType  : 'local',
    initialValue : [],
  });

  const [inputValue, setInputValue] = useState<string>('');

  return (
    <section>
      <input
        placeholder='Todo'
        value={}
        onChange={}
      />

      <ul>
        {todos.map(({ id, text }) => (
          <li key={id}>
            { text }
          </li>
        ))}
      </ul>
    </section>
  );
};
