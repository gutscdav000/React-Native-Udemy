import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsScreen from './src/screens/ResultsShow';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsScreen: ResultsScreen,

  
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  } 
});

export default createAppContainer(navigator);