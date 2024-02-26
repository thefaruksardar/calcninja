import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function getSavedValue(key, initialValue) {
  if (typeof localStorage === "undefined") {
    return initialValue;
  }

  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  const updateValue = (newValue) => {
    setValue((prevValue) => {
      // Check if newValue already exists in the array
      if (!prevValue.includes(newValue)) {
        const updatedValue = Array.isArray(prevValue)
          ? [...prevValue, newValue]
          : [newValue];
        localStorage.setItem(key, JSON.stringify(updatedValue.reverse()));
        return updatedValue;
      } else {
        return prevValue; // If newValue already exists, return the previous value unchanged
      }
    });
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, updateValue];
}
