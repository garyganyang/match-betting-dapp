import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";
import LockModule from "./Lock";

export default buildModule("MainModule", async (m) => {
    // 使用 Lock 模块进行部署
    const {lock} = await m.useModule(LockModule);

    console.log(`Lock contract is available at: ${lock.address}`);

    return {lock}
});
