import mockNews from '../sample/news.json';

const key = '5ee34df119314036a3370ccd536e68ed';
const url = `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${key}`;

const getNews = async () => {
    const response = await fetch(`${url}`);
    const news = await response.json();
    return news.articles;    
}

const newsData = () => {
    return process.env.REACT_APP_MOCK ? mockNews : getNews();
};

export default newsData;
