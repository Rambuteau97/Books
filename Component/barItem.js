import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


class BarItem extends React.Component {
  render() {
    const Bar=this.props.Bars
    return (
      <View style={styles.main_container}>
        <View style={styles.Bar_info}>
          <View style={styles.Bar_name}>
            <Text style={styles.description_nom_Bar}>{Bar.name}</Text>
          </View>
          <View style={styles.Bar_infopratique}>
            <Text style={styles.description_text}>Type of bar: {Bar.brewery_type}</Text>
            <Text style={styles.description_text}>Phone: {Bar.phone}</Text>
            <Text style={styles.description_text}>Site: {Bar.website_url}</Text>
          </View>
        </View>
        <View style={styles.adress_container} >
          <Text style={styles.title_text}>{Bar.street}</Text>
          <Text style={styles.title_text}>{Bar.city}, {Bar.state}</Text>
          <Text style={styles.title_text}>{Bar.country}</Text>     
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 80,
    flex:1,
    flexDirection:"row",
  },
  Bar_info:{
    flexDirection:"column"
  },
  Bar_name:{
    flex:1
  },
  Bar_infopratique:{
    flex:2
  },
  title_text: {
  },
  description_nom_Bar:{
    fontSize:19,
    fontWeight:'bold',
    flexWrap: 'wrap',
  },
  adress_container:{
    flex:1,
    flexDirection:"column",
    alignItems:"center",
    backgroundColor: 'gray',
    margin: 5,
    justifyContent:"center",
  },
  web_url_container:{
    textAlign:"right",
    
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
})

export default BarItem