let product = (param) => {
    return result => result % param;
}

let thrice = product(3);

console.log(thrice(6));

// This feature — being able to reference a specific instance of a local binding in an enclosing scope—is called closure. 

// A function that references bindings from local scopes around it is called a closure

// Thinking about programs like this takes some practice. A good mental model is needed to think of function values as containing both the code in their body and the environment in which they are created. When called, the function body sees the environment in which it was created, not the environment in which it is called.

// In the example, product is called and creates an environment in which its parameter param is bound to 3. The function value it returns, which is stored in thrice, remembers this environment. So when that is called, it evaluates its expression by the new parameter.

// This therefore means that, at the declaration of the function, we actually stated that the function should store a value for the function environment on the first call (this has to be when a closure is been created), then when the closure is called, the passed in argument for the closure is assigned to the return value and evaluated.

// To illustrate at the first function call - when a closure is created, the parameter is assigned to the local binding
        // let product = (3) => {
                // return result => result *|+|%|/ 3;
        // }
    // Therefore when the closure is called, the assigned parameter is used as the value to be returned after the expression is evaluated
        // let product = (5) => {
                // return result => 5 *|+|%|/ 3;
        // } 