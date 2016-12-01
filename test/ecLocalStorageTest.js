var ecLocalStorage = require( './EcLocalStorage.js');
var expect = require('chai').expect;
var sinon = require( 'sinon');

var localStorageStub = sinon.stub();
localStorageStub.map = {};
ecLocalStorage.localStorage = localStorageStub;
var setItemStub = sinon.stub( ecLocalStorage , "setItem" , function ( name ,value ){
    console.log( "正在设置" + name + " 为：" + value );
    localStorageStub.map[name] = value ;
});
var getItemStub = sinon.stub( ecLocalStorage , "getItem" , function ( name ){
    console.log( "正在获取" + name + " 的值为" + localStorageStub.map[name] );
    return localStorageStub.map[name];
});

describe('对ecLocalStorage的测试',
    function() {
        it('设置的值应该等于获取的值',
            function () {
                ecLocalStorage.setItem('username', 'qq5257415');
                expect('qq5257415', ecLocalStorage.getItem('username'));
            });
    }
);


