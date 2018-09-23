import React from 'react';
import { StyleSheet, View, Text, NetInfo, ScrollView, Dimensions } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actFetchData } from './../reducers/testSagaReducer';

function mapStateToProps(state: Object): Object {
    return {
        fetchDReducer: state.fetchDReducer
    }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    actFetchData: bindActionCreators(actFetchData, dispatch)
  }
}

class Ahi extends React.Component {
    state = {
        tableHead: ['ID', 'Name', 'Username', 'Email', 'Phone', 'Website'],
        tableData: []
    }

    componentDidMount() {
        this.props.actFetchData();
    }

    render() {
        console.log("Saga:", this.props)
        const { tableHead, tableData } = this.state;
        const data = [];
        this.props.fetchDReducer.data.forEach(item => {
            const row = [item.id, item.name, item.username, item.email, item.phone, item.website];
            data.push(row);
        });
        console.log("=====data:", data)
        return (
            <ScrollView
                style={styles.scrollView}
                showsHorizontalScrollIndicator={false}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={data} textStyle={styles.text}/>
                </Table>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    scrollView: {
        width: Dimensions.get('window').width + 200,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Ahi);

