export const imageUrlGenerator = (path: string) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_BASEURL}${path}`;
};
