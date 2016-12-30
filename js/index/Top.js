require("./Top.less");

import Settings from '../Settings';

//头部
export default class Top extends React.Component {
    render() {
        return (
            //顶部
            <div className="idx-top-ad">
                <a href="" target="_blank">
                    <img src={ Settings.RESOURCE_URL + this.props.img } />
                </a>
            </div>
        )
    }
}