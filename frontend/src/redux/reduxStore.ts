import {legacy_createStore as createStore, combineReducers} from "redux";
import {UserComponentReducer} from "./userState.ts"
import {HomeComponentReducer} from "./homeState.ts"
import {EthereumReducer} from "./ethereumState.ts"


/**
 * GPT:
 * 如果不同的子 reducer 都监听同一个 action 类型，Redux 允许这种情况发生。
 * 当 store.dispatch 被调用时，根 reducer 会将 action 对象传递给所有子 reducer。
 * 每个子 reducer 都会接收到相同的 action，并根据 action 的 type 字段来决定是否对该 action 做出反应。
 * Redux 的这种设计使得你可以很容易地在不同的 reducer 之间共享 action 和 state 更新逻辑，同时也保持了组件的独立性和可测试性。
 * 如果你需要在不同的 reducer 之间进行更复杂的通信，你可以使用中间件（redux-thunk）来实现。
 **/
const store = createStore(combineReducers({
    UserComponentReducer,
    HomeComponentReducer,
    EthereumReducer,
}));

export default store;
