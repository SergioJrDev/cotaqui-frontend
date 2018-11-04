const KEY = "cotaqui-auth";

export default class Storage {
  static getKey(item = KEY) {
    return new Promise((resolve, reject) => {
      try {
        const credentials = localStorage.getItem(item);
        return resolve(JSON.parse(credentials));
      } catch (error) {
        return reject(
          `Não foi possível recuperar informações do usuário: ${error}`
        );
      }
    });
  }

  static setKey(userInfo, item = KEY) {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(item, JSON.stringify(userInfo));
        return resolve();
      } catch (error) {
        return reject(
          `Não foi possível salvar informações do usuário: ${error}`
        );
      }
    });
  }

  static removeKey(item = KEY) {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem(item);
        return resolve();
      } catch (error) {
        return reject(
          `Não foi possível excluir informações do usuário: ${error}`
        );
      }
    });
  }
}
