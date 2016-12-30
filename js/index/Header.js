require("./Header.less")

//Logo和搜索
export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <HeadMain />
                <Menu />
            </div>
        )
    }
}

class HeadMain extends React.Component {
    render() {
        return (
            <div className="head-main wide clearfix">
                <Logo />
                <HeadSearch />
                <HeadUser />
            </div>

        )
    }
}

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <a href="www.lppz.html">良品铺子-BESTORE</a>
                <span>官方商城</span>
            </div>
        )
    }
}

class HeadSearch extends React.Component {
    render() {
        return (
            <div className="hd-search">
                <div className="hot-tag">
                    <span>热门搜索：</span>
                    <a target="_blank" className="red"
                       href="http://search.lppz.com/product/search.jhtml?keyword=%E6%9D%BE%E5%AD%90">松子
                    </a>
                    <a target="_blank" href="http://search.lppz.com/product/search.jhtml?keyword=%E7%89%9B%E8%82%89">牛肉</a>
                    <a target="_blank"
                       href="http://search.lppz.com/product/search.jhtml?keyword=%E5%BC%80%E5%BF%83%E6%9E%9C">开心果
                    </a>
                    <a target="_blank" href="http://search.lppz.com/product/search.jhtml?keyword=%E6%A0%B8%E6%A1%83">核桃</a>
                    <a target="_blank" href="http://search.lppz.com/product/search.jhtml?keyword=%E8%AF%9D%E6%A2%85">话梅</a>
                    <a target="_blank"
                       href="http://search.lppz.com/product/search.jhtml?keyword=%E8%8A%B1%E7%94%9F%E7%93%9C%E5%AD%90">花生瓜子
                    </a>
                </div>
                <div className="search-area">
                    <form id="productSearchForm" action="http://search.lppz.com/product/search.jhtml" method="post"
                          target="_blank">
                        <input className="sch-key" type="text" name="keyword" id="keyword" defaultValue="商品搜索" />
                        <input className="sch-btn" type="submit" value="搜 索" />
                    </form>
                </div>
            </div>
        )
    }
}

class HeadUser extends React.Component {
    render() {
        return (
            <div className="hd-user">
                <div className="user-shoping">
                    <a className="us-btn indexcart" href="http://www.lppz.com/cart/list.jhtml">购物车</a>
                    <span className="us-num cart-cache-num"><b>0</b></span>
                    <div className="cart-list cart-list-body hide" ><span className="tit">最新加入的商品</span>
                        <div className="cart-roll">
                            <ul className="goods"></ul>
                        </div>
                        <div className="total"><p>共<span className="red">0</span>件商品，共计<span className="sum">￥0.00</span></p>
                            <a className="settle" href="http://www.lppz.com/cart/list.jhtml">去购物车结算</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <div className="menu-main wide">
                    <ul className="menu-list">
                        <li>
                            <a href="http://www.lppz.com/activity/content/ce75d9651bb84cc5805e92c102f8181a.html">1212钜惠</a>
                        </li>
                        <li>
                            <a href="http://www.lppz.com/activity/content/285a8c2ba265406b95484793d0dec6c9.html">健康红枣节</a>
                        </li>
                        <li>
                            <a href="http://www.lppz.com/activity/content/55b889bd055c4012b74db141a9a79db1.html">全场9.9</a>
                        </li>
                        <li>
                            <a href="http://www.lppz.com/activity/content/799e515a313642f2b6d9536df4467dea.html">新品尝鲜</a>
                        </li>
                        <li>
                            <a href="http://www.lppz.com/activity/content/5ebaa7046b854bc7aa0457ffa695d3e4.html">糖果糕点</a>
                        </li>
                        <li>
                            <a href="http://www.lppz.com/activity/content/f987a41fcf8d4cb4bcfd145200bcddc5.html">进口食品</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}