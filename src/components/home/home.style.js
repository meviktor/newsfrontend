import { StyleSheet } from 'react-native';

const NewsListItemStyle = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
            flexDirection: 'column',
            padding: 10
        },
        newsSource: {
            flex: 1,
            fontSize: 12
        },
        newsContainer: {
            flex: 7,
            flexDirection: 'column'
        },
        newsTitle: {
            flex: 1,
            fontWeight: 'bold',
            fontSize: 18
        },
        newsDetailsContainer: {
            flex: 6,
            flexDirection: 'row',
            padding: 5
        },
        imageConatiner: {
            flex: 1,
            imageSize: 96
        },
        descriptionContainer: {
            flex: 2,
            fontSize: 14
        }
    }
);

const HomeStyle = StyleSheet.create(
    {
        mainContainer: {
            flex: 1
        }
    }
);

export { NewsListItemStyle, HomeStyle };
