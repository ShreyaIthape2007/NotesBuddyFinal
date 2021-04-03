import * as React from 'react';
import {
  Button,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { List } from 'react-native-paper';

import * as firebase from 'firebase';
import database from '../config';

export default class Feed extends React.Component {


  render() {
    return (
      <View style={styles.container}>
          <Text>You have come to your Feed</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F19C79',
  },

  textstyle: {
    fontSize: 15,
    fontFamily: 'futura',
  },

  inputstyle: {
    height: 50,
    width: 300,
    margin: 10,
    borderBottomWidth: 2,
  },

  submitbutton: {
    height: 30,
    width: 150,
    alignSelf: 'center',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 15,
  },
  buttonstyle: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    backgroundColor: '#A44A3F',
    margin: 10,
    borderRadius: 100,
  },
  flatliststyle: {
    backgroundColor: '#D4E09B',
    width: 250,
    height: 100,
    paddingLeft: 10,
    paddingTop: 7,
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 10,
  },
  textstylebutton: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Futura',
    marginTop: 5,
  },
});