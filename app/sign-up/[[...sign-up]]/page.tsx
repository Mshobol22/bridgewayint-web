import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <SignUp
        appearance={{
          variables: {
            colorBackground: "#0f172a",
            colorText: "#f8fafc",
            colorInputBackground: "#1e293b",
            colorInputText: "#f8fafc",
            colorPrimary: "#38bdf8",
            borderRadius: "0.75rem",
          },
        }}
      />
    </main>
  );
}
