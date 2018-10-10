import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import GlobalContext from "../../contexts/GlobalContext";
import * as Config from './../../configs/Config';
import * as Icon from './../../icons/SimpleLine';

const fullWidth = Dimensions.get('window').width - 20;
const popUpHeight = 180;
const directionTop = ['topCenter', 'topLeft', 'topRight'];
const directionBottom = ['bottomCenter', 'bottomLeft', 'bottomRight'];

export default class Popover extends React.Component {
    onYesClick = () => {
        alert("Bạn vừa click vào yes!");
    }

    onNoClick = () => {
        alert("Bạn vừa click vào NO!");
    }

    getArrowPos = (_fullWidth) => {
        const { arrowDirection } = this.props;
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
        const { closePopup, arrowDirection, popup, yesButton, noButton, cancelButton, size, arrowCenter } = this.props;
        const _fullWidth = size.full ? fullWidth : size.width;
        const boxConfirmSize ={ width: _fullWidth, height: popUpHeight };
        const boxConfirmFullWidth = { width: _fullWidth };
        const boxConfirmWidthExeptBorder = { width: _fullWidth - 1 };
        const boxConfirmWidthIcon = { width: _fullWidth - 15 };
        const arrowPos = this.getArrowPos(_fullWidth);

        return (
            <GlobalContext.Consumer>
            {(context) => (
                <View style={[styles.boxConfirmWrap, boxConfirmSize]}>
                    {
                        directionTop.indexOf(arrowDirection) !== -1  &&
                        <View style={[styles.boxConfirmWrapNullChild, boxConfirmFullWidth]} />
                    }
                    <View style={[styles.boxConfirm, boxConfirmSize]}>
                        <View style={[styles.boxConfirmArrow, arrowPos]}>
                            <View style={styles.boxConfirmArrowChild}/>
                        </View>
                        {
                            popup.channel !== null ? (
                                <View style={styles.flex}>
                                    <View style={[styles.popupHeader, boxConfirmWidthExeptBorder]}>
                                        <View style={styles.popupHeaderFlex}>
                                            <Text style={styles.headline}>{popup.channel.longName} </Text>
                                        </View>
                                    </View>
                                    <View style={styles.popupBody}>
                                        <View style={[styles.trash, boxConfirmWidthIcon]}>
                                            <View style={styles.trashFlex}>
                                                <View style={styles.trashAround}>
                                                    <Icon.Trash color={Config.white} />
                                                </View>
                                            </View>
                                        </View>

                                        <View style={styles.trashFlex}>
                                            <Text>Loại bỏ đài này khỏi danh sách nhận thông báo?{_fullWidth}</Text>
                                        </View>
                                    </View>

                                    <View style={[styles.popupHeader, styles.popupFooter, boxConfirmWidthExeptBorder]}>
                                        <View style={styles.popupFooterWrap}>
                                            {
                                                yesButton &&
                                                <View style={[styles.popupFooterItem, styles.popupFooterItemWithLine]}>
                                                    <TouchableNativeFeedback
                                                        onPress={this.onYesClick}>
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
                                                        onPress={this.onNoClick}>
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
                                </View>
                            ) : (
                                <Text>Không có dữ liệu</Text>
                            )
                        }
                    </View>
                    {
                        directionBottom.indexOf(arrowDirection) !== -1  &&
                        <View style={styles.boxConfirmWrapNullChild} />
                    }
                </View>
            )}
            </GlobalContext.Consumer>
        )
    }
}

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
    boxConfirmArrowDown: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderWidth: 12,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: Config.grayM,
        position: 'absolute',
        zIndex: 100
    },
    boxConfirmArrowChildDown: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderWidth: 12,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: Config.white,
        position: 'absolute',
        top: 0.5,
        left: -10
    },
    boxConfirmWrapNullChild: {
        height: 11,
        backgroundColor: Config.white,
        // backgroundColor: 'red',
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
        // alignItems:'center',
    },
    popupFooterItemViewFlex: {
        flex: 1,
        alignItems:'center'
    },
    popupFooterItemWithLine: {
        borderRightWidth: 0.5,
        borderRightColor: Config.grayM,
    }
});

Popover.propTypes = {
    closePopup: PropTypes.func,
    arrowDirection: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    popup: PropTypes.object,
    yesButton: PropTypes.bool,
    noButton: PropTypes.bool,
    cancelButton: PropTypes.bool,
    size: PropTypes.object,
    arrowCenter: PropTypes.bool,
};

Popover.defaultProps = {
    arrowDirection: 'topCenter',
    popup: {
        show: false,
        arrowX: 30,
        channel: null
    },
    yesButton: true,
    noButton: true,
    cancelButton: true,
    size: {
        full: true,
        width: fullWidth,
        height: popUpHeight
    },
    arrowCenter: false
};