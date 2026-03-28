"use server"

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function singOut() {
    const supabase = await createClient();
    await supabase.auth.signOut();
    revalidatePath("/");
    redirect("/");
}