// this script is used to populate the articles on the home page

let populateData;
async function getData(){
  await fetch("http://127.0.0.1:3177/articleList/3", {
    method: "GET",
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    populateData=data;
  })
  .catch(error=>{
    console.error(error);
  });
}
getData();

let articleTitles= document.querySelectorAll('.blog__card__header');
function populateArticles(elemArr, dataArr){
  if((elemArr || dataArr) === (null || undefined)){
    console.error("The parameters are bad values")
  }
  [...elemArr].forEach((e,k)=>{
    console.log(e.firstElementChild.firstElementChild);
    e.firstElementChild.firstElementChild.innerHTML=dataArr[k].title;
    e.firstElementChild.firstElementChild.setAttribute("href", `http://localhost:3177/article/${dataArr[k].article_id}`);
    e.children[1].innerHTML=(dataArr[k].date_published.split('T')[0]);
  });
}

let articleDescription=document.querySelectorAll('.blog__card__description');
function populateDescription(elemArr, dataArr){
  [...elemArr].forEach((e,k)=>{
    e.innerHTML=dataArr[k].value;
  });
};

let populateInterval=setInterval(() => {
  if(populateData!==undefined){
    populateArticles(articleTitles, populateData);
    populateDescription(articleDescription, populateData);
    clearInterval(populateInterval);
  }
}, 100);