require( "./RightPart.less" );
//右边部分
export default class RightPart extends React.Component{

    render(){
        return (
            <div className="toolbar">
                <div className="toolbar-cont wide">

                    <ul className="fr">
                        <li className="thover ">
                            <div className="top-user-info">
                                <a className="my-lppz dorp-title">我的良品<i className="arrow"></i></a>
                                <div className="my-lppz-layer">
                                    <div className="dorp-spacer"></div>
                                    <div className="user-info">
                                        <div className="m-pic">
                                            <img id="avatarImg" src="img/decoration/avatar.png" alt="用户头像" />
                                        </div>
                                        <div className="m-name" id="divlogin hide">
                                            <a className="nick" href="http://home.lppz.com/member/index.jhtml" id="username"></a>
                                            <a className="level" href="###" title="" id="levelName"></a>
                                        </div>
                                        <div className="m-name" id="divnologin">
                                            <a href="javascript:login();">您好，请登录</a>
                                        </div>
                                    </div>
                                    <div className="menu-list">
                                        <div className="m-nav">
                                            <div className="item">
                                                <a target="_blank" href="http://home.lppz.com/member/order/list.jhtml">我的订单</a>
                                            </div>
                                            <div className="item">
                                                <a target="_blank" href="http://home.lppz.com/member/favorite/list.jhtml">我的关注</a>
                                            </div>
                                            <div className="item">
                                                <a target="_blank" href="http://home.lppz.com/member/coupon_code/list.jhtml">
                                                    我的优惠券<span id="spancouponcount hide">(<span className="num red"
                                                                                                id="couponCount"></span>)</span>
                                                </a>
                                            </div>
                                            <div className="item">
                                                <a target="_blank" href="http://home.lppz.com/member/point/list.jhtml">我的积分</a>
                                            </div>
                                        </div>
                                        <div className="m-btn">
                                            <div className="item">
                                                <a href="http://home.lppz.com/member/index.jhtml">签到有好礼</a>
                                            </div>
                                            <div className="item">
                                                <a target="_blank" href="http://www.lppz.com/article/list/3.jhtml">购物指南
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="view-list">
                                        <div className="vl-title"><h4>最近浏览</h4>
                                            <a className="more" href="http://home.lppz.com/member/history/list.jhtml" target="_blank">更多&nbsp;&gt;</a>
                                        </div>
                                        <ul className="vl-cont" id="ulHistory"></ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="tspacer">|</li>
                        <li><span className="tel">全国订购热线：<em>400-1177-517</em></span></li>
                        <li>
                            <a href="#" onClick="" className="serv">在线客服<i className="icon">▪</i></a>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
};