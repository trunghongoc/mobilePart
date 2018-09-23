import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import * as Config from './../../../configs/Config';

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    default: {
        color: Config.grayB,
        color: '#bdc3c7'
    },
    active: {
        color: Config.primaryColor
    },
    badge: {
        paddingHorizontal: 5,
        backgroundColor: 'red',
        borderRadius: 10,
        position: 'absolute',
        top: 5,
        right: 12
    },
    bageText: {
        color: '#fff',
        fontSize: 12
    }
});

export default class Item extends React.Component {
    handlePress = (superHanderPress) => {
        superHanderPress();
    }

    render() {
        const { badge, TypeIcon, label, menuKey, isActive, handlePress } = this.props;
        const className = isActive ? styles.active : styles.default;
        const color = isActive ? Config.primaryColor : Config.grayM;
        return (
        <TouchableNativeFeedback onPress={ () => this.handlePress(handlePress) }>
            <View style={styles.item}>
                {
                    badge !== null && badge !== 0 &&
                    <View style={styles.badge}>
                        <Text style={styles.bageText}>{badge > 9 ? '9+' : badge}</Text>
                    </View>
                }
                <TypeIcon color={color}/>
                <Text style={className}>{label}</Text>
            </View>
        </TouchableNativeFeedback>
        );
    }
}

Item.defaultProps = {
    badge: null
};

Item.propTypes = {
    badge: PropTypes.number,
    // TypeIcon: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
    menuKey: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    handlePress: PropTypes.func.isRequired
};