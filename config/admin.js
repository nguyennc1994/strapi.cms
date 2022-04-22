module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9d501d0203682603f4b7d22206ab449c'),
  },
});
