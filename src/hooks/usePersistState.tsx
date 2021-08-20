import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function usePersistState(key: string, initialState: any) {
  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    AsyncStorage.getItem(key).then((result) => {
      if (result) {
        setState(JSON.parse(result));
      } else {
        setState(initialState);
      }
    });
  }, []);
  return { state, setState };
}
