import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function usePersistState(key: string, initialState: any) {
  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
