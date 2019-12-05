import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button } from 'antd';
import { Link, routerRedux } from 'dva/router';

function IndexPage(props) {
	let goTodoList = () => {
		// props.dispatch(routerRedux.push('/todolist'));
		props.dispatch(routerRedux.push({
			pathname: '/todolist'
		}));
	}
	let goTodoListProps = () => {
		console.log(props)
		props.history.push('/todolist');
	}
	return (
		<div className={styles.normal}>
			<h1 className={styles.title}>
				React + Dva
      </h1>
			<Button size="small" onClick={goTodoList}>routerRedux</Button>
			<Link style={{ margin: '0 10px' }} to="/todolist">Link</Link>
			<Button size="small" onClick={goTodoListProps}>props.history</Button>

			<div className={styles.welcome} />
			<ul className={styles.list}>
				<li>To get started, edit <code>src/index.js</code> and save to reload.</li>
				<li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
			</ul>
		</div>
	);
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
