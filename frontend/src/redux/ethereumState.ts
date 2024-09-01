/**
 * GPT:
 * 在 Redux 中，action 通常是一个普通的 JavaScript 对象，它至少包含一个 type 属性，用于指示要执行的操作。type 是一个必须的字段，它是一个字符串，用于区分不同的 action。
 * 除了 type 字段外，action 对象还可以包含其他字段，如 payload，它可以携带与 action 相关的数据。在 TypeScript 中，可以使用接口（Interfaces）来定义 action 的结构，以提高代码的可维护性和类型安全性。
 */
export const EthereumReducerActionType = {
    "UPDATE_ETHEREUM_PROVIDER": "UPDATE_ETHEREUM_PROVIDER",
    "UPDATE_ETHEREUM_SIGNER": "UPDATE_ETHEREUM_SIGNER",
    "UPDATE_ETHEREUM_ACCOUNT_ADDRESS": "UPDATE_ETHEREUM_ACCOUNT_ADDRESS",
}

interface EthereumComponentReducerAction {
    type: string,
    provider: any;
    signer: any,
    accountAddress: string,
    payload: any; // 可以根据需要替换为更具体的类型
}

const EthereumInitState = {
    type: undefined,
    provider: undefined,
    signer: undefined,
    accountAddress: undefined,
    payload: undefined, // 可以根据需要替换为更具体的类型
};

export const EthereumReducer = (state = EthereumInitState, action: EthereumComponentReducerAction) => {
    switch (action.type) {
        case EthereumReducerActionType.UPDATE_ETHEREUM_PROVIDER:
            return {...state, provider: action.provider};
        case EthereumReducerActionType.UPDATE_ETHEREUM_SIGNER:
            return {...state, signer: action.signer};
        case EthereumReducerActionType.UPDATE_ETHEREUM_ACCOUNT_ADDRESS:
            return {...state, accountAddress: action.accountAddress};
        default:
            return state;
    }
}
