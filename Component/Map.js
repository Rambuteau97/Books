import React from 'react'
import { StyleSheet, View,TextInput, Button } from 'react-native'
import MapView from 'react-native-maps'
import {bars} from '../Helpers/Data'

class Search extends React.Component {

  constructor(props){
    super(props)
    this.LATITUDE = 37.7834497667258
    this.LONGITUDE = -122.306283180899;
  }

  render() {
    return (
      <View style={styles.main_container_gene}>
        <View style={styles.main_container}>
            <TextInput 
              style={styles.textinput}
              placeholder='Tape ici le nom d un bar! '
              onChangeText={(text) => {}}
            />  
            <Button title='Recherche' onPress={() =>  {}} color="#ff8c00" />
        </View> 
        <View style={styles.main_container_map}> 
            <MapView style={styles.map}
              data={bars}
              region={{
                  latitude: this.LATITUDE,
                  longitude:this.LONGITUDE,
                  latitudeDelta:0.1,
                  longitudeDelta:0.1
              }}>

              <MapView.Marker
                  coordinate={{
                      latitude: this.LATITUDE,
                      longitude: this.LONGITUDE}}
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