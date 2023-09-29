var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newFavorite) {
  bestCustomer = newFavorite;
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}