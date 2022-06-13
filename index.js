var customerName = 'bob';

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase()
}
function setBestCustomer(){
   bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'Sam';

function changeLeastFavoriteCustomer(){
   leastFavoriteCustomer = 'Joe'
   return leastFavoriteCustomer
}