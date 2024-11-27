const slugify = (string) => {
  return string
    .toLowerCase()
    .replace(/\s+/g, '-') // Remplace les espaces par des tirets
    .replace(/[^\w-]+/g, '') // Supprime les caractères spéciaux
    .replace(/--+/g, '-') // Remplace les tirets multiples par un seul
    .trim();
};
export default slugify;
