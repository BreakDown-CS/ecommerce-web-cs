import { Button, Space, TableColumnsType, Tag } from "antd";
import { StaffListType } from "../types/staff.List.Type";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export const StaffListColumns = (openStaffDetail: (id: number) => void, openModelsDelectStaff: (id: number) => void): TableColumnsType<StaffListType> => [
    {
        title: 'ชื่อผู้ใช้งาน',
        dataIndex: 'staff_username',
        key: 'staff_username',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: 'รหัสพนักงาน',
        dataIndex: 'staff_id',
        key: 'staff_id',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: 'EM-CODE',
        dataIndex: 'em_code',
        key: 'em_code',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: 'สาขา',
        dataIndex: 'staff_shop',
        key: 'staff_shop',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: "สถานะ",
        dataIndex: "staff_status",
        key: "staff_status",
        align: "center",
        render: (value: "Y" | "N") => (
            <Tag color={value === "Y" ? "green" : "red"}>
                {value === "Y" ? "เปิดใช้งาน" : "ปิดใช้งาน"}
            </Tag>
        ),
    },
    {
        title: 'เลขบัตรประชาชน',
        dataIndex: 'staff_national',
        key: 'staff_national',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: 'ชื่อพนักงาน',
        dataIndex: 'staff_name',
        key: 'staff_name',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: 'ชื่อเล่น',
        dataIndex: 'staff_nickname',
        key: 'staff_nickname',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: 'วันที่เริ่มงาน',
        dataIndex: 'staff_start_date',
        key: 'staff_start_date',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: 'วันที่ลาออก',
        dataIndex: 'staff_end_date',
        key: 'staff_end_date',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: 'ประเภทงาน',
        dataIndex: 'staff_type_work',
        key: 'staff_type_work',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: 'แผนก',
        dataIndex: 'staff_department',
        key: 'staff_department',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: 'ชื่อธนาคาร',
        dataIndex: 'staff_bank_name',
        key: 'staff_bank_name',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: 'เลขที่บัญชี',
        dataIndex: 'staff_bank_number',
        key: 'staff_bank_number',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: "ล็อกหลังเลิกงาน",
        dataIndex: "staff_lock_status",
        key: "staff_lock_status",
        align: "center",
        render: (value: "Y" | "N") => (
            <Tag color={value === "Y" ? "red" : "green"}>
                {value === "Y" ? "ล็อก" : "ไม่ล็อก"}
            </Tag>
        ),
    },
    {
        title: 'ผู้ทำรายการ',
        dataIndex: 'user_person',
        key: 'user_person',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        width: 200,
        align: 'center',
        render: (_, record) => (
            <Space size="large" style={{ width: "100%", justifyContent: "center" }}>
                {/* {record.name} */}
                <Button
                    type="primary"
                    style={{ width: 30 }}
                    icon={<EditOutlined />}
                    onClick={() => openStaffDetail(record.staff_id)}
                />
                <Button
                    type="primary"
                    danger
                    style={{ width: 30 }}
                    icon={<DeleteOutlined />}
                    onClick={() => openModelsDelectStaff(record.staff_id)}
                />
            </Space>
        ),
    },
];
