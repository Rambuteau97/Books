import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import BarItem from './BarItem'
import DataBar from '../Helpers/Data'

class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Nom du bar'/>
        <Button title='Rechercher' onPress={() => {}}/>
        <FlatList
            data={DataBar}
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
    marginTop: 25
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