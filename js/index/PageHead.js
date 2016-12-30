import Top from "./Top";
import ToolBar from "./ToolBar/ToolBar";
import Header from "./Header";
import Banner from "./Banner";

//头部
export default class PageHead extends React.Component {
    render() {
        return (
            // 头部
            <div className="headerWrap">
                {/*顶部*/}
                <Top img="img/decoration/top.jpg"/>
                {/*工具栏*/}
                <ToolBar />
                {/*Logo和搜索栏*/}
                <Header />
                {/*轮转图*/}
                <Banner />
            </div>
        )
    }
}

