import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class BarItem extends React.Component {
  render() {
    const Bar=this.props.Bars
    return (
      <View style={styles.main_container}>
        <Text style={styles.description_nom_Bar}>{Bar.name}</Text>
        <Text style={styles.description_text}>{Bar.brewery_type}</Text>
        <Text style={styles.title_text}>{Bar.phone}</Text>
        <View style={styles.adress_container}>
          <Text style={styles.description_text}>{Bar.street}</Text>
          <Text style={styles.description_text}>{Bar.city}</Text>
          <Text style={styles.title_text}>{Bar.state}</Text>
          <Text style={styles.title_text}>{Bar.country}</Text>
        </View>
        <View style={styles.web_url_container}>
          <Text style={styles.web_url_text}>{Bar.website_url}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flex:1,
    margin:5,
  },
  title_text: {
  },
  description_nom_Bar:{
    fontSize:19,
    fontWeight:'bold',
  },
  adress_container:{
    flex:4,
    flexDirection:"column",
    alignItems:"center",
  },
  web_url_container:{
    textAlign:"right",
    
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  web_url_text:{
    textAlign:"right",
    
  },
})

export default BarItem