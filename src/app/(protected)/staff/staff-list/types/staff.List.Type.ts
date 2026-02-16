import { Dayjs } from 'dayjs'

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

export interface DataSaveStaffDetail {
    staff_id: number;
}

export interface DataHistoryStaffDetail {
    data_edit: string;
    staff_edit: string;
    type_edit: string;
    before_edit: string;
    after_edit: string;
}

export interface ResponseDataStaffDetail {
    status: boolean,
    message: string,
    data: StaffFormValues,
    total: number
}

export interface StaffFormValues {
    username?: string
    barcode?: string
    staff_status?: 'Y' | 'N'
    staff_shop?: string
    password?: string
    password_c?: string
    start_date?: Dayjs | null
    end_date?: Dayjs | null
    em_code?: string
    id_card?: string
    staff_department?: string
    staff_name?: string
    staff_nickname?: string
    staff_group_page?: string
    staff_phone?: string
    staff_mail?: string
    staff_line?: string
    staff_time_work?: string
    staff_device?: string
    staff_lock?: 'Y' | 'N'
    staff_birthday?: Dayjs | null
    child?: number
    staff_bank_ud?: string
    staff_bank?: string
    staff_address?: string
    staff_road?: string
    staff_district_1?: string
    staff_district_2?: string
    staff_province?: string
    staff_zip?: string
    staff_address_detail?: string
}