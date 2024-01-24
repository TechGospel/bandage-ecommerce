export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }
  
  export interface IAllProducts {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
  }
  
  export interface IProductState {
    all: {
      isLoading: boolean;
      data: IAllProducts | null;
      isError: boolean;
      errorMessage: string;
    };
    single: {
      isLoading: boolean;
      data: IProduct | null;
      isError: boolean;
      errorMessage: string;
    };
    cart: { product: IProduct; quantity: number }[];
    wishlist: IProduct[];
  }
  
  export type ModalType = "cart" | "wishlist";
  
  export interface IModalState {
    open: boolean;
    type: ModalType;
  }