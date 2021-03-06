import dva from 'dva'
import routerConfig from './routerConfig'
import counter from './models/counter'
import user from './models/user'
import { createBrowserHistory } from 'history'
// import createLoading from 'dva-loading'
import createLoading from './utils/dva-loading'

// 会得到一个dva对象
const app = dva({
    history: createBrowserHistory()
})
// 使用dva-loading插件
app.use(createLoading())

// app.router()
// 设置根路由
app.router(routerConfig)

// 定义模型
app.model(counter)
app.model(user)

// app.start() 用于启动react程序
app.start('#root')
