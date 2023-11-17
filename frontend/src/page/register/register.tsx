import './register.css'
import { ConfigProvider , Button , Input} from 'antd';

export default function Register(){
    return(
        <div className='web-reg'>
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
            <div className='body-reg'>
                <div className='body-reg-text'>สร้างบัญชีผู้ใช้งาน</div>
                <div className='reg-username'>
                    <Input style={{width:670,height:53,fontSize:25,fontFamily:'Mitr'}} placeholder='ชื่อผู้ใช้งาน'></Input>
                </div>
                <div className='reg-email'>
                    <Input style={{width:670,height:53,fontSize:25,fontFamily:'Mitr'}} placeholder='อีเมล'></Input>
                </div>
                <div className='reg-pass'>
                    <Input style={{width:670,height:53,fontSize:25,fontFamily:'Mitr'}} placeholder='รหัสผ่าน' type='password'></Input>
                </div>
                <div className='reg-password'>
                    <Input style={{width:670,height:53,fontSize:25,fontFamily:'Mitr'}} placeholder='ยืนยันรหัสผ่าน' type='password'></Input>
                </div>
                <div className='reg-button'>
                    <Button style={{fontSize: 25,width: 200,height:50,fontFamily:'Mitr'}} type='primary'>สร้างบัญชี</Button>
                </div>
            </div>
            </ConfigProvider>
        </div>
    );
}