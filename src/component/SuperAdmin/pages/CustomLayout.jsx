import {
  Affix,
  Avatar,
  Badge,
  Button,
  Col,
  Layout,
  Row,
  theme,
} from "antd";
import Logos from "../components/Logos";
import MenuList from "../MenuList";
import { useState } from "react";
import ToggleThemeButton from "../components/ToggleThemeButton";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import ProfileDropdowns from "../components/ProfileDropdowns";
import { Content } from "antd/es/layout/layout";


const { Header, Sider } = Layout;

const CustomLayout = () => {
   const [darkTheme, setDarkTheme] = useState(true);
   const [Collaped, setCollaped] = useState(false);

   const toggleTheme = () => {
     setDarkTheme(!darkTheme);
   };

   const {
     token: { colorBgContainer },
   } = theme.useToken();

   return (
     <div>
       
         <Layout>
           <Affix offsetTop={0}>
             <Sider
               collapsed={Collaped}
               collapsible
               trigger={null}
               theme={darkTheme ? "dark" : "light"}
               className="sidebar"
             >
               <Logos />
               <MenuList darkTheme={darkTheme} />
               <ToggleThemeButton
                 darkTheme={darkTheme}
                 toggleTheme={toggleTheme}
               />
             </Sider>
           </Affix>

           <Layout>
             <Header
               style={{
                 padding: 0,
                 background: colorBgContainer,
                 position: "sticky",
                 top: 0,
               }}
             >
               <Row>
                 <Col span={20}>
                   <Button
                     className="toggle"
                     onClick={() => setCollaped(!Collaped)}
                     type="text"
                     icon={
                       Collaped ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                     }
                   />
                 </Col>

                 <Col span={2}>
                   <Badge count={5}>
                     <Avatar shape="circle" />
                   </Badge>
                 </Col>
                 <Col span={2}>
                   <ProfileDropdowns />
                 </Col>
               </Row>
             </Header>
             <Layout
               style={{
                 padding: "0 24px 24px",
               }}
             >
               <Content
                 style={{
                   padding: 24,
                   margin: 0,
                   minHeight: 280,
                   borderRadius: "10px",
                   backgroundColor: "#e6e3e3",
                   width: "100%",
                 }}
               >
                 
               </Content>
             </Layout>
           </Layout>
         </Layout>
       
     </div>
   );
};

export default CustomLayout;
