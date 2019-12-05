import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';



// 1. Initialize
const app = dva();



// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
app.model(require('./models/todoList').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
