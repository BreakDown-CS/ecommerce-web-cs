"use client"

import { ResponseStaffListType, StaffListType } from "@/app/(protected)/staff/staff-list/types/staff.List.Type";
import { RedoOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Card, Col, Empty, Form, Input, Modal, Row, Table, Typography } from "antd"
import { StaffListColumns } from "./columns/staff.List.Columns";
import { useState } from "react";
import { getDataStaffList } from "@/services/staff.service";
import StaffDetailDrawer from "../staff-detail/page";

export default function StaffListPage() {

    const [form] = Form.useForm();
    const [openModelsDelect, setOpenModelsDelect] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [dataStaffList, setDataStaffList] = useState<StaffListType[]>([]);

    const [openDrawerStaffDetail, setOpenDreawerStaffDetail] = useState(false);
    const [selectedStaffId, setSelectedStaffId] = useState<number | null>(null);

    const fetchDataStaffList = async () => {
        try {
            const [dataSelectRepairStock] = await Promise.all([getDataStaffList() as Promise<ResponseStaffListType>])

            switch (dataSelectRepairStock.status) {
                case true:
                    if (dataSelectRepairStock.data.length === 0) {
                        console.log("ไม่พบข้อมูล")
                        setDataStaffList(dataSelectRepairStock.data)
                        return dataSelectRepairStock.data
                    }
                case false:
                    setDataStaffList(dataSelectRepairStock.data)
                    return dataSelectRepairStock.data
            }
        } catch (error) {
            console.log("error", error)
            return error
        } finally {
            console.log("FINI")
        }
    }


    const handleOpenStaffDetail = (staff_id: number) => {
        setSelectedStaffId(staff_id);
        setOpenDreawerStaffDetail(true);
    };

    const handleClose = () => {
        setOpenDreawerStaffDetail(false);
        setSelectedStaffId(null);
    };

    const handleOpenModelsDelectStaff = (staff_id: number) => {
        setSelectedId(staff_id);
        setOpenModelsDelect(true);
    };


    const handleDeleteConfirm = () => {
        if (selectedId === null) return;

        setDataStaffList(prev => prev.filter(item => item.staff_id !== selectedId));
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
                                            onClick={fetchDataStaffList}
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
                                dataSource={dataStaffList}
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
                    ต้องการลบข้อมูลพนักงาน : {dataStaffList.find(item => item.staff_id === selectedId)?.staff_name}
                </Typography>
            </Modal>
            <StaffDetailDrawer
                open={openDrawerStaffDetail}
                onClose={handleClose}
                staff_id={selectedStaffId}
                onRefresh={fetchDataStaffList}
            />
        </>
    )
}
