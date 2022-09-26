import React from 'react';
import GlobalProvider from './src/context/provider';
import MainNavigator from './src/navigation';

const App = () => {
  return (
    <GlobalProvider>
      <MainNavigator />
    </GlobalProvider>
  );
};

export default App;
