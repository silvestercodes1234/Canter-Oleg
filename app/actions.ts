"use server";

import { createClient } from "@supabase/supabase-js";

export async function submitLead(
  formData: FormData
): Promise<{ success?: boolean; error?: string }> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const caseDescription =
    (formData.get("case_description") as string | null)?.trim() ?? "";

  // Server-side validation
  if (!name || !phone) {
    return { error: "Vă rugăm completați câmpurile obligatorii." };
  }
  if (name.length < 2 || name.length > 100) {
    return {
      error: "Numele trebuie să conțină între 2 și 100 de caractere.",
    };
  }
  if (phone.length < 7 || phone.length > 25) {
    return { error: "Numărul de telefon nu este valid." };
  }
  if (caseDescription.length > 2000) {
    return { error: "Descrierea cazului este prea lungă (max. 2000 caractere)." };
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    // Demo / development fallback — log and succeed without a real DB
    console.log("[DEMO LEAD CAPTURED]", {
      name,
      phone,
      case_description: caseDescription || null,
    });
    return { success: true };
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { error } = await supabase.from("demo_leads").insert({
    name,
    phone,
    case_description: caseDescription || null,
  });

  if (error) {
    console.error("Supabase insert error:", error.message);
    return {
      error: "Eroare la trimiterea solicitării. Vă rugăm încercați din nou.",
    };
  }

  return { success: true };
}
