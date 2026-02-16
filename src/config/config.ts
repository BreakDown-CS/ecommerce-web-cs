const config = {
    // ลองใส่ Default เป็น 4090 ไว้เลย ถ้ามันยังไป 9090 แสดงว่าโค้ดจุดนี้ไม่ได้ถูกเรียกใช้
    apiEcommerce: process.env.NEXT_PUBLIC_API_ECOMMERCE || "http://127.0.0.1:4090",
}

export default config