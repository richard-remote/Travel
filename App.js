import React, {Component} from 'react';
import {Alert, AppRegistry, BackHandler, Button, Platform, StyleSheet, Text, View} from 'react-native';

//5/22/19 - No clue what these are just yet. I'll keep em commented out
//          I added flexboxes to display layouts for the exit link, title, and links
//          I added an exit button in the top flexbox
//          
//5/31/19 - I added bold, black styled text for the title

//6/13/19 - Aligned the Title and View List option and removed the exit button
//7/5/19   Styled with a black background
//         Green title
//         Yellow options

//import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class App extends Component{
    render () {
      return (
        <View style={styles.parent}>
        
          <View style= {styles.title}>
            <Text style={{fontSize: 50, fontWeight: 'bold', color: 'green', textAlign: "center"}}>Salesman's Travel</Text>
          </View>

          <View style={styles.options}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'yellow', textAlign: "center"}}>View List</Text>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'yellow', textAlign: 'center'}}>Search List</Text>
          </View>

          <View style={styles.footer}>
          </View>
          
        </View>
      );
    }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },

  title: {
    flex: 2,
    backgroundColor: '#000000',
  },

  options: {
    flex: 1,
    backgroundColor: '#000000',
  },

  footer: {
    flex: 2,
    backgroundColor: '#000000'
  },

  

});



/*
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
*/
/*
class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.top_container}>
      <Button
        title="Exit">
      </Button>
        <Text style={styles.salesman}>Salesman's{"\n"}Travel</Text>
        <Text style={styles.view_list}>View list</Text>
        <Text style={styles.search_zipcode}>Search zip code</Text>
      </View>
      /*
      <View style={styles.lower_container}>
        <Text style={styles.view_list}>View list</Text>
        <Text style={styles.search_zipcode}>Search zip code</Text>
      </View>
      */
    /*);
  }
}
*/
/***** 
 * CAUSE OF CURRENT BUG SAYS null is not an object. Something with gesture handling
const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    }
});
******/
/*
const styles = StyleSheet.create({
  top_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  lower_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  salesman: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  view_list: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  search_zipcode: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
    
});

*/
