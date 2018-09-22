import Layout from './Layout';
import { Main as Footer } from './../footer/Main';

import { createDrawerNavigator } from 'react-navigation';

export const Main = createDrawerNavigator (
  {
    Home: Footer
  }, {
     contentComponent: Layout
  }
);