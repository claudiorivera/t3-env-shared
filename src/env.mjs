import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_CLIENT: z.string().min(1),
  },
  shared: {
    SHARED: z.string().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_CLIENT: process.env.NEXT_PUBLIC_CLIENT,
    SHARED: process.env.SHARED,
  },
});
