import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";

const JAN_1ST_2030 = 1893456000;
const ONE_MIN_LATER = Math.floor(Date.now() / 1000) + 60 * 1; // 设置 unlockTime 为 1 分钟后
const ONE_GWEI: bigint = 1_000_000_000n;

const LockModule = buildModule("LockModule", (m) => {
    const unlockTime = m.getParameter("unlockTime", ONE_MIN_LATER);
    const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

    const lock = m.contract("Lock", [unlockTime], {
        value: lockedAmount,
    });


    return {lock};
});

export default LockModule;
