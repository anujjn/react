import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Reference of component that we have created
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";

// createStackNavigator is a object which decides what content we are gonna show in the screen at any given point of time
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Component: ComponentsScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen
  },
  {
    // initialRouteName - it tells what should be the first component that should be displayed
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
