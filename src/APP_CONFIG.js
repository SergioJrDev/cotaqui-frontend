const CONFIG = {
  BACKEND: /localhost/.test(window.location.host)
    ? 'http://localhost:3001'
    : 'https://cotaquionline-services.com.br',
  ANALYTICS: '',
  EMAILID: 'user_tkDQCaq2YiASLCw3XjeQS',
  EMAILTEMPLATE: 'fee74eac0728a1bb5ff7d4666f8c4a88',
  EMAILSERVICE: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
  IS_PRODUCTION: !/localhost/.test(window.location.host),
  ADMINS: ['sergioamjr91@gmail.com', 'cuecacuela@gmail.com', 'admin@gas.com']
};

export default CONFIG;
