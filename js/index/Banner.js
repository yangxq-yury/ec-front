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