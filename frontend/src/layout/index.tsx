import "./index.scss";
import store from "../redux/reduxStore.ts";
import {EthereumReducerActionType} from "../redux/ethereumState.ts";
import {Layout, theme, ConfigProvider, Button} from 'antd';
import Icon, {GithubFilled} from "@ant-design/icons";
import {Outlet} from "react-router-dom";
import {FunctionComponent, useState, useContext, useRef} from "react";
import {ethers} from "ethers";
import Aside from "./aside"
import {css} from '@emotion/css';
import BalanceComponent from "../pages/component/balance.tsx";

// 使用 React.FunctionComponent 定义 函数组件 的类型
// 使用 React.Component         定义   类组件 的类型
const MyLayout: FunctionComponent = () => {
    const [, setProvider] = useState<any>(); //获取store.name作为默认值
    // const [walletAddress, setWalletAddress] = useState(); //获取store.walletAddress作为默认值
    const [, setSigner] = useState<any>(); //获取store.signer作为默认值
    const [accountAddress, setAccountAddress] = useState<any>(); //获取store.signer作为默认值
    const balanceComponentRef = useRef<{ show: () => void }>(null);


    const {Header, Content, Footer, Sider} = Layout;

    // const {token: {colorBgContainer, borderRadiusLG}} = theme.useToken();

    const {getPrefixCls} = useContext(ConfigProvider.ConfigContext);
    const rootPrefixCls = getPrefixCls();
    const linearGradientButton = css`
        &.${rootPrefixCls}-btn-primary:not([disabled]):not(.${rootPrefixCls}-btn-dangerous) {
            border-width: 0;

            > span, img {
                position: relative;
            }

            &::before {
                content: '';
                background: linear-gradient(135deg, #6253E1, #04BEFE);
                position: absolute;
                inset: 0;
                opacity: 1;
                transition: all 0.3s;
                border-radius: inherit;
            }

            &:hover::before {
                opacity: 0;
            }
        }
    `;

    const connectWallet = async () => {
        // let signer;
        let provider;
        if (window.ethereum == null) {
            // If MetaMask is not installed, we use the default provider,
            // which is backed by a variety of third-party services (such
            // as INFURA). They do not have private keys installed,
            // so they only have read-only access
            console.log("MetaMask not installed; using read-only defaults")
            alert("MetaMask not installed")
            provider = ethers.getDefaultProvider()
            setProvider(provider);
            // store.dispatch({type: EthereumReducerActionType.UPDATE_PROVIDER, provider});
            return
        }

        // Connect to the MetaMask EIP-1193 object. This is a standard
        // protocol that allows Ethers access to make all read-only
        // requests through MetaMask.

        // const accounts = await window.ethereum.request({
        //     method: 'eth_requestAccounts'// method: 'eth_accounts'
        // });
        // if (accounts.length == 0) {
        //     alert("Cannot find a account")
        //     return
        // }
        // setWalletAddress(accounts[0])
        // console.log('Connected MetaMask Account:', accounts);

        provider = new ethers.BrowserProvider(window.ethereum)
        setProvider(provider);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        store.dispatch({type: EthereumReducerActionType.UPDATE_ETHEREUM_PROVIDER, provider});

        // It also provides an opportunity to request access to write
        // operations, which will be performed by the private key
        // that MetaMask manages for the user.
        const signer = await provider.getSigner()
        setSigner(signer);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        store.dispatch({type: EthereumReducerActionType.UPDATE_ETHEREUM_SIGNER, signer});

        const accountAddress = await signer.getAddress();
        setAccountAddress(accountAddress);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        store.dispatch({type: EthereumReducerActionType.UPDATE_ETHEREUM_ACCOUNT_ADDRESS, accountAddress});
        console.log("Connected to MetaMask:", accountAddress);
    }

    const showMyBetTokenBalance = ()=>{
        balanceComponentRef.current?.show();
    }


    return ( //多行箭头函数返回 使用()
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        siderBg: '#24272a',
                        bodyBg: "#141618",
                        footerBg: '#141618',
                        footerPadding: "6px 50px"
                    },
                    Menu: {
                        darkItemBg: '#24272a',
                        darkItemColor: '#FFF',
                        darkItemSelectedBg: '#ffffff0a',
                        darkItemHoverBg: '#ffffff0a'
                    },

                },
            }}
        >
            <Layout>
                <Sider breakpoint="lg"
                       collapsedWidth="0"
                       onBreakpoint={(broken) => {
                           console.log(broken);
                       }}
                       onCollapse={(collapsed, type) => {
                           console.log(collapsed, type);
                       }}
                       style={{borderRight: "1px solid #848c9629"}}
                >
                    <div className="demo-logo-vertical">
                        <div className="" style={{fontSize: 17, fontWeight: "bold"}}>Match Betting</div>
                        <div style={{}}>an Ethereum DApp</div>
                    </div>
                    <Aside/>
                </Sider>
                <Layout>
                    {/*<Header style={{padding: '0 16px', background: colorBgContainer}}>Header subscribe Redux state on "name" changes - {name}</Header>*/}
                    <Header className="text-white flex" style={{padding: '0 16px', background: "#141618", borderBottom: "1px solid #848c9629"}}>
                        <div className="flex-1"></div>
                        <div className="flex-1 text-white flex items-center text-right justify-end">
                            <ConfigProvider
                                button={{
                                    className: linearGradientButton,
                                }}
                            >
                                <a className="text-2xl mr-4 " href="https://github.com/garyganyang" target="_blank" rel="noopener noreferrer"><GithubFilled/></a>
                                {accountAddress ?
                                    <Button type="primary" onClick={showMyBetTokenBalance}>
                                        <img src="https://chainlist.org/connectors/icn-metamask.svg" width="20" height="20" alt=""/>
                                        Connected {`${accountAddress.substring(0, 6)}...${accountAddress.substring(38)}`}</Button>
                                    :
                                    <Button type="primary" onClick={connectWallet}>
                                        <img src="https://chainlist.org/connectors/icn-metamask.svg" width="20" height="20" alt=""/>
                                        Connect wallet</Button>}
                            </ConfigProvider>
                        </div>

                    </Header>
                    <Content className="text-white overflow-y-scroll" style={{margin: '0', padding: 16, height: 'calc(100vh - 64px - 36px)', borderRadius: '0px',}}>
                        <Outlet/>
                    </Content>
                    <Footer className="text-white" style={{textAlign: 'center', borderTop: "1px solid #848c9629"}}>
                        Match Betting ©{new Date().getFullYear()} Created garyganyang
                    </Footer>
                </Layout>
            </Layout>
            <BalanceComponent ref={balanceComponentRef}/>
        </ConfigProvider>
    );
}

export default MyLayout;
