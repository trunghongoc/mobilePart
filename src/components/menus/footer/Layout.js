import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Icon from './../../../icons/SimpleLine';
import * as Config from './../../../configs/Config'
import Item from './Item';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actGetBadge, actSetBadge } from './../../../reducers/menuReducer';

function mapStateToProps(state: Object): Object {
    return {
        menuReducer: state.menuReducer,
    }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    actGetBadge: bindActionCreators(actGetBadge, dispatch),
    actSetBadge: bindActionCreators(actSetBadge, dispatch)
  }
}

class FooterMenu extends React.Component {
    onPressItem = (menuKey) => {
        this.props.navigation.navigate(menuKey);
    }

    render() {
        const { navigation, menuReducer } = this.props;
        const activeMenuKey = navigation.state.routes[navigation.state.index].key;
        const menuSettings = {
            Home: { icon: Icon.PieChart, label: 'Trang Chủ', badge: menuReducer.badgeOf.Home },
            MyProfile: { icon: Icon.User, label: 'Cá Nhân', badge: menuReducer.badgeOf.MyProfile },
            News: { icon: Icon.EarphonesAlt, label: 'Tin Tức', badge: menuReducer.badgeOf.News },
            Notifications: { icon: Icon.Bell, label: 'Thông Báo', badge: menuReducer.badgeOf.Notifications }
        }

        return (
            <View style={[styles.publicStyle, styles.footerDefault]}>
                {
                    navigation.state.routes.map(item => {
                        const { icon, label, badge } = menuSettings[item.key];
                        const isActive = activeMenuKey === item.key;
                        return(
                            <Item
                                key={item.key}
                                TypeIcon={icon}
                                label={label}
                                badge={badge}
                                isActive={isActive}
                                menuKey={item.key}
                                handlePress={ () => navigation.navigate(item.key) } />
                        );
                    })
                }
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterMenu);

const styles = StyleSheet.create({
    publicStyle: {
        height: 52,
        flexDirection: 'row',
        // marginTop: 7
    },
    footerPrimary: {
        backgroundColor: Config.primaryColor,
    },
    footerDefault: {
        backgroundColor: Config.white,
        borderTopWidth: 1,
        borderColor: Config.grayM
    }
});
