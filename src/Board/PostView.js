import React, {Component} from 'react';
import {inject, observer} from "mobx-react/custom";
import {Link,Redirect} from "react-router-dom";

@inject('stores')
@observer
class PostView extends Component {
    state={
        goToList: false
    };
    componentDidMount() {
        this.props.stores.PostStore.fetchItem(this.props.postid);
    }

    render() {
        if(this.state.goToList === true)
            return <Redirect to='/board'/>
        let p = this.props.stores.PostStore;
        if(p.viewItem === null)
            return <div/>;
        return (
            <div className='board-view-item'>
                <div>
                    제목 : {p.viewItem.title}
                </div>

                <div className='board-view-content'
                dangerouslySetInnerHTML={{__html: p.viewItem.content}}>
                </div>

                <div>
                    작성시간 : {new Date(p.viewItem.created).toLocaleString()}
                </div>

                <div>
                    <Link to='/'>목록</Link>
                    <button onClick={this.deletePost}>삭제</button>
                </div>
            </div>
        );
    }

    deletePost =async ()=>{
        if(window.confirm('삭제할까?')===false)return;

        let id = this.props.postid;
       if(await this.props.stores.PostStore.deletePost(id))
       {
           await this.props.stores.PostStore.fetchItems();
           this.setState({
               goToList: true
           });
       }
    };
}

export default PostView;