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
