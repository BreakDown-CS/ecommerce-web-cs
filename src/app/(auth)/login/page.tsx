"use client"

import { Card, Form, Input, Button, Row, Col, Typography, Divider } from "antd"
import { useRouter } from "next/navigation"

const { Title, Text } = Typography

export default function LoginPage() {

    const router = useRouter()

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f4f6f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 16,
            }}
        >
            <Card
                style={{
                    width: 1000,
                    maxWidth: "100%",
                    borderRadius: 12,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
                bodyStyle={{ padding: 48 }}
            >
                <Row align="middle">
                    {/* LEFT */}
                    <Col
                        xs={24}
                        md={11}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingRight: 32,
                        }}
                    >
                        <Text
                            style={{
                                color: "#e11d48",
                                fontSize: 40,
                                fontWeight: 800,
                                lineHeight: 1,
                            }}
                        >
                            BD-CS
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                letterSpacing: 1,
                                marginTop: 8,
                            }}
                            type="secondary"
                        >
                            BRACKDOWN SERVICE
                        </Text>
                    </Col>
                    {/* DIVIDER */}
                    <Col xs={0} md={2} style={{ display: "flex", justifyContent: "center" }}>
                        <Divider
                            type="vertical"
                            style={{ height: 200, borderColor: "#d9d9d9" }}
                        />
                    </Col>
                    {/* RIGHT */}
                    <Col xs={24} md={11} style={{ paddingLeft: 32 }}>
                        <Title level={4} style={{ textAlign: "center", marginBottom: 24 }}>
                            BrackDown On cloud
                        </Title>
                        <Form layout="vertical">
                            <Form.Item name="username">
                                <Input
                                    placeholder="ชื่อผู้ใช้งาน"
                                    size="large"
                                />
                            </Form.Item>
                            <Form.Item name="password">
                                <Input.Password
                                    placeholder="รหัสผ่าน"
                                    size="large"
                                />
                            </Form.Item>
                            <Button
                                type="primary"
                                size="large"
                                block
                                onClick={() => router.push("/dashboard")}
                            >
                                เข้าสู่ระบบ
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
