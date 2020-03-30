import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'


class Search extends React.Component {
  
  render() {
    return (
      <View style={styles.main_container}>
          <MapView style={styles.map}
          region={{
              latitude: 59.3293234999999,
              longitude:18.0685808000000063,
              latitudeDelta:0.1,
              longitudeDelta:0.1
           }}>

        <MapView.Marker
            coordinate={{
                latitude: 59.3293234999999,
                longitude:18.0685808000000063}}
            title={'title'}
            description={'description'}
        />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
      position:'absolute',
      top:0,
      left:0,
      bottom:0,
      right:0,
      justifyContent:'flex-end',
      alignItems:'center'
  },
  map:{
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0
  }
})

export default Search