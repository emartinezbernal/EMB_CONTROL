// src/types/services.ts

export interface Service {
    id: string;
    name: string;
    description: string;
    status: ServiceStatus;
}

export interface ServiceOrder {
    orderId: string;
    serviceId: string;
    customerId: string;
    orderDate: string;
    status: ServiceStatus;
}

export enum ServiceStatus {
    PENDING = 'pending',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    CANCELED = 'canceled'
}