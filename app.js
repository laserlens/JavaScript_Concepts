//NOTE:  if no code on this page JavaScript still has code as EXECUTION CONTEXT
//NOTE:  EXECUTION CONTEXT creates the GLOBAL OBJECT 'this'


//NOTE: because of HOSTING no matter where you run below funtions they will still execute
//NOTE: HOSTING is posible beacause durring EXECUTION CONTEXT is creating(CREATION PHASE)
          //memory space for variable and funtions ie: HOSTING

b();//funtions code and all are added to the memory space and thefore will execute correctly no matter the order.
console.log('what is a: ' + a);//because this is executed before it is defined it will log the PLACE HOLDER undefinded
                  //but if var a did not exits it would log an error
                  //this is becuase what a = has not been added to the memory space yet

//NOTE:  the variable and the funtion will be found inside the gobal ogject
var a = 2; //var names are added to the memory space before code is executed, not their value
var b = 1;

function b(){//functions in their entirty are added to the memory space before code is executed
  console.log('Called b!');
}

//NOTE: variables when added to the memory space equal the PLACEHOLDER undefinded
//NOTE: undefinded !== not defined, undefinded = a value of variable hasn't been set

//NOTE: undefinded should never be set by the coder

var c;
console.log('what is c: ' + c);

//NOTE:  There are two phases in the EXECUTION CONTEXT phase
            //the 1st phase: CREATION PHASE where var names and func
                  //in entirty are added to the memory space
          //the 2nd phase: CODE EXECUTION runs your code line by line


//NOTE: INVOCATION is running a funciton, in JavaScript by using parenthesis()

function bar() {
   foobar = 'foobar'
}

function foo() {
  bar(); //since bar() is being INVOKED in foo(), bar() will be on top of the EXECUTION STACK
              //and therefore INVOKED before foo();
              //this means the order LEXICALLY
}

foo();//when foo is being INVOKED here a new EXECUTION CONTEXT is made for foo()
          //and added to the EXECUTION STACK
var foobar
console.log(foobar);


// NOTE: VARIABLE ENVIRONMENT is where the variables live
          //and how they relate to each other in memory
function bFun() {
  var myVar;//enven though shares name myVar since calling var its a new variable in memory
  console.log('bFun scope: ' + myVar);
}

function aFun() {
  var myVar = 2;
  console.log('aFun scope: ' + myVar);
  bFun();
}

var myVar = 1;//executed during GLOBAL EXECUTION CONTEXT
console.log('GLOBAL scope: ' + myVar);
aFun();
console.log('GLOBAL scope after invoking aFun: ' + myVar);// sitll equals 1 since 2 and undefinded are
                                                              //out side of scope for this myVar variabl


//NOTE:  SCOPE CHAIN: JavaScripts SYNTAX PARSER looks through each EXECUTION CONTEXT's OUTER ENVIRONMENT
//NOTE: THE SCOPE CHAIN stops at the first OUTER ENVIRONMENT it finds the value for the variable in
//NOTE: The SCOPE CHAIN keeps searching thourgh OUTER ENVIRONMENTS intill it hits the GLOBAL ENVIRONMENT

function scopeA() {
  function scopeB() {
    console.log(scopeVariable);
  }
  scopeB();
}

var scopeVariable = 'found scopeVariable at the GLOBAL SCOPE';
scopeA();

// NOTE: let allows the JavaScript engine to use BLOCK SCOPING
if (a > b) {
  let c = true;//only avaliable at this time for the running code
                //so if let is in a for loop you would get a different variable each time in memory
}

// NOTE: JavaScript Engine can appear Asynchrinous it runs Synchrinously.
// NOTE: This means that when a click envent happens or http request it is added to a EVENT QUEUE
// NOTE: the EVENT QUEUE executes when the EXECUTE STACK is finished

//long running function
function waitThreeSecounds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log('finished function');
}

function clickHandler() {
  console.log('Click Event');//since clicking by user is last in line (since it is in the EVENT QUEUE)
                                //this prints at the end no matter when user clicks
}

//listen for click event
document.addEventListener('click', clickHandler);

waitThreeSecounds();
console.log('finished execution');

// NOTE: JavaScript uses DYNAMIC TYPING, variables can hold different types
            //since the egine asigns types during execution
var isNEw = true;//no errors since DYNAMIC TYPING
isNew = 'yup!'
isNew = 1;

// NOTE: there are 5 PRIMITIVE TYPES (a type of data that reperesents a single vaule)
                    //1. UNDEFINED: lack of existence(leave for the engine to use)
                    //2. NULL: lack of existence(for the user to use)
                    //3. BOOLEAN: true or false
                    //4. NUMBER: only one number type in JavaScript and its a floating point NUMBER
                    //5. STRING: a squence of characters
                    //6. SYMBOL: part of ES6


// NOTE: OPERATORS(like: +,-,<,>,=,==,===, so on) are a spcial funtion that is SYNTAXTICALLY different
          //generally, opperators takes two perameters and returns one

var x = 3 + 4;//the + sign is an OPERATOR(funtion)
// NOTE: + opperator is basicly the below funtion
function +(a,b){
  return// add the two numbers
}
 //3 + 4 is IN FIX: the operator sits between the 2 perameters
    //instead of +(3, 4);     aside: 3 4+; is POST FIX notqtion
console.log(x);

// NOTE: OPERATOR PRECEDENNCE is which opertor function gets called first
// NOTE: OPERATOR ASSOCIATIVITY what order an operator get called in, left to right or right to left
          //(Higher PRECEDENNCE gets called first then fallows ASSOCIATIVITY rules)



// NOTE: COERCION: converting a value from one tyep to another
console.log(1 < 2 < 3);//is true
console.log(3 < 2 < 1);//is also true
// NOTE:  above is both ture because of ASSOCIATIVITY
//below is what is happening to above
console.log(true < 3);//true = number 1
console.log(false < 1);//false = number 0
//therefore below is same as above after OPERATOR ASSOCIATIVITY and COERCION
console.log(1 < 3);
console.log(0 < 1);
// NOTE: COERCION can be confusing
console.log(undefined == null); //is equal? ture but
console.log(undefined === null);//is strick equal? false
//undefined COERCION to a Number using NUmber()
Number(undefined)//equals NaN
Number(null)//equals 0 but
console.log(null == 0); //is false
//so what happens
console.log(Number(undefined) == undefined );//false
//always use strick equals or strick not equals ==== or !==
//compares value and type hut WAT
console.log(+0 === -0); //is true
console.log(Object.is(+0, -0)); // is false
//even more WAT
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); //true
// NOTE: Object.is uses the specification's SameValue algorithm,
            //whereas === uses the Strict Equality Algorithm. 
