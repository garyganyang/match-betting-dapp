import "./index.scss";
// import {UploadOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons';
import store from "/src/redux/reduxStore";
import {Layout, theme, ConfigProvider, Button} from 'antd';
import {Outlet} from "react-router-dom";
import {FunctionComponent, useState, useContext} from "react";
import Aside from "./aside"
import {css} from '@emotion/css';
import {GithubFilled} from "@ant-design/icons";

// 使用 React.FunctionComponent 定义 函数组件 的类型
// 使用 React.Component         定义   类组件 的类型
const MyLayout: FunctionComponent = () => {
    const [name, setName] = useState<string>(store.getState().HomeComponentReducer.name); //获取store.name作为默认值
    store.subscribe(() => {
        const storeData = store.getState();
        setName(storeData.HomeComponentReducer.name); //更新store.name值
    });

    const {Header, Content, Footer, Sider} = Layout;

    const {token: {colorBgContainer, borderRadiusLG}} = theme.useToken();

    const {getPrefixCls} = useContext(ConfigProvider.ConfigContext);
    const rootPrefixCls = getPrefixCls();
    const linearGradientButton = css`
        &.${rootPrefixCls}-btn-primary:not([disabled]):not(.${rootPrefixCls}-btn-dangerous) {
            border-width: 0;

            > span {
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
    const connectWallet = () => {

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
                                <Button type="primary" onClick={connectWallet}>Connect wallet</Button>
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
        </ConfigProvider>
    );
}

export default MyLayout;
