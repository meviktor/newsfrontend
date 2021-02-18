import { EverythingQuery, NewsClient, Phrase, SortBy, Article, Language } from 'newsapi-node';
import AppConfig from '../appConfig';
import { DateUtils } from '../Utils/utis';

export class NewsProvider {
    #apiKey;
    #newsClient;

    constructor(){
        this.#apiKey = this._loadApiKey();
        this.#newsClient = new NewsClient(this.#apiKey);
    }

    /**
     * Provides in the available news using basic parameters.
     * @param {string[]} wordsToSearch Words the found articles should contain. 
     * @param {string[]} sources News sources (their ids as string) we want to search.
     * @param {Number} dayInterval How old an article can be (in days).
     * @param {SortBy} sortBy How the results wanted to be sorted (a valid SortBy value or null).
     * @param {Number} page Which page of news is requested (first, second...).
     * @returns {Article[]} A list of the found articles with the predefined length.
     * @throws NewsSearchError - if at least one parameter does not have the proper type/format or a problem occurs while requesting the news.
     */
    async searchNewsBasic(wordsToSearch, sources, dayInterval, sortBy, pageSize, page){
        if(!Array.isArray(wordsToSearch)){
            throw new NewsSearchError(WORDSTOSEARCH_IS_NOT_AN_ARRAY);
        }
        if(!Array.isArray(sources)){
            throw new NewsSearchError(SOURCES_IS_NOT_AN_ARRAY);
        }
        if(sortBy != null && ![SortBy.PUBLISHEDAT, SortBy.RELEVANCY, SortBy.POPULARITY].includes(sortBy)){
            throw new NewsSearchError(SORTBY_VALUE_NOT_VALID);
        }
        if(page <= 0 || Number(page) == Number.NaN){
            throw new NewsSearchError(PAGE_VALUE_NOT_VALID);
        }

        var phrase = new Phrase([], wordsToSearch, []);

        var now = null, fromDate = null;
        if(Number(dayInterval) != Number.NaN && dayInterval > 0){
            now = new Date();
            fromDate = DateUtils.subractFromDate(now, dayInterval);
        }

        var query = new EverythingQuery(phrase, null, sources, null, null, fromDate, now, sortBy, Language.ALL, pageSize, page);
        var result;

        try{
            result = await this.#newsClient.searchForEverything(query);
        }
        catch(error){
            throw new NewsSearchError(NEWS_SEARCH_ERROR, error);
        }

        return result;
    }

    _loadApiKey(){
        // TODO: load the api key from a safe storage!
        return AppConfig.apiKey;
    }
}

export class NewsSearchError {
    constructor(message, innerError){
        this.message = message;
        this.innerError = innerError ? innerError : null;
    }
}

const WORDSTOSEARCH_IS_NOT_AN_ARRAY = `Parameter 'wordsToSearch' must be an array!`;
const SOURCES_IS_NOT_AN_ARRAY = `Parameter 'sources' must be an array!`;
const SORTBY_VALUE_NOT_VALID = `Parameter 'sortBy' must be one of the following values: SortBy.PUBLISHEDAT, SortBy.RELEVANCY, SortBy.POPULARITY, null (parameter not used).`;
const PAGE_VALUE_NOT_VALID = `Parameter 'page' must have a value of 1 or higher`;
const NEWS_SEARCH_ERROR = 'An error occured while searching for news. See the inner error for details.';
