import {StyleSheet} from 'react-native'

export default styles = {
    navBar: {
        flex: 1,
        height: 75,
        alignSelf: 'stretch',
        alignItems: 'center',
        position: 'absolute', left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgb(65, 88, 109)',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    header: {
        width: '100%',
        height: 75,
        backgroundColor: 'rgb(65, 88, 109)',
        margin: 0,
    },
    searchBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        width: 250,
        // backgroundColor: '#ad6d5d',
        backgroundColor: 'rgb(109, 92, 65)',
        marginTop: 15,
        marginBottom: 15,
    },
    swipeout: {
        // backgroundColor: '#f4a93f',
        // backgroundColor: 'rgb(84, 141, 163)',
        backgroundColor: 'rgb(65, 88, 109)',
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    thumbTitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
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
        flex: 1,

        // backgroundColor: 'rgb(109, 92, 65)',
        // backgroundColor: 'rgb(84, 141, 163)',
    },
    menuHeader: {
        alignItems: 'center',
        alignSelf: 'center',
        padding: 15,
        // marginTop: 15,
        // marginBottom: 15,
        width: '100%',
        // borderRadius: 5,
        // backgroundColor: '#6d5641',
        // backgroundColor: 'rgb(61, 102, 118)'
    },
    menuDrawer: {
        flex:1,
        width: "100%",
        backgroundColor: 'rgba(0,0,0,0.3)',
        // backgroundColor: 'rgba(75, 25, 25, 0.6)',
        // backgroundColor: 'rgba(65, 88, 109, 0,3)',
        // borderColor: 'rgb(65, 88, 109)',
        // borderRightWidth: 10,
        // borderLeftWidth:10,
    },
    explorerContainer: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 80,
    },
    explorerThumb: {
        alignItems: 'center',
        width: 250,
        margin: 10,
        padding: 10,
        // backgroundColor: '#f4a93f',
        backgroundColor: 'rgb(84, 141, 163)',

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
        flex:1,
        width: '100%',

        paddingBottom: 75,
        // paddingLeft: 20,
        // paddingRight: 20,
        // paddingTop: 20,
    },
    menuSection: {
        alignSelf: 'center',
        // backgroundColor: "#ad6d5d",
        backgroundColor: '#586d41',
        margin: 5,
        padding: 10,
        borderRadius: 5,
        padding: 5,
        width: 325,
    },
    restaurantThumb: {
        width: 250,
        margin: 10,
        padding: 10,
        // backgroundColor: '#ad6d5d',
        backgroundColor: 'rgb(109, 92, 65)',
    },
    itemLine: {
        borderColor: 'rgba(255,255,255, 0.3)',
        borderWidth: 1,
        borderStyle: 'dashed',
        margin:15,
        height:1,
        flexGrow: 1
    },
    menuThumb: {
        width: 250,
        margin: 10,
        padding: 10,
        // backgroundColor: 'rgb(84, 141, 163)',
        backgroundColor: 'rgb(65, 88, 109)',
        alignSelf: 'center'
    },
    sectionHeader: {
        marginLeft:10,
        marginRight:10,
        alignItems: 'center',
        borderColor: 'rgba(255,255,255, 0.3)',
        paddingBottom: 5,
        borderStyle: 'solid',
        borderBottomWidth: 1,
    },
    sectionBody: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    sectionTitle: {
        fontWeight: "700",
        fontSize: 16,
        color: 'white'
    },
    menuItem: {
        marginRight: 3,
        marginLeft: 3,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuTxt: {
        fontSize: 12,
        color: 'white',
    },
    searchContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        padding: 15,
        marginTop: 15,
        // marginBottom: 15,
        width: '80%',
        borderRadius: 5,
        // backgroundColor: '#ad6d5d',
        backgroundColor: 'rgb(109, 92, 65)',
    },
    mapContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        padding: 15,
        // marginTop: 15,
        marginBottom: 15,
        width: '80%',
        borderRadius: 5,
        // backgroundColor: '#ad6d5d',
        backgroundColor: '#586d41',
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
