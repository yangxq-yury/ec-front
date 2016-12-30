require( "./index.less" );

import PageHead from './PageHead';
import PageMain from './PageMain.js';
import PageFoot from './PageFoot.js';

//全页内容
var Index = React.createClass({
    render: function () {
        return (
            <div className="pageContentWrap">
                <PageHead/>
                <PageMain/>
                <PageFoot/>
            </div>
        )
    }
})

ReactDOM.render(
    <Index />,
    document.getElementById( "pageContent")
);