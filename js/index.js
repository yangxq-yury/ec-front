
//功能栏
var FunctionList = React.createClass({
    render:  function(){
        return (
            <div>
                <LeftPart />
                <RightPart />
            </div>
        );
    }
});

//左边部分
var LeftPart = React.createClass({
    render: function(){
        return <LoginComponent />
    }
});

var LoginComponent = React.createClass({
    render: function(){
        return (
            <span>欢迎您，请 [登录] | [注册] </span>
        );
    }
});

//右边部分
var RightPart = React.createClass({
    render: function(){
        return (
            <div>
                <MyAccountComponent />
                <CartComponent />
                <PhoneComponent />
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

