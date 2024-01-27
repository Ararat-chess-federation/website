export default function getImageSrc(el: any) {
  return `${process.env.BACKEND_URL}${el.attributes.mainImage.data.attributes.formats.optimized.url}`;
}
