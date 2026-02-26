// src/types/sales.ts

// Interface for a Sale
export interface Sale {
    id: number;
    customerId: number;
    saleDate: string;
    items: SaleItem[];
    payment: Payment;
    receipt: Receipt;
}

// Interface for a Sale Item
export interface SaleItem {
    productId: number;
    quantity: number;
    price: number;
}

// Interface for Payment
export interface Payment {
    method: string;
    amount: number;
    date: string;
}

// Interface for Receipt
export interface Receipt {
    id: number;
    saleId: number;
    totalAmount: number;
    issueDate: string;
}