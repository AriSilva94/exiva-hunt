import { Fragment } from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import DashboardPage from "./dashboard/page";

export default async function PublicPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <Fragment>
      <DashboardPage />
    </Fragment>
  );
}
