module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'afea8084beb94123b928c1c2f5b35ce5'),
  },
});
