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
 * All available sneaker brands
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

/**
 * All available product sizes
 *@type ProductSize
 */
export type ProductSize =
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '4.5'
  | '5'
  | '5.5'
  | '6'
  | '6.5'
  | '7'
  | '7.5'
  | '8'
  | '8.5'
  | '9'
  | '9.5'
  | '10'
  | '10.5'
  | '11'
  | '11.5'
  | '12'
  | '13'
  | '14'
  | '15'
  | 'onesize'
  | 'MISC'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xs';

/**
 * All available product colors
 *@type ProductColors
 */

export type ProductColors =
  | 'beige'
  | 'black'
  | 'blue'
  | 'brown'
  | 'gold'
  | 'green'
  | 'grey'
  | 'ivory'
  | 'multi'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'silver'
  | 'white'
  | 'yellow';

/**
 * Generic Redux Interface for payment method
 *@interface ReduxAsync
 *@param {string} methodName - method name
 *@param {string} iconSrc - img src for payment icon
 */
export interface PaymentMethod {
  methodName: string;
  iconSrc: string;
}

/**
 * All available filters in ProductReducer
 *@interface
 */
export interface ProductFilters {
  brand: string;
  color: string;
  department: string;
  size: string;
}
/**
 * All available sorting options
 *@type
 */
export type SortingOptionsType =
  | 'a-z'
  | 'z-a'
  | 'priceLowToHight'
  | 'priceHightToLow';

/**
 * User Shipping information
 *@interface
 */
export interface UserShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  state: string;
  zipCode: string;
  phone: string;
}

/**
 * User Order Information
 *@interface
 */

export interface Purchase {
  productID: string;
  brand: string;
  model: string;
  size: string;
}

export interface OrderInformation {
  total: number;
  purchasedItems: Purchase[];
  customerInfo: UserShippingInfo;
}
