import React, {Component} from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {createStackNavigator,createAppContainer} from 'react-navigation'
import SplashScreen from 'react-native-splash-screen'

export default class example extends Component {

  componentDidMount() {
      SplashScreen.hide();
  }

  render() {
      return (
          <TouchableOpacity> 
              style={styles.container}
              onPress={(e)=> {
                  Linking.openURL('http://www.devio.org/');
                  }}

            <View >

 
            </View>
            </TouchableOpacity>
      )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f3f2f2',
      marginTop: 30
  },
  item: {
      fontSize: 20,
  },
  line: {
      flex: 1,
      height: 0.3,
      backgroundColor: 'darkgray',
  },
})

/*
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
