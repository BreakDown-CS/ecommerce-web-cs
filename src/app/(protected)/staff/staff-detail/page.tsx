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
} from "antd";
import {
    DownOutlined,
    CalendarOutlined,
    SaveOutlined
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { DataHistoryStaffDetail, ResponseDataStaffDetail, StaffFormValues } from "../staff-list/types/staff.List.Type";
import { HistoryStaffDetailTable } from "../staff-list/columns/staff.List.Columns";
import { useEffect } from "react";
import { getDataStaffDetail } from "@/services/staff.service";

type Props = {
    open: boolean;
    onClose: () => void;
    staff_id: number | null;
};

export default function StaffDetailDrawer({
    open,
    onClose,
    staff_id
}: Props) {
    const [form] = Form.useForm<StaffFormValues>()

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

const handleSaveStaffDetail = () => {
    try {
        console.log("LSQ : ");
    } catch (error) {
        console.log("error", error)
        return error
    } finally {
        console.log("FINI")
    }
}

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
                                icon={<SaveOutlined />}
                                onClick={onClose}
                            >ยกเลิกรายการ</Button>
                        </Col>
                        <Col>
                            <Button
                                type="primary"
                                icon={<SaveOutlined />}
                                onClick={handleSaveStaffDetail}
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
        <Form layout='vertical' form={form} id='myForm'>
            <Row>
                <Typography.Title level={3} style={{ marginBottom: 16 }}>
                    {staff_id != 0 ? "แก้ไขข้อมูลพนักงาน" : "เพิ่มข้อมูลพนักงาน"}
                </Typography.Title>
            </Row>
            <Row gutter={16}>
                <Col xs={24} sm={12} md={8}>
                    <Form.Item style={{ marginBottom: 7 }} name="username">
                        <Input
                            suffix={
                                <span style={{ color: '#d9d9d9' }}>ชื่อผู้ใช้งาน</span>
                            }
                            readOnly
                            style={{ backgroundColor: '#f0f0f0' }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Form.Item style={{ marginBottom: 7 }} name="barcode">
                        <Input
                            suffix={
                                <span style={{ color: '#d9d9d9' }}>รหัสบาร์โค้ด</span>
                            }
                            readOnly
                            style={{ backgroundColor: '#f0f0f0' }}
                            allowClear
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Form.Item style={{ marginBottom: 7 }} name="staff_status">
                        <Select
                            suffixIcon={
                                <span style={{ color: '#d9d9d9' }}>
                                    {' '}
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
                    <Form.Item style={{ marginBottom: 7 }} name="staff_shop">
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
                    <Form.Item style={{ marginBottom: 7 }} name="password">
                        <Input
                            suffix={
                                <span style={{ color: '#d9d9d9' }}>รหัสผ่าน</span>
                            }
                            readOnly
                            style={{ backgroundColor: '#f0f0f0' }}
                            allowClear
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Form.Item style={{ marginBottom: 7 }} name="password-c">
                        <Input
                            suffix={
                                <span style={{ color: '#d9d9d9' }}>ยืนยันรหัสผ่าน</span>
                            }
                            readOnly
                            style={{ backgroundColor: '#f0f0f0' }}
                            allowClear
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24} sm={12} md={8}>
                    <Form.Item
                        style={{ marginBottom: 7 }}
                        rules={[{ required: true, message: 'กรุณาระบุวันที่เริ่มงาน' }]}
                        name='start_date'
                    >
                        <DatePicker
                            placeholder=''
                            suffixIcon={
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: '#d9d9d9', marginRight: 4 }}>
                                        วันที่เริ่มงาน
                                    </span>
                                    <CalendarOutlined />
                                </div>
                            }
                            format='DD/MM/YYYY'
                            style={{ width: '100%' }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Form.Item
                        style={{ marginBottom: 7 }}
                        rules={[{ required: true, message: 'กรุณาระบุวันที่ลาออก' }]}
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
                            format='DD/MM/YYYY'
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
                            readOnly
                            style={{ backgroundColor: '#f0f0f0' }}
                            allowClear
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24} sm={12} md={8}>
                    <Form.Item style={{ marginBottom: 7 }} name="id-card">
                        <Input
                            suffix={
                                <span style={{ color: '#d9d9d9' }}>บัตรประชาชน</span>
                            }
                            readOnly
                            maxLength={13}
                            style={{ backgroundColor: '#f0f0f0' }}
                            allowClear
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Form.Item style={{ marginBottom: 7 }} name="staff_status">
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
                    <Form.Item style={{ marginBottom: 7 }} name="staff_department">
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
                            allowClear
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Form.Item style={{ marginBottom: 7 }} name="staff_mail">
                        <Input
                            suffix={
                                <span style={{ color: '#d9d9d9' }}>อีเมล</span>
                            }
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
                            allowClear
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24} sm={12} md={8}>
                    <Form.Item style={{ marginBottom: 7 }} name="staff_time_work">
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
                            format='DD/MM/YYYY'
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
                                    pattern: /^\d{1,2}$/,
                                    message: 'กรุณากรอกจำนวนบุตร 1-2 หลักเท่านั้น',
                                },
                            ]}
                        >
                            <InputNumber
                                controls={false}
                                style={{ width: '100%' }}
                                addonAfter={
                                    <span
                                        style={{
                                            whiteSpace: 'nowrap',
                                            color: '#bfbfbf',
                                            fontSize: 14,
                                        }}
                                    >
                                        จำนวนบุตร
                                    </span>
                                }
                            />
                        </Form.Item>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Form.Item style={{ marginBottom: 7 }} name="staff_bank_ud">
                        <Input
                            suffix={
                                <span style={{ color: '#d9d9d9' }}>เลขที่บัญชี</span>
                            }
                            readOnly
                            style={{ backgroundColor: '#f0f0f0' }}
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
                            <Select.Option value="1">กรุงเทพจำกัด (มหาชน)</Select.Option>
                            <Select.Option value="1">ชนบุรีจำกัด (มหาชน)</Select.Option>
                            <Select.Option value="1">สมุทรปราการจำกัด (มหาชน)</Select.Option>
                            <Select.Option value="1">สระบุรีจำกัด (มหาชน)</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Form.Item style={{ marginBottom: 7 }} name="staff_address">
                        <Input
                            suffix={
                                <span style={{ color: '#d9d9d9' }}>เลขที่/อาคาร/หมู่บ้าน</span>
                            }
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
