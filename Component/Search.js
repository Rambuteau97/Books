import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import BarItem from './BarItem'
import DataBar from '../Helpers/Data'
import {getBarsFromApiWithSearchedText} from '../API/APIBAR'




class Search extends React.Component {
  
  constructor(props){
    super(props)
    this._bars =[]
    
  }


  _loadBars() {
    getBarsFromApiWithSearchedText("breweries").then(data => {
      this._bars=data
      this.forceUpdate()
    })
  }
 
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Nom du bar'/>
        <Button title='Rechercher' onPress={() => this._loadBars()}/>
        <FlatList
            data={this._bars}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <BarItem Bars={item}/>}
            />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 25,
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