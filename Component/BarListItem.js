import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BarListItem extends React.Component {
  _toggleFavorite() {
    const action = { type: 'TOGGLE_FAVORITE', value: this.props.Bar }; //changer state en props
    this.props.dispatch(action);
  }

  render() {
    const Bar = this.props.Bars;
    return (
      <View style={styles.main_container}>
        <View style={styles.Bar_info}>
          <View style={styles.Bar_name}>
            <Text style={styles.description_nom_Bar} numberOfLines={1}>
              {Bar.name}
            </Text>
          </View>
          <View style={styles.Bar_infopratique}>
            <Text style={styles.description_text}>Type de bar: {Bar.brewery_type}</Text>
            <TouchableOpacity
              style={styles.favorite_container}
              onPress={() => this._toggleFavorite()}
            ></TouchableOpacity>
            <Text style={styles.description_text}>Téléphone: {Bar.phone}</Text>
          </View>
        </View>
        <View style={styles.adress_container}>
          <Text style={styles.title_text}>{Bar.city}</Text>
          <Text style={styles.title_text}>{Bar.state}</Text>
          <Text style={styles.text_country}>{Bar.country}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 80,
    flex: 1,
    flexDirection: 'row',
  },
  Bar_info: {
    flexDirection: 'column',
    flex: 3,
    backgroundColor: 'lightgoldenrodyellow',
    margin: 5,
  },
  favorite_container: {
    alignItems: 'center',
  },
  Bar_name: {
    flex: 1,
    flexWrap: 'wrap',
  },
  Bar_infopratique: {
    flex: 2,
  },
  title_text: {},
  text_country: {
    fontWeight: 'bold',
  },
  description_nom_Bar: {
    fontSize: 19,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    paddingRight: 5,
  },
  adress_container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'wheat',
    margin: 5,
    justifyContent: 'center',
  },
  web_url_container: {
    textAlign: 'right',
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
  },
});

export default BarListItem;
