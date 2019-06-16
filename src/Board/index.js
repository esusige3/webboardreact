import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

import BoardList from './BoardList';
import PostView from './PostView';
import PostNew from './PostNew';
import './Board.scss';

@inject('stores')
@observer
class Board extends Component {

    componentDidMount() {
        this.props.stores.PostStore.fetchItems();
        console.log(this.props);
    }

    render() {
        if(this.props.match && this.props.match.params.postid)
            return <PostView postid={this.props.match.params.postid}/>

        if(this.props.location && this.props.location.pathname === '/board/new')
            return <PostNew/>

        let p = this.props.stores.PostStore;

        return (
            <div>
                {p.items && <BoardList items={p.items}/>}
            </div>
        );
    }
}

export default Board;