import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Platform } from 'react-native';
import * as Config from './../../../configs/Config';
import * as Icon from './../../../icons/SimpleLine';
import Arrow from './Arrow';
import Footer from './Footer';

const fullWidth = Dimensions.get('window').width - 20;
const popUpHeight = 180;
const directionTop = ['topCenter', 'topLeft', 'topRight'];
const directionBottom = ['bottomCenter', 'bottomLeft', 'bottomRight'];

export default withPopoverLayout = (WrappedComponent: Object, config: Object = {}) => {
    class HOC extends React.Component {
        getArrowPos = (_fullWidth) => {
            let { arrowDirection } = config;
            arrowDirection = arrowDirection || 'topCenter';

            return {
                topCenter: { top: -12, left: (_fullWidth - 20) / 2 },
                topLeft: { top: -12, left: 20 },
                topRight: { top: -12, left: _fullWidth - 40 },
    
                bottomCenter: { bottom: -100, left: (_fullWidth - 20) / 2 },
                bottomLeft: { bottom: -12, left: 20 },
                bottomRight: { bottom: -12, left: _fullWidth - 40 },
            }[arrowDirection];
        }

        render() {
            console.log("-----config:", config)
            let { position, arrowDirection, size } = config;
            arrowDirection = arrowDirection || 'topCenter';
            size = size || { width: fullWidth, height: popUpHeight, force: false };

            const boxConfirmSize = size;
            const boxConfirmFullWidth = { width: size.fullWidth };
            const arrowPos = this.getArrowPos(size.width);
            console.log("boxConfirmSize:", {size, boxConfirmSize})


            return (
                <View style={[styles.boxConfirmWrap, boxConfirmSize]}>
                    {
                        directionTop.indexOf(arrowDirection) !== -1  &&
                        <View style={[styles.boxConfirmWrapNullChild, boxConfirmFullWidth]} />
                    }
                    <View style={[styles.boxConfirm, boxConfirmSize]}>
                        <Arrow arrowPos={arrowPos} direction="top"/>
                        <View style={styles.popupBody}>
                            <WrappedComponent/>
                        </View>
                    </View>
                    {
                        directionBottom.indexOf(arrowDirection) !== -1  &&
                        <View style={styles.boxConfirmWrapNullChild} />
                    }
                </View>
            );
        }
    }
      
    return HOC;
};

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    boxConfirmWrap: {
        position: 'absolute',
        zIndex: 1000,
        backgroundColor: Config.white,
        top: 120,
        left: 0
    },
    boxConfirm: {
        backgroundColor: Config.white,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: Config.grayM,
        // backgroundColor: 'red'
    },
    boxConfirmWrapNullChild: {
        height: 11,
        // backgroundColor: Config.white,
        // backgroundColor: 'yellow',
    },
    popupHeader: {
        height: 40,
        paddingHorizontal: 7,
        paddingTop: 8,
        paddingBottom: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: Config.grayM,
    },
    popupHeaderFlex: {
        flex: 1,
        alignItems: 'center'
    },
    popupBody: {
        flex: 1,
        paddingHorizontal: 7
    },
    headline: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 16
    }
});