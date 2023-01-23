const date = document.querySelector('.date');
const explanation = document.querySelector('.night-sky');
const title = document.querySelector('.title')

const fetchData = () => {
  fetch(
    'https://api.nasa.gov/planetary/apod?api_key=o7ZBR6iinhQZ0QtWjmcUILqV7AH4mBGJWWFldOpv'
  )
    .then((response) => response.json())
    .then((data) => convertedData(data));
};

const convertedData = (data) => {
  if (data) {
    title.textContent = data.title;
    document.getElementById('img').src = data.url;
    date.textContent = data.date;
      explanation.textContent = data.explanation;

  } 
};

fetchData();
