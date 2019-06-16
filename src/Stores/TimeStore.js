import {observable, action,computed} from "mobx";

class TimeStore{


    static __instance = null;
    static getInstance(){
        if(TimeStore.__instance===null)
            TimeStore.__instance = new TimeStore();
        return TimeStore.__instance;

    }
    constructor(){
        TimeStore.__instance = this;
    }
    @observable current_time = null;//observable의 값을 바꾸려면 action 데코레이터 추천

    @action getTime = async () => this.current_time = await new Date();
    @computed get ms(){
        return this.current_time?this.current_time.getMilliseconds():'NOT SET';
    }



}

export default TimeStore.getInstance();