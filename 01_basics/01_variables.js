const accountId = 132421
let accountEmail = "Sayantanog@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState

// accountId = 232323 // Not allowed!!
accountEmail = "Kohli@gmail.com"
accountPassword = "111111"
accountCity = "Kolkata"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
// console.log(accountState);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* 
Prefer not to use var 
because of issue in block scope 
and function scope
 */