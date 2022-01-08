export default function getFilteredCategory(array, category) {
  return array?.find(ar => ar.category === category)?.details;
}
