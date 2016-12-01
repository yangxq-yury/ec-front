function EcLocalStorage( windowLocalStorage ){
    this.localStorage = windowLocalStorage;

    this.setItem = function( name , value ){
        localStorage.setItem( name , value );
    }
    this.getItem = function( name ){
        return localStorage.getItem( name  );
    }
    this.removeItem = function ( name ) {
        localStorage.removeItem( name );
    }
}

if( typeof localStorage == undefined ){
    localStorage = {};
}
var obj = new EcLocalStorage( localStorage );
module.exports = obj;