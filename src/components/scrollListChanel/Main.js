import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import * as Config from './../../configs/Config';
import Item from './Item';
import Popover from './../popup/Popover';

export class Main extends React.Component {
    state = {
        popup: {
            show: false,
            arrowX: 30,
            channel: null
        }
    }

    getPopupArrowPos = (item) => {
        let pos;
        pos = item.x + 20;
        return pos < 30 ? 30 : (pos > 300 ? 300 : pos);
    }

    setPopupDataInfo = (popup) => {
        const arrowX = this.getPopupArrowPos(popup);
        const newPopup = { ...this.state.popup, ...{ arrowX: arrowX, channel: popup.channel, show: true } };
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
            { key: 'xsmb', shortName: 'xsmb', longName: 'xổ số miền bắc', id: 1 },
            { key: 'can_tho', shortName: 'Cần Thơ', longName: 'Cần Thơ', id: 2 },
            { key: 'an_giang', shortName: 'An Giang', longName: 'An Giang', id: 3 },
            { key: 'jackport_6_55', shortName: '6/55', longName: 'Jackport 6/55', id: 4 },
            { key: 'jackport_6_45', shortName: '6/45', longName: 'Jackport 6/45', id: 5 }
        ];
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.scrollView}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}>
                        {
                            list.map(channel => <Item channel={channel} setPopupDataInfo={this.setPopupDataInfo} key={channel.id}/>)
                        }
                    </ScrollView>
                </View>
                {
                    popup.show &&
                    <Popover
                        closePopup={this.closePopup}
                        direction="bottom"
                        popup={popup}/>
                }
            </View>
        )
    }
}

const fullWidth = Dimensions.get('window').width - 20;

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