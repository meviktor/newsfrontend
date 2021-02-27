import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import NewsList from '../newslist/newslist.component';
import SearchConfig from '../../searchConfig';
import { TouchableOpacity, View, Text } from 'react-native';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HomeHeaderStyle, HomePageStyle } from './home.style';
import  Drawer from 'react-native-drawer';
import { useState } from 'react';

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

const SideMenu = () => {
    return (
        <View style={{backgroundColor: "#dddddd", flex: 1, padding: 5}}>
            <Text style={{fontSize: 18}}>
                Side menu
            </Text>
        </View>
    );
};

export default Home;
