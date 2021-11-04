let articleData;
async function getData() {
  await fetch("http://127.0.0.1:3177/article/1")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      articleData = data;
    });
}
getData();
setTimeout(() => {
  console.log(articleData);
  populateData();
}, 100)

function populateData(){
  document.querySelector('.header__heading').innerHTML= articleData[0].title;
  document.title=articleData[0].title;
  document.querySelector('#content').innerHTML = articleData[0].content;
}