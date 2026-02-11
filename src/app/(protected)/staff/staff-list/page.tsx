"use client"

import { StaffListType } from "@/app/(protected)/staff/staff-list/types/staff.List.Type";
import { RedoOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Card, Col, Empty, Form, Input, Modal, Row, Table, Typography } from "antd"
import { StaffListColumns } from "./columns/staff.List.Columns";
import { useState } from "react";

export default function StaffListPage() {

    const [form] = Form.useForm();

    const generateMockData = (count: number): StaffListType[] => {
        return Array.from({ length: count }, (_, index) => {
            const id = index + 1;

            return {
                staff_username: `user${id}`,
                staff_id: id,
                em_code: `EM${String(id).padStart(7, "0")}`,
                staff_shop: "HQP สำนักงานใหญ่ (บริษัท)",
                staff_status: id % 2 === 0 ? "Y" : "N",
                staff_national: `${1000000000000 + id}`,
                staff_name: `พนักงาน ${id}`,
                staff_nickname: `Nick${id}`,
                staff_start_date: "01/01/2020",
                staff_end_date: null,
                staff_type_work: "ฟรีแลนซ์",
                staff_department: `แผนก ${((id % 5) + 1)}`,
                staff_bank_name: "กรุงเทพ จำกัด (มหาชน)",
                staff_bank_number: `${1000000000 + id}`,
                staff_lock_status: id % 3 === 0 ? "Y" : "N",
                user_person: "ADMIN SYSTEM",
            };
        });
    };

    const [data, setData] = useState<StaffListType[]>(() =>
        generateMockData(150)
    );


    const [openModelsDelect, setOpenModelsDelect] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleOpenStaffDetail = (staff_id: number) => {
        console.log("Open staff_id:", staff_id);
    };

    const handleOpenModelsDelectStaff = (staff_id: number) => {
        setSelectedId(staff_id);
        setOpenModelsDelect(true);
    };


    const handleDeleteConfirm = () => {
        if (selectedId === null) return;

        setData(prev => prev.filter(item => item.staff_id !== selectedId));
        setOpenModelsDelect(false);
        setSelectedId(null);
    };


    return (
        <>
            <Form form={form} layout="vertical">
                <Card variant="borderless" style={{ marginBottom: 16 }}>
                    <Typography.Title level={3} style={{ marginBottom: 16 }}>
                        ค้นหาพนักงาน
                    </Typography.Title>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={2}>
                            <Form.Item name="staff_id">
                                <Input placeholder="กรอกรหัสพนักงาน" allowClear />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={2}>
                            <Form.Item name="name">
                                <Input placeholder="กรอกชื่อพนักงาน" allowClear />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={2}>
                            <Form.Item name="em_code">
                                <Input placeholder="กรอก EM Code" allowClear />
                            </Form.Item>
                        </Col>
                        <Col xs={2} sm={2} md={2}>
                            <Row gutter={[16, 16]}>
                                <Col span={12}>
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            style={{ width: "100%" }}
                                            icon={<SearchOutlined />}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item>
                                        <Button
                                            style={{ width: "100%" }}
                                            icon={<RedoOutlined />}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={24}>
                            <Table<StaffListType>
                                columns={StaffListColumns(handleOpenStaffDetail, handleOpenModelsDelectStaff)}
                                dataSource={data}
                                size="small"
                                rowKey={record => record.staff_id}
                                scroll={{ y: 'calc(100vh - 400px)', x: 'max-content' }}
                                style={{ whiteSpace: 'nowrap' }}
                                pagination={{
                                    defaultPageSize: 50,
                                    showSizeChanger: false,
                                }}
                                locale={{
                                    emptyText: <Empty description="ไม่พบรายการ" />
                                }}
                            />
                        </Col>
                    </Row>
                </Card>
            </Form>
            <Modal
                title="ต้องการลบข้อมูลพนักงานใช่หรือไม่ ?"
                centered
                open={openModelsDelect}
                onOk={handleDeleteConfirm}
                onCancel={() => setOpenModelsDelect(false)}
                width={{
                    xs: '90%',
                    sm: '80%',
                    md: '70%',
                    lg: '60%',
                    xl: '50%',
                    xxl: '20%',
                }}
            >
                <Typography>
                    ต้องการลบข้อมูลพนักงาน : {data.find(item => item.staff_id === selectedId)?.staff_name}
                </Typography>
            </Modal>
        </>
    )
}
