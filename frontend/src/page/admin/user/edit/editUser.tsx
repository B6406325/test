import { Button, Card, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MemberInterface } from "../../../../interface/Idata";
import { GetUserById } from "../../../../service/http";
import './user.css'


export default function UserEdit(){
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [user, setUser] = useState<MemberInterface>();

    let { id } = useParams();
    const [form] = Form.useForm();

    const getUserById = async () => {
        let res = await GetUserById(Number(id));
        if (res) {
        setUser(res);
        // set form ข้อมูลเริ่มของผู่้ใช้ที่เราแก้ไข
        form.setFieldsValue({ 
            Username: res.FirstName ,
            Email : res.LastName ,
            Password: res.GenderID,
        });
        }
    };

    useEffect(() => {
        getUserById();
      }, []);
    return(
        <div className="edit-page">
            <div >
                <Form>
                    <Form.Item>
                        <Input>

                        </Input>
                    </Form.Item>
                    <Form.Item>
                        <Input>
                        
                        </Input>
                    </Form.Item>
                    <Form.Item>
                        <Input>
                        
                        </Input>
                    </Form.Item>
                    <Form.Item>
                        <Button>
                            
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    );

}