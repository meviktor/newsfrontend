import React from 'react';
import NewsList from '../newslist/newslist.component';
import SearchConfig from '../../searchConfig';

function Home({navigation}) {
    return (
        <NewsList query={SearchConfig} navigation={navigation}/>
    );
}

export default Home;
