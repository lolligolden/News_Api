const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error('There was an error!', error);
    }
}

fetchNews();

function displayNews(articles) {
    for(let i = 0; i < articles.length; i++) {
        const newsDiv = document.querySelector('#news');
        const title = document.querySelector('#card-title');
        const snippetDiv = document.querySelector('#card-text');
        const linkArticle = document.getElementsByTagName('a');

        //display Content
        title.textContent = articles[i].title;
        snippetDiv.textContent = articles[i].description;
        linkArticle.textContent = articles[i].url;

        //articleDiv.appendChild(title);
        //create and append a descripion to the headline
        articleDiv.appendChild(snippetDiv);
        //create and append a link to the article
        linkArticle.click();
        linkArticle.style.color = "blue";
        articleDiv.appendChild(linkArticle);
        
        const articleDiv = document.querySelector('#card-text');


        //create and append a break between articles
        const breakSpace = document.createElement('hr');
        articleDiv.appendChild(breakSpace);


        // TODO: Use document.createElement and appendChild to 
        // create and append more elements
        
    }
}