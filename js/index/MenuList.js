//菜单栏
export default class MenuList extends React.Component{
    render(){
        return (
            <div>
                <CategoryMenu />
                <CheapMenu />
                <NewMenu />
                <ImportMenu />
            </div>
        )
    }
}

class CategoryMenu extends React.Component{
    render () {
        return (
            <div>商品分类</div>
        );
    }
}

class CheapMenu extends React.Component{
    render () {
        return (
            <div>全场9块9</div>
        );
    }
}

class NewMenu extends React.Component{
    render () {
        return (
            <div>新品尝鲜</div>
        );
    }
}

class ImportMenu extends React.Component{
    render () {
        return (
            <div>进口食品</div>
        );
    }
}