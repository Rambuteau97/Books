import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class BarDetail extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Détail du Bar</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default BarDetail