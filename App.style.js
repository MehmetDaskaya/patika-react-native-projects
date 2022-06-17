import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
    },
    Header: {
        flexDirection: 'row',
        margin:10,
        marginTop: 10,
        marginBottom:3,
    },
    HeaderText: {
        paddingLeft: 10,
        color: 'purple',
        fontSize: 26,

        fontWeight: 'bold',
    },

    SearchContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        margin:10,
        marginTop:3,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: '#e8e8e8',
        color: '#red',
    },
    input: {
        paddingLeft: 18,
        fontSize: 18,
    },

});