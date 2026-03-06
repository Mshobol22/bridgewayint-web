import { UserProfile } from "@clerk/nextjs";
import { Navbar } from "@/components/Navbar";

export default function UserProfilePage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-12">
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
