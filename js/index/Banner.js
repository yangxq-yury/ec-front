require( "./Banner.less");

//轮转图和热销产品
export default class Banner extends React.Component{
    render () {
        return (
            <div className="banner idx-focus clearfix">
                <div className="focus-cont clearfix wide">
                    <AllSort />
                    <Slider />
                    <RushHot />
                </div>
            </div>
        );
    }
}

class AllSort extends React.Component{
    render (){
        return (
            <div className="all-sort">
                <a className="as-btn" href="#"><span>商品分类<i className="icon">▼</i></span></a>
                <div className="sort-nav">
                    <ul>
                        <li className="">
                            <div className="top-sort">
                                <h3>
                                    <a href="http://search.lppz.com/product/list/1001.jhtml">
                                        <i className="iconfont">
                                        </i>
                                        坚果炒货
                                    </a>
                                </h3>
                            </div>
                            <div className="sub-sort">
                                <ul className="sub-sort-list">
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100101.jhtml">嗑壳坚果</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100102.jhtml">果果仁仁</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100103.jhtml">特惠炒货</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="">
                            <div className="top-sort">
                                <h3>
                                    <a href="http://search.lppz.com/product/list/1002.jhtml">
                                        <i className="iconfont"></i>肉脯鱼干
                                    </a>
                                </h3>
                            </div>
                            <div className="sub-sort">
                                <ul className="sub-sort-list">
                                    <li className="">
                                        <a target="_blank" href="http://search.lppz.com/product/list/100202.jhtml">猪肉系列</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100201.jhtml">牛肉系列</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100203.jhtml">鸡鸭系列</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100205.jhtml">海味系列</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="top-sort">
                                <h3>
                                    <a href="http://search.lppz.com/product/list/1003.jhtml">
                                        <i className="iconfont"></i>果干果脯
                                    </a>
                                </h3>
                            </div>
                            <div className="sub-sort">
                                <ul className="sub-sort-list">
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100302.jhtml">缤纷果干</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100301.jhtml">话梅山楂</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100303.jhtml">红枣葡萄</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="top-sort">
                                <h3>
                                    <a href="http://search.lppz.com/product/list/1004.jhtml">
                                        <i className="iconfont"></i>糕点糖果
                                    </a>
                                </h3>
                            </div>
                            <div className="sub-sort">
                                <ul className="sub-sort-list">
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100401.jhtml">糕点系列</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100404.jhtml">饼干系列</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100402.jhtml">糖果系列</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100403.jhtml">果冻系列</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="top-sort">
                                <h3>
                                    <a href="http://search.lppz.com/product/list/1005.jhtml">
                                        <i className="iconfont"></i>素食山珍
                                    </a>
                                </h3>
                            </div>
                            <div className="sub-sort">
                                <ul className="sub-sort-list">
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100501.jhtml">美味豆干</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100502.jhtml">笋菌海带</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100503.jhtml">其他山珍</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="top-sort">
                                <h3>
                                    <a href="http://search.lppz.com/product/list/1006.jhtml">
                                        <i className="iconfont"></i>花茶饮品
                                    </a>
                                </h3>
                            </div>
                            <div className="sub-sort">
                                <ul className="sub-sort-list">
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100602.jhtml">清香花茶</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100603.jhtml">进口饮料</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="top-sort">
                                <h3>
                                    <a href="http://search.lppz.com/product/list/1007.jhtml">
                                        <i className="iconfont"></i>进口食品
                                    </a>
                                </h3>
                            </div>
                            <div className="sub-sort">
                                <ul className="sub-sort-list">
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100708.jhtml">进口糕点</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100709.jhtml">进口糖果</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100701.jhtml">休闲零食</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="top-sort">
                                <h3>
                                    <a href="http://search.lppz.com/product/list/1008.jhtml">
                                        <i className="iconfont"></i>精选礼盒
                                    </a>
                                </h3>
                            </div>
                            <div className="sub-sort">
                                <ul className="sub-sort-list">
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100801.jhtml">零食礼盒</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100803.jhtml">年货量贩装</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="top-sort">
                                <h3>
                                    <a href="http://search.lppz.com/product/list/1009.jhtml">
                                        <i className="iconfont"></i>当季热销
                                    </a>
                                </h3>
                            </div>
                            <div className="sub-sort">
                                <ul className="sub-sort-list">
                                    <li>
                                        <a target="_blank" href="http://search.lppz.com/product/list/100902.jhtml">新品尝鲜</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

class Slider extends React.Component{
    render () {
        return (
            <div className="idx-slider">
                <ul className="islide">
                    <li className="hide">
                        <a title="轮播-双12年终大促"
                           href="http://www.lppz.com/activity/content/ce75d9651bb84cc5805e92c102f8181a.html"
                           target="_blank">
                            <img className="lazy inline"
                                 data-original="http://img.lppz.com/upload/image/201612/daf19c7f-10a1-4204-94c9-4c13dab8f86a.jpg"
                                 src="http://img.lppz.com/upload/image/201612/daf19c7f-10a1-4204-94c9-4c13dab8f86a.jpg"
                                 alt="轮播-双12年终大促" />
                        </a>
                    </li>
                    <li className="list-item;">
                        <a title="轮播-健康红枣节"
                           href="http://www.lppz.com/activity/content/285a8c2ba265406b95484793d0dec6c9.html"
                           target="_blank">
                            <img className="lazy inline"
                                 data-original="http://img.lppz.com/upload/image/201611/f0317f56-1ac8-443b-834e-959f168a7ed2.jpg"
                                 src="http://img.lppz.com/upload/image/201611/f0317f56-1ac8-443b-834e-959f168a7ed2.jpg"
                                 alt="轮播-健康红枣节" />
                        </a>
                    </li>
                    <li className="hide inline">
                        <a title="轮播-全场9.9元封顶"
                           href="http://www.lppz.com/activity/content/55b889bd055c4012b74db141a9a79db1.html"
                           target="_blank">
                            <img className="lazy"
                                 data-original="http://img.lppz.com/upload/image/201609/7e534137-a656-4901-8006-3784b704657f.jpg"
                                 src="http://img.lppz.com/upload/image/201609/7e534137-a656-4901-8006-3784b704657f.jpg"
                                 alt="轮播-全场9.9元封顶" />
                        </a>
                    </li>
                </ul>
                <ul className="hd">
                    <li className="">1</li>
                    <li className="on">2</li>
                    <li className="">3</li>
                </ul>
            </div>
        );
    }
}

class RushHot extends React.Component{
    render () {
        return (
            <div className="rush-hot">
                <div className="rush-hot-cont rush-slide">
                    <ul className="rhc-list rslide">
                        <li>
                            <a title="微信扫码购上" href="http://item.lppz.com/11000319.html" target="_blank">
                                <img className="lazy inline-block"
                                     data-original="http://img.lppz.com/upload/image/201612/f54acaee-4cd1-4c6b-b614-66950cb27304.jpg"
                                     src="http://img.lppz.com/upload/image/201612/f54acaee-4cd1-4c6b-b614-66950cb27304.jpg"
                                     alt="微信扫码购上&quot;" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="rush-hot-cont rush-slide">
                    <ul className="rhc-list rslide">
                        <li>
                            <a title="微信扫码购下" href="http://item.lppz.com/11000959.html" target="_blank">
                                <img className="lazy inline-block"
                                     data-original="http://img.lppz.com/upload/image/201612/7ee498af-3626-49c0-8745-2d11b3e4280a.jpg"
                                     src="http://img.lppz.com/upload/image/201612/7ee498af-3626-49c0-8745-2d11b3e4280a.jpg"
                                     alt="微信扫码购下&quot;" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}