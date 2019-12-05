import React from 'react';
import { List, Button } from 'antd';
import classNames from 'classNames';
import styles from './todoItem.less';

const TodoItem = (props) => {
    let { item, handleDelete, handleChangeState } = props;
    return <List.Item>
        <Button onClick={() => handleDelete(item.id)} type="danger" style={{ marginRight: 10 }} size="small" icon="delete"></Button>
        <Button onClick={() => handleChangeState(item)} type="primary" style={{ marginRight: 10 }} size="small" icon={item.completed ? "minus" : 'stop'}></Button>
        <span className={classNames({
            [styles.ok]: item.completed,
            [styles.no]: !item.completed
        })}>{item.title}</span>
    </List.Item>
}
export default TodoItem;