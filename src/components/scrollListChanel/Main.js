import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import * as Config from './../../configs/Config';
import Item from './Item';
import Popover from './../popup/Popover';
import RemoveChannelFollow from './../popup/RemoveChannelFollow';

const fullWidth = Dimensions.get('window').width - 20;

export class Main extends React.Component {
    state = {
        popup: {
            show: false,
            channel: null,
        }
    }

    getPopupArrowPos = (item) => {
        return fullWidth / 2 - 10;
    }

    setPopupDataInfo = (popup) => {
        const newPopup = { ...this.state.popup, ...{ channel: popup.channel, show: popup.show } };
        this.setState({ ...this.state, popup: newPopup });
    }

    closePopup = (yes: Boolean = false) => {
        const newPopup = { ...this.state.popup, ...{ show: yes } };
        this.setState({ ...this.state, popup: newPopup });
    }

    render() {
        const { title } = this.props;
        const { popup } = this.state;
        const list = [
            { key: 'xsmb', shortName: '0xsmb', longName: 'xổ số miền bắc', id: 1 },
            { key: 'can_tho', shortName: '1Cần Thơ', longName: 'Cần Thơ', id: 2 },
            { key: 'an_giang', shortName: '2An Giang', longName: 'An Giang', id: 3 },
            { key: 'jackport_6_55', shortName: '36/55', longName: 'Jackport 6/55', id: 4 },
            { key: 'jackport_6_45', shortName: '46/45', longName: 'Jackport 6/45', id: 5 },
            { key: 'xsmb', shortName: '5xsmb', longName: 'xổ số miền bắc', id: 6 },
            { key: 'can_tho', shortName: '6Cần Thơ', longName: 'Cần Thơ', id: 7 },
            { key: 'an_giang', shortName: '7An Giang', longName: 'An Giang', id: 8 },
            { key: 'jackport_6_55', shortName: '86/55', longName: 'Jackport 6/55', id: 9 },
            { key: 'jackport_6_45', shortName: '96/45', longName: 'Jackport 6/45', id: 10 }
        ];
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.scrollView}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}>
                        {
                            list.map((channel, index) => <Item index={index} channel={channel} setPopupDataInfo={this.setPopupDataInfo} key={channel.id}/>)
                        }
                    </ScrollView>
                </View>
                {
                    popup.show &&
                    <RemoveChannelFollow/>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    container: {
        // flex: 1
    },
    title: {
        color: Config.grayB,
        marginTop: 7
    },
    scrollView: {
        width: fullWidth,
        height: 84,
        marginTop: 10
    }
});