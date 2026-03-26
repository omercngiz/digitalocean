"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      kvkk: undefined,
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Ad Soyad</Label>
          <Input
            id="contact-name"
            placeholder="Adınız Soyadınız"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">E-posta</Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="ornek@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-phone">Telefon</Label>
        <Input
          id="contact-phone"
          type="tel"
          placeholder="05XX XXX XX XX"
          {...register("phone")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Mesajınız</Label>
        <Textarea
          id="contact-message"
          placeholder="Projeniz hakkında kısaca bilgi verin..."
          rows={4}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* KVKK */}
      <div className="space-y-1">
        <div className="flex items-start gap-2">
          <Checkbox
            id="contact-kvkk"
            {...register("kvkk")}
            className="mt-0.5"
          />
          <Label
            htmlFor="contact-kvkk"
            className="text-xs leading-snug text-muted"
          >
            Kişisel verilerimin işlenmesine ilişkin{" "}
            <span className="font-semibold text-primary">
              KVKK Aydınlatma Metni
            </span>
            &apos;ni okudum, kabul ediyorum.
          </Label>
        </div>
        {errors.kvkk && (
          <p className="text-xs text-red-500">{errors.kvkk.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Gönder
      </Button>
    </form>
  );
}
