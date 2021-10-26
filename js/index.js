// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

 let priceDom = document.querySelector('.price span')
 let quantityDom = document.querySelector('.quantity input')

 let subDom = document.querySelector('.subtotal span')
    subDom.innerHTML = priceDom.innerHTML * quantityDom.value

    return product
     
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelector('.product');
  updateSubtotal(singleProduct);

  let allProds1 = document.getElementsByClassName('product')
  console.log(allProds1)

  let allProds = document.querySelectorAll('.product')
  console.log(allProds)

  products.forEach((singleProduct) => {
    console.log(singleProduct)
  })
  // end of test

  // ITERATION 2
  
  

  




  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
