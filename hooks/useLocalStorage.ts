import { useState, useEffect } from "react";

const getValue = (key: string, value: string) => {
  let existing = "";

  if (typeof window !== "undefined") {
    existing = JSON.parse(window.localStorage.getItem(key) as string);
  }

  return existing || value;
};

const useLocalStorage = (key: string, newValue: string = "") => {
  const [value, setValue] = useState(getValue(key, newValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
