import React from 'react';

import BoardListItem from './BoardListItem';
import {Link} from "react-router-dom";

const BoardList = (props) => {
    return (
        <div>
            {props.items.map(item => <BoardListItem post={item} />)}
            <div>
                <Link to='/board/new'>새글쓰기</Link>
            </div>
        </div>
    );
};

export default BoardList;