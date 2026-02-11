export interface ResponseStaffListType {
    status: boolean,
    message: string,
    data: StaffListType[],
    total: number
}

export interface StaffListType {
    staff_username: string;
    staff_id: number;
    em_code: string;
    staff_shop: string;
    staff_status: "Y" | "N";
    staff_national: string;
    staff_name: string;
    staff_nickname: string;
    staff_start_date: string;
    staff_end_date: string | null;
    staff_type_work: string;
    staff_department: string;
    staff_bank_name: string;
    staff_bank_number: string;
    staff_lock_status: "Y" | "N";
    user_person: string;
}
