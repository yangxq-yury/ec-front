require( "../../less/index/_FunctionList.less" );

var ecLocalStorage = require( '../EcLocalStorage.js');

//功能栏
var FunctionList = React.createClass({
    render:  function(){
        return (
            <div className="function-list-wrap">
                <LeftPart />
                <RightPart />
            </div>
        );
    }
});

var LeftPart = React.createClass({
    render: function(){
        return <LoginComponent/>
    }
});

var LoginComponent = React.createClass({

    getInitialState: function() {
        //如果 localStorage 的user Name不为空，说明曾经登陆过
        var userName = ecLocalStorage.getItem( "userName");
        if( userName!=null ){
            return {loginUser:{ userName:   userName} }
        }
        return {loginUser: {} };
    },

    render: function(){
        if( this.state.loginUser.userName!=null ){
            return (
                <div id="loginUser" className="stay-left">欢迎您，{this.state.loginUser.userName}</div>
            )
        }else{
            return (
                <div id="loginUser" className="stay-left">欢迎您，请
                    <ul>
                        <li>[登录]</li>
                        <li>[注册]</li>
                    </ul>
                </div>
            );
        }

    }
});

//右边部分
var RightPart = React.createClass({
    render: function(){
        return (
            <div className="stay-right">
                <PhoneComponent />
                <CartComponent />
                <MyAccountComponent />
            </div>
        );
    }
});

var MyAccountComponent = React.createClass({
    render:  function(){
        return (
            <div>我的账户</div>
        );
    }
});

var CartComponent = React.createClass({
    render:  function(){
        return (
            <div>购物车</div>
        )
    }
});

var PhoneComponent = React.createClass({
    render:  function(){
        return (
            <div>全国订购电话：13929514753</div>
        )
    }
});

ReactDOM.render(
    <FunctionList />,
    document.getElementById('function-list')
);