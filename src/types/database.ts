// Product Type Definition
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl?: string;  // URL for the product image
    thumbnailUrl?: string;  // URL for the product thumbnail
    // Add any other relevant properties here
}