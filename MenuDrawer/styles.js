import {StyleSheet} from 'react-native'

export default styles = {
    navBar: {
        flex: 1,
        height: 75,
        alignSelf: 'stretch',
        alignItems: 'center',
        position: 'absolute', left: 0, right: 0, bottom: 0,
        backgroundColor: '#ad6d5d',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    searchBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        width: 250,
        backgroundColor: '#ad6d5d',
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        height: 650,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    subtitle: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'center',
    },
    btnTxt: {
        color: 'white',
    },
    menu: {
        alignSelf: 'stretch',
        color: 'white',
        marginTop: 15,
        height: 650,
        backgroundColor: '#f4a93f'
    },
    mapContainer: {
        paddingTop: 15,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },

}
