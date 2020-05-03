import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import MapView from 'react-native-maps';
import { bars } from '../Helpers/Data';
import { getBarsFromApiWithSearchedTextName } from '../API/APIBAR';

class Search extends React.Component {
  constructor(props) {
    super(props);
    (this.searchText = ''),
      (this.state = {
        _bars: [],
      });
  }

  _loadBars() {
    getBarsFromApiWithSearchedTextName(this.searchText).then((data) => {
      this.setState({ _bars: data });
    });
  }

  _GetSearchText(text) {
    this.searchText = text;
  }

  render() {
    return (
      <View style={styles.main_container_gene}>
        <View style={styles.main_container}>
          <TextInput
            style={styles.textinput}
            placeholder="Tape ici le nom d un bar!"
            onChangeText={(text) => this._GetSearchText(text)}
          />
          <Button title="Recherche" onPress={() => this._loadBars()} color="#ff8c00" />
        </View>
        <View style={styles.main_container_map}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.7834497667258,
              longitude: -122.306283180899,
              latitudeDelta: 13.922,
              longitudeDelta: 13.0421,
            }}
          >
            {this.state._bars.map((_bars, index) => {
              if (_bars.latitude && _bars.longitude)
                return (
                  <MapView.Marker
                    position={center}
                    coordinate={{
                      latitude: Number(_bars.latitude),
                      longitude: Number(_bars.longitude),
                    }}
                    key={index}
                    title={`${_bars.name}`}
                    description={`${_bars.city}`}
                  />
                );
            })}
          </MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container_gene: {
    flex: 1,
    marginTop: 20,
  },
  main_container: {
    flex: 1,
  },
  main_container_map: {
    flex: 8,
    position: 'absolute',
    top: 100,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 8,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  },
});

export default Search;
