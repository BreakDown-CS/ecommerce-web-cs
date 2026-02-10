"use client"

import { Layout, Menu, Button } from "antd"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  FileTextOutlined,
  SettingOutlined,
} from "@ant-design/icons"
import { useState } from "react"
import { useRouter } from "next/navigation"

const { Header, Sider, Content } = Layout
import { usePathname } from "next/navigation"

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        width={220}
        style={{
          background: "#fff",
          borderRight: "1px solid #f0f0f0",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "left",
            paddingLeft: collapsed ? 0 : 16,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {collapsed ? "DB-CS" : "BrackDownCS"}
        </div>

        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          items={[
            {
              key: "/dashboard",
              icon: <HomeOutlined />,
              label: "Dashboard",
              onClick: () => router.push("/dashboard"),
            },
            {
              key: "staff",
              icon: <FileTextOutlined />,
              label: "ทรัพยากรบุคคล",
              children: [
                {
                  key: "/staff",
                  label: "รายชื่อพนักงาน",
                  onClick: () => router.push("/staff/staff-list"),
                },
                {
                  key: "/staff/create",
                  label: "เพิ่มพนักงาน",
                  onClick: () => router.push("/staff/staff-create"),
                },
              ],
            },
          ]}
        />
      </Sider>

      {/* MAIN */}
      <Layout>
        {/* HEADER */}
        <Header
          style={{
            background: "#c62828",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#fff",
          }}
        >
          {/* TOGGLE */}
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ color: "#fff", fontSize: 18 }}
          />

          <div style={{ fontWeight: 500 }}>AD (NIPPON ADMIN)</div>
        </Header>

        {/* CONTENT */}
        <Content
          style={{
            margin: 16,
            padding: 16,
            background: "#fff",
            borderRadius: 8,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
