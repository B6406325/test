import Table, { ColumnsType } from "antd/es/table"
import { MemberInterface } from "../../../interface/Idata"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Modal, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { GetMember } from "../../../service/http";
import { DeleteUserByID } from "../../../service/http";

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
            render: (text, record, index) => (
                <div>
                <Button shape="circle" onClick={() =>  navigate(`/user/edit/${record.ID}`)}
                size={"large"}
                />
                <Button shape="circle" 
                onClick={() => showModal(record)}
                style={{ marginLeft: 10 }}
                danger icon={<DeleteOutlined />}
                size={"large"}
                />
                </div>
            ),
        },
    ];

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState<String>();
    const [deleteId, setDeleteId] = useState<Number>();
    const [users, setUsers] = useState<MemberInterface[]>([]);
    const [messageApi, contextHolder] = message.useMessage();

    const showModal = (val: MemberInterface) => {
        setModalText(
          "คุณต้องการลบข้อมูลผู้ใช้หรือไม่ ?"
        );
        setDeleteId(val.ID);
        setOpen(true);
      };

      const handleOk = async () => {
        setConfirmLoading(true);
        let res = await DeleteUserByID(deleteId);
        if (res) {
          setOpen(false);
          messageApi.open({
            type: "success",
            content: "ลบข้อมูลสำเร็จ",
          });
          getUsers();
        } else {
          setOpen(false);
          messageApi.open({
            type: "error",
            content: "เกิดข้อผิดพลาด !",
          });
        }
        setConfirmLoading(false);
      };

      const handleCancel = () => {
        setOpen(false);
      };

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
        <>
        <Table rowKey={"Id"} columns={columns} dataSource={users}/>
        <Modal
        title="ลบข้อมูล ?"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
      </>
    )
}