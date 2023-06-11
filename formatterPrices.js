export const formatPrice = (num) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARG",
}).format(num);
};
