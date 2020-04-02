import React from 'react'
import { StyleSheet, View,TextInput, Button } from 'react-native'
import MapView from 'react-native-maps'


class Search extends React.Component {
  
  render() {
    return (
      <View style={styles.main_container_gene}>
        <View style={styles.main_container}>
            <TextInput 
              style={styles.textinput}
              placeholder='Dans quelle ville cherches-tu un bar?'
              onChangeText={() => {}}
            />  
            <Button title='Recherche' onPress={() => {}} color="#ff8c00" />
        </View>   
        <View style={styles.main_container_map}> 
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container_gene: {
    flex: 1,
    marginTop: 20
  },
  main_container: {
    flex: 1     
  },
  main_container_map: {
    flex:8,
    position:'absolute',
    top:100,
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
    right:0,
    flex:8
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search