const getItem = <T>(key: string, defaultValue: T): T => {
  try {
    const value = localStorage.getItem(key);
    return value !== null ? (JSON.parse(value) as T) : defaultValue;
  } catch (e) {
    console.error('Error reading localStorage', e);
    return defaultValue;
  }
};

const setItem = <T = unknown>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error writing localStorage', e);
  }
};

const removeItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing localStorage', e);
  }
};

export { getItem, setItem, removeItem };
