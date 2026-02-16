import { Button, Space, TableColumnsType, Tag } from "antd";
import { DataHistoryStaffDetail, StaffListType } from "../types/staff.List.Type";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export const StaffListColumns = (openModelsDelectStaff: (id: number) => void): TableColumnsType<StaffListType> => [
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    ชื่อผู้ใช้งาน
                </Space>
            )
        },
        dataIndex: 'staff_username',
        key: 'staff_username',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    รหัสพนักงาน
                </Space>
            )
        },
        dataIndex: 'staff_id',
        key: 'staff_id',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    EM-CODE
                </Space>
            )
        },
        dataIndex: 'em_code',
        key: 'em_code',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    สาขา
                </Space>
            )
        },
        dataIndex: 'staff_shop',
        key: 'staff_shop',
        width: 250,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    สถานะ
                </Space>
            )
        },
        dataIndex: "staff_status",
        key: "staff_status",
        width: 200,
        align: "center",
        render: (value: "Y" | "N") => (
            <Tag color={value === "Y" ? "green" : "red"}>
                {value === "Y" ? "เปิดใช้งาน" : "ปิดใช้งาน"}
            </Tag>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    เลขบัตรประชาชน
                </Space>
            )
        },
        dataIndex: 'staff_national',
        key: 'staff_national',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    ชื่อพนักงาน
                </Space>
            )
        },
        dataIndex: 'staff_name',
        key: 'staff_name',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    ชื่อเล่น
                </Space>
            )
        },
        dataIndex: 'staff_nickname',
        key: 'staff_nickname',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    วันที่เริ่มงาน
                </Space>
            )
        },
        dataIndex: 'staff_start_date',
        key: 'staff_start_date',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    วันที่ลาออก
                </Space>
            )
        },
        dataIndex: 'staff_end_date',
        key: 'staff_end_date',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    ประเภทงาน
                </Space>
            )
        },
        dataIndex: 'staff_type_work',
        key: 'staff_type_work',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    แผนก
                </Space>
            )
        },
        dataIndex: 'staff_department',
        key: 'staff_department',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    ชื่อธนาคาร
                </Space>
            )
        },
        dataIndex: 'staff_bank_name',
        key: 'staff_bank_name',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    เลขที่บัญชี
                </Space>
            )
        },
        dataIndex: 'staff_bank_number',
        key: 'staff_bank_number',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    ล็อกหลังเลิกงาน
                </Space>
            )
        },
        dataIndex: "staff_lock_status",
        key: "staff_lock_status",
        width: 200,
        align: "center",
        render: (value: "Y" | "N") => (
            <Tag color={value === "Y" ? "red" : "green"}>
                {value === "Y" ? "ล็อก" : "ไม่ล็อก"}
            </Tag>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    ผู้ทำรายการ
                </Space>
            )
        },
        dataIndex: 'user_person',
        key: 'user_person',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    Action
                </Space>
            )
        },
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

export const HistoryStaffDetailTable: TableColumnsType<DataHistoryStaffDetail> = [
    {
        title: () => {
            return (
                <Space style={{ color: '#1F1F1F' }}>
                    ชื่อธนาคาร
                </Space>
            )
        },
        dataIndex: 'staff_bank_name',
        key: 'staff_bank_name',
        width: 200,
        align: 'center',
        render: (text: string) => (
            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ),
    },
]