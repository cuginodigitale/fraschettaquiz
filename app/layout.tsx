import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fraschetta Quiz",
  description: "Quiz mobile-first co' placeholder pe' er branding."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 pb-10 pt-6">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/branding/logo-placeholder.svg"
                alt="Logo de prova"
                className="h-10 w-10"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Brand de prova
                </p>
                <h1 className="text-lg font-semibold text-brand-primary">
                  Fraschetta Quiz
                </h1>
              </div>
            </div>
            <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-secondary">
              v0.1
            </span>
          </header>
          <main className="flex-1 pt-8">{children}</main>
          <footer className="mt-10 text-center text-xs text-slate-500">
            <p>
              Palette de prova: primary, secondary, accent. Poi se cambia co' la
              palette ufficiale.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
