let hearts = document.querySelectorAll(".recipes-edit-rating span");
let products = document.querySelectorAll(".recipes-edit-rating");
let ratings = [];
 
for(let heart of hearts){
   heart.addEventListener("click", function(){
      
      let children = 	heart.parentElement.children;
      for(let child of children){
         if(child.getAttribute("data-clicked")){
            return false;	
         }
      }
      
      this.setAttribute("data-clicked","true");
      let rating = this.dataset.rating;
      let productId = this.parentElement.dataset.productid;
      let data = {
         "rating": rating,
         "product-id": productId,
      }
      ratings.push(data);
      localStorage.setItem("rating", JSON.stringify(ratings));
   });
}
 
if(localStorage.getItem("rating")){
   ratings = JSON.parse(localStorage.getItem("rating"));
   for(let rating of ratings){
      for(let product of products){
         if(product.dataset.productid == rating["product-id"]){
            let reverse = Array.from(product.children).reverse();
            let index = parseInt(rating["rating"]) - 1;
            reverse[index].setAttribute("data-clicked", "true");
         }
      }
   }
}