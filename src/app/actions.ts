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
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Action Error:", error);
    return { success: false, error: "Une erreur est survenue lors de l'envoi." };
  }
}
