import promiseFactory from '../utils/requestFactory';

export const createParceiro = async parceiro => {
  return await promiseFactory('criar-parceiro', parceiro, 'post', false);
};

export const getParceiro = async () => {
  return await promiseFactory('parceiros', {}, 'get');
};

export const deleteParceiro = async _id => {
  return await promiseFactory('delete-parceiro', _id, 'delete');
};

export const createSale = async parceiro => {
  return await promiseFactory('criar-venda', parceiro, 'post', false);
};

export const getSales = async () => {
  return await promiseFactory('vendas', {}, 'get');
};

export const deleteSale = async _id => {
  return await promiseFactory('delete-venda', _id, 'delete');
};
