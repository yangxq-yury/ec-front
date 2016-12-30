require( "./StarSku.less")
export default class StarSku extends React.Component {
    render(){
        return (
            <div className="star-sku">
                <StarTit/>
                <StarArea/>
            </div>
        )
    }
}

class StarTit extends React.Component {
    render(){
        return (
            <div className="star-tit">
                <h2>天天特惠</h2>
                <ul className="star-tabs">
                    <li className="active">
                        <a href="javascript:;">9.9元专区</a>
                    </li>
                    <li>
                        <a href="javascript:;">每日秒杀</a>
                    </li>
                    <li>
                        <a href="javascript:;">爆款直降</a>
                    </li>
                </ul>
            </div>
        )
    }
}


class StarArea extends React.Component {
    render(){
        return (
            <div className="star-area">
                <ul className="star-area-list block">
                    <li>
                        <a title="周排行－鱼丸" href="http://item.lppz.com/11001209.html" target="_blank">
                            <img className="lazy block"
                                 data-original="http://img.lppz.com/upload/image/201612/1cd5acb7-d4e2-471e-89ed-daf64a71fff9.jpg"
                                 src="http://img.lppz.com/upload/image/201612/1cd5acb7-d4e2-471e-89ed-daf64a71fff9.jpg"
                                 alt="周排行－鱼丸" />
                        </a>
                    </li>
                    <li>
                        <a title="周排行－肉松饼" href="http://item.lppz.com/11000097.html" target="_blank">
                            <img className="lazy block"
                                 data-original="http://img.lppz.com/upload/image/201612/98740708-e34f-4fc9-bc69-c6bffa4d4c7c.jpg"
                                 src="http://img.lppz.com/upload/image/201612/98740708-e34f-4fc9-bc69-c6bffa4d4c7c.jpg"
                                 alt="周排行－肉松饼" />
                        </a>
                    </li>
                    <li>
                        <a title="周排行-鸡蛋干" href="http://item.lppz.com/11000329.html" target="_blank">
                            <img className="lazy block"
                                 data-original="http://img.lppz.com/upload/image/201612/f93bcba1-517c-4df0-928b-fa1b63133053.jpg"
                                 src="http://img.lppz.com/upload/image/201612/f93bcba1-517c-4df0-928b-fa1b63133053.jpg"
                                 alt="周排行-鸡蛋干" />
                        </a>
                    </li>
                    <li>
                        <a title="周排行－带鱼" href="http://item.lppz.com/11001208.html" target="_blank">
                            <img className="lazy block"
                                 data-original="http://img.lppz.com/upload/image/201612/571162d4-b4bf-4889-92ac-2325a0c92baa.jpg"
                                 src="http://img.lppz.com/upload/image/201612/571162d4-b4bf-4889-92ac-2325a0c92baa.jpg"
                                 alt="周排行－带鱼" />
                        </a>
                    </li>
                    <li>
                        <a title="周排行-有了梅" href="http://item.lppz.com/11003342.html" target="_blank">
                            <img className="lazy block"
                                 data-original="http://img.lppz.com/upload/image/201612/ae8eaea4-7f4d-43ee-866d-db1f8564e2fb.jpg"
                                 src="http://img.lppz.com/upload/image/201612/ae8eaea4-7f4d-43ee-866d-db1f8564e2fb.jpg"
                                 alt="周排行-有了梅" />
                        </a>
                    </li>
                </ul>
                <ul className="star-area-list hide" >
                    <li>
                        <a title="月排行－小鸡腿" href="http://item.lppz.com/11000511.html" target="_blank">
                            <img className="lazy block"
                                 data-original="http://img.lppz.com/upload/image/201612/cdc34523-5424-46ef-b9d1-6c76d898f08c.jpg"
                                 src="http://img.lppz.com/upload/image/201612/cdc34523-5424-46ef-b9d1-6c76d898f08c.jpg"
                                 alt="月排行－小鸡腿" />
                        </a>
                    </li>
                    <li>
                        <a title="月排行－猪肉脯" href="http://item.lppz.com/11000994.html" target="_blank">
                            <img className="lazy block"
                                 data-original="http://img.lppz.com/upload/image/201612/cc49dffc-b926-41e9-a318-af75e347f2a2.jpg"
                                 src="http://img.lppz.com/upload/image/201612/cc49dffc-b926-41e9-a318-af75e347f2a2.jpg"
                                 alt="月排行－猪肉脯" />
                        </a>
                    </li>
                    <li>
                        <a title="月排行－呦呦鱿" href="http://item.lppz.com/11001236.html" target="_blank">
                            <img className="lazy block"
                                 data-original="http://img.lppz.com/upload/image/201612/d7a449c6-84b0-4bcd-b0bb-2e59a212255f.jpg"
                                 src="http://img.lppz.com/upload/image/201612/d7a449c6-84b0-4bcd-b0bb-2e59a212255f.jpg"
                                 alt="月排行－呦呦鱿" />
                        </a>
                    </li>
                    <li>
                        <a title="月排行－冰糖山楂" href="http://item.lppz.com/11000531.html" target="_blank">
                            <img className="lazy block"
                                 data-original="http://img.lppz.com/upload/image/201612/146bf7c1-70e4-4bb9-8c9c-a245e89a1962.jpg"
                                 src="http://img.lppz.com/upload/image/201612/146bf7c1-70e4-4bb9-8c9c-a245e89a1962.jpg"
                                 alt="月排行－冰糖山楂" />
                        </a>
                    </li>
                    <li>
                        <a title="月排行－薄饼" href="http://item.lppz.com/11000938.html" target="_blank">
                            <img className="lazy block"
                                 data-original="http://img.lppz.com/upload/image/201612/cbc3e0b4-9785-43c1-88ee-9cb796b994ef.jpg"
                                 src="http://img.lppz.com/upload/image/201612/cbc3e0b4-9785-43c1-88ee-9cb796b994ef.jpg"
                                 alt="月排行－薄饼" />
                        </a>
                    </li>
                </ul>
                <ul className="star-area-list hide">
                    <li>
                        <a title="年排行－核桃" href="http://item.lppz.com/11003553.html" target="_blank">
                            <img className="lazy block"
                                 data-original="http://img.lppz.com/upload/image/201612/d1eb977d-c0e3-43a1-904d-db47db5661b1.jpg"
                                 src="http://img.lppz.com/upload/image/201612/d1eb977d-c0e3-43a1-904d-db47db5661b1.jpg"
                                 alt="年排行－核桃" />
                        </a>
                    </li>
                    <li>
                        <a title="年排行－鸭肉" href="http://item.lppz.com/11003524.html" target="_blank">
                            <img className="lazy block"
                                 data-original="http://img.lppz.com/upload/image/201612/cc9f4b0d-5707-41cb-84cb-75e09ba48f42.jpg"
                                 src="http://img.lppz.com/upload/image/201612/cc9f4b0d-5707-41cb-84cb-75e09ba48f42.jpg"
                                 alt="年排行－鸭肉" />
                        </a>
                    </li>
                    <li>
                        <a title="年排行－巧克力" href="http://item.lppz.com/11000497.html" target="_blank">
                            <img className="lazy block"
                                 data-original="http://img.lppz.com/upload/image/201612/c379183e-2647-44c3-a953-b4cc1af61c11.jpg"
                                 src="http://img.lppz.com/upload/image/201612/c379183e-2647-44c3-a953-b4cc1af61c11.jpg"
                                 alt="年排行－巧克力" />
                        </a>
                    </li>
                    <li>
                        <a title="年排行－葡萄干" href="http://item.lppz.com/11002903.html" target="_blank">
                            <img className="lazy block"
                                 data-original="http://img.lppz.com/upload/image/201612/6a76c64b-f8c3-480b-93f4-17a21a773543.jpg"
                                 src="http://img.lppz.com/upload/image/201612/6a76c64b-f8c3-480b-93f4-17a21a773543.jpg"
                                 alt="年排行－葡萄干" />
                        </a>
                    </li>
                    <li>
                        <a title="年排行-蛋黄酥" href="http://item.lppz.com/11001155.html" target="_blank">
                            <img className="lazy block"
                                 data-original="http://img.lppz.com/upload/image/201612/f038bd8a-cf4c-4115-84ca-b36181bbd99f.jpg"
                                 src="http://img.lppz.com/upload/image/201612/f038bd8a-cf4c-4115-84ca-b36181bbd99f.jpg"
                                 alt="年排行-蛋黄酥" />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}