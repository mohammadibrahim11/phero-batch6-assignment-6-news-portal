 
 
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
      //  console.log(category.category_id);
     
      const categoryList = document.createElement('ul');
  
      categoryList.innerHTML=`
      <li class="list-group fw-bold"><a href="#" onclick="loadNews('${category.category_id}')" class="text-decoration-none"
      >${category.category_name}</a></li>`;    
      categoryContainer.appendChild(categoryList);
      
}


}

 
 
 const loadNews =(event)=>{
  console.log(event);
  loadSpinner(true);
    const url = `
    https://openapi.programming-hero.com/api/news/category/${event}`
    fetch(url)
     .then(response => response.json())
     .then(data => displayNewsCategory(data.data))
     .catch(error =>console.log(error))
    
}

const displayCountItems = count =>{
  
  const countItems =document.getElementById('count-items');
    countItems.innerText = `
    '${count.length}'items found for category`;

    
}




const displayNewsCategory = newses=>{

          const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
console.log(newses.length);


          const noFoundMsg = document.getElementById('no-msg');
         if(newses.length === 0){
            noFoundMsg.classList.remove('d-none')
                }
                else{
                    noFoundMsg.classList.add('d-none')
                   };
    for(const news of newses){
        // console.log(news);

          

        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card', 'mb-3' , 'w-75', 'm-auto' );
        newsDiv.innerHTML = `
        
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${news.thumbnail_url}" class="img-fluid rounded-start p-2" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title fw-bold">${news.title}</h5>
              <p class="card-text">${news.details.slice(0,200)}...</p>

              <div class="card-text  d-flex justify-content-between align-items-center  mt-5 pt-5">

                <div class="d-flex"> 

                      <div>
                     <img src="${news.author.img}" alt="" width="40" height="40" class="d-inline-block align-text-top rounded-circle">
                     </div>

                         <div class="ps-2 ">
                          <small class="text-muted fw-bold">${news.author.name}</small> <br>
                        <small class="text-muted">${news.author.published_date}</small>
                       </div> 
                   
                   
                 </div>

                 <div>  
                    
                   <small class="text-muted">Total View : ${news.total_view}</small>
                   
                   </div>
                 <div>  
                    
                   <small class="text-muted">Rating : ${news.rating.number}</small>
                   
                   </div>
                 <div>  

                       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick = "loadNewsData('${news._id}')">
                       read more
                       </button>
                   
                   </div>        
              </div>

            </div>
          </div>
        </div>
            `;
    newsContainer.appendChild(newsDiv);
 
      
    }
    loadSpinner(false)
  
}

const loadNewsData =  Id =>{
   const url = `
   https://openapi.programming-hero.com/api/news/${Id}`
   fetch(url)
   .then(response => response.json())
   .then(data => displayNewsDeatails(data.data))
  // console.log('news')
}

const displayNewsDeatails =  news =>{
  console.log(news);

  const modalTitle = document.getElementById('exampleModalLabel');
  modalTitle.innerText =news[0].title;
  const  newsDetails = document.getElementById('news-details');
  // console.log(news.details);
  newsDetails.innerHTML =`
   <div>   <img class="container" src="${news[0].image_url ? news[0].image_url : 'no img found'}" > </div>
  <p> ${news[0].details ? news[0].details : 'no details'} </p>` ;

}


const loadSpinner =isLoading=>{
  const loaderSection =document.getElementById('spinner');
  if(isLoading){
    loaderSection.classList.remove('d-none')
  }
  else{
    loaderSection.classList.add('d-none')
  }
  
}

//  displayNewsDeatails()
//  displayNewsCategory()


newsCategoris();
displayCountItems('newses.length');
loadNews('01')
