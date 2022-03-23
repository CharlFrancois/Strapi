module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e3924251fa1b6b5b1cc6c5525999d4c8'),
  },
});
