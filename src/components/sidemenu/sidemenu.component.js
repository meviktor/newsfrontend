import React from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCogs, faNewspaper, faSearch, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { SideMenuStyle } from './sidemenu.style';

const sideMenuItems = [
    { faIcon: faCogs, text: "Settings", pageToNavigateAfterPress: null },
    { faIcon: faNewspaper, text: "Search news", papageToNavigateAfterPress: null },
    { faIcon: faSearch, text: "Advanced search", papageToNavigateAfterPress: null },
    { faIcon: faInfoCircle, text: "About", papageToNavigateAfterPress: null }
];

const SideMenu = () => {
    return (
        <View style={SideMenuStyle.menuContainer}>
            <SideMenuHeader/>
            <View style={SideMenuStyle.menuRoot}>
                <FlatList 
                data={sideMenuItems} 
                renderItem={({item}) => 
                    <SideMenuItem 
                        faIcon={item.faIcon}
                        text={item.text}
                        pageToNavigateAfterPress={item.pageToNavigateAfterPress}
                    />
                }/>
            </View>
        </View>
    );
};

const SideMenuItem = ({faIcon, text, pageToNavigateAfterPress}) => {
    return (
        <TouchableOpacity>
            <View style={SideMenuStyle.menuItemRoot}>
                <View style={{flex: SideMenuStyle.menuItemIcon.flex, padding: SideMenuStyle.menuItemIcon.padding}}>
                    <FontAwesomeIcon icon={faIcon} size={SideMenuStyle.menuItemIcon.height} color={SideMenuStyle.menuItemIcon.color}/>
                </View>
                <View style={{flex: SideMenuStyle.menuItemText.flex}}>
                    <Text style={SideMenuStyle.menuItemText}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const SideMenuHeader = () => {
    return (
        <View style={{
            flex: SideMenuStyle.menuHeader.flex,
            backgroundColor: SideMenuStyle.menuHeader.backgroundColor,
            alignItems: SideMenuStyle.menuHeader.alignItems,
            justifyContent: SideMenuStyle.menuHeader.justifyContent
        }}>
            <Text style={{color: SideMenuStyle.menuHeader.color, fontSize: SideMenuStyle.menuHeader.fontSize, fontWeight:  SideMenuStyle.menuHeader.fontWeight}}>Menu</Text>
        </View>
    );
};

export default SideMenu;
