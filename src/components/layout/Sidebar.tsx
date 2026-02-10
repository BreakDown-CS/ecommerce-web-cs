import { Menu } from "antd"
import {
    DashboardOutlined,
    ShoppingOutlined,
} from "@ant-design/icons"
import { useRouter } from "next/navigation"

export default function AppSidebar() {
    const router = useRouter()

    return (
        <Menu
            theme="dark"
            mode="inline"
            onClick={({ key }) => router.push(key)}
            items={[
                {
                    key: "/dashboard",
                    icon: <DashboardOutlined />,
                    label: "Dashboard",
                },
                {
                    key: "/products",
                    icon: <ShoppingOutlined />,
                    label: "สินค้า",
                },
            ]}
        />
    )
}
