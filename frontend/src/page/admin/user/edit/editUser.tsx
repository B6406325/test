import { Button, Card, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ConfigProvider, Layout, Menu, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { MemberInterface } from "../../../../interface/Idata";
import { GetUserById ,UpdateUser} from "../../../../service/http";
const { Sider } = Layout;

export default function UserEdit(){
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
    const [user, setUser] = useState<MemberInterface>();

    let { id } = useParams();
    const [form] = Form.useForm();

    const getUserById = async () => {
        let res = await GetUserById(Number(id));
        if (res) {
        setUser(res);
        // set form ข้อมูลเริ่มของผู่้ใช้ที่เราแก้ไข
        form.setFieldsValue({ 
            ID: res.ID,
            Username: res.Username ,
            Email : res.Email ,
            Password: res.Password,
            Status: res.Status,
            Payment: res.Payment,
        });
        }
    };

    const onFinish = async (values: MemberInterface) => {
        values.ID = user?.ID;
        let res = await UpdateUser(values);
        if (res.status) {
            message.success("แก้ไขสำเร็จ");
          setTimeout(function () {
            navigate("/admin");
          }, 2000);
        } else {
            message.error("แก้ไขข้อมูลไม่สำเร็จ"); 
        }
      };

    const {
        token: { colorBgContainer },
      } = theme.useToken();
    useEffect(() => {
        getUserById();
      }, []);
    return(
            <div >
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
        <Layout>
          <Header style={{height: 100,marginTop:10,marginLeft:10,marginRight:10,backgroundColor:"#FFFFFF",fontSize:50,fontFamily:'Mitr'}}>
            <div style={{marginTop:18}}>Edit User</div>
          </Header>
          <Content style={{ height: 100,marginTop:10,marginLeft:10,marginRight:10 }}>
          <div
              style={{
                padding: 24,
                minHeight: "100%",
                background: colorBgContainer,
              }}
            >
                <Form 
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                form={form}
                autoComplete="off"
                >
                    <Form.Item label="ชื่อผู้ใช้" name="Username" rules={[
                  {
                    required: true,
                    message: "กรุณากรอกชื่อผู้ใช้!",
                  },
                ]}>
                        <Input>
                        </Input>
                    </Form.Item>
                    <Form.Item label="อีเมล" name="Email" rules={[
                        {
                            type: "email",
                            message: "รูปแบบอีเมลไม่ถูกต้อง !",
                        },
                        {
                            required: true,
                            message: "กรุณากรอกอีเมล!",
                        },
                ]}>
                        <Input>
                        </Input>
                    </Form.Item>
                    <Form.Item label="รหัสผ่าน" name="Password" rules={[
                  {
                    required: true,
                    message: "กรุณากรอกรหัสผ่าน!",
                  },
                ]}>
                        <Input>
                        </Input>
                    </Form.Item>
                    <Form.Item name="Status"></Form.Item>
                    <Form.Item name="Payment"></Form.Item>
                    <Form.Item>
                        <Button 
                        type="primary"
                        htmlType="submit"
                        >
                            แก้ไข
                        </Button>
                    </Form.Item>
                </Form>
                </div>
                </Content>
                </Layout>
                </Layout>
                </ConfigProvider>
            </div>
            
    );

}