import { type ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Payment = {
    id: string;
    amount: number;
    username: string;
    email: string;
    status: "pending" | "processing" | "success" | "failed";
};

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "username",
        header: "User",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
]