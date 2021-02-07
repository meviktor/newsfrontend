import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { NewsListItemStyle, HomeStyle } from './home.style';

const staticData = [
    {
        sourceName: 'iMore',
        title: `There's a lot of exciting Apple news to look forward to`,
        imageUrl: 'https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2021/02/iphone-12-pro-mask-unlock-hero.jpg',
        content: `There was a lot of exciting Apple news this week. Another week has come and gone, and Apple gave us some pretty big news over the past few days, so let's dive right in. First off, Apple released the first developer beta for iOS 14.5, and this is one juicy u…`
    },
    {
        sourceName: 'The Atlantic',
        title: '7 Ways of Looking at GM’s New Super Bowl Ad',
        imageUrl: 'https://cdn.theatlantic.com/thumbor/r04hVVy_kBvxGmBxkykuJUVk1-E=/2x82:1919x1080/960x500/https://cdn.theatlantic.com/assets/media/img/mt/2021/02/GM_NoWayNorway_01/original.jpg',
        content: `1. Here is what happens in the ad that General Motors will air during the Super Bowl: Standing in a garage inspired half by the storage unit in True Detective and half by the It’s Always Sunny in Phi…`
    }
];

const Home = () => {
    return (
        <View style={HomeStyle.mainContainer}>
            <FlatList data={staticData} renderItem={({item}) => <NewsListItem news={item}/>}/>
        </View>
    );
}

const NewsListItem = (props) => {
    return (
        <View style={NewsListItemStyle.mainContainer}>
            <Text style={NewsListItemStyle.newsSource}>
                {props.news.sourceName}
            </Text>
            <View style={NewsListItemStyle.newsContainer}>
                <Text style={NewsListItemStyle.newsTitle}>
                    {props.news.title}
                </Text>
                <View style={NewsListItemStyle.newsDetailsContainer}>
                    <View style={NewsListItemStyle.imageConatiner}>
                        <Image source={{uri: props.news.imageUrl, width: NewsListItemStyle.imageConatiner.imageSize, height: NewsListItemStyle.imageConatiner.imageSize}}></Image>
                    </View>
                    <View style={NewsListItemStyle.descriptionContainer}>
                        <Text>{props.news.content}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Home;
