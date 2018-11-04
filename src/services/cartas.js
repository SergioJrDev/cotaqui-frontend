import promiseFactory from "../utils/requestFactory";

export const submitCarta = params => {
  return promiseFactory("add-nova-carta", params, "post");
};

export const getSingleCarta = _id => {
  return promiseFactory("get-single-carta", { _id }, "get", false);
};

export const getSingleCartaWithDetails = _id => {
  return promiseFactory("get-single-with-details", { _id }, "get");
};

export const getAllCartas = () => {
  return promiseFactory("get-all-cartas", {}, "get", false);
};

export const updateCarta = params => {
  return promiseFactory("atualizar-carta", params, "put");
};

export const deleteCarta = params => {
  return promiseFactory("delete-carta", params, "delete");
};

export const getInteressados = () => {
  return promiseFactory("get-interested", {}, "get");
};

export const submitEmail = params => {
  return promiseFactory("send", params, "post");
};
