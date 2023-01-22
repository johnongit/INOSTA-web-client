import { useState } from "react";
import { getItem, removeItem, setItem } from "../utils";

/**
 * Hook used to sync a state with localStorage key content
 */
export const useStorageItem = <T>(
  key: string,
  init?: T
): [T, (content: T) => void, () => void] => {
  const [storageItem, setStorageItem] = useState<T>(
    getItem(key) ? JSON.parse(getItem(key) as string) : init
  );

  const set = (content: T) => {
    setItem(key, JSON.stringify(content));
    setStorageItem(content);
  };

  const reset = () => {
    removeItem(key);
    if (init) setStorageItem(init);
  };

  return [storageItem, set, reset];
};
