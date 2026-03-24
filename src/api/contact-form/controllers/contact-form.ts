import type { Core } from "@strapi/strapi";
import { Resend } from "resend";

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
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: `SJPocus <${process.env.RESEND_FROM_EMAIL}>`,
        to: process.env.CONTACT_EMAIL!,
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
