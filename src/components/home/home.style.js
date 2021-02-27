import { StyleSheet } from 'react-native';

const HomePageStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
       flex: 1,
       backgroundColor: '#e3e3e3'
    },
    newsList: {
        flex: 14
    }
});

const HomeHeaderStyle = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row'
    },
    menuButton: {
        flex: 1,
        padding: 10,
        height: 26,
        color: '#000000'
    },
    headerText: {
        flex: 7,
        textAlign: 'left',
        fontSize: 28,
        fontWeight: 'bold',
        padding: 3,
        color: '#000000'
    }
});

export { HomePageStyle, HomeHeaderStyle };
