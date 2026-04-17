"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Button from "./ui/Button";

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
        <section id="contact" className="py-32 px-6 bg-background text-foreground relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
             
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center text-center mb-16 gap-6">
                    <h2 className="text-xs uppercase tracking-[0.4em] font-black text-secondary px-6 py-2 bg-secondary/10 border border-secondary/20 rounded-full inline-block backdrop-blur-md">Contact</h2>
                    <h3 className="text-5xl md:text-8xl font-black tracking-tighter">
                        <span className="bg-mask-text uppercase">Travaillons ensemble</span>
                    </h3>
                    <p className="text-muted-foreground max-w-2xl font-medium text-xl tracking-tight mt-4">
                        Vous avez un projet en tête ou une question ? N&apos;hésitez pas à m&apos;envoyer un message.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                    {/* Infos de contact */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="card-glass p-8 rounded-[2rem] space-y-8">
                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-muted-foreground font-bold mb-4">Mes réseaux</h4>
                                <div className="flex flex-col gap-3">
                                    <Link href="https://github.com/Vexyuu" target="_blank" className="group flex items-center gap-4 p-4 rounded-2xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all">
                                        <FaGithub className="text-2xl text-foreground/50 group-hover:text-foreground transition-colors" />
                                        <span className="font-bold">GitHub</span>
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/killian-fievet-4a3788287" target="_blank" className="group flex items-center gap-4 p-4 rounded-2xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all">
                                        <FaLinkedin className="text-2xl text-foreground/50 group-hover:text-blue-500 transition-colors" />
                                        <span className="font-bold">LinkedIn</span>
                                    </Link>
                                    <Link href="mailto:killianfievetpro@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all">
                                        <FaEnvelope className="text-2xl text-foreground/50 group-hover:text-secondary transition-colors" />
                                        <span className="font-bold">Email</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-foreground/10 text-sm text-muted-foreground leading-relaxed">
                                <p>Disponible pour des opportunités en <span className="text-secondary font-bold">alternance</span> ou des projets <span className="text-primary font-bold">freelance</span>.</p>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="md:col-span-3">
                        <form onSubmit={handleSubmit} className="card-glass p-8 md:p-12 rounded-[2rem] grid gap-6">
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
                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full py-4"
                        disabled={isSubmitting || isFormIncomplete}
                        isLoading={isSubmitting}
                    >
                        Envoyer le message
                    </Button>
                    {responseMessage && (
                        <p className={`mt-4 text-lg font-medium transition-opacity duration-500 ${responseMessage.includes("succès") ? "text-green-500" : "text-red-500"}`}>
                            {responseMessage}
                        </p>
                    )}
                </form>
                </div>
                </div>
            </div>
        </section>
    );
}
