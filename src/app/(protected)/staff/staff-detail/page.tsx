"use client";

import {
    Drawer,
    Row,
    Col,
    Button,
    Form,
    Input,
    Typography,
    Select,
    DatePicker,
    InputNumber,
    Empty,
    Table,
    Space,
} from "antd";
import {
    DownOutlined,
    CalendarOutlined,
    SaveOutlined
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { DataHistoryStaffDetail, DataStaffDetailValues, ResponseDataStaffDetail } from "../staff-list/types/staff.List.Type";
import { HistoryStaffDetailTable } from "../staff-list/columns/staff.List.Columns";
import { useEffect } from "react";
import { createStaffDetail, getDataStaffDetail, updateStaffDetail } from "@/services/staff.service";
import { mapToStaffPayload } from "@/helpers/staff_helper";

type Props = {
    open: boolean;
    onClose: () => void;
    staff_id: number | null;
};

export default function StaffDetailDrawer({ open, onClose, staff_id }: Props) {
    const [form] = Form.useForm<DataStaffDetailValues>()

    useEffect(() => {
        if (staff_id != 0 && staff_id != null) {
            fetchDataDetail(staff_id)
        }
    }, [staff_id])

    const fetchDataDetail = async (staff_id: number): Promise<void> => {
        try {
            const data = await getDataStaffDetail(staff_id) as ResponseDataStaffDetail;

            console.log(data)
        } catch (error) {
            console.error(error);
        } finally {
            console.log("FINI");
        }
    };

    const handleSubmit = async (values: DataStaffDetailValues) => {
        try {
            const payload = mapToStaffPayload(values);

            if (staff_id && staff_id !== 0) {
                const responseSaveStaffDetail = await updateStaffDetail(payload, staff_id);

                console.log("UPDATE SUCCESS", responseSaveStaffDetail);
            } else {
                const responseSaveStaffDetail = await createStaffDetail(payload);

                console.log("CREATE SUCCESS", responseSaveStaffDetail);
            }
        } catch (error) {
            console.error("SAVE ERROR:", error);
        }
    };


    return (
        <Drawer
            title={
                <Row justify="space-between" align="middle">
                    <Col    >
                        รายละเอียดพนักงาน
                    </Col>
                    <Col>
                        <Row gutter={8}>
                            <Col>
                                <Button
                                    type="primary"
                                    danger
                                    icon={<SaveOutlined />}
                                    onClick={onClose}
                                >ยกเลิกรายการ</Button>
                            </Col>
                            <Col>
                                <Button
                                    type="primary"
                                    icon={<SaveOutlined />}
                                    onClick={() => form.submit()}
                                >บันทึกรายการ</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            }
            open={open}
            onClose={onClose}
            size="large"
        >
            <Form
                layout="vertical"
                form={form}
                onFinish={handleSubmit}
            >
                <Row>
                    <Typography.Title level={3} style={{ marginBottom: 16 }}>
                        {staff_id != 0 ? "แก้ไขข้อมูลพนักงาน" : "เพิ่มข้อมูลพนักงาน"}
                    </Typography.Title>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            style={{ marginBottom: 7 }}
                            name="username"
                            rules={[{ required: true, message: 'กรุณาระบุชื่อผู้ใช้งาน' }]}
                        >
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>ชื่อผู้ใช้งาน</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                style={{ backgroundColor: staff_id !== 0 ? '#f0f0f0' : '#ffffff' }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="barcode">
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>รหัสบาร์โค้ด</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                style={{ backgroundColor: staff_id !== 0 ? '#f0f0f0' : '#ffffff' }}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            style={{ marginBottom: 7 }}
                            name="staff_status"
                        >
                            <Select
                                suffixIcon={
                                    <span style={{ color: '#d9d9d9' }}>
                                        สถานะ <DownOutlined />
                                    </span>
                                }
                            >
                                <Select.Option value="Y">เปิดใช้งาน</Select.Option>
                                <Select.Option value="N">ปิดใช้งาน</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            style={{ marginBottom: 7 }}
                            name="staff_shop"
                            rules={[{ required: true, message: 'กรุณาระบุสาขาหลัก' }]}
                        >
                            <Select
                                suffixIcon={
                                    <span style={{ color: '#d9d9d9' }}>
                                        {' '}
                                        สาขาหลัก <DownOutlined />
                                    </span>
                                }
                            >
                                <Select.Option value="1">SHOP-1</Select.Option>
                                <Select.Option value="2">SHOP-2</Select.Option>
                                <Select.Option value="3">SHOP-3</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            style={{ marginBottom: 7 }}
                            name="password"
                            rules={[{ required: true, message: 'กรุณาระบุรหัสผ่าน' }]}
                        >
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>รหัสผ่าน</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                style={{ backgroundColor: staff_id !== 0 ? '#f0f0f0' : '#ffffff' }}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            style={{ marginBottom: 7 }}
                            name="password-c"
                            rules={[{ required: true, message: 'กรุณาระบุยืนยันรหัสผ่าน' }]}
                        >
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>ยืนยันรหัสผ่าน</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                style={{ backgroundColor: staff_id !== 0 ? '#f0f0f0' : '#ffffff' }}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            style={{ marginBottom: 7 }}
                            name='start_date'
                            rules={[{ required: true, message: 'กรุณาระบุวันที่เริ่มงาน' }]}
                        >
                            <DatePicker
                                placeholder=''
                                suffixIcon={
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ color: '#d9d9d9', marginRight: 4 }}>
                                            วันเกิด
                                        </span>
                                        <CalendarOutlined />
                                    </div>
                                }
                                showTime
                                format="DD/MM/YYYY HH:mm"
                                style={{ width: '100%' }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            style={{ marginBottom: 7 }}
                            name='end_date'
                        >
                            <DatePicker
                                placeholder=''
                                suffixIcon={
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ color: '#d9d9d9', marginRight: 4 }}>
                                            วันที่ลาออก
                                        </span>
                                        <CalendarOutlined />
                                    </div>
                                }
                                showTime
                                format="DD/MM/YYYY HH:mm"
                                style={{ width: '100%' }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="em-code">
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>EM-CODE</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                style={{ backgroundColor: staff_id !== 0 ? '#f0f0f0' : '#ffffff' }}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            style={{ marginBottom: 7 }}
                            name="id-card"
                            rules={[{ required: true, message: 'กรุณาระบุบัตรประชาชน' }]}
                        >
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>บัตรประชาชน</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                maxLength={13}
                                style={{ backgroundColor: staff_id !== 0 ? '#f0f0f0' : '#ffffff' }}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            style={{ marginBottom: 7 }}
                            name="staff_type"
                            rules={[{ required: true, message: 'กรุณาระบุประเภทงาน' }]}
                        >
                            <Select
                                suffixIcon={
                                    <span style={{ color: '#d9d9d9' }}>
                                        {' '}
                                        ประเภทงาน <DownOutlined />
                                    </span>
                                }
                            >
                                <Select.Option value="W">งานประจำ</Select.Option>
                                <Select.Option value="F">ฟรีแลช์</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            style={{ marginBottom: 7 }}
                            name="staff_department"
                            rules={[{ required: true, message: 'กรุณาระบุแผนก' }]}
                        >
                            <Select
                                suffixIcon={
                                    <span style={{ color: '#d9d9d9' }}>
                                        {' '}
                                        แผนก <DownOutlined />
                                    </span>
                                }
                            >
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
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_name">
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>ชื่อ - นามสกุล</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_nickname">
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>ชื่อเล่น</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_group_page">
                            <Select
                                suffixIcon={
                                    <span style={{ color: '#d9d9d9' }}>
                                        {' '}
                                        กลุ่มเพจ <DownOutlined />
                                    </span>
                                }
                            >
                                <Select.Option value="WH">WH กลุ่มคลังซ่อม</Select.Option>
                                <Select.Option value="MNM">MNM กลุ่มบริหาร</Select.Option>
                                <Select.Option value="SL">SL กลุ่มขาย</Select.Option>
                                <Select.Option value="LGT">LGT กลุ่มขนส่ง</Select.Option>
                                <Select.Option value="TN">TN กลุ่มช่าง</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_phone">
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>เบอร์โทรศัพท์</span>
                                }
                                maxLength={10}
                                onKeyPress={(e) => {
                                    if (!/[0-9]/.test(e.key)) {
                                        e.preventDefault()
                                    }
                                }}
                                onPaste={(e) => {
                                    const pasted = e.clipboardData.getData('Text')
                                    if (!/^\d+$/.test(pasted)) {
                                        e.preventDefault()
                                    }
                                }}
                                readOnly={staff_id != 0 ? true : false}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            style={{ marginBottom: 7 }}
                            name="staff_mail"
                            rules={[{ required: true, message: 'กรุณาระบุอีเมล' }]}
                        >
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>อีเมล</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_line">
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>ไอดีไลน์</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            style={{ marginBottom: 7 }}
                            name="staff_time_work"
                            rules={[{ required: true, message: 'กรุณาระบุช่วงเวลา' }]}
                        >
                            <Select
                                suffixIcon={
                                    <span style={{ color: '#d9d9d9' }}>
                                        {' '}
                                        เวลาเข้างาน - ออกงาน <DownOutlined />
                                    </span>
                                }
                            >
                                <Select.Option value="TypeA">08:00 - 17:00</Select.Option>
                                <Select.Option value="TypeB">09:00 - 18:00</Select.Option>
                                <Select.Option value="TypeC">10:00 - 19:00</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_device">
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>รหัสเครื่อง</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_lock">
                            <Select
                                suffixIcon={
                                    <span style={{ color: '#d9d9d9' }}>
                                        {' '}
                                        ล็อกหลังเลิกงาน <DownOutlined />
                                    </span>
                                }
                            >
                                <Select.Option value="Y">ล็อก</Select.Option>
                                <Select.Option value="N">ไม่ล็อก</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Typography.Title level={3} style={{ marginBottom: 16, marginTop: 16 }}>
                        ข้อมูลเพิ่มเติม
                    </Typography.Title>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item
                            style={{ marginBottom: 7 }}
                            name='staff_birthday'
                        >
                            <DatePicker
                                placeholder=''
                                suffixIcon={
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ color: '#d9d9d9', marginRight: 4 }}>
                                            วันเกิด
                                        </span>
                                        <CalendarOutlined />
                                    </div>
                                }
                                format="DD/MM/YYYY HH:mm"
                                style={{ width: '100%' }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="barcode">
                            <Form.Item
                                style={{ marginBottom: 7 }}
                                name='child'
                                rules={[
                                    {
                                        message: 'กรุณากรอกจำนวนบุตร 1-2 หลักเท่านั้น',
                                    },
                                ]}
                            >
                                <Space.Compact style={{ width: "100%" }}>
                                    <InputNumber
                                        controls={false}
                                        style={{ width: "100%" }}
                                    />
                                    <span
                                        style={{
                                            whiteSpace: "nowrap",
                                            padding: "0 11px",
                                            display: "flex",
                                            alignItems: "center",
                                            border: "1px solid #d9d9d9",
                                            borderLeft: "0",
                                            background: "#fafafa"
                                        }}
                                    >
                                        จำนวนบุตร
                                    </span>
                                </Space.Compact>
                            </Form.Item>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_bank_id">
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>เลขที่บัญชี</span>
                                }
                                style={{ backgroundColor: staff_id !== 0 ? '#f0f0f0' : '#ffffff' }}
                                readOnly={staff_id != 0 ? true : false}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_bank">
                            <Select
                                suffixIcon={
                                    <span style={{ color: '#d9d9d9' }}>
                                        {' '}
                                        ชื่อธนาคาร <DownOutlined />
                                    </span>
                                }
                            >
                                <Select.Option value="Bankok_bank">กรุงเทพจำกัด (มหาชน)</Select.Option>
                                <Select.Option value="Channaburi_bank">ชนบุรีจำกัด (มหาชน)</Select.Option>
                                <Select.Option value="Samutprakarn_bank">สมุทรปราการจำกัด (มหาชน)</Select.Option>
                                <Select.Option value="Saraburi_bank">สระบุรีจำกัด (มหาชน)</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_address">
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>เลขที่/อาคาร/หมู่บ้าน</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_road">
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>ถนน/ซอย</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_district_1">
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>แขวง/ตำบล</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_district_2">
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>อำเภอ</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_province">
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>จังหวัด</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={8}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_zip">
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>รหัสไปรษณีย์</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24}>
                        <Form.Item style={{ marginBottom: 7 }} name="staff_address_detail">
                            <Input
                                suffix={
                                    <span style={{ color: '#d9d9d9' }}>รายละเอียด</span>
                                }
                                readOnly={staff_id != 0 ? true : false}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: 16, marginTop: 16 }}>
                    <Col xs={24} sm={12} md={6}>
                        <Title level={5}>ใช้งานครั้งสุดท้ายเมื่อ :</Title>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Title level={5}>16/02/2026 09:04</Title>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Title level={5}>สร้างเมื่อ : </Title>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Title level={5}>17/04/2015 10:31</Title>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: 16, marginTop: 16 }}>
                    <Col xs={24} sm={12} md={6}>
                        <Title level={5}>แก้ไขเมื่อ :</Title>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Title level={5}>16/02/2026 09:04</Title>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Title level={5}>ชื่อผู้ทำรายการ : </Title>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Title level={5}>AD ผู้ดูแลระบบ</Title>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Typography.Title level={3} style={{ marginBottom: 16, marginTop: 16 }}>
                    ประวัติการแก้ไข
                </Typography.Title>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24}>
                    <Table<DataHistoryStaffDetail>
                        columns={HistoryStaffDetailTable}
                        // dataSource={dataStaffList}
                        size="small"
                        // rowKey={record => record.staff_id}
                        scroll={{ y: 'calc(100vh - 400px)', x: 'max-content' }}
                        style={{ whiteSpace: 'nowrap' }}
                        pagination={{
                            defaultPageSize: 50,
                            showSizeChanger: false,
                        }}
                        locale={{
                            emptyText: <Empty description="ไม่พบรายการ" />
                        }}
                    // onRow={(record) => ({
                    //     onClick: () => handleOpenStaffDetail(record.staff_id),
                    // })}
                    />
                </Col>
            </Row>
        </Drawer>
    );
}
