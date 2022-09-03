
const newsInACategory = () =>{
    const url =`https://openapi.programming-hero.com/api/news/category/01`
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data.data))
}


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