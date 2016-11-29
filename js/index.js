
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
var userData = {
    userName : "yangxq"
}
var LeftPart = React.createClass({
    render: function(){
        return <LoginComponent data= "userData"/>
    }
});

var LoginComponent = React.createClass({

    getInitialState: function() {
        return {loginUser: null };
    },

    componentDidMount:  function () {
      // $.ajax({
      //     url:    this.props.url,
      //     dataType: 'json',
      //     success:  function( data ){
      //         this.setState( { loginUser: data });
      //     }.bind( this )
      // });
    },

    render: function(){
        if( this.state.loginUser!=null ){
            return (
                <span>欢迎您，{this.state.loginUser.userName}</span>
            )
        }else{
            return (
                <span>欢迎您，请
                    <ul>
                        <li>[登录]</li>
                        <li>[注册]</li>
                    </ul>
                </span>
            );
        }

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

//Logo和搜索
var Head = React.createClass({
    render: function () {
        return (
            <div>
                <LogoComponent />
                <SearchComponent />
            </div>
        )
    }
})

var LogoComponent = React.createClass({
    render: function () {
        return (
            <img src="img/decoration/logo.jpg" />
        )
    }
})

var SearchComponent = React.createClass({
    render: function () {
        return (
            <div><input type="text" name="searchText" placeholder="请输入你要的零食"/></div>
        )
    }
})

ReactDOM.render(
    <Head />,
    document.getElementById('head')
);

//菜单栏
var MenuList = React.createClass({
    render: function(){
        return (
            <div>
                <CategoryMenu />
                <CheapMenu />
                <NewMenu />
                <ImportMenu />
            </div>
        )
    }
})

var CategoryMenu = React.createClass({
    render: function () {
        return (
            <div>商品分类</div>
        );
    }
})

var CheapMenu = React.createClass({
    render: function () {
        return (
            <div>全场9块9</div>
        );
    }
})

var NewMenu = React.createClass({
    render: function () {
        return (
            <div>新品尝鲜</div>
        );
    }
})

var ImportMenu = React.createClass({
    render: function () {
        return (
            <div>进口食品</div>
        );
    }
})

ReactDOM.render(
    <MenuList />,
    document.getElementById('menu-list')
);

//轮转图和热销产品
var Banner = React.createClass({
    render: function () {
        return (
            <div>
                <Rotates />
                <HotSale />
            </div>
        );
    }
})

var Rotates = React.createClass({
    render: function(){
        return (
            <div id="rotates">
                轮转图
            </div>
        );
    }
})

var HotSale = React.createClass({
    render: function () {
        return (
            <div>
                热销产品
            </div>
        );
    }
})

ReactDOM.render(
    <Banner />,
    document.getElementById('banner')
);