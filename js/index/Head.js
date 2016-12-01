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