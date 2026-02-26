// src/types/inventory.ts

export interface InventoryMovement {
    id: number;
    itemId: number;
    quantity: number;
    movementType: 'IN' | 'OUT'; // whether the stock is coming in or going out
    timestamp: Date;
}

export interface StockLevel {
    itemId: number;
    currentLevel: number;
    thresholdLevel: number;
    lastUpdated: Date;
}

export interface Adjustment {
    id: number;
    itemId: number;
    adjustmentAmount: number;
    reason: string;
    timestamp: Date;
}