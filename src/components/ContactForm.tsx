"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Le nom est requis.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Adresse e-mail invalide.";
    if (!form.subject.trim()) e.subject = "L'objet est requis.";
    if (!form.message.trim()) e.message = "Le message est requis.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // ── mailto: fallback (no backend)
    // Pour brancher un vrai service, remplacer ce bloc par un appel à
    // Web3Forms (https://web3forms.com) ou Resend — voir README.
    const body = [
      `Nom : ${form.name}`,
      `Email : ${form.email}`,
      form.phone ? `Téléphone : ${form.phone}` : null,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:contact@valiance.fr?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
    setForm(INITIAL);
  };

  const field = (
    id: keyof FormData,
    label: string,
    type: "text" | "email" | "tel" | "textarea" = "text",
    required = false
  ) => (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium mb-1.5"
        style={{ color: "#3a4049" }}
      >
        {label}
        {required && (
          <span className="ml-1" style={{ color: "#b0894f" }} aria-hidden="true">
            *
          </span>
        )}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          required={required}
          className="w-full px-4 py-3 text-sm rounded-[4px] border transition-colors duration-200 resize-y focus:outline-none focus:ring-2 focus:ring-offset-0"
          style={{
            borderColor: errors[id] ? "#ef4444" : "#e6dfd2",
            backgroundColor: "#fcfaf6",
            color: "#14233b",
            // @ts-expect-error custom ring color via inline style
            "--tw-ring-color": "#b0894f",
          }}
          value={form[id]}
          onChange={(e) => {
            setForm((f) => ({ ...f, [id]: e.target.value }));
            if (errors[id]) setErrors((er) => ({ ...er, [id]: undefined }));
          }}
          aria-describedby={errors[id] ? `${id}-error` : undefined}
          aria-invalid={!!errors[id]}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          className="w-full px-4 py-3 text-sm rounded-[4px] border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0"
          style={{
            borderColor: errors[id] ? "#ef4444" : "#e6dfd2",
            backgroundColor: "#fcfaf6",
            color: "#14233b",
          }}
          value={form[id]}
          onChange={(e) => {
            setForm((f) => ({ ...f, [id]: e.target.value }));
            if (errors[id]) setErrors((er) => ({ ...er, [id]: undefined }));
          }}
          aria-describedby={errors[id] ? `${id}-error` : undefined}
          aria-invalid={!!errors[id]}
        />
      )}
      {errors[id] && (
        <p id={`${id}-error`} className="text-xs mt-1" style={{ color: "#ef4444" }} role="alert">
          {errors[id]}
        </p>
      )}
    </div>
  );

  if (sent) {
    return (
      <div
        className="p-8 rounded-[4px] text-center border"
        style={{ backgroundColor: "#fcfaf6", borderColor: "#e6dfd2" }}
        role="status"
        aria-live="polite"
      >
        <p
          className="font-semibold mb-2"
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            color: "#14233b",
          }}
        >
          Merci pour votre message !
        </p>
        <p className="text-sm" style={{ color: "#6b7280" }}>
          Votre client mail va s&apos;ouvrir pour finaliser l&apos;envoi.
        </p>
        <button
          className="btn-outline mt-6 text-sm py-2.5 px-5"
          onClick={() => setSent(false)}
        >
          Nouveau message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {field("name", "Nom", "text", true)}
      {field("email", "E-mail", "email", true)}
      {field("phone", "Téléphone", "tel")}
      {field("subject", "Objet du message", "text", true)}
      {field("message", "Message", "textarea", true)}

      <p className="text-xs" style={{ color: "#9fb0c2" }}>
        * Champs obligatoires
      </p>

      <button type="submit" className="btn-primary w-full justify-center">
        Envoyer le message
      </button>
    </form>
  );
}
