export default {
  routes: [
    {
      method: "POST",
      path: "/contact-form",
      handler: "contact-form.send",
      config: {
        auth: false,
      },
    },
  ],
};
