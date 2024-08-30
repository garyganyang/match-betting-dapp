/**
 * GPT:
 * 在 Redux 中，action 通常是一个普通的 JavaScript 对象，它至少包含一个 type 属性，用于指示要执行的操作。type 是一个必须的字段，它是一个字符串，用于区分不同的 action。
 * 除了 type 字段外，action 对象还可以包含其他字段，如 payload，它可以携带与 action 相关的数据。在 TypeScript 中，可以使用接口（Interfaces）来定义 action 的结构，以提高代码的可维护性和类型安全性。
 */
export const UserComponentReducerActionType = {
    "ADD_COUNT": "ADD_COUNT",
}

export interface UserComponentReducerAction {
    type: string;
    count: number,
    number: number,
    payload: any; // 可以根据需要替换为更具体的类型
}

//定义数据
const UserComponentInitState = {
    count: 0,
};

export const UserComponentReducer = (state = UserComponentInitState, action: UserComponentReducerAction) => {
    switch (action.type) {
        case UserComponentReducerActionType.ADD_COUNT:
            return {...state, count: state.count + action.number};
        default:
            return state;
    }
}
