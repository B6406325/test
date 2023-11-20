import { Button, ConfigProvider, Layout, Menu, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MovieEdit from './edit/movieEdit';
const { Sider } = Layout;

export default function Movies(){
    const navigate = useNavigate();
    function clickUser(){
      navigate('/admin');
    }
    function clickPayment(){
      navigate('/payment');
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
                  <div className='admin-user'>
                    <Button style={{fontSize: 25,width: 200,height:50,fontFamily:'Mitr'}} type='primary' onClick={clickUser}>User</Button>
                  </div>
                  <div className='admin-movie'>
                    <Button style={{fontSize: 25,width: 200,height:50,fontFamily:'Mitr'}} type='primary' >Movies</Button>
                  </div>
                  <div className='admin-payment'>
                    <Button style={{fontSize: 25,width: 200,height:50,fontFamily:'Mitr'}} type='primary' onClick={clickPayment}>Payment</Button>
                  </div>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{height: 100,marginTop:10,marginLeft:10,marginRight:10,backgroundColor:"#FFFFFF",fontSize:50,fontFamily:'Mitr'}}>
                <div style={{marginTop:18}}>Movie Management</div>
              </Header>
              <Content style={{ height: 100,marginTop:10,marginLeft:10,marginRight:10 }}>
              <div
                  style={{
                    padding: 24,
                    minHeight: "100%",
                    background: colorBgContainer,
                  }}
                >
                  <Routes>
                    <Route path='/' element={<MovieEdit/>}/>
                  </Routes>
                </div>
              </Content>
            </Layout>
        </Layout>
        </ConfigProvider>
    );
}