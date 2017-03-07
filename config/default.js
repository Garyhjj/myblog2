module.exports = {
  port: 4000,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 1000*60*30
  },
  mongodb: 'mongodb://localhost:27017/myblog'
};
