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
            width: 96
        },
        descriptionContainer: {
            flex: 2,
            fontSize: 14
        }
    }
);

const ErrorViewStyle = StyleSheet.create(
    {
        viewStyle:{
            padding: 10,
            margin: 5,
            color:'#ff0000',
            backgroundColor:'#ff9c9c',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#ff0000'
        }
    }
);

const SpinnerStyle = StyleSheet.create(
    {
        indicatorStyle: {
            color:'#0000ff',
            alignSelf:'center'
        },
        viewStyle: {
            minHeight: 250,
            padding: 25
        }
    }
);

const EndOfResultsStyle = StyleSheet.create(
    {
        viewStyle: {
            minHeight: 50,
            padding: 10
        },
        textStyle: {
            color:'#aaaaaa',
            alignSelf:'center',
            fontSize: 18
        },
    }
);

const NewsListStyle = StyleSheet.create(
    {
        mainContainer: {
            flex: 1
        }
    }
);

export { NewsListItemStyle, NewsListStyle, ErrorViewStyle, SpinnerStyle, EndOfResultsStyle };
