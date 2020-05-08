import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

class BarListItem extends React.Component {
  _toggleFavorite() {
    const action = { type: 'TOGGLE_FAVORITE', value: this.props.Bar }; //changer state en props
    this.props.dispatch(action);
  }

  _displayFavoriteImage() {
    var sourceImage = require('../Images/ic_favorite_border.png');
    if (this.props.favoritesBar.findIndex((item) => item.id === this.state.Bar.id) !== -1) {
      sourceImage = require('../Images/ic_favorite.png');
    }
    return <Image style={styles.favorite_image} source={sourceImage} />;
  }

  render() {
    const Bar = this.props.Bars;
    return (
      <View style={styles.main_container}>
        <View style={styles.Bar_info}>
          <View style={styles.Bar_name}>
            <TouchableOpacity
              style={styles.favorite_container}
              onPress={() => this._toggleFavorite()}
            >
              {this._displayFavoriteImage()}
            </TouchableOpacity>
            <Text style={styles.description_nom_Bar} numberOfLines={1}>
              {Bar.name}
            </Text>
          </View>
          <View style={styles.Bar_infopratique}>
            <Text style={styles.description_text}>Type de bar: {Bar.brewery_type}</Text>

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
  favorite_image: {
    width: 25,
    height: 25,
  },
});

const mapStateToProps = (state) => {
  return {
    favoritesBar: state.favoritesBar,
  };
};
export default connect(mapStateToProps)(BarListItem);
