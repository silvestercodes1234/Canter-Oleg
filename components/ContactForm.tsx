"use client";

import { useTransition, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { submitLead } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{
    success?: boolean;
    error?: string;
  } | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    startTransition(async () => {
      const res = await submitLead(formData);
      setResult(res);
      if (res.success) form.reset();
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Nume complet <span className="text-gold-500">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Ion Popescu"
            required
            autoComplete="name"
            disabled={isPending}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">
            Telefon <span className="text-gold-500">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+373 xxx xxx xxx"
            required
            autoComplete="tel"
            disabled={isPending}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="case_description">
          Descrierea cazului{" "}
          <span className="normal-case font-normal text-parchment-500">
            (opțional)
          </span>
        </Label>
        <Textarea
          id="case_description"
          name="case_description"
          placeholder="Descrieți pe scurt situația dumneavoastră juridică..."
          rows={5}
          disabled={isPending}
        />
      </div>

      {result?.error && (
        <div className="flex items-center gap-2 border border-red-500/20 bg-red-500/8 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {result.error}
        </div>
      )}

      {result?.success && (
        <div className="flex items-center gap-2 border border-emerald-500/20 bg-emerald-500/8 px-4 py-3 text-sm text-emerald-400">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          Vă mulțumim! Vă vom contacta în cel mai scurt timp.
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="group flex w-full items-center justify-center gap-2 bg-gold-500 px-8 py-4 text-sm font-bold text-ink-900 transition-colors hover:bg-gold-400 disabled:opacity-60"
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Se trimite...
          </>
        ) : (
          <>
            Trimite Solicitarea
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-parchment-500">
        Datele dvs. sunt strict confidențiale — protejate de secretul profesional al avocatului.
      </p>
    </form>
  );
}
