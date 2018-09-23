import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Item extends Component {
  render() {
    const { pressEvent, IconType, text } = this.props
    return (
      <TouchableOpacity onPress={pressEvent}>
        <View
          style={styles.screenStyle}>
          <TouchableOpacity style={styles.icon}>
            {IconType}
          </TouchableOpacity>
          <View style={styles.lineHr}>
            <Text style={styles.screenTextStyle}>{text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  screenStyle: {
      height: 38,
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center'
  },
  icon: {
    marginRight: 12,
    marginBottom: 7
  },
  screenTextStyle:{
    fontSize: 18,
    marginLeft: 10,
  },
  lineHr: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    paddingBottom: 9
  },
});
