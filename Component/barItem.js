import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Bar from '../Helpers/Data'

class BarItem extends React.Component {
  render() {
    const Bar=this.props.Bar
    console.log(this.props)
    return (
      <View style={styles.main_container}>
        <Text style={styles.description_text}>Nom du bar est :{Bar.name}</Text>
        <Text style={styles.description_text}>{Bar.brewery_type}</Text>
        <Text style={styles.description_text}>{Bar.street}</Text>
        <Text style={styles.description_text}>{Bar.city}</Text>
        <Text style={styles.title_text}>{Bar.state}</Text>
        <Text style={styles.title_text}>{Bar.country}</Text>
        <Text style={styles.title_text}>{Bar.phone}</Text>
        <Text style={styles.title_text}>{Bar.website_url}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190
  },
  title_text: {
    
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
})

export default BarItem