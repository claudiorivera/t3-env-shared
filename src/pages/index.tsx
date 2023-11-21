import { Inter } from "next/font/google";
import { env } from "~/env.mjs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const envVars = {
    SHARED: env.SHARED,
    NEXT_PUBLIC_CLIENT: env.NEXT_PUBLIC_CLIENT,
  };

  console.log({ envVars });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <pre>{JSON.stringify(envVars, null, 2)}</pre>
    </main>
  );
}
