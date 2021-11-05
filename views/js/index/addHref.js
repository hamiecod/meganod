function setHref(){
  var linkArr=Array.from(document.querySelectorAll('.blog__card__header--link'));
  linkArr.forEach((e)=>{
    e.addEventListener('click', (event)=>{
      let article_id=idArr[titleArr.indexOf(event.target.innerHTML)];
      event.target.setAttribute('href', `/article/${article_id}`)
    })
  });
}
setHref();

let titleArr=[];
let idArr=[];
let titleInterval=setInterval(() => {
  if(populateData!==undefined){
    populateData.forEach((e,k)=>{
      titleArr.push(populateData[k].title);
      idArr.push(populateData[k].article_id)
    })
    clearInterval(titleInterval);
  }
}, 120);