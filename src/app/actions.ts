"use server";
import process from 'process';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: { name: string; email: string; message: string }) {
  try {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      return { success: false, error: "Tous les champs sont requis." };
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <contact@killianfievet.com>',
      to: [process.env.CONTACT_EMAIL || 'killianfievetpro@gmail.com'],
      subject: `Nouveau message de ${name} via portfolio`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333;">Nouveau message de contact</h2>
          <p style="font-size: 16px; color: #555;">Vous avez reçu un nouveau message depuis votre portfolio.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #333;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error (Admin):", error);
      return { success: false, error: error.message };
    }

    // 2. Envoyer un accusé de réception à l'expéditeur
    await resend.emails.send({
      from: 'Killian Fievet <contact@killianfievet.com>',
      to: [email],
      subject: 'Merci pour votre message !',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; color: #1a1a1a;">
          <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 20px; color: #000;">Bonjour ${name},</h1>
          <p style="font-size: 16px; line-height: 1.6; color: #4a4a4a;">
            Merci de m'avoir contacté ! J'ai bien reçu votre message et je l'étudierai avec attention.
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #4a4a4a;">
            Je reviendrai vers vous dès que possible.
          </p>
          <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 30px 0;" />
          <p style="font-size: 14px; color: #888888; margin-bottom: 5px;">Cordialement,</p>
          <p style="font-size: 16px; font-weight: 600; color: #000; margin-top: 0;">Killian Fievet</p>
          <div style="margin-top: 20px;">
            <a href="https://killianfievet.com" style="font-size: 14px; color: #3b82f6; text-decoration: none;">killianfievet.com</a>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Action Error:", error);
    return { success: false, error: "Une erreur est survenue lors de l'envoi." };
  }
}
