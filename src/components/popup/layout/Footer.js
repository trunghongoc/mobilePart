import React, { Component } from 'react';
import { View, StyleSheet, TouchableNativeFeedback, Text } from 'react-native';
import * as Config from './../../../configs/Config';
import PropTypes from 'prop-types';

export default class Footer extends React.Component {
    closePopup = () => {
        this.props.closePopup();
    }
    render() {
        const { yesButton, noButton, cancelButton, _fullWidth, closePopup, yesClick, noClick } = this.props;
        const boxConfirmWidthExeptBorder = { width: _fullWidth - 1 };

        return (
            <View style={[styles.popupHeader, styles.popupFooter, boxConfirmWidthExeptBorder]}>
                <View style={styles.popupFooterWrap}>
                    {
                        yesButton &&
                        <View style={[styles.popupFooterItem, styles.popupFooterItemWithLine]}>
                            <TouchableNativeFeedback
                                onPress={this.yesClick}>
                                <View style={styles.popupFooterItemViewFlex}>
                                    <Text style={[styles.headline, styles.mrt8]}>Đồng ý </Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    }

                    {
                        noButton &&
                        <View style={[styles.popupFooterItem, styles.popupFooterItemWithLine]}>
                            <TouchableNativeFeedback
                                onPress={this.noClick}>
                                <View style={styles.popupFooterItemViewFlex}>
                                    <Text style={[styles.headline, styles.mrt8]}>Không </Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    }
                    
                    {
                        cancelButton &&
                        <View style={styles.popupFooterItem}>
                            <TouchableNativeFeedback
                                onPress={() => closePopup()}>
                                <View style={styles.popupFooterItemViewFlex}>
                                    <Text style={[styles.headline, styles.mrt8]}>Đóng </Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    popupHeader: {
        height: 40,
        paddingHorizontal: 7,
        paddingTop: 8,
        paddingBottom: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: Config.grayM,
    },
    popupFooter: {
        borderBottomWidth: 0,
        borderTopWidth: 0.5,
        borderTopColor: Config.grayM,
        paddingTop: 0,
        paddingBottom: 0,
    },
    popupFooterWrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    popupFooterItem: {
        flex: 1,
        // alignItems:'center',
    },
    popupFooterItemViewFlex: {
        flex: 1,
        alignItems:'center'
    },
    popupFooterItemWithLine: {
        borderRightWidth: 0.5,
        borderRightColor: Config.grayM,
    },
    mrt8: {
        marginTop: 8,
    },
});

Footer.defaultProps = {
    yesButton: true,
    noButton: true,
    cancelButton: true
};