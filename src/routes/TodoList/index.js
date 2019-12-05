import React, { useState } from 'react';
import { connect } from 'dva';
import { Card, List, Input } from 'antd';
import TodoItem from '../../components/TodoItem';
const { Search } = Input;

function TodoList(props) {
    const { loading, keyWord, list, handleDelete, handleAdd,handleChangeState } = props;
    const [value, setValue] = useState(keyWord)
    let add = (keyWord) => {

        handleAdd(keyWord)
        setValue('');
    }


    return (
        <Card title="TodoList">
            <Search
                placeholder="请输入内容"
                enterButton="添加"
                value={value}
                onChange={e => setValue(e.target.value)}
                onSearch={(value) => add(value)}></Search>
            <List
                loading={loading}
                dataSource={list}
                renderItem={item => (
                    <TodoItem handleDelete={handleDelete} handleChangeState={handleChangeState} item={item} />
                )}>
            </List>
        </Card>
    );
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        loading: state.loading.global,
        list: state.todolist.list,
        keyWord: state.todolist.keyWord,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (id) => {
            return dispatch({
                type: 'todolist/delete',
                payload: {
                    id
                }
            })
        },
        handleAdd: (keyWord) => {
            return dispatch({
                type: 'todolist/add',
                payload: {
                    keyWord
                }
            })
        },
        handleChangeState: (data) => {
            return dispatch({
                type: 'todolist/change',
                payload: data
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
