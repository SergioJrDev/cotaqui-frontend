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
  console.log("params", params);
  // return new Promise((resolve, reject) => {
  return instance
    .post("/add-nova-carta", params)
    .then(formatReponse)
    .catch(formatCatch);
  // });
};
