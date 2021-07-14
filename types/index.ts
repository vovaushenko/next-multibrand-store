/**
 * Cloudinary image interface
 *@interface
 *@param {public_id} public_id - image url
 */
export interface Image {
  _id?: string;
  public_id: string;
  url: string;
}

export type Department = 'men' | 'women' | 'kid';

/**
 * Product API response interface
 *@interface
 *@param {images} images - cloudinary IMG object, use public_id in frontend
 */
export interface Product {
  _id: string;
  brand: string;
  colors: string[];
  department: Department;
  description: string;
  images: Image[];
  model: string;
  price: number;
  size: string[];
  styleCode: string;
}
/**
 * Product Object that will be stored in DB
 *@interface
 */
export interface UploadProduct {
  brand: string;
  colors: string[];
  department: string;
  description: string;
  images: string[];
  model: string;
  price: string;
  size: string[];
  styleCode: string;
}

/**
 * Generic Router Link interface
 *@interface RouterLink
 *@param {genericType} text - router link content string or ReactNode
 *@param {string} href - href of router link
 */
export interface RouterLinkType<T> {
  text: T;
  href: string;
}

/**
 * Generic Redux Interface for async actions
 *@interface ReduxAsync
 *@param {boolean} isLoading - loading status of async operation
 *@param {string | null} error - error status of async operation
 */
export interface ReduxAsync {
  isLoading: boolean;
  error: string | null;
}

/**
 * All available sneak brands
 *@type SneakerBrand
 */
export type SneakerBrand =
  | 'Adidas'
  | 'Air Jordan'
  | 'Nike'
  | 'Puma'
  | 'Asics'
  | 'Converse'
  | 'Yeezy'
  | 'Vans'
  | 'Reebok'
  | 'Supreme'
  | 'Native'
  | 'Diadora'
  | 'Timberland'
  | 'New Balance';

export interface NavDropdownItem {
  section: string;
  men: SneakerBrand[];
  women: SneakerBrand[];
  kid: SneakerBrand[];
}
