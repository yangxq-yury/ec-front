
//y页脚服务
export default class FootService extends React.Component{
    render () {
        return (
            <div className="foot-service">
                <ul>
                    <li className="zp"><em>100%</em>
                        <p>正品保证</p></li>
                    <li className="th"><em>10天</em>
                        <p>无理由退换货</p></li>
                    <li className="by"><em>满68元</em>
                        <p>全程包邮</p></li>
                    <li className="jf"><em>积分抵现金</em>
                        <p>100积分=1元</p></li>
                    <li className="yh"><em>开箱验货</em>
                        <p>先验货再签收</p></li>
                    <li className="sd"><em>多仓就近发货</em>
                        <p>快速直达</p></li>
                </ul>
            </div>
        );
    }
}