import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <UserProfile
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
    </>
  );
}
