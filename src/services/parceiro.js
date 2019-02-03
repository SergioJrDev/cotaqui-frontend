import promiseFactory from '../utils/requestFactory';

export const createParceiro = async parceiro => {
  return await promiseFactory('criar-parceiro', parceiro, 'post', false);
};
