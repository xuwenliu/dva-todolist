import { getTodoList, deleteTodo, addTodo, changeTodoState } from '../services/todoList';
import { message } from 'antd';
export default {
    namespace: 'todolist',
    state: {
        list: [],
        keyWord: '',
    },


    reducers: {
        getTodoLists(state, action) {
            return {
                ...state,
                list: action.payload
            }
        },
        addTodos(state, action) {
            let newList = [action.payload, ...state.list];
            return {
                ...state,
                list: newList,
                keyWord: ''
            }
        },
        deleteTodos(state, action) {
            let newList = state.list.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                list: newList,
            }
        },
        changeTodoStates(state, action) {
            let newList = state.list.map(item => {
                if (item.id === action.payload.id) {
                    item.completed = !item.completed;
                }
                return item;
            })
            return {
                ...state,
                list: newList
            }
        }
    },
    effects: {
        //异步获取数据
        *getList(action, { put, call }) {
            const { data } = yield call(getTodoList);
            yield put({
                type: 'getTodoLists',
                payload: data
            })
        },
        *delete({ payload }, { put, call }) {
            const { data } = yield call(deleteTodo, payload.id);
            console.log(data); // {} 代表成功
            if (!!data) {
                yield put({
                    type: 'deleteTodos',
                    payload
                })
                message.success('删除成功!');
            }
        },
        *add({ payload }, { put, call }) {
            const { data } = yield call(addTodo, payload.keyWord);
            if (data) {
                yield put({
                    type: 'addTodos',
                    payload: data
                })
                message.success('添加成功!');
            }
        },
        *change({ payload }, { put, call }) {
            console.log(payload)
            const { data } = yield call(changeTodoState, payload);
            if (data) {
                yield put({
                    type: 'changeTodoStates',
                    payload: {
                        ...data
                    }
                })
                message.success('状态切换成功!');
            }
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (pathname === '/todolist') {
                    dispatch({
                        type: 'getList'
                    })
                }
            })
        },
    },
}