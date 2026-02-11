import { StaffListType } from "@/app/(protected)/staff/staff-list/types/staff.List.Type";

export const getDataStaffList = async () => {
    try {

        const generateMockData = (count: number): StaffListType[] => {
            return Array.from({ length: count }, (_, index) => {
                const id = index + 1;

                return {
                    staff_username: `user${id}`,
                    staff_id: id,
                    em_code: `EM${String(id).padStart(7, "0")}`,
                    staff_shop: "HQP สำนักงานใหญ่ (บริษัท)",
                    staff_status: id % 2 === 0 ? "Y" : "N",
                    staff_national: `${1000000000000 + id}`,
                    staff_name: `พนักงาน ${id}`,
                    staff_nickname: `Nick${id}`,
                    staff_start_date: "01/01/2020",
                    staff_end_date: null,
                    staff_type_work: "ฟรีแลนซ์",
                    staff_department: `แผนก ${((id % 5) + 1)}`,
                    staff_bank_name: "กรุงเทพ จำกัด (มหาชน)",
                    staff_bank_number: `${1000000000 + id}`,
                    staff_lock_status: id % 3 === 0 ? "Y" : "N",
                    user_person: "ADMIN SYSTEM",
                };
            });
        };

        const data = generateMockData(150);

        const resport = {
            status: true,
            message: "success",
            data: data,
            total: data.length
        }

        return resport

} catch (error) {
    console.log("error", error)
    return error
}
}