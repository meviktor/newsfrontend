import { StyleSheet } from 'react-native';

const SideMenuStyle = StyleSheet.create({
    menuContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    menuHeader:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        backgroundColor: '#000000',
        fontSize: 42
    },
    menuRoot: {
        flex: 4,
        backgroundColor: '#e3e3e3'
    },
    menuItemRoot: {
        flex: 1,
        flexDirection: 'row',
        padding: 5
    },
    menuItemIcon: {
        flex: 2,
        height: 24,
        padding: 5,
        color: '#000000'
    },
    menuItemText: {
        flex: 8,
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export { SideMenuStyle };
