import React from 'react';
import Statusbar from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <Statusbar />
      <Routes />
    </>
  );
}
