import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Config from './../../configs/Config';
import Draggable from 'react-native-draggable';

export default class Item extends React.Component {
    state = {
        x: 0,
        y: 0
    }

    handlePressIn = () => {
        alert(1)
        // this.handleChanelPress();
    }

    handlePressOut = () => {
        console.log("====out")
        this.props.setPopupDataInfo({ show: false });
    }

    handleChanelPress = () => {
        // const { x, y } = this.state;
        // const { channel, index } = this.props;
        // this.props.setPopupDataInfo({ channel, index, show: true });
    }

    handleChanelLongPress = () => {
        console.log("====in")
        const { channel, index } = this.props;
        this.props.setPopupDataInfo({ channel, index, show: true });
        // alert('long press: ' + this.props.chanel.shortName)
    }

    handleLayoutChange = () => {
        this.feedPost.measure( (fx, fy, width, height, px, py) => {
            // fx: position by frame
            // px: position by screen
            // console.log("------------------------pos:", {x: px, y: py})
            this.setState({ x: px, y: py });
        })
    }

    render() {
        const { channel } = this.props;
        const shortName = channel.shortName.length > 11 ? channel.shortName.substr(0, 11).trim() : channel.shortName;
        return (
            <Draggable style={styles.box}>
                <View
                    onLayout={(event) => this.handleLayoutChange(event)}
                    ref={view => this.feedPost = view}
                    style={styles.box}>
                    <TouchableOpacity
                        onLongPress={ this.handleChanelLongPress }
                        // onPressIn={ this.handlePressIn }
                        onPressOut={ this.handlePressOut }>
                        <View style={styles.boxContent}>
                            <View style={styles.boxImg}></View>
                            <View style={styles.wrapText}>
                                <Text style={styles.boxText}>{shortName}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </Draggable>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        width: 86,
        height: 84,
    },
    boxContent: {
        width: 82,
        height: 84,
    },
    boxImg: {
        width: 66,
        height: 66,
        borderRadius: 65,
        backgroundColor: Config.grayBlue,
        marginLeft: 8
    },
    boxText: {
        color: '#000'
    },
    wrapText: {
        flex: 1,
        alignItems: 'center'
    }
});