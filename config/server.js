module.exports = ({ env }) => ({
  host: env('HOST', '217.219.165.22'),
  port: env.int('PORT', 5001),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'b03cee5ab691b9e9b43bbc8ea557dae4'),
    },
  },
});
