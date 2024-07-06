const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('There was an error!', error);
    }
}

fetchNews();

function displayNews(articles) {
    const newsDiv = document.getElementById('news');



    for (const article of articles) {
        const articleDiv = document.createElement('div');
        newsDiv.appendChild(articleDiv);
        //newsDiv.setAttribute('card');

        //     //create and append an image to the articleDiv
        const imageDiv = document.createElement('img');
        imageDiv.src = article.urlToImage;
        articleDiv.appendChild(imageDiv);
        imageDiv.style.maxWidth = "30rem";

        //create and append a headline to the articleDiv
        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);
        //create and append a snippet to the headline
        const snippetDiv = document.createElement('p');
        snippetDiv.textContent = article.description;
        articleDiv.appendChild(snippetDiv);
        //create and append a link to story
        const linkArticle = document.createElement('a');
        linkArticle.textContent = article.url;
        linkArticle.setAttribute('href', article.url)
        linkArticle.style.color = "blue";
        articleDiv.appendChild(linkArticle);
        //create and append a break between articles
        const breakSpace = document.createElement('hr');
        articleDiv.appendChild(breakSpace);

    }
}