"use client";

import {
    Drawer,
    Row,
    Col,
    Button,
    Form
} from "antd";
import {
    SearchOutlined,
    RedoOutlined
} from "@ant-design/icons";

type Props = {
    open: boolean;
    onClose: () => void;
    staff_id: number | null;
    onRefresh?: () => void;
};

export default function StaffDetailDrawer({
    open,
    onClose,
    staff_id,
    onRefresh
}: Props) {

    return (
        <Drawer
            title={
                <Row justify="space-between" align="middle">
                    <Col>
                        รายละเอียดพนักงาน
                    </Col>
                    <Col>
                        <Row gutter={8}>
                            <Col>
                                <Button
                                    type="primary"
                                    icon={<SearchOutlined />}
                                    onClick={onRefresh}
                                />
                            </Col>
                            <Col>
                                <Button
                                    icon={<RedoOutlined />}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            }
            open={open}
            onClose={onClose}
            width={900}
        >
            <p>Staff ID: {staff_id}</p>
        </Drawer>
    );
}
