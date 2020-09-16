import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import BarListItem from './BarListItem';
import { connect } from 'react-redux';

class Favorite extends React.Component {
  _searchTextInputChanged(text) {
    this.searchedText = text;
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.favoritesFilm}
        keyExtractor={(item) => item.id.toString()}
        favoriteList={true}
        renderItem={({ item }) => (
          <BarListItem
            Bar={item}
            isBarFavorite={
              this.props.favoritesBars.findIndex((Bar) => Bar.id === item.id) !== -1 ? true : false
            }
          />
        )}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (this.props.page < this.props.totalPages) {
            this.props.loadBar();
          }
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoritesBars: state.favoritesBars,
  };
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 20,
  },
});

export default connect(mapStateToProps)(Favorite);
