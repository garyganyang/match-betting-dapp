/**
 * GPT:
 * 在 Redux 中，action 通常是一个普通的 JavaScript 对象，它至少包含一个 type 属性，用于指示要执行的操作。type 是一个必须的字段，它是一个字符串，用于区分不同的 action。
 * 除了 type 字段外，action 对象还可以包含其他字段，如 payload，它可以携带与 action 相关的数据。在 TypeScript 中，可以使用接口（Interfaces）来定义 action 的结构，以提高代码的可维护性和类型安全性。
 */
export const HomeComponentReducerActionType = {
    "UPDATE_NAME": "UPDATE_NAME",
}

interface HomeComponentReducerAction {
    type: string;
    payload: any; // 可以根据需要替换为更具体的类型
}

const HomeComponentInitState = {
    name: "学了太多东西了,头都要炸了",
};

export const HomeComponentReducer = (state = HomeComponentInitState, action: HomeComponentReducerAction) => {
    switch (action.type) {
        case HomeComponentReducerActionType.UPDATE_NAME:
            return {...state, name: action.payload.name};
        default:
            return state;
    }
}
