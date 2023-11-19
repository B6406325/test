import React, { useState } from 'react';
import './admin.css'
import { Button, ConfigProvider, Layout, Menu, MenuProps, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { Route, Routes, useNavigate} from 'react-router-dom';
import User from './user/user';

const { Sider } = Layout;


export default function Admin(){
  const navigate = useNavigate();
  function clickMovie(){
    navigate("/movie");
  }
  function clickPayment(){
    navigate("/payment");
  }

  const {
    token: { colorBgContainer },
  } = theme.useToken();
    return(
      <ConfigProvider theme={{
        components:{
            Button:{
                colorPrimary: '#F5CE00',
                algorithm: true,
                primaryColor: '#000000',
            },
        },
    }}>
      <Layout style={{height: "100vh",backgroundColor:'#D9D9D9'}}>
        <Sider width={300}>
          <Menu style={{height:"100vh",backgroundColor:'#000000'}} mode='inline'>
              <div className='admin-movie'>
                <Button style={{fontSize: 25,width: 200,height:50,fontFamily:'Mitr'}} type='primary' onClick={clickMovie}>Movies</Button>
              </div>
              <div className='admin-payment'>
                <Button style={{fontSize: 25,width: 200,height:50,fontFamily:'Mitr'}} type='primary' onClick={clickPayment}>Payment</Button>
              </div>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{height: 100,marginTop:10,marginLeft:10,marginRight:10,backgroundColor:"#FFFFFF"}}/>
          <Content style={{ height: 100,marginTop:10,marginLeft:10,marginRight:10 }}>
          <div
              style={{
                padding: 24,
                minHeight: "100%",
                background: colorBgContainer,
              }}
            >
              <Routes>
                <Route path='/' element={<User/>}/>
              </Routes>
            </div>
          </Content>
        </Layout>
    </Layout>
    </ConfigProvider>
    );
}
