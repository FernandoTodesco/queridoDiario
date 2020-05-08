import mockNews from '../sample/news.json';

const callFetch = () => {}

const newsData = () => {
    return process.env.REACT_APP_MOCK ? mockNews : callFetch();
};

export default newsData;