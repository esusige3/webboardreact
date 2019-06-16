import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Board from '../Board';

@inject('stores')
@observer
class Home extends Component {


    render()
    {

        return(<div className='home'><Board/></div>)

     /*  return (
            <div>
                <link rel="stylesheet" href="BSTable.css"/>
                <table border="1">
                    <thead>
                    <tr align="center" bgcolor="#d3d3d3">
                        <th>제목</th>
                        <th>내용</th>
                        <th>작성일</th>

                    </tr>
                    </thead>
                    <tbody>
                        {p.items&&p.items.map(item=>{
                            let created = new Date(item.created);
                            return (
                                <tr key={item.id}>
                                    <td>{item.title} </td>
                                    <td>{item.content} </td>
                                    <td>
                                        {created.getFullYear()}
                                        {created.getMonth()+1}
                                        {created.getDate()}
                                    </td>
                                </tr>

                            );})}
                    </tbody>
                </table>

                <div><button onClick={p.getTime}>getTime from POST</button></div>
                    <div><button onClick={p.fetchItems}>View POSTS</button></div>

            </div>
        );*/
    }
}

export default Home;