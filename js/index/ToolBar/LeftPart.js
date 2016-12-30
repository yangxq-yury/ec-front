require( "./LeftPart.less" );
import Settings from '../../Settings';

export default class LeftPart extends React.Component{
    render(){
        return (
            <ul className="fl">
                <li id="headerUsername" className="headerUsername"></li>
                <li>欢迎来到{Settings.APP_NAME}！</li>
                <li id="headerLogin" className="headerLogin">
                    <a className="log" href="javascript:login();">[登录]</a>
                </li>
                <li id="headerRegister" className="headerRegister">
                    <a className="reg" href="https://reg.lppz.com/register.jhtml">[注册]</a>
                </li>
                <li id="headerLogout" className="headerLogout hide">
                    <a className="log" href="http://www.lppz.com/logout.jhtml">[退出]</a>
                </li>
            </ul>
        )
    }
};