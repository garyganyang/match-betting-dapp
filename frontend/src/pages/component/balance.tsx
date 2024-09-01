import {FunctionComponent, useState, useImperativeHandle, forwardRef, useEffect, useContext} from 'react'
// import {useNavigate} from "react-router-dom";
import store, {} from "../../redux/reduxStore";
import {Button, ConfigProvider, InputNumber, Modal} from 'antd';
// import "./index.scss"
import {ethers} from "ethers";
import BetTokenUpgradeable from "../../abi/BetTokenUpgradeable.json"
import {GithubFilled} from "@ant-design/icons";
import {css} from "@emotion/css";
import {formatEther, parseUnits} from "ethers/src.ts/utils/units.ts";

// 定义 props 类型，确保父组件不会传入任何 props
interface CustomModalProps {
}

const BalanceComponent = forwardRef((props: CustomModalProps, ref) => {
    // const navigate = useNavigate()
    const [signer, setSigner] = useState<any>(); //获取store.signer作为默认值
    const [accountAdd, setAccountAdd] = useState<any>(); //获取store.signer作为默认值
    const [isVisible, setIsVisible] = useState(false);
    const [balance, setBalance] = useState<any>();
    const [transactionHash, setTransactionHash] = useState('');
    const [form, setForm] = useState({
        buyAmount: 2,
        withdrawAmount: 2
    });


    useImperativeHandle(ref, () => ({
        show() {
            setIsVisible(true);
            getBalance().then(() => {
            })
        },
    }));

    store.subscribe(() => {
        const storeData = store.getState();
        // console.log('subscribed signer:', storeData.EthereumReducer?.signer)
        setSigner(storeData.EthereumReducer?.signer); //
        setAccountAdd(storeData.EthereumReducer?.accountAddress); //
    });

    useEffect(() => {
        // 副作用操作，类似于 Vue 的 mounted
        return () => {
            // 清理操作
        };
    }, []); // 空依赖数组，确保只在组件挂载和卸载时运行

    const getBalance = async () => {
        try {
            const contractABI = BetTokenUpgradeable.abi
            const contractAddress = BetTokenUpgradeable.deployedAddress
            const BetTokenUpgradeableContract = new ethers.Contract(contractAddress, contractABI, signer);

            // await BetTokenUpgradeableContract.on('Withdrawal', (owner, amount) => {
            //     console.log(`Withdraw event: Owner: ${owner}, Amount: ${amount.toString()}`);
            // });

            // Call the balanceOf function
            const balance = await BetTokenUpgradeableContract.balanceOf(accountAdd);
            setBalance(ethers.formatUnits(balance, 'wei'))
            // await tx.wait(); // Wait for the transaction to be mined
        } catch (error) {
            console.error(error);
        }
    }

    const buyBetToken = async () => {
        try {
            console.log(form)
            // const contractABI = BetTokenUpgradeable.abi
            const contractAddress = BetTokenUpgradeable.deployedAddress
            // const BetTokenUpgradeableContract = new ethers.Contract(contractAddress, contractABI, signer);

            const tx = await signer.sendTransaction({
                to: contractAddress, // 发送到合约地址
                value: ethers.parseUnits(String(form.buyAmount), 'wei'), // 发送1 ETH
            });
            await tx.wait(); // Wait for the transaction to be mined
            getBalance().then()
        } catch (error) {
            console.error(error);
        }
    }

    const withdrawBetToken = async () => {
        try {
            const contractABI = BetTokenUpgradeable.abi
            const contractAddress = BetTokenUpgradeable.deployedAddress
            const BetTokenUpgradeableContract = new ethers.Contract(contractAddress, contractABI, signer);

            const tx = await BetTokenUpgradeableContract.exchange4Ether(form.withdrawAmount);
            await tx.wait(); // Wait for the transaction to be mined
            getBalance().then()
        } catch (error) {
            console.error(error);
        }
    }

    const handleInputChange = (name: string, value: number | null) => {
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <Modal title="账户信息"
               open={isVisible}
               onCancel={handleClose}
               footer={[
                   <Button key="close" onClick={handleClose}>
                       关闭
                   </Button>
               ]}
        >
            <div className="mb-4 mt-4 text-lg">当前BetToken余额：{balance} wei</div>
            <div className="mb-4 text-lg">
                购买BetToken：
                <InputNumber className=""
                             value={form.buyAmount}
                             onChange={(value) => handleInputChange('buyAmount', value)}
                             defaultValue={2}
                             max={9999}
                             min={2}
                             suffix={"wei"}
                             changeOnWheel={true}
                             controls={true}
                             style={{width: '160px'}}/>
                <Button type="primary" className="ml-1" onClick={buyBetToken}> 购买 </Button>
            </div>
            <div className="mb-4 text-lg">
                提取BetToken：
                <InputNumber className=""
                             value={form.withdrawAmount}
                             onChange={(value) => handleInputChange('withdrawAmount', value)}
                             defaultValue={2}
                             max={9999}
                             min={2}
                             suffix={"wei"}
                             changeOnWheel={true}
                             controls={true}
                             style={{width: '160px', textAlign: 'right'}}/>
                <Button type="primary" className="ml-1" onClick={withdrawBetToken}> 提取 </Button>
            </div>
        </Modal>
    );
});

export default BalanceComponent;
