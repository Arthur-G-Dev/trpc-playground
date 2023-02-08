import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const likeRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ user_id: z.string(), post_id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.like.create({ data: input });
    }),
});
