/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//redux setup
import { store } from './app/redux/store';
import { Provider  } from 'react-redux';

const Container = () =>  {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Container);
