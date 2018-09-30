import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Button, TouchableNativeFeedback } from 'react-native';
import GlobalContext from "../../contexts/GlobalContext";
import * as Config from './../../configs/Config';
import * as Icon from '../../icons/SimpleLine';

export default class Popover extends React.Component {
    onYesClick = () => {
        alert("Bạn vừa click vào yes!");
    }

    render() {
        const { closePopup, direction, popup } = this.props;

        return (
            <GlobalContext.Consumer>
            {(context) => (
                <View style={styles.boxConfirmWrap}>
                    <View style={styles.boxConfirmWrapNullChild} />
                    <View style={styles.boxConfirm}>
                        <View style={[styles.boxConfirmArrow, { left: popup.arrowX }]}>
                            <View style={styles.boxConfirmArrowChild}/>
                        </View>
                        {
                            popup.channel !== null ? (
                                <View style={styles.flex}>
                                    <View style={styles.popupHeader}>
                                        <View style={styles.popupHeaderFlex}>
                                            <Text style={styles.headline}>{popup.channel.longName} </Text>
                                        </View>
                                    </View>
                                    <View style={styles.popupBody}>
                                        <View style={styles.trash}>
                                            <View style={styles.trashFlex}>
                                                <View style={styles.trashAround}>
                                                    <Icon.Trash color={Config.white} />
                                                </View>
                                            </View>
                                        </View>

                                        <View style={styles.trashFlex}>
                                            <Text>Loại bỏ đài này khỏi danh sách nhận thông báo?</Text>
                                        </View>
                                    </View>

                                    <View style={[styles.popupHeader, styles.popupFooter]}>
                                        <View style={styles.popupFooterWrap}>
                                            <View style={[styles.popupFooterItem, styles.popupFooterItemWithLine]}>
                                                <TouchableNativeFeedback
                                                    onPress={this.onYesClick}>
                                                    <Text style={[styles.headline, styles.mrt8]}>Đồng ý </Text>
                                                </TouchableNativeFeedback>
                                            </View>
                                            <View style={styles.popupFooterItem}>
                                                <TouchableNativeFeedback
                                                    onPress={() => closePopup()}>
                                                    <Text style={[styles.headline, styles.mrt8]}>Đóng hộp thoại </Text>
                                                </TouchableNativeFeedback>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            ) : (
                                <Text>Không có dữ liệu</Text>
                            )
                        }
                    </View>
                </View>
            )}
            </GlobalContext.Consumer>
        )
    }
}

const fullWidth = Dimensions.get('window').width - 20;
const popUpHeight = 180;

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    boxConfirmWrap: {
        position: 'absolute',
        width: fullWidth,
        height: popUpHeight,
        zIndex: 1000,
        backgroundColor: Config.white,
        top: 120,
        left: 0
    },
    boxConfirm: {
        backgroundColor: Config.white,
        width: fullWidth,
        height: popUpHeight,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: Config.grayM,
    },
    boxConfirmArrow: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 12,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: Config.grayM,
        position: 'absolute',
        top: -12,
        zIndex: 100
    },
    boxConfirmArrowChild: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 12,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: Config.white,
        position: 'absolute',
        top: 0.5,
        left: -10
    },
    boxConfirmWrapNullChild: {
        width: fullWidth,
        height: 11,
        backgroundColor: Config.white,
    },
    popupHeader: {
        width: fullWidth - 1,
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
    trash: {
        marginVertical: 5,
        width: fullWidth - 15,
        height: 37,
    },
    trashFlex: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    trashAround: {
        width: 37,
        height: 37,
        borderRadius: 37,
        backgroundColor: Config.primaryDanger,
        alignItems:'center',
        justifyContent: 'center',
    },
    headline: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 16
    },
    mrt8: {
        marginTop: 8,
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
        alignItems:'center',
    },
    popupFooterItemWithLine: {
        borderRightWidth: 0.5,
        borderRightColor: Config.grayM,
    }
})