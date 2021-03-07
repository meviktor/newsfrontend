import { StyleSheet } from 'react-native';

const SettingsStyle = StyleSheet.create({
    settingMenuItemRoot: {
        flex: 1,
        flexDirection: 'row'
    },
    settingMenuItemIcon: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000000',
        height: 24,
    },
    settingMenuItemTextRoot: {
        flex: 9,
        padding: 5
    },
    settingMenuItemTextMain: {
        fontSize: 22
    },
    settingMenuItemTextDescription: {
        fontSize: 11
    },
});

export { SettingsStyle };
