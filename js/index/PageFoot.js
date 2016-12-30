require("./PageFoot.less")

import FootService from "./FootService";
import FootArea from "./FootArea";
//页脚部分
export default class PageFoot extends React.Component{
    render () {
        return (
            <div className="footer">
                <FootService />

                <FootArea />
            </div>
        )
    }
}