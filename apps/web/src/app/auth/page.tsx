"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { LoginForm } from "@/components/auth/login-form";
import { RegisterForm } from "@/components/auth/register-form";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <section className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-background shadow-lg">
        {/* ─── Mobile: stacked layout ─── */}
        <div className="md:hidden">
          <div className="bg-accent px-6 py-8 text-center text-white">
            <h2 className="text-2xl font-bold">
              {isLogin ? "Hoş Geldiniz!" : "Aramıza Katılın!"}
            </h2>
            <p className="mt-2 text-sm text-white/80">
              {isLogin
                ? "Hesabınıza giriş yaparak devam edin."
                : "Hemen kayıt olun ve platformumuzu keşfedin."}
            </p>
          </div>
          <div className="px-6 py-8">
            {isLogin ? <LoginForm /> : <RegisterForm />}
            <div className="mt-6 text-center text-sm text-muted">
              {isLogin ? "Hesabınız yok mu?" : "Zaten hesabınız var mı?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-semibold text-accent hover:underline"
              >
                {isLogin ? "Kayıt Olun" : "Giriş Yapın"}
              </button>
            </div>
          </div>
        </div>

        {/* ─── Tablet+: side-by-side with sliding overlay ─── */}
        <div className="relative hidden h-[540px] md:flex">
          {/* Form panels (both always rendered, visibility toggled) */}
          <div className="flex w-full">
            {/* Left half: Login form */}
            <div
              className={cn(
                "flex w-1/2 flex-col items-center justify-center px-10 transition-all duration-500",
                isLogin ? "opacity-100 delay-200" : "pointer-events-none opacity-0"
              )}
            >
              <div className="w-full max-w-sm">
                <h2 className="mb-6 text-2xl font-bold text-primary">
                  Giriş Yap
                </h2>
                <LoginForm />
              </div>
            </div>

            {/* Right half: Register form */}
            <div
              className={cn(
                "flex w-1/2 flex-col items-center justify-center px-10 transition-all duration-500",
                !isLogin ? "opacity-100 delay-200" : "pointer-events-none opacity-0"
              )}
            >
              <div className="w-full max-w-sm">
                <h2 className="mb-6 text-2xl font-bold text-primary">
                  Kayıt Ol
                </h2>
                <RegisterForm />
              </div>
            </div>
          </div>

          {/* Sliding overlay panel */}
          <div
            className={cn(
              "absolute top-0 h-full w-1/2 bg-accent transition-transform duration-500 ease-in-out",
              isLogin ? "left-0 translate-x-full" : "left-0 translate-x-0"
            )}
          >
            <div className="flex h-full flex-col items-center justify-center px-10 text-center text-white">
              {isLogin ? (
                <>
                  <h2 className="text-3xl font-bold">Hoş Geldiniz!</h2>
                  <p className="mt-3 max-w-xs text-sm text-white/80">
                    Hesabınıza giriş yaparak kaldığınız yerden devam edin.
                  </p>
                  <p className="mt-8 text-sm text-white/70">
                    Hesabınız yok mu?
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsLogin(false)}
                    className="mt-3 border-white bg-transparent text-white hover:bg-white/10"
                  >
                    Kayıt Olun
                  </Button>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold">Aramıza Katılın!</h2>
                  <p className="mt-3 max-w-xs text-sm text-white/80">
                    Hemen kayıt olun ve platformumuzu keşfetmeye başlayın.
                  </p>
                  <p className="mt-8 text-sm text-white/70">
                    Zaten hesabınız var mı?
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsLogin(true)}
                    className="mt-3 border-white bg-transparent text-white hover:bg-white/10"
                  >
                    Giriş Yapın
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
