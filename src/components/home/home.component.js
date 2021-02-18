import React from 'react';
import { NewsList } from '../newslist/newslist.component';
import SearchConfig from '../../searchConfig';

function Home() {
    return (
        <NewsList query={SearchConfig} />
    );
}

export default Home;
