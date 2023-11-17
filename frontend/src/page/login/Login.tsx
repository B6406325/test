import { Link } from 'react-router-dom';
import './Login.css'
import { ConfigProvider , Button , Input} from 'antd';

export default function Login(){
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
                <div className='input-email'>
                    <Input style={{width:670,height:69,fontSize:25,fontFamily:'Mitr'}} placeholder='อีเมล'></Input>
                </div>
                <div className='input-password'>
                    <Input style={{width:670,height:69,fontSize:25,fontFamily:'Mitr'}} placeholder='รหัสผ่าน' type='password'></Input>
                </div>
                <div className='reg-text'> ยังไม่มีบัญชีผู้ใช้งาน?
                    <Link to='register' style={{textDecoration: 'none'}}>
                        <div className='reg-link'>สร้างบัญชีผู้ใช้งาน</div>
                    </Link>
                    <div className='login-button'>
                        <Button style={{fontSize: 25,width: 200,height:50,fontFamily:'Mitr'}} type='primary'>เข้าสู่ระบบ</Button>
                    </div>
                </div>
            </div>
            </ConfigProvider>
        </div>
    );
}