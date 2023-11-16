import { Link } from 'react-router-dom';
import './Login.css'

export default function Login(){
    return(
        <div className='web-login'>
            <div className='body-login'>
                <div className='body-login-text'>เข้าสู่ระบบ</div>
                <div className='input-email'></div>
                <div className='input-password'></div>
                <div className='reg-text'> ยังไม่มีบัญชีผู้ใช้งาน?<Link to=''><div className='reg-link'>สร้างบัญชีผู้ใช้งาน</div></Link>
                </div>
            </div>
        </div>
    );
}