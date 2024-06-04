function receivesAFunction(callback) {
    callback();
}

function callback(){

}

function returnsANamedFunction() {
    function justinsFunction(){

    }

    return justinsFunction;
}

function returnsAnAnonymousFunction(){
    
    return function() {
    
    };
}