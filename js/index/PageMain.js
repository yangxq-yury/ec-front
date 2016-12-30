require( './PageMain.less' );

import StarSku from "./StarSku";
import Nut from "./Nut";

//天天特价和产品分类
export default class PageMain extends React.Component {
    render () {
        return (
            // <!--主窗口-->
            <div className="index-main wide">
                {/*<!-- 天天特价 -->*/}
                <StarSku />

                {/*<!-- 1F 坚果炒货 -->*/}
                <Nut />
                {/*<!-- 2F 肉脯鱼干 -->*/}
                {/*<Meat />*/}
                {/*<!-- 3F 果干果脯 -->*/}
                {/*<DehydratedFruit />*/}
                {/*<!-- 4F 素食山珍 -->*/}
                {/*<VegetarianDiet />*/}
                {/*<!-- 5F 糕点糖果 -->*/}
                {/*<Cookie />*/}
                {/*<!-- 6F 进口食品 -->*/}
                {/*<ImportFood />*/}
            </div>
        )
    }
}