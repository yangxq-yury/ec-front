require( "./ToolBar.less" );
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

//功能栏
export default class ToolBar extends React.Component{
    render(){
        return (
            <div className="toolbar">
                <div className="toolbar-cont wide">
                    <LeftPart />
                    <RightPart />
                </div>
            </div>
        );
    }
};