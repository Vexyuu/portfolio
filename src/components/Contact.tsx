// src/components/Contact.tsx
"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const metadata = {
    title: "Contact - Killian Fievet",
    description: "Contactez-moi via le formulaire ou retrouvez-moi sur les réseaux sociaux.",
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const isFormIncomplete = !formData.name || !formData.email || !formData.message;

    // Gérer le changement des valeurs du formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Fonction pour envoyer le formulaire
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm(
                "service_q23dtpe",    // Service ID
                "template_wbcsc7d",   // Template ID
                e.target as HTMLFormElement, // Utilisation du formulaire dans la soumission
                "8EGel7H_ryggwHh1h"     // User ID
            );
            console.log(result.text);
            setResponseMessage("Message envoyé avec succès !");

            setTimeout(() => {
                setResponseMessage("");
            }, 5000); // 5 secondes

            // Réinitialiser le formulaire
            setFormData({ name: "", email: "", message: "" });

        } catch (error) {
            console.error("Erreur d'envoi", error);
            setResponseMessage("Erreur lors de l'envoi du message.");
        }

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-20 px-6 bg-background text-foreground">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Contactez-moi</h2>
                <p className="text-muted mb-8">Vous pouvez m&apos;envoyer un message directement via ce formulaire.</p>
                <form onSubmit={handleSubmit} className="grid gap-6">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className="p-4 rounded-xl bg-muted/5 border border-muted-foreground/20 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Votre email"
                        className="p-4 rounded-xl bg-muted/5 border border-muted-foreground/20 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message"
                        rows={5}
                        className="p-4 rounded-xl bg-muted/5 border border-muted-foreground/20 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                    />
                    <button
                        type="submit"
                        className="px-6 py-4 font-medium rounded-xl text-white bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none transition-all duration-300 transform hover:-translate-y-1"
                        disabled={isSubmitting || isFormIncomplete}
                    >
                        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    </button>
                </form>
                {responseMessage && (
                    <p className={`mt-4 text-lg font-medium transition-opacity duration-500 ${responseMessage.includes("succès") ? "text-green-500" : "text-red-500"}`}>
                        {responseMessage}
                    </p>
                )}
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    <Link href="mailto:killianfievetpro@gmail.com" className="px-5 py-2.5 flex items-center gap-2 rounded-full border border-muted-foreground/30 text-foreground hover:bg-muted/10 transition-colors">
                        <FaEnvelope />
                        Email
                    </Link>
                    <Link href="https://github.com/Vexyuu" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 flex items-center gap-2 rounded-full border border-muted-foreground/30 text-foreground hover:bg-muted/10 transition-colors">
                        <FaGithub />
                        GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/killian-fievet-4a3788287" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 flex items-center gap-2 rounded-full border border-muted-foreground/30 text-foreground hover:bg-muted/10 transition-colors">
                        <FaLinkedin />
                        LinkedIn
                    </Link>
                </div>
            </div>
        </section>
    );
}
