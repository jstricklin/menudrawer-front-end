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
        marginTop: 15,
        marginBottom: 15,
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        height: 650,
        alignItems: 'center',
        paddingTop: 50,
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
    mainTxt: {
        color: 'white',
    },
    menu: {
        alignSelf: 'stretch',
        color: 'white',
        marginTop: 15,
        height: 650,
        backgroundColor: '#f4a93f'
    },
    menuHeader: {
        alignItems: 'center',
        alignSelf: 'center',
        padding: 15,
        // marginTop: 15,
        marginBottom: 15,
        width: '100%',
        // borderRadius: 5,
        backgroundColor: '#ad6d5d',
    },
    menuDrawer: {
        flex:1,
        width: "100%",
        backgroundColor: 'rgba(75, 25, 25, 0.6)',
        borderColor: '#ad6d5d',
        borderRightWidth: 10,
        borderLeftWidth:10,
        borderTopWidth:10,
        borderBottomWidth: 0,
    },
    drawerTitle: {
        alignSelf: 'center',
        color: 'white',
        marginTop: 10,
        marginBottom: 25,
        fontSize: 30,
        fontWeight: 'bold',
    },
    menuContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
    },
    menuThumb: {
        margin: 10,
        padding: 10,
        backgroundColor: '#f4a93f',
    },
    mapContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        padding: 15,
        marginTop: 15,
        marginBottom: 15,
        width: '80%',
        borderRadius: 5,
        backgroundColor: '#ad6d5d',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    searchContainer: {
        height:650,
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: '100%',
        alignItems:'center',
        paddingTop: 15
    },

}
