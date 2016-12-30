
export default class FootArea extends React.Component{
    render () {
        return (
            <div className="foot-area">
                <div className="foot-cont clearfix">
                    <div className="fc-contact">
                        <div className="ctt-icon">热线</div>
                        <div className="ctt-txt">
                            <p><strong>400-1177-517</strong></p>
                            <p>良品铺子客服热线<br />
                                周一至周日：9：00-22：00</p>
                            <p>招商热线<br/>
                                400-1177-517</p>
                        </div>
                    </div>
                    <div className="fc-link">
                        <dl>
                            <dt><strong>购物指南</strong></dt>
                            <dd>
                                <a target="_blank" href="http://www.lppz.com/article/content/201501/62/1.html">安全账户</a>
                                <a target="_blank" href="http://www.lppz.com/article/content/201501/63/1.html">购物流程</a>
                                <a target="_blank" href="http://www.lppz.com/article/content/201503/86/1.html">老顾客重置密码</a>
                                <a target="_blank" href="http://www.lppz.com/article/content/201503/85/1.html">生日礼购物流程</a>
                                <a target="_blank" href="http://www.lppz.com/article/content/201501/61/1.html">找回密码</a>
                            </dd>

                        </dl>
                        <dl>
                            <dt><strong>物流配送</strong></dt>
                            <dd>
                                <a target="_blank" href="http://www.lppz.com/article/content/201501/64/1.html">配送说明</a>
                                <a target="_blank" href="http://www.lppz.com/article/content/201501/66/1.html">签收与验货</a>
                            </dd>

                        </dl>
                        <dl>
                            <dt><strong>付款说明</strong></dt>
                            <dd>
                                <a target="_blank" href="http://www.lppz.com/article/content/201501/70/1.html">发票制度</a>
                                <a target="_blank" href="http://www.lppz.com/article/content/201501/69/1.html">公司转账</a>
                                <a target="_blank" href="http://www.lppz.com/article/content/201501/67/1.html">在线支付</a>
                            </dd>

                        </dl>
                        <dl>
                            <dt><strong>客户服务</strong></dt>
                            <dd>
                                <a target="_blank" href="http://www.lppz.com/article/content/201501/72/1.html">退换货服务</a>
                                <a target="_blank" href="http://www.lppz.com/article/content/201501/74/1.html">联系我们</a>
                                <a target="_blank" href="http://www.lppz.com/article/content/201501/73/1.html">退款说明</a>
                            </dd>

                        </dl>
                        <dl>
                            <dt><strong>会员专区</strong></dt>
                            <dd>
                                <a target="_blank" href="http://www.lppz.com/article/content/201501/77/1.html">优惠券使用规则</a>
                                <a target="_blank" href="http://www.lppz.com/article/content/201501/76/1.html">积分制度</a>
                                <a target="_blank" href="http://www.lppz.com/article/content/201501/75/1.html">会员须知</a>
                            </dd>

                        </dl>
                    </div>
                    <div className="fc-follow">
                        <div className="qr-code">
                            <img src="img/decoration/ft_qrcode.png" alt="" />
                            <span>微信二维码</span></div>
                        <div className="weibo-mail">
                            <div className="wb-tit">微博关注</div>
                            <div className="wb-plus" id="weiBoAttention">
                                {/*<wb:follow-button uid="1851770484" type="red_2" width="136" height="24">*/}
                                {/*<iframe src="http://widget.weibo.com/relationship/followbutton.php?btn=red&amp;style=2&amp;uid=1851770484&amp;width=136&amp;height=24&amp;language=zh_cn"*/}
                                {/*width="136" height="24" frameborder="0" scrolling="no" marginheight="0"></iframe>*/}
                                {/*</wb:follow-button>*/}
                            </div>
                            <div className="mail-rss hide">
                                <div className="rss-box"><input className="tx-ipt" type="text" name="" id="" value="输入邮箱或手机" /><input
                                    className="rss-btn" type="button" value="订阅" /></div>
                                <div className="rss-cancel">
                                    <a href="">取消订阅</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="foot-nav">
                    <ul>
                        <li>
                            <a href="http://www.lppz.com/article/list/7.jhtml" target="_blank">关于我们</a>
                            |
                        </li>
                        <li>
                            <a href="http://www.lppz.com/article/content/201501/80/1.html" target="_blank">联系我们</a>
                            |
                        </li>
                        <li>
                            <a href="http://www.lppz.com/article/list/21.jhtml" target="_blank">客户服务</a>
                            |
                        </li>
                        <li>
                            <a href="http://www.lppz.com/article/content/201501/81/1.html" target="_blank">诚聘英才</a>
                            |
                        </li>
                        <li>
                            <a href="http://www.lppz.com/article/content/201501/82/1.html" target="_blank">商务合作</a>
                            |
                        </li>
                        <li>
                            <a href="http://www.lppz.com/article/content/201501/84/1.html" target="_blank">媒体报道</a>
                            |
                        </li>
                        <li>
                            <a href="http://www.lppz.com/#" target="_blank">网站地图</a>
                            |
                        </li>
                        <li>
                            <a href="www.lppz.html" target="_blank">站长招募</a>

                        </li>
                    </ul>
                </div>

                <div className="foot-copyright">
                    Copyright@2006-2016 湖北良品铺子电子商务有限公司 All rights Reserved<br />
                    <a target="_blank" href="http://www.miibeian.gov.cn/publish/query/indexFirst.action">鄂ICP备15022981号</a>
                    <br />
                        <a href="http://wljg.egs.gov.cn/iciaicweb/dzbscheck.do?method=change&amp;id=E2015081800082726">
                            <img alt="网络经济主体信息" border="0" dragover="true" src="img/decoration/gslogo.png" />
                        </a>
                </div>
            </div>
        );
    }
}