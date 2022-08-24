import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from '../../../api/src/server';

export const trpc = createReactQueryHooks<AppRouter>();