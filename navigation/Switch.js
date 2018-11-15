import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import GetContact from '../screens/getContact';


const SwitchApp = createStackNavigator({
  Home:{screen:HomeScreen},
  Secound:{screen:GetContact}
});

export default SwitchApp
