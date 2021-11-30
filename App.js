/**
 * by anton pastukhov
 * andm1793@gmail.com
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { JournalNavigator } from './navigation/JournalNavigator';

const App = () => {
  return(
    <NavigationContainer>
      <JournalNavigator />
    </NavigationContainer>
  );
};

export default App;
