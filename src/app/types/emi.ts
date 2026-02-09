export type EmiStatus = "COMPLETED" | "PENDING" | "UPCOMING" ;

export type EmiRemark = "ACTIVE" | "CLOSED" | "DEACTIVATED_DEVICE" | "LOCKED_DEVICE" ;

export interface Emi {
    id: number;
    amount: number;
    date: string;
    installmentId: number;
    status: EmiStatus;
    remark: EmiRemark;
}