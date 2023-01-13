import Homepage from './components/Homepage'
import Background from './components/Background'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import {
  HomeOutlined,
  ContactsOutlined,
  AppstoreOutlined,
  ProfileOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
  GithubOutlined,
  AlignLeftOutlined,
  BookOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState } from 'react';


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

function App() {

  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Home', '1', <HomeOutlined />),
    getItem('Background', '2', <ProfileOutlined />),
    getItem('Projects', '3', <DesktopOutlined/>),
    getItem('Skills', 'sub1', <PieChartOutlined />,),
    getItem('Contact', 'sub2', <ContactsOutlined />, [
      getItem('Resume', 'sub3', < BookOutlined />),
      getItem('Email', '9', <MailOutlined/>,),
      getItem('Github', '10', <GithubOutlined />, ),
      getItem('Blog', 'sub3', <AlignLeftOutlined />),
    ]),
  ];


  return (
    <div className="App">
      <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>

      <Homepage />
      
      <Background />
      <Projects />        
      <Skills />

    </div>
  );
}

export default App;
