import { Link , useNavigate} from 'react-router-dom';
import './Login.css'
import { ConfigProvider , Button , Input, Form , message} from 'antd';
import { MemberInterface } from '../../interface/Idata';
import { ListUsers } from '../../service/http';

export default function Login(){
    const navigate = useNavigate();
    const onFinish = async (values: MemberInterface) => {
        let res = await ListUsers(values);
        if (res.message==="Email Not found") {
            message.error("Email not found. Please check your credentials.");
        } else if (res.message==="invalid password") {
            message.error("Invalid password. Please try again.");
        } else if (res.message === "Status admin"){
            message.success("Welcome Admin!!");
            setTimeout(function () {
              navigate("/admin");
          }, 2000);
        }
        else {
            if (res.status) {
                message.success("Welcome!");
                setTimeout(function () {
                  navigate("/content");
              }, 2000);
            } else {
                // message.error("An error occurred. Please try again.");
                message.error(`error, Status: ${res.status}`);
            }
        }
    }

    return(
        <div className='web-login'>
            <ConfigProvider theme={{
                components:{
                    Button:{
                        colorPrimary: '#F5CE00',
                        algorithm: true,
                        primaryColor: '#000000',
                    },
                    Input:{
                        colorPrimary: '#F5CE00',
                        algorithm: true,
                    },
                },
            }}>
            <div className='body-login'>
                <div className='body-login-text'>เข้าสู่ระบบ</div>
                <Form onFinish={onFinish}>
                    <div className='input-email'>
                        <Form.Item name="Email">
                            <Input style={{width:670,height:69,fontSize:25,fontFamily:'Mitr'}} placeholder='อีเมล'></Input>
                        </Form.Item>
                    </div>
                    <div className='input-password'>
                        <Form.Item name="Password">
                            <Input style={{width:670,height:69,fontSize:25,fontFamily:'Mitr'}} placeholder='รหัสผ่าน' type='password'></Input>
                        </Form.Item>
                    </div>
                    <div className='reg-text'> ยังไม่มีบัญชีผู้ใช้งาน?
                        <Link to='/register' style={{textDecoration: 'none'}}>
                            <div className='reg-link'>สร้างบัญชีผู้ใช้งาน</div>
                        </Link>
                        <div className='login-button'>
                            <Form.Item>
                                <Button style={{fontSize: 25,width: 200,height:50,fontFamily:'Mitr'}} type='primary' htmlType='submit'>เข้าสู่ระบบ</Button>
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </div>
            </ConfigProvider>
        </div>
    );
}