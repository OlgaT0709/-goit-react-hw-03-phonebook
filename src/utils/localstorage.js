import catchError from './catcherror';

export const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    catchError(error , 'Something went wrong with LocalStorage');
  }
};

export const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    catchError(error , 'Something went wrong with LocalStorage');
  }
};

export const remove = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
    catchError(error , 'Something went wrong with LocalStorage');
  }
}

