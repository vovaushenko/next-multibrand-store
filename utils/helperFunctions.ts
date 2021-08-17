import { Product, Review } from '../types';

/**
 * @EXPORTS
 */
export { getAverageRating, getDropdownItems, getDataForLandingPageSections };

/**
 * @method getAverageRating
 * @param  {Review[]} productReviews - array of review objects
 * @returns {number} - calculated average rating to be displayed
 */
const getAverageRating = (productReviews: Review[]): number => {
  if (productReviews.length < 1) return 0;

  const totalRating = productReviews.reduce(
    (acc, review) => acc + review.rating,
    0
  );
  return Math.round(totalRating / productReviews.length);
};

/**
 *@method getDropdownItems
 *@param {Product[]} products - array of all products in which search will be performed
 *@param {string} searchTerm - search term typed in a search bar
 *@returns {Product[]} - Array of products, with name or model that include specified "searchTerm"
 */
const getDropdownItems = (
  searchTerm: string,
  products: Product[]
): Product[] => {
  searchTerm = searchTerm.toLowerCase();
  let allProducts = [...products];

  if (searchTerm !== undefined) {
    allProducts = allProducts.filter(
      (product) =>
        product.brand.toLowerCase().includes(searchTerm) ||
        product.model.toLowerCase().includes(searchTerm)
    );

    return allProducts.slice(0, 4);
  }

  return [];
};

/**
 *@method getDataForLandingPageSections
 *@param {Product[]} products - array of all products in which search will be performed
 *@returns {object} - object with adidas, nike, jordan and highlighted sneakers
 */
const getDataForLandingPageSections = (
  products: Product[]
): {
  hotProducts: Product[];
  adidasSneakers: Product[];
  nikeSneakers: Product[];
  jordanSneakers: Product[];
} => {
  const hotProducts = [];
  const adidasSneakers = [];
  const nikeSneakers = [];
  const jordanSneakers = [];

  for (const product of products) {
    if (product.isFeatured) hotProducts.push(product);
    if (product.brand === 'Adidas') adidasSneakers.push(product);
    if (product.brand === 'Air Jordan') jordanSneakers.push(product);
    if (product.brand === 'Nike') nikeSneakers.push(product);
  }

  return {
    hotProducts,
    adidasSneakers,
    nikeSneakers,
    jordanSneakers,
  };
};
