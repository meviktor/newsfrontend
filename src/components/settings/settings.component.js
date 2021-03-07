import React from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';

import { SettingsStyle } from './settings.style';

const settingMenuItems = [
    { faIcon: faKey, mainText: "API key", description: "Add or change/remove the API key necessary to search for news.", pageToNavigateAfterPress: null }
];

const SettingsMenu = () => {
    return (
        <View>
            <FlatList 
            data={settingMenuItems}
            renderItem={({item}) => 
                <SettingsMenuItem 
                    faIcon={item.faIcon}
                    mainText={item.mainText}
                    description = {item.description}
                    pageToNavigateAfterPress={item.pageToNavigateAfterPress}
                />
            }/>
        </View>
    );
};

const SettingsMenuItem = ({faIcon, mainText, description, pageToNavigateAfterPress}) => {
    return (
        <TouchableOpacity>
            <View style={SettingsStyle.settingMenuItemRoot}>
                <View style={{
                    flex: SettingsStyle.settingMenuItemIcon.flex, padding: SettingsStyle.settingMenuItemIcon.padding,
                    alignItems: SettingsStyle.settingMenuItemIcon.alignItems,
                    justifyContent: SettingsStyle.settingMenuItemIcon.justifyContent,
                    padding: SettingsStyle.settingMenuItemIcon.padding
                }}>
                    <FontAwesomeIcon icon={faIcon} size={SettingsStyle.settingMenuItemIcon.height} color={SettingsStyle.settingMenuItemIcon.color}/>
                </View>
                <View style={SettingsStyle.settingMenuItemTextRoot}>
                    <View style={{padding: SettingsStyle.settingMenuItemTextMain.padding}}>
                        <Text style={{fontSize: SettingsStyle.settingMenuItemTextMain.fontSize, fontWeight: SettingsStyle.settingMenuItemTextMain.fontWeight}}>{mainText}</Text>
                        <Text style={{fontSize: SettingsStyle.settingMenuItemTextDescription.fontSize}}>{description}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default SettingsMenu;
