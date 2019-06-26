import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';

//5/22/19 - No clue what these are just yet. I'll keep em commented out
//          I added flexboxes to display layouts for the exit link, title, and links
//          I added an exit button in the top flexbox
//          
//5/31/19 - I added bold, black styled text for the title

//6/13/19 - Aligned the Title and View List option and removed the exit button
//6/18/19 - Installed react-navigation and react-native-gesture-handler
//        - Created two Components: HomeScreen and ViewList
//        - Created a stack navigator with three routes: HomeScreen, ViewList, and SearchList
//        - Set the home route to the HomeScreen 

//6/26/19 - Imported FlatList
//        - Added the addresses on the View List screen as a FlatList

/**Home Screen Component */
class HomeScreen extends Component {
  render() {
    return (
      /*View/Text Components for the Title (Salesman Travel)
        View/Text Components for View/Search list options  */

      <View style= {{flex: 1}}>
        <View style= {{flex: 1, flexDirection: 'row', backgroundColor: 'yellow'}}>
          <Text style={{fontSize: 50, fontWeight: 'bold', color: 'black', textAlign: "center"}}>Salesman's Travel</Text>
        </View>

        <View style= {{flex: 3, backgroundColor: 'yellow'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'green', textAlign: "center"}}
            onPress= {()=> this.props.navigation.navigate('ViewList')}>View List</Text>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'green', textAlign: 'center'}}
            onPress= {()=> this.props.navigation.navigate('SearchList')}>Search List</Text>
        </View>
      </View>
      
    );
  }
}

/**View List Component */
class ViewList extends Component{
  render(){
    return(
      <FlatList
      //Each key adds to the source of information on the list
        data={[
          {key: '123 Main Street St. Louisville OH 4307'},
          {key: '432 Main Long Road St. Louisville OH 43071'},
          {key: '786 High Street Pollocksville OH 43071'},
        ]}
  renderItem={({item}) => <Text>{item.key}</Text>}
      />
    );
  }
}

class SearchList extends Component{
  render(){
    return(
      <View></View>
    );
  }
}

//Exports the root stack navigator
//Two routes: Home and Details
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    ViewList: ViewList,
    SearchList: SearchList
  },
  {
    backgroundColor: '#FFFF00',
    initalRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
  render(){
    return <AppContainer />;
  }
}

/* 5/22/19 - A whooooole lotta mess down here. I'll clean it up as I go along.
             For now, I just want the bare bones skeleton
export default createAppContainer(AppNavigator);


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