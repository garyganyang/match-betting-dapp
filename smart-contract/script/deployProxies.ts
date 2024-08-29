import * as fs from "fs";
import {ethers, upgrades} from "hardhat";
import {ProxiesAddresses, PROXIES_ADDRESSES_FILENAME} from "./ProxiesAddresses";

async function main() {
  const [deployer, addr1, addr2] = await ethers.getSigners();
  //object that will contain the addresses of proxies deployed
  const proxyAddresses: ProxiesAddresses = {
    BETTOKEN_PROXY_ADDRESS: "",
    CALCULATOR_PROXY_ADDRESS: "",
    GAMEFACTORY_PROXY_ADDRESS: "",
    LOCKFACTORY_PROXY_ADDRESS: "",
  };

  console.log("Deploying contracts with the account:", deployer.address);

  //This will automatically check that the Box contract is upgrade-safe,
  //set up a proxy admin (if needed), deploy an implementation contract
  //for the Box contract (unless there is one already from a previous deployment),
  //create a proxy, and initialize it
  const ONE_MIN_LATER = Math.floor(Date.now() / 1000) + 60 * 1; // 设置 unlockTime 为 1 分钟后
  const ONE_GWEI: bigint = 1_000_000_000n;
  // const unlockTime = m.getParameter("unlockTime", ONE_MIN_LATER);
  // const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);


  const lockFactory = await ethers.getContractFactory("Lock");
  const lockContract = await upgrades.deployProxy(lockFactory, [ONE_MIN_LATER], {
    kind: "uups",
    initializer: "initialize", // 可选，指定初始化函数
  });
  await lockContract.waitForDeployment();
  const lockContractAddress = await lockContract.getAddress()
  console.log("lockContract deployed to:", lockContractAddress);
  // @ts-ignore
  proxyAddresses.LOCKFACTORY_PROXY_ADDRESS = lockContractAddress;


  // 打印实现合约的地址
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(lockContractAddress);
  console.log("Implementation contract deployed to:", implementationAddress);





  fs.writeFileSync(
    `./${PROXIES_ADDRESSES_FILENAME}`,
    JSON.stringify(proxyAddresses)
  );
  console.log(
    `*************** Endereços persistidos em: '${PROXIES_ADDRESSES_FILENAME}' ***********`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
