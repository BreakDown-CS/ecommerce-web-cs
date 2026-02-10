import { Button } from "antd"

export default function AppHeader() {
    return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button danger>Logout</Button>
        </div>
    )
}
