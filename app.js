//NOTE:  if no code on this page JavaScript still has code as **EXECUTION CONTEXT**
//NOTE:  EXECUTION CONTEXT creates the **GLOBAL OBJECT 'this'**


//NOTE: because of HOSTING no matter where you run below funtions they will still execute
//NOTE: HOSTING is posible beacause durring **EXECUTION CONTEXT** is creating(CREATION PHASE)
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

//NOTE:  There are two phases in the **EXECUTION CONTEXT** phase
            //the 1st phase: **CREATION PHASE** where var names and func
                  //in entirty are added to the memory space
          //the 2nd phase: **CODE EXECUTION** runs your code line by line


//NOTE: **INVOCATION** is running a funciton, in JavaScript by using parenthesis()

function bar() {
   foobar = 'foobar'
}

function foo() {
  bar(); //since bar() is being INVOKED in foo(), bar() will be on top of the EXECUTION STACK
              //and therefore INVOKED before foo();
              //this means the order LEXICALLY
}

foo();//when foo is being INVOKED here a new EXECUTION CONTEXT is made for foo()
          //and added to the **EXECUTION STACK**
var foobar
console.log(foobar);


// NOTE: **VARIABLE ENVIRONMENT** is where the variables live
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


//NOTE:  SCOPE CHAIN: JavaScripts **SYNTAX PARSER** looks through each EXECUTION CONTEXT's OUTER ENVIRONMENT
//NOTE: THE SCOPE CHAIN stops at the first **OUTER ENVIRONMENT** it finds the value for the variable in
//NOTE: The SCOPE CHAIN keeps searching thourgh OUTER ENVIRONMENTS intill it hits the GLOBAL ENVIRONMENT

function scopeA() {
  function scopeB() {
    console.log(scopeVariable);
  }
  scopeB();
}

var scopeVariable = 'found scopeVariable at the GLOBAL SCOPE';
scopeA();

// NOTE: let allows the JavaScript engine to use **BLOCK SCOPING**
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

// NOTE: JavaScript uses **DYNAMIC TYPING**, variables can hold different types
            //since the egine asigns types during execution
var isNEw = true;//no errors since DYNAMIC TYPING
isNew = 'yup!'
isNew = 1;

// NOTE: there are 6 **PRIMITIVE TYPES** (a type of data that reperesents a single vaule)
                    //1. UNDEFINED: lack of existence(leave for the engine to use)
                    //2. NULL: lack of existence(for the user to use)
                    //3. BOOLEAN: true or false
                    //4. NUMBER: only one number type in JavaScript and its a floating point NUMBER
                    //5. STRING: a squence of characters
                    //6. SYMBOL: part of ES6



// NOTE: **OPERATORS**(like: +,-,<,>,=,==,===, so on) are a spcial funtion that is SYNTAXTICALLY different
          //generally, opperators takes two perameters and returns one

var x = 3 + 4;//the + sign is an OPERATOR(funtion)
// NOTE: + opperator is basicly the below funtion
function plus(a,b){
  return a + b// add the two numbers
}
 //3 + 4 is IN FIX: the operator sits between the 2 perameters
    //instead of +(3, 4);     aside: 3 4+; is POST FIX notqtion
console.log(x);

// NOTE: **OPERATOR PRECEDENNCE** is which opertor function gets called first
// NOTE: **OPERATOR ASSOCIATIVITY** what order an operator get called in, left to right or right to left
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

//NOTE: trick to setting default values common in legacy code
function greet(name) {
  // NOTE:   || (or OPERATOR) returns the value that can be COERCION to true otherwise returns right
  name = name || '<Your Name Here>';//default value if name is undefined is the string
  console.log('Hello ' + name);
}
greet('Adrian');
greet();

//lets see what logs out for the libraryName from lib1 and lib2
console.log(libraryName);

// NOTE: OBJECT LITERAL of new OBJECT
var person = new Object();
// same as OBJECT LITERAL SYNTAX
var person = {};

// NOTE: NAMESPACE is a container for variables and funtions typically keeps same name seperate
// NOTE: JavaScript fakes NAMESPACEs by creating containers
var greet = "hello";
var greet = "hola"; //same name will conlide
// NOTE: to stop colision create containers
var english = {};
var spanish = {};
english.greet = "hello";
spanish.greet = "hola";  //these containers will not colide eventhough share the name greet

// NOTE: JASON(JavaScript Object Notation) is not OBJECT LITERAL SYNTAX but was inspired by it

// NOTE: Functions are Objects  *IMPORTANT*
// NOTE: First Clas Functions everything you can do with other types you can do with funtions
// NOTE: Functions differ from other objects becuase it can have a NAME and CODE(thats INVOCABLE)

//since functions are objects you can:
function thisIsAnObject() {
  console.log('hi');
}

thisIsAnObject.language = 'english'; //since it's an object you can asign properties

var anonymousGreet = function () { //this is a FUNTION EXPRESION,
                                    //don't invoke intill after this line is run
  console.log('hi');
}

// NOTE: BY VALUE gets a New location in memory(PRIMITIVE types)
// NOTE: BY REFERENCE shares same location in memory(all objects)

// NOTE: MUTATE to change something IMMUTABLE it can't be changed

//NOTE: 'this' can point to different thing depending on how it is used

//both point to GLOBAL OBJECT
console.log(this);

function aThis() {
  console.log(this);
}

var bThis = function () {
  console.log(this);
}

aThis();
bThis();

//this inside cThis.log points to cThis and become cThis object
var cThis = {
  name: 'The cThis object',
  log: function () {
    var self = this; //fixes below bug by first creating a variable that points to 'this' this
                            //then below you would replace this with self
    this.name = 'Updated cThis Object Name'; //this will change cThis.name
    console.log(this);

    //people feel this is a bug in JavaScript Engine
    var setname = function (newname) {
      this.name = newname;//even thouigh internal this inside points to the GLOBAL OBJECT
    }
    setname('Updated again cThis Object Name')//adds to GLOBAL OBJECT instad of the object its in
    console.log(this);
  }
}

cThis.log();


// NOTE: fun with ARRAYS they can hold anything because of **DYNAMIC TYPING**

var arr = [
  false,
  {
    name: 'Adrian',
    age: 33
  },
  function(name) {
    var greeting = 'Hello ';
    console.log(greeting + name);
  },
  "hello "
];

arr[2](arr[1].name);

// NOTE: when Execution Context is created it sets up a few things
          //a VARIABLE ENVIRONMENT, 'this', OUTER ENVIRONMENT REFERENCE and the keyword 'arguments'
// NOTE: ARUMENTS are parameters you pass into a funtion JavaScript gives you a keyword with that name
// NOTE: The reduce() method applies a function against an accumulator and each element in the array
         //(from left to right) to reduce it to a single value.
         //<array name>.reduce(callback, [initialValue])
function addWithNumbers(...numbers) {//   ... allows for any number of ARUMENTS
 var sum = numbers.reduce(function(a, b) { return a + b; }, 0);//fun with .reduce
 console.log(sum);
}
addWithNumbers(2,2,2,2);

//function statement
function aStatement() {}
//function EXPRESION
var aExpresion = function (greeting) {console.log(greeting);}('hello');//('hello') IMEDIATELY INVOKES
//IMEDIATELY INVOKED FUNCTION EXPRESION or IIFE can also be written like
(function (name) {
  var greeting = 'hello ';
  console.log('hello, ' + name);
}('I am IMEDIATELY INVOKED FUNCTION EXPRESION'));//this stype of code is common in frameworks and lybrarys

// NOTE: more fun with IIFE

function sayHello(whatToSay) {
  return function (name) {
    console.log(whatToSay + name);
  }
}

sayHello('hello ')('Adrian'); //IIFE

//if set as a variable sayHello will stay in memorys so we can do below as well
//NOTE:  and this is called a **CLOSURE** a powerful feature of JavaScript
var sayHi = sayHello('Hi ');
sayHi('Adrian'); //since the JavaScript Engine keeps Hi in memeory it assumes Adrian is for name

// NOTE: example of a more complicated CLOSURE

function buildFunctions() {

  var arr = [];
  for (var i = 0; i < 3; i++) {

    arr.push(
      function () {
        console.log(i);
      }
    )

  }

  return arr;
}

// NOTE: when the functions inside arr finaly run i is equal to 3 because the for loop was run first
var fs = buildFunctions();
fs[0](); //prints 3
fs[1](); //prints 3
fs[2](); //prints 3


function buildFunctions2() {

  var arr = [];
  for (var i = 0; i < 3; i++) {
    let j = i; //ES6 let will save into memory each instance of j scoped to each for loop BLOCK
    arr.push(
      // function () {
      //    console.log('ES6 let: ' + j);
      // }

      //for ES5 or older you would do
      (function(h) {
        return function() {
          console.log('ES5 or Older CLOSURE: ' + h);
        }
      }(i))
    )

  }

  return arr;
}

// NOTE: now when it runs and log  a diffrent instance refrences of j you will see print
var fs2 = buildFunctions2();
fs2[0](); //prints 0
fs2[1](); //prints 1
fs2[2](); //prints 2

// NOTE: CLOSUREs are very useful in making FUNCTION FACTORIES
function makeGreetingFunction(language) {

  return function(firstName,lastName){

    if (language === 'en') {
      console.log('Hello ' + firstName + ' ' + lastName);
    }

    if (language === 'es') {
      console.log('Hola ' + firstName + ' ' + lastName);
    }

  }
}
//NOTE: both of thease will have there own EXECUTION CONTEXT with its own refrences for language argument
var greetEnglish = makeGreetingFunction('en');//this closue points to en
var greatSpanich = makeGreetingFunction('es');//this closure points to es

greetEnglish('John','Doe');
greatSpanich('John','Doe');

// NOTE: **CALLBACK FUNCTION** is a function you give to another function,
          //to be ru when the other function is finished like setTimeout() or .click() in JQUERY
function tellMeWhenDone(callback) {//this is a call back funtion
  var a = 1000;//some work
  var b = 2000;//some work

  callback(); //the 'callback', it runs the function I give
}

tellMeWhenDone(function () {
  console.log('I am done');
});

tellMeWhenDone(function () {
  console.log('all done');
});

//NOTE:  JQUERY uses FUNCTION EXPRESIONs and First-Class functions ex:
            //$("button").cliick(functions(){<your code here>});


// NOTE:  **call()** use  <functionName>.call(<name of object>,arugment 1, arugment 2, ..)
          //applies this of object to functionName and alows for the functions arguments
          //doesn't make a copy of the function

// NOTE:  **apply()** same as call but wants exept it takes an array of arguments
          //.apply allows for function obworing from one array to another array

// NOTE:  **bind()** use var <new functionName> =  <functionName>.bind(<name of object>) binds this var
          //of one object to the other object and creates a new compopy of the function atached to bind
          //this allows for function currying wich is setting the permaters for the copy ex
          //var <new functionName> = <functionName>.bind(<the this object>, parameter1, perameter2, ...)


//NOTE:   behold the power of **FUNCTIONAL PROGRAMING** or programing with only functions

function mapForEach(arr, fn) {

  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
    )
  };
  return newArr;
}

var arr2 = mapForEach(arr1 = [1,2,3], function(item) {
  return item * 2;
});

var arr3 = mapForEach(arr1, function (item) {
  return item > 2;
});

var checkPastLimit = function(limiter, item) {
  return item > limiter
};

//since mapForEach() only allows one perameter needed to make below funtion for checkPastLimit() to work
var checkPastLimitDynamic = function(limiter) {
  return function(limiter, item) {
    return item > limiter;
  }.bind(this, limiter);//binds limiter value endtered by user
};

var arr4 = mapForEach(arr2, checkPastLimitDynamic(3));

console.log('arr1: ' + arr1);
console.log('arr2: ' + arr2);
console.log('are arr1s values > 2: ' + arr3);
console.log('are arr2s values > 3: ' + arr4 );

// NOTE: When FUNCTIONAL PROGRAMING try hard not to MUTATE the return data.
