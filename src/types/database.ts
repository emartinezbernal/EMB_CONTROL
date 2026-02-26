// src/types/database.ts

// Business Interface
export interface Business {
    id: number;
    name: string;
    address: string;
    contactNumber: string;
}

// User Interface
export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: string;
}

// Product Interface
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

// Inventory Interface
export interface Inventory {
    id: number;
    productId: number;
    quantity: number;
    location: string;
}

// Sale Interface
export interface Sale {
    id: number;
    productId: number;
    userId: number;
    date: string;
    totalAmount: number;
}

// Purchase Interface
export interface Purchase {
    id: number;
    productId: number;
    sellerId: number;
    date: string;
    quantity: number;
    totalCost: number;
}

// Service Interface
export interface Service {
    id: number;
    name: string;
    description: string;
    price: number;
}

// Seller Interface
export interface Seller {
    id: number;
    name: string;
    contactNumber: string;
    email: string;
}