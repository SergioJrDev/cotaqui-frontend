import instance from "./config";

const formatReponse = ({ data }) => {
  console.log("response", data);
  return data;
};

const formatCatch = ({ response }) => {
  console.log("catch", response);
  return response.data || response;
};

export const submitCarta = params => {
  return instance
    .post("/add-nova-carta", params)
    .then(formatReponse)
    .catch(formatCatch);
};

export const getSingleCarta = _id => {
  return new Promise((resolve, reject) => {
    return instance
      .get("/get-single-carta", { params: { _id } })
      .then(response => resolve(formatReponse(response)))
      .catch(error => reject(formatCatch(error)));
  });
};

export const getSingleCartaWithDetails = _id => {
  return new Promise((resolve, reject) => {
    return instance
      .get("/get-single-with-details", { params: { _id } })
      .then(response => resolve(formatReponse(response)))
      .catch(error => reject(formatCatch(error)));
  });
};

export const getAllCartas = () => {
  return new Promise((resolve, reject) => {
    return instance
      .get("/get-all-cartas")
      .then(response => resolve(formatReponse(response)))
      .catch(error => reject(formatCatch(error)));
  });
};

export const updateCarta = params => {
  return new Promise((resolve, reject) => {
    return instance
      .put("/atualizar-carta", { ...params })
      .then(response => resolve(formatReponse(response)))
      .catch(error => reject(formatCatch(error)));
  });
};

export const deleteCarta = params => {
  return new Promise((resolve, reject) => {
    return instance
      .delete("/delete-carta", { params })
      .then(response => resolve(formatReponse(response)))
      .catch(error => reject(formatCatch(error)));
  });
};

export const getInteressados = () => {
  return new Promise((resolve, reject) => {
    return instance
      .get("/get-interested")
      .then(response => resolve(formatReponse(response)))
      .catch(error => reject(formatCatch(error)));
  });
};
