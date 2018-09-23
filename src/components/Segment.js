import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import * as Config from './../configs/Config';

export default class Segement extends Component {
  state = {
    selectedIndex: 0,
  }

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

  render() {
    return (
      <View style={styles.segment}>
        <SegmentedControlTab
          tabTextStyle={styles.text}
          activeTabTextStyle={styles.textActive}
          tabStyle={styles.border}
          activeTabStyle={[styles.border, styles.activeTabStyle]}
          activeTabBadgeStyle={styles.activeTabBadgeStyle}
          values={['First', 'Second', 'Third']}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
          badges={[1, 2, null]}
          accessibilityLabels={['ahi', 'bhi', 'chi']}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  segment: {
    marginVertical: 7
  },
  text: {
    color: Config.primaryColor
  },
  textActive: {
    color: Config.white
  },
  border: {
    borderColor: Config.primaryColor
  },
  activeTabStyle: {
    backgroundColor: Config.primaryColor
  },
  activeTabBadgeStyle: {
    color: Config.primaryColor
  }
});