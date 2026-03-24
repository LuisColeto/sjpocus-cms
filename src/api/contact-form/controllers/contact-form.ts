import type { Core } from "@strapi/strapi";

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  async send(ctx) {
    const { name, email, phone, message } = ctx.request.body as {
      name: string;
      email: string;
      phone?: string;
      message: string;
    };

    if (!name || !email || !message) {
      return ctx.badRequest("Nome, e-mail e mensagem são obrigatórios.");
    }

    try {
      await strapi.plugin("email").service("email").send({
        to: process.env.SMTP_USER,
        replyTo: email,
        subject: `[SJPocus] Novo contato de ${name}`,
        html: `
          <h2>Novo contato pelo site</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
          <hr />
          <p><strong>Mensagem:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
      });

      return ctx.send({ ok: true });
    } catch (error) {
      strapi.log.error("Erro ao enviar email de contato:", error);
      return ctx.internalServerError("Erro ao enviar mensagem.");
    }
  },
});

export default controller;
