import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "E-posta adresi gerekli")
    .email("Geçerli bir e-posta adresi girin"),
  password: z
    .string()
    .min(1, "Şifre gerekli")
    .min(6, "Şifre en az 6 karakter olmalı"),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, "Ad soyad gerekli")
      .min(2, "Ad en az 2 karakter olmalı"),
    email: z
      .string()
      .min(1, "E-posta adresi gerekli")
      .email("Geçerli bir e-posta adresi girin"),
    password: z
      .string()
      .min(1, "Şifre gerekli")
      .min(6, "Şifre en az 6 karakter olmalı"),
    confirmPassword: z.string().min(1, "Şifre tekrarı gerekli"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Şifreler eşleşmiyor",
    path: ["confirmPassword"],
  });

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
