import Table, { ColumnsType } from "antd/es/table"
import { DeleteOutlined , EditOutlined} from "@ant-design/icons";
import { MovieInterface } from "../../../../interface/Idata";
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DeleteMovieByID, GetMember, ListMovie } from "../../../../service/http";


export default function MovieDash(){
    const columns: ColumnsType<MovieInterface> = [
        {
            title: "ลำดับ",
            dataIndex: "ID",
            key: "id",
        },
        {
            title: "รูป",
            dataIndex: "ImageUrl",
            key: "password",
            render: (text, record, index) => (
                <img src={record.ImageUrl} className="w3-left w3-circle w3-margin-right" width="50%" />
              )
        },
        {
            title: "ชื่อหนัง",
            dataIndex: "MovieName",
            key: "username",
        },
        {
            title: "เวลาหนัง",
            dataIndex: "Duration",
            key: "email",
        },
        {
            title: "รายละเอียด",
            dataIndex: "Description",
            key: "description",
        },
        {
            title: "ผู้กำกับ",
            dataIndex: "Director",
            key: "director",
        },
        {
            title: "นักแสดง",
            dataIndex: "Cast",
            key: "cast",
        },
        {
            title: "หมวดหมู่",
            dataIndex: "Categories",
            key: "categories",
            render: (item) => Object.values(item.CateName),
        },
        {
            title: "วีดีโอ",
            dataIndex: "VideoUrl",
            key: "videourl",
        },
        {
            title: "จัดการ",
            dataIndex: "Manage",
            key: "manage",
            render: (text, record, index) => (
                <div>
                <Button shape="circle" onClick={() =>  navigate(`/movie/edit/${record.ID}`)} icon={<EditOutlined />}
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
    const [movie, setMovie] = useState<MovieInterface[]>([]);
    const [messageApi, contextHolder] = message.useMessage();

    const showModal = (val: MovieInterface) => {
        setModalText(
          "คุณต้องการลบข้อมูลผู้ใช้หรือไม่?"
        );
        setDeleteId(val.ID);
        setOpen(true);
      };
      const handleOk = async () => {
        setConfirmLoading(true);
        let res = await DeleteMovieByID(deleteId);
        if (res) {
          setOpen(false);
          messageApi.open({
            type: "success",
            content: "ลบข้อมูลสำเร็จ",
          });
          getMovie();
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
      const getMovie = async () => {
        let res = await ListMovie();
        if (res) {
          setMovie(res);
        }
      };

    useEffect(() => {
        getMovie();
    }, []);

    return(
        <Table rowKey={"Id"} columns={columns} dataSource={movie}/>
    );
}