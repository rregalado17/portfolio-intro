import Homepage from './components/Homepage'
import Background from './components/Background'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import {
  HomeOutlined,
  ContactsOutlined,
  ProfileOutlined,
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
import { Route, Routes } from 'react-router-dom';


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
      getItem('Blog', 'sub5', <AlignLeftOutlined />),
    ]),
  ];


  return (
    <div className="App">
      <div style={{width: 256,}}>
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

    <nav className='flex justify-center space-x-4'>
      <Link to="/" className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Home</Link>
      <Link to="/background" className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Background</Link>
      <Link to="/projects" className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Projects</Link>
      <Link to="/skills" className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Skills</Link>
      <Link to="/contact" className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Contact</Link>
    </nav>

  <Routes>
    <Route path="/" element={<Homepage />}/>
    <Route path="/background" element={<Background />}/>
    <Route path="/projects" element={<Projects />}/>
    <Route path="/skills" element={<Skills />}/>
    <Route path="/contact" element={<Contact />}/>
  </Routes>

    
    </div>
  );
}

export default App;
