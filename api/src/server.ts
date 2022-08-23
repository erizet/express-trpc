import * as trpc from '@trpc/server';

const appRouter = trpc.router()
    .query("getUser", {
        input: (val: unknown) => {
            if(typeof val === 'string') return val;
            throw new Error(`Invalid input ${typeof val}`);
        },
        async resolve(req) {
            req.input;
            return { id: req.input, name: "erik" };
        }
    });

export type AppRouter = typeof appRouter;