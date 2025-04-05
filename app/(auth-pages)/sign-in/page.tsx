import { signInAction, signInWithGmail } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import RetroButton from "@/components/RetroButton";
import RetroCard from "@/components/RetroCard";
import RetroInput from "@/components/RetroInput";
import RetroSeparator from "@/components/RetroSeparator";
import RetroTitle from "@/components/RetroTitle";

export default async function Login() {
  return (
    <>
      <div className="min-h-48 w-full bg-retro-black flex items-center justify-center p-4">
        <RetroCard>
          <RetroTitle>LOGIN</RetroTitle>
          <form className="space-y-4">
            <RetroInput id="email" name="email" label="Email" type="email" />
            <RetroInput
              id="password"
              name="password"
              label="Password"
              type="password"
            />

            <RetroButton type="submit" formAction={signInAction}>
              ENTER
            </RetroButton>
            <RetroSeparator />

            <RetroButton
              onClick={signInWithGmail}
              className="bg-[#db4437] text-white flex items-center justify-center gap-2"
            >
              <span className="text-sm">📧</span>
              LOGIN WITH GMAIL
            </RetroButton>
          </form>
        </RetroCard>
      </div>
    </>
  );
}
