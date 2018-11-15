import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import GetContact from '../screens/getContact';
import Main from '../screens/Main';

const SwitchApp = createStackNavigator({
  Home:{screen:Main},
  Secound:{screen:GetContact}
});

export default SwitchApp
