"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = 1350;

const RESULT_PAYLOAD = {
  score: 18,
  total: 24,
  category: "L'Analista Impaziente",
  sarcasm:
    "Congratulazioni: hai risolto il quiz con la grazia di un prompt alle 2 di notte.",
};

const drawRoundedRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) => {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
};

export default function ResultsPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const downloadUrlRef = useRef<string | null>(null);
  const [shareBlob, setShareBlob] = useState<Blob | null>(null);
  const [shareSupported, setShareSupported] = useState(false);
  const [shareError, setShareError] = useState<string | null>(null);
  const [shareLink, setShareLink] = useState("");

  const scoreLabel = useMemo(
    () => `${RESULT_PAYLOAD.score}/${RESULT_PAYLOAD.total}`,
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = CANVAS_WIDTH * dpr;
    canvas.height = CANVAS_HEIGHT * dpr;
    canvas.style.width = `${CANVAS_WIDTH}px`;
    canvas.style.height = `${CANVAS_HEIGHT}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    const logo = new Image();
    logo.src = "/branding/logo-placeholder.svg";

    logo.onload = () => {
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      drawRoundedRect(ctx, 80, 80, 920, 1190, 48);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.strokeStyle = "rgba(148, 163, 184, 0.3)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.drawImage(logo, 140, 140, 200, 200);

      ctx.fillStyle = "#0f172a";
      ctx.font = "700 72px ui-sans-serif, system-ui";
      ctx.fillText("Risultato quiz", 140, 420);

      ctx.fillStyle = "#1d4ed8";
      ctx.font = "800 160px ui-sans-serif, system-ui";
      ctx.fillText(scoreLabel, 140, 620);

      ctx.fillStyle = "#64748b";
      ctx.font = "600 44px ui-sans-serif, system-ui";
      ctx.fillText("Categoria", 140, 710);

      ctx.fillStyle = "#0f172a";
      ctx.font = "700 60px ui-sans-serif, system-ui";
      ctx.fillText(RESULT_PAYLOAD.category, 140, 790);

      ctx.fillStyle = "#475569";
      ctx.font = "500 46px ui-sans-serif, system-ui";

      const sarcasmWords = RESULT_PAYLOAD.sarcasm.split(" ");
      const lines: string[] = [];
      let currentLine = "";
      const maxWidth = 780;
      sarcasmWords.forEach((word) => {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        if (ctx.measureText(testLine).width > maxWidth) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      });
      if (currentLine) lines.push(currentLine);

      lines.slice(0, 4).forEach((line, index) => {
        ctx.fillText(line, 140, 900 + index * 64);
      });

      ctx.fillStyle = "#94a3b8";
      ctx.font = "500 32px ui-sans-serif, system-ui";
      ctx.fillText("Condividi senza rimorsi. Screenshot & post.", 140, 1160);

      canvas.toBlob((blob) => {
        if (!blob) return;
        setShareBlob(blob);
        const objectUrl = URL.createObjectURL(blob);
        if (downloadUrlRef.current) {
          URL.revokeObjectURL(downloadUrlRef.current);
        }
        downloadUrlRef.current = objectUrl;
        setDownloadUrl(objectUrl);
      }, "image/png");
    };
  }, [scoreLabel]);

  useEffect(() => {
    setShareSupported(Boolean(navigator?.share));
    setShareLink(window.location.href);
  }, []);

  useEffect(() => {
    return () => {
      if (downloadUrlRef.current) {
        URL.revokeObjectURL(downloadUrlRef.current);
      }
    };
  }, []);

  const handleShare = async () => {
    if (!shareBlob) return;
    setShareError(null);
    const shareFile = new File([shareBlob], "diploma-quiz.png", {
      type: "image/png",
    });
    try {
      if (navigator.canShare?.({ files: [shareFile] })) {
        await navigator.share({
          title: "Il mio diploma del quiz",
          text: "Ho appena completato il quiz. Ecco il mio diploma!",
          files: [shareFile],
        });
        return;
      }
      if (navigator.share) {
        await navigator.share({
          title: "Il mio diploma del quiz",
          text: "Ho appena completato il quiz. Ecco il mio diploma!",
          url: shareLink,
        });
        return;
      }
      setShareError("Condivisione non supportata su questo dispositivo.");
    } catch (error) {
      setShareError("Condivisione annullata o non disponibile.");
    }
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-secondary">
          Route /results
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">
          Risultati del quiz
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Genera il template social con logo, punteggio e la tua frase sarcastica
          preferita.
        </p>
      </div>

      <div className="rounded-3xl border border-brand-primary/20 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900">
              Anteprima canvas
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Il canvas è renderizzato client-side e pronto per l&apos;export in
              PNG.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <canvas ref={canvasRef} className="h-auto w-full" />
            </div>
          </div>

          <div className="w-full max-w-sm rounded-2xl bg-slate-50 p-5 text-sm text-slate-600">
            <h4 className="text-base font-semibold text-slate-900">
              Dettagli pronti per la condivisione
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <span className="font-semibold text-slate-900">Punteggio:</span>{" "}
                {scoreLabel}
              </li>
              <li>
                <span className="font-semibold text-slate-900">Categoria:</span>{" "}
                {RESULT_PAYLOAD.category}
              </li>
              <li>
                <span className="font-semibold text-slate-900">Frase:</span>{" "}
                {RESULT_PAYLOAD.sarcasm}
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              {downloadUrl ? (
                <a
                  href={downloadUrl}
                  download="diploma-quiz.png"
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand-primary px-4 py-3 text-sm font-semibold text-white"
                >
                  Scarica diploma
                </a>
              ) : (
                <p className="text-xs text-slate-400">
                  Generazione immagine in corso...
                </p>
              )}
              {shareSupported && (
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex w-full items-center justify-center rounded-full border border-brand-primary/30 px-4 py-3 text-sm font-semibold text-brand-primary"
                  disabled={!shareBlob}
                >
                  Condividi (mobile)
                </button>
              )}
              {shareError && (
                <p className="text-xs text-rose-500">{shareError}</p>
              )}
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-600">
              <p className="text-sm font-semibold text-slate-900">
                Facebook & Instagram
              </p>
              <p className="mt-2">
                Per condividere l&apos;immagine: scarica il diploma, poi caricalo
                come foto o storia. Su Facebook puoi anche aprire il link di
                condivisione.
              </p>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  shareLink,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700"
              >
                Apri condivisione Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/quiz"
        className="rounded-full border border-brand-primary/30 px-5 py-3 text-center text-sm font-semibold text-brand-primary"
      >
        Torna al quiz
      </Link>
    </section>
  );
}
