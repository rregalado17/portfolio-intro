import React from 'react';
import { Link } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuProps, MenuTheme } from 'antd';
import { useState } from 'react';


const Navbar = () => {


    return (
        <div>
            <Link to="/home">Homepage</Link>
            <Link to="/background">Background</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>

            
        </div>
    )
}

export default Navbar