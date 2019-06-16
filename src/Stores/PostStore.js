import {observable, action} from "mobx";
import TimeStore from './TimeStore';

import axios from 'axios';

class PostStore{
    static __instance = null;
    static getInstance(){
        if(PostStore.__instance===null)
            PostStore.__instance = new PostStore();
        return PostStore.__instance;

    }
    constructor(){
        PostStore.__instance = this;
    }
    @observable post_time = null;//observable의 값을 바꾸려면 action 데코레이터 추천
    @action getTime = async () => this.post_time = await new Date().getTime();
    getSomething = () => TimeStore.getTime();


    @action addNewPost = async (newPost) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/post/write`,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'post',
                timeout: 3000,
                data: JSON.stringify(newPost)
            });
            return (response.status === 200)
        } catch(ex) {
            alert(ex.toString());
            return false;
        }
    }



    @action deletePost = async (postId) =>{
        try{
            let response = await axios({
                url: "http://localhost:8080/api/post/delete/"+postId,
                header:{
                    'Accept':'application/json'
                },
                method: 'delete',
                timeout:3000
            });
            return (response.status===200);
        }catch (e) {
            console.log(e);
            return false;
        }
    }



    @observable items = null;
    @action fetchItems= async ()=>{
        try{
        let response = await axios({
           url: 'http://localhost:8080/api/post/posts',
            header:{
               'Content-Type': 'application/json; charset=UTF-8'
            },
            method: 'get',
            timeout: 3000
        });
        console.log(response);
        if(response.status === 200){
            this.items=response.data;
        }
        }catch (ex) {
            alert(ex.toString());
        }
    }



    @observable viewItem = null;
    @action fetchItem= async (postid)=>{
        try{
            this.viewItem = null;
            let response = await axios({
                url: `http://localhost:8080/api/post/find/${postid}`,
                header:{
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'get',
                timeout: 3000
            });
            console.log(response);
            if(response.status === 200){
                setTimeout(()=>
                this.viewItem = response.data,
                    3);
            }
        }catch (ex) {
            alert(ex.toString());
        }
    }

    @action modify = async (modPost)=>{
        try{
            this.viewItem = null;
            let response = await axios({
                url: `http://localhost:8080/api/post/modify`,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'update',
                timeout: 3000,
                data: JSON.stringify(modPost)
            });
            if(response.status === 200){
                setTimeout(()=>this.viewItem = response.data,3);
            }

        }catch (e) {
            alert(e.toString());
        }
    }
}

export default PostStore.getInstance();