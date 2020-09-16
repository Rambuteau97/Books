import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList, Image } from 'react-native';
import BarListItem from './BarListItem';
import { getBarsFromApiWithSearchedText } from '../API/APIBAR';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.searchText = '';
    this.state = {
      _bars: [],
    };
  }

  _loadBars() {
    getBarsFromApiWithSearchedText(this.searchText).then((data) => {
      this.setState({ _bars: data });
    });
  }

  _GetSearchText(text) {
    this.searchText = text;
  }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder="Dans quelle ville cherches-tu un bar?"
          onChangeText={(text) => this._GetSearchText(text)}
        />
        <Button title="Recherche" onPress={() => this._loadBars()} color="#ff8c00" />
        <Image style={styles.image} source={require('../Images/bière.png')} />
        <FlatList
          data={this.state._bars}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <BarListItem Bar={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  },
  image: {
    flex: 1,
    width: 380,
    height: 30,
  },
});

export default Search;
