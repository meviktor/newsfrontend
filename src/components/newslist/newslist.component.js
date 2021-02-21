import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { NewsListItemStyle, NewsListStyle, ErrorViewStyle, SpinnerStyle, EndOfResultsStyle } from './newslist.style';
import { NewsProvider } from '../../providers/newsProvider';

const NewsList = (props) => {
    const [articles, setArticles] = useState([]);
    const [errorOccured, setErrorOccured] = useState(false);
    const [errorText, setErrorText] = useState(null);
    const [loadedPages, setLoadedPages] = useState(0);
    const [noMoreNewsFound, setNoMoreNewsFound] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const newsProvider = useState(new NewsProvider())[0];

    const nextPageNumber = () => loadedPages + 1;

    async function fetchNews(){
        setIsLoading(true);
        try{
            var fetchedArticles = await newsProvider.searchNewsBasic(
                props.query.wordsToSearch, props.query.sources, props.query.dayInterval, props.query.sortBy, props.query.pageSize, nextPageNumber()
            );
            if(fetchedArticles.length == 0){
                setNoMoreNewsFound(true);
            }
            setArticles([...articles, ...fetchedArticles]);
            setLoadedPages(loadedPages + 1);
        }
        catch(error){
            setErrorOccured(true);
            setErrorText(generateErrorMessage(error));
        }
        console.log(articles);
        setIsLoading(false);
    }

    async function _loadMoreNews(){
        if(!noMoreNewsFound){
            await fetchNews();
        }
    }

    useEffect(() => {
        fetchNews();
    }, []);

    // TODO: sepearte the two cases when we are using the app in development or production environment!
    function generateErrorMessage(error){
        return `${error.message}\n${error.innerError ? `innerError: ${error.innerError.toString()}` : ''}`;
    };

    return (
        <View style={NewsListStyle.mainContainer}>
            {errorOccured && <ErrorView message={errorText}/>}
            {!errorOccured && 
                <FlatList 
                    data={articles} 
                    renderItem={({item}) => <NewsListItem news={item} navigation={props.navigation}/>}
                    onEndReached={() => _loadMoreNews()}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={isLoading && <Spinner/>}
                />
            }
            {(!errorOccured && noMoreNewsFound) && <EndOfResults/>}
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
                <Text style={NewsListItemStyle.newsTitle} onPress={() => props.navigation.navigate('Browser', {url: props.news.url})}>
                    {props.news.title}
                </Text>
                <View style={NewsListItemStyle.newsDetailsContainer}>
                    <View style={NewsListItemStyle.imageConatiner}>
                        <Image source={{uri: props.news.urlToImage, width: NewsListItemStyle.imageConatiner.width, height: NewsListItemStyle.imageConatiner.width}}></Image>
                    </View>
                    <View style={NewsListItemStyle.descriptionContainer}>
                        <Text>{props.news.content}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const ErrorView = (props) => {
    return (
        <Text style={ErrorViewStyle.viewStyle}>
            {props.message}
        </Text>
    );
}

const Spinner = () => (
    <View style={SpinnerStyle.viewStyle}>
      <ActivityIndicator
        color={SpinnerStyle.indicatorStyle.color}
        size="large"
        style={{ alignSelf: SpinnerStyle.indicatorStyle.alignSelf }}
      />
    </View>
);

const EndOfResults = () => {
    return (
        <View style={EndOfResultsStyle.viewStyle}>
            <Text style={EndOfResultsStyle.textStyle}>End of results reached</Text>
        </View>
    );
}

export default NewsList;
