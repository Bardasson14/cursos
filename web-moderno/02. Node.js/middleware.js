//Middleware Pattern
const step1 = (context, next) => {
    context.value1 = 'mid1';
    next();
};

const step2 = (context, next) => {
    context.value2 = 'mid2';
    next();
};

const step3 = (context) => {
    context.value3 = 'mid3';
};

const run = (context, ...middlewares) => {
    const runStep = (index) => {
        middlewares && 
        index < middlewares.length &&
        middlewares[index] (context, ()=>runStep(index+1));
    }
    runStep(0);
};

const context = {};
run(context, step1, step2, step3);
console.log(context);