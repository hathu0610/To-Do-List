import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen'
import Tabbar from '../Navigation/Tabbar'
import styles from './Styles/NavigationStyles'
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LaunchScreen1: { screen: LaunchScreen }

}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

const BottomTab = createBottomTabNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    LaunchScreen1: { screen: LaunchScreen }
  }, {
    tabBarComponent: Tabbar,
    initialRouteName: 'LaunchScreen'
    
  }
);

export default createAppContainer(BottomTab)
