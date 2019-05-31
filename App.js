import React, {Component} from 'react';
import {Alert, AppRegistry, BackHandler, Button, Platform, StyleSheet, Text, View} from 'react-native';

//5/22/19 - No clue what these are just yet. I'll keep em commented out
//          I added flexboxes to display layouts for the exit link, title, and links
//          I added an exit button in the top flexbox
//          
//5/31/19 - I added bold, black styled text for the title
//import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class App extends Component {
  _onPressButton(){
    BackHandler.exitApp();
  }

  render() {
    return (
      <View style= {{flex: 1}}>
        <View style= {{flex: 1, flexDirection: 'row', backgroundColor: 'green'}}>
          <Button 
            onPress={this._onPressButton}
            title='EXIT'
          />
        </View>

        <View style= {{flex: 2, backgroundColor: 'yellow'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>Salesman's Travel</Text>
        </View>
        <View style= {{flex: 2, backgroundColor: 'black'}}></View>
      </View>
    );
  }
}

/* 5/22/19 - A whooooole lotta mess down here. I'll clean it up as I go along.
             For now, I just want the bare bones skeleton
export default createAppContainer(AppNavigator);


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */




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
