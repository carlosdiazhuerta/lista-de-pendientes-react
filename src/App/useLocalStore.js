import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sicronizedItem, setsicronizedItem] = React.useState(true);

  React.useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
      setLoading(false);
      setsicronizedItem(true);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, [sicronizedItem]); // Aseguramos que itemName e initialValue estén en las dependencias

  // Función para guardar un nuevo item en el almacenamiento local
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(true);
    }
  };

  const sincronized = () => {
    setLoading(true);
    setsicronizedItem(false);
  };
  return { item, saveItem, loading, error, sincronized };
}

export { useLocalStorage };
