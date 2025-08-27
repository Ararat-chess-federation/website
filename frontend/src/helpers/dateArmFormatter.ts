export const dateArmFormatter = (data: string) => {
  const date = new Date(data);

  const formatted = date.toLocaleDateString("hy-AM", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatted;
};
