"use client"

import { SearchStaffList, StaffListType } from "@/app/(protected)/staff/staff-list/types/staff.List.Type";
import { RedoOutlined, SearchOutlined, UserAddOutlined } from "@ant-design/icons";
import { Button, Card, Col, Empty, Form, Input, Modal, Row, Select, Table, Typography } from "antd"
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

    const [dataSearchStaffList, setDataSearchStaffList] = useState<SearchStaffList>({});

    const fetchDataStaffList = async () => {
        try {
            const resultStaffList = await getDataStaffList(dataSearchStaffList);

            console.log("SS : ", resultStaffList);

        } catch (error) {
            console.error("Fetch Error:", error);
        } finally {
            console.log("FINI");
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

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        console.log("name : ", name, "value : ", value);
        setDataSearchStaffList(prev => ({ ...prev, [name]: value }))
        ;
    }

    return (
        <>
            <Form form={form} layout="vertical">
                <Card variant="borderless" style={{ marginBottom: 16 }}>
                    <Typography.Title level={3} style={{ marginBottom: 16 }}>
                        ค้นหาพนักงาน
                    </Typography.Title>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={2}>
                            <Form.Item>
                                <Input
                                    name="staff_id"
                                    placeholder="กรอกรหัสพนักงาน"
                                    onChange={handleChangeInput}
                                    allowClear
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={2}>
                            <Form.Item>
                                <Input 
                                    name="em_code"
                                    placeholder="กรอก EM Code"
                                    onChange={handleChangeInput}
                                    allowClear 
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={3}>
                            <Form.Item name="shop_code" style={{ margin: 0, padding: 0 }}>
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    placeholder="สาขาหลัก"
                                // onChange={handleSearchSelectShop}
                                >
                                    {/* {dataSelectShop.map((item) => (
                                        <Select.Option key={item.Id} value={item.Id}>
                                            {item.Name}
                                        </Select.Option>
                                    ))} */}
                                    <Select.Option value="0">ทั้งหมด</Select.Option>
                                    <Select.Option value="1">SHOP-1</Select.Option>
                                    <Select.Option value="2">SHOP-2</Select.Option>
                                    <Select.Option value="3">SHOP-3</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={2}>
                            <Form.Item name="staff_name">
                                <Input placeholder="กรอกชื่อพนักงาน" allowClear />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={2}>
                            <Form.Item name="staff_status" style={{ margin: 0, padding: 0 }}>
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    placeholder="สถานะ"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.children as unknown as string)
                                            .toLowerCase()
                                            .includes(input.toLowerCase())
                                    }
                                // onChange={handleSearchSelectShop}
                                >
                                    {/* {dataSelectShop.map((item) => (
                                        <Select.Option key={item.Id} value={item.Id}>
                                            {item.Name}
                                        </Select.Option>
                                    ))} */}
                                    <Select.Option value="ALL">ทั้งหมด</Select.Option>
                                    <Select.Option value="Y">เปิดใช้งาน</Select.Option>
                                    <Select.Option value="N">ปิดใช้งาน</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={2}>
                            <Form.Item name="staff_type" style={{ margin: 0, padding: 0 }}>
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    placeholder="ประเภทพนักงาน"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.children as unknown as string)
                                            .toLowerCase()
                                            .includes(input.toLowerCase())
                                    }
                                // onChange={handleSearchSelectShop}
                                >
                                    {/* {dataSelectShop.map((item) => (
                                        <Select.Option key={item.Id} value={item.Id}>
                                            {item.Name}
                                        </Select.Option>
                                    ))} */}
                                    <Select.Option value="ALL">ทั้งหมด</Select.Option>
                                    <Select.Option value="regular">งานประจำ</Select.Option>
                                    <Select.Option value="freelance">ฟรีแลช์</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={3}>
                            <Form.Item name="staff_department" style={{ margin: 0, padding: 0 }}>
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    placeholder="แผนก"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.children as unknown as string)
                                            .toLowerCase()
                                            .includes(input.toLowerCase())
                                    }
                                // onChange={handleSearchSelectShop}
                                >
                                    {/* {dataSelectShop.map((item) => (
                                        <Select.Option key={item.Id} value={item.Id}>
                                            {item.Name}
                                        </Select.Option>
                                    ))} */}
                                    <Select.Option value="ALL">ทั้งหมด</Select.Option>
                                    <Select.Option value="sale">แผนกบัญชี</Select.Option>
                                    <Select.Option value="Mechanic">แผนกช่าง</Select.Option>
                                    <Select.Option value="Finance">แผนกการเงิน</Select.Option>
                                    <Select.Option value="menager">แผนกบริหาร</Select.Option>
                                    <Select.Option value="HR">แผนกทรัพยากรบุคคล</Select.Option>
                                    <Select.Option value="Warehouse">แผนกคลังซ่อม</Select.Option>
                                    <Select.Option value="IT">แผนก IT </Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={2} sm={2} md={2}>
                            <Row gutter={[16, 16]}>
                                <Col span={12}>
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            style={{ width: "100%", backgroundColor: "#1677FF" }}
                                            icon={<SearchOutlined />}
                                            onClick={fetchDataStaffList}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item>
                                        <Button
                                            style={{ width: "100%", backgroundColor: "#8C8C8C" }}
                                            icon={<RedoOutlined />}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={14} sm={14} md={2}></Col>
                        <Col xs={2} sm={2} md={2}>
                            <Button
                                type="primary"
                                style={{ width: "100%", backgroundColor: "#1677FF" }}

                                onClick={() => handleOpenStaffDetail(0)}
                                icon={<UserAddOutlined />}
                            >เพิ่มพนักงาน</Button>
                        </Col>
                        <Col xs={2} sm={2} md={2}>
                            <Button
                                type="primary"
                                style={{ width: "100%", backgroundColor: "#722ED1" }}
                                icon={<UserAddOutlined />}
                            >Export</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={24}>
                            <Table<StaffListType>
                                columns={StaffListColumns(handleOpenModelsDelectStaff)}
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
                                onRow={(record) => ({
                                    onClick: () => handleOpenStaffDetail(record.staff_id),
                                })}
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
            />
        </>
    )
}
