import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

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
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, [itemName]); // Aseguramos que itemName e initialValue estén en las dependencias

  // Función para guardar un nuevo item en el almacenamiento local
  const saveItem = React.useCallback(
    (newItem) => {
      try {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      } catch (error) {
        setError(true);
      }
    },
    [itemName]
  );

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
