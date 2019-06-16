import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class Page extends Component {
    componentDidMount() {
        this.props.stores.PostStore.writePost();
    }

    state = {
      id: '1',
      title: '',
      content: ''
    };

    idSet = (e) => {
        this.setState({
            id: e.target.value
        })
    }

    titleSet = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    contentSet = (e) =>{
        this.setState({
            content: e.target.value
        })
    }

    excuteWrite=(e)=>{
        this.p.writePost();
    }


    render() {

        let p = this.props.stores.PostStore;
        return (
            <div>
                <p>글쓰기 페이지</p>
                <input onChange={this.titleSet} value={this.state.title} placeholder={"제목을 입력"}/><input onChange={this.idSet} value={this.state.id} placeholder={"ID"}/> <br/>
                <textarea onChange={this.contentSet} value={this.state.content} placeholder={"내용을 입력"}/>
                <button onClick={()=>this.excuteWrite}>업로드</button>

            </div>
        );
    }
}

export default Page;