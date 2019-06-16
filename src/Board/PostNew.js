import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {inject, observer} from "mobx-react/custom";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@inject('stores')
@observer
class PostNew extends Component {
    state={
        title:'',
        content:'',
        userId:1,
        goToMain:false
    };



    async componentDidMount() {
        if (this.props.postid && this.props.stores.PostStore.viewItem !== null) {
            console.log(this.props.postid);
            this.setState({
                ...this.state,
                id: this.props.stores.PostStore.viewItem.id,
                title: this.props.stores.PostStore.viewItem.title,
                content: this.props.stores.PostStore.viewItem.content,
            })
        }
    }









    render() {
        if(this.state.goToMain){
            return <Redirect to='/' />;
        }
        return (
            <div>
                <div>
                    제목: <input value={this.state.title} onChange={this.updateTitle}/>
                </div>
                <div>
                    내용
                    <div>

                        <CKEditor editor={ClassicEditor}
                        data={this.state.content} onChange={this.updateContent}/>
                    </div>
                </div>
                <div>
                    <button onClick={this.addNewPost}>확인</button>
                </div>
            </div>
        );
    }

    updateContent = (event,editor) => {
        console.log(editor.getData());
        this.setState({
            ...this.state,
            content: editor.getData()
        });
    };

    addNewPost = async () => {
        if(await this.props.stores.PostStore.addNewPost(this.state)) {
            await this.props.stores.PostStore.fetchItems();
            this.setState({
                ...this.state,
                goToMain: true
            });
        }
    };
    updateTitle = event =>{
        this.setState({
            ...this.state,
            title: event.target.value
        });
    }

}

export default PostNew;