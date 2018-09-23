import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import * as Icon from './../../../icons/SimpleLine';
import * as Config from './../../../configs/Config';
import { withNavigation } from 'react-navigation';

export class Header extends React.Component {
  openMenuDrawer = () => {
    this.props.navigation.openDrawer();
  }

  goHome = () => {
    this.props.navigation.navigate('Home');
  }

  pressRightBtn = () => {
    alert("Click vào button bên phải!");
  }

  render() {
    return (
      <View>
        <View style={styles.pullDiv}/>
        <View style={styles.header}>
          <View style={styles.textLeft}>
            <TouchableOpacity onPress={this.openMenuDrawer} style={styles.btnHeader}>
              <Icon.Menu color={Config.white}/>
            </TouchableOpacity>
          </View>
          <View style={styles.textCent}>
            <TouchableOpacity onPress={this.goHome} style={styles.btnHeader}>
              <Icon.Diamond color={Config.white}/>
            </TouchableOpacity>
          </View>
          <View style={styles.textRight}>
            <TouchableOpacity onPress={this.pressRightBtn} style={styles.btnHeader}>
              <Icon.Info color={Config.white}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  pullDiv: {
    height: 18,
    backgroundColor: Config.primaryColor,
  },
  header: {
    height: 40,
    backgroundColor: Config.primaryColor,
    flexDirection: 'row'
  },
  textLeft: {
    flex: 1,
    backgroundColor: Config.primaryColor,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  textCent: {
    flex: 1,
    backgroundColor: Config.primaryColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textRight: {
    flex: 1,
    backgroundColor: Config.primaryColor,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  white: {
    color: '#fff'
  },
  btnHeader: {
    paddingHorizontal: 10,
    paddingVertical: 5
  }
});
