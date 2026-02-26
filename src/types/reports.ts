// src/types/reports.ts

type ReportType = 'sales' | 'inventory' | 'finance';

type ReportData = {
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    data: any[];
};

enum ExportFormat {
    PDF = 'pdf',
    CSV = 'csv',
    XLSX = 'xlsx'
}

export type { ReportType, ReportData, ExportFormat };