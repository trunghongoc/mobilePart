import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, View} from 'react-native';

import DrawerWithDetect from './src/components/menus/drawer/DrawerWithDetect';

// redux
import { Provider } from 'react-redux';
import configureStore from './src/store';
export const store = configureStore();

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
          <DrawerWithDetect/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
