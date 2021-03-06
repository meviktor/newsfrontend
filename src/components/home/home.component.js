import React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import  Drawer from 'react-native-drawer';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import NewsList from '../newslist/newslist.component';
import SideMenu from '../sidemenu/sidemenu.component';
import SearchConfig from '../../searchConfig';

import { HomeHeaderStyle, HomePageStyle } from './home.style';

const Home = ({navigation}) => {
    const [menuDrawer, setMenuDrawer] = useState(null);

    return (
        <Drawer ref={(drawer) => setMenuDrawer(drawer)} open={false} type="overlay" tapToClose={true} openDrawerOffset={0.2} content={<SideMenu/>}>
            <View style={HomePageStyle.mainContainer}>
                <View style={HomePageStyle.header}>
                    <HomeHeader menuDrawer={menuDrawer}/>
                </View>
                <View style={HomePageStyle.newsList}>
                    <NewsList query={SearchConfig} navigation={navigation}/>
                </View>
            </View>
        </Drawer>
    );
};

const HomeHeader = ({menuDrawer}) => {
    return (
        <View style={HomeHeaderStyle.header}>
            <View style={HomeHeaderStyle.menuButton}>
                <TouchableOpacity onPress={() => {
                    !menuDrawer.props.open ? menuDrawer.open() : menuDrawer.close();  
                }}>
                    <FontAwesomeIcon icon={faBars} size={HomeHeaderStyle.menuButton.height} color={HomeHeaderStyle.menuButton.color}/>
                </TouchableOpacity>
            </View>
            <Text style={HomeHeaderStyle.headerText}>
                News - starting page
            </Text>
        </View>
    );
};

export default Home;
