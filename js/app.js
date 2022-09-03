
// get caegory url
const newsCategoris = () =>{
    url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(response => response.json())
    .then( data => displayCategories(data.data.news_category))
}

const displayCategories =(news_category)=>{

  const categoryContainer = document.getElementById('category-section');
   
    for(const category of news_category){
        // console.log(category);
        const categoryList = document.createElement('ul')
    
        categoryList.innerHTML=`
        <li class="list-group">${category.category_name}`
        categoryContainer.appendChild(categoryList);
 }
}
newsCategoris();




const newsInACategory = () =>{
    const url =`https://openapi.programming-hero.com/api/news/category/01`
    fetch(url)
    .then(response => response.json())
    .then(data => displayNews(data.data))
}

const displayNews = newses =>{
    const newsContainer = document.getElementById('news-container');

    for(const news of newses ){
     console.log(news.data);
    
    newsContainer.innerHTML =`
    <div class="col-md-4">
    <img src="..." class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>`

}
}
newsInACategory();

