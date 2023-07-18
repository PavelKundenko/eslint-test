import { useCallback, useState } from 'react';

type StorageType = 'local' | 'session';

interface StorageParams<T> {
  key: string;
  initialValue: T;
  storageType: StorageType;
}

interface StorageReturnType<T> {
  storedValue: T;
  setStorageValue: (value: T) => void;
  removeStorageItem: () => void;
}

export const useStorage = <T>({
  key,
  initialValue,
  storageType = 'local',
}: StorageParams<T>): StorageReturnType<T> => {
  const storage = storageType === 'session' ? sessionStorage : localStorage;

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const item = storage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setStorageValue = useCallback(
    (value: T) => {
      setStoredValue(value);

      if (value) {
        storage.setItem(key, JSON.stringify(value));
      }
    },
    [key, storage],
  );

  const removeStorageItem = useCallback(() => {
    setStoredValue(initialValue);

    storage.removeItem(key);
  }, [initialValue, key, storage]);

  return { storedValue, setStorageValue, removeStorageItem };
};
