import Table, { ColumnsType } from "antd/es/table"
import { MemberInterface } from "../../../interface/Idata"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { message } from "antd";
import { GetMember } from "../../../service/http/ServiceLogin";


export default function User(){

    const columns: ColumnsType<MemberInterface> = [
        {
            title: "ลำดับ",
            dataIndex: "ID",
            key: "id",
        },
        {
            title: "ชื่อผู้ใช้",
            dataIndex: "Username",
            key: "username",
        },
        {
            title: "อีเมล",
            dataIndex: "Email",
            key: "email",
        },
        {
            title: "รหัสผ่าน",
            dataIndex: "Password",
            key: "password",
        },
        {
            title: "จัดการ",
            dataIndex: "Manage",
            key: "manage",
        },
    ];

    const navigate = useNavigate();

    const [users, setUsers] = useState<MemberInterface[]>([]);
  
    const [messageApi, contextHolder] = message.useMessage();

    const getUsers = async () => {
        let res = await GetMember();
        if (res) {
          setUsers(res);
        }
      };
    useEffect(() => {
        getUsers();
    }, []);
    return(
        <Table rowKey={"Id"} columns={columns} dataSource={users}/>
    )

}