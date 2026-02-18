import { ResponseStaffListType, SearchStaffList } from "@/app/(protected)/staff/staff-list/types/staff.List.Type"
import { warehouseAxios } from "@/config/axios"

export const createStaffDetail = async (payload: object) => {
    const response = await warehouseAxios.post('/api/staff/createStaff', payload);

    return response
}

export const updateStaffDetail = async (payload: object, staff_id: number) => {
    const response = await warehouseAxios.post('/api/staff/updateStaff', { payload, staff_id });

    return response
}


export const getDataStaffList = async (dataSearchStaffList: SearchStaffList): Promise<ResponseStaffListType> => {
    try {
        const response = await warehouseAxios.post(
            '/api/staff/getStaffList', 
            { data: dataSearchStaffList }
        );
        return response.data; // คืนค่า data ปกติ
    } catch (error) {
        console.error("API Error:", error);
        throw error; // พ่น error ออกไปให้ catch ตัวบนจัดการ
    }
}

export const getDataStaffDetail = async (staff_id: number) => {
    try {
        const resport = {
            status: true,
            message: "success",
            data: {
                staff_id: staff_id,
                em_code: `EM${String(staff_id).padStart(7, "0")}`,
                staff_shop: "HQP สำนักงานใหญ่ (บริษัท)",
                staff_status: staff_id % 2 === 0 ? "Y" : "N",
                staff_national: `${1000000000000 + staff_id}`,
                staff_name: `พนักงาน ${staff_id}`,
                staff_nickname: `Nick${staff_id}`,
                staff_start_date: "01/01/2020",
                staff_end_date: null,
                staff_type_work: "ฟรีแลนซ์",
                staff_department: `แผนก ${((staff_id % 5) + 1)}`,
                staff_bank_name: "กรุงเทพ จำกัด (มหาชน)",
                staff_bank_number: `${1000000000 + staff_id}`,
            }
        }

        return resport
    } catch (error) {
        console.log("error", error)
        return error
    } finally {
        console.log("FINI")
    }
}