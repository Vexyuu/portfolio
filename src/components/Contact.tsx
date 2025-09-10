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
                        className="p-4 rounded-lg border border-gray-600 bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Votre email"
                        className="p-4 rounded-lg border border-gray-600 bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message"
                        rows={5}
                        className="p-4 rounded-lg border border-gray-600 bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 font-bold rounded-lg text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 hover:scale-105 hover:shadow-xl transition-transform duration-300"
                        disabled={isSubmitting || isFormIncomplete}
                    >
                        {isSubmitting ? "Envoi..." : "Envoyer"}
                    </button>
                </form>
                {responseMessage && (
                    <p className={`mt-4 text-lg font-medium transition-opacity duration-500 ${responseMessage.includes("succès") ? "text-green-500" : "text-red-500"}`}>
                        {responseMessage}
                    </p>
                )}
                <div className="mt-12 flex justify-center gap-6">
                    <Link href="mailto:killianfievetpro@gmail.com" className="text-primary hover:underline">
                        <FaEnvelope className="inline-block mr-2" />
                        Email
                    </Link>
                    <Link href="https://github.com/Vexyuu?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                        <FaGithub className="inline-block mr-2" />
                        GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/killian-fievet-4a3788287" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        <FaLinkedin className="inline-block mr-2" />
                        LinkedIn
                    </Link>
                </div>
            </div>
        </section>
    );
}
