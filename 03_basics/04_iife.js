// Immediately Invoked Function Expressions

(function chai(){
    console.log("DB Connected!!");
})(); // Semi colon must!!!

((real_name) => {
    console.log(`DB Connected 2 ${real_name}`);
})('hitesh');