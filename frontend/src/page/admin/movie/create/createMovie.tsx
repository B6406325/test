import { Button, ConfigProvider, Layout, Menu, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

const { Sider } = Layout;

export default function CreateMovie(){
    const navigate = useNavigate();
    function clickMovie(){
        navigate('/movies');
      }
      function clickPayment(){
        navigate('/payment');
      }
      function clickUser(){
        navigate('/admin');
      }
      function clickBack(){
        navigate('/');
      }

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
                <Button style={{fontSize: 25,width: 200,height:50,fontFamily:'Mitr'}} type='primary' onClick={clickMovie}>Movies</Button>
              </div>
              <div className='admin-payment'>
                <Button style={{fontSize: 25,width: 200,height:50,fontFamily:'Mitr'}} type='primary' onClick={clickPayment}>Payment</Button>
              </div>
              <div className='admin-back'>
                <Button style={{fontSize: 25,width: 150,height:50,fontFamily:'Mitr'}} type='primary' onClick={clickBack}>LogOut</Button>
              </div>
          </Menu>
        </Sider>
        </Layout>
        </ConfigProvider>
    );
}