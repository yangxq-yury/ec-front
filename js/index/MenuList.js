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