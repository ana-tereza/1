import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from 'react-redux';

import Navigator from './config/routes';
import store from './config/store';
import {AlertProvider} from './components/Alert';

import './reducers';

EStyleSheet.build ({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#979797',
  $inputText: '#797979',
  $darkText: '#343434',
});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
);
