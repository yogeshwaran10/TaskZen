import { auth } from "@clerk/nextjs";
import { prisma } from "@/utils/prisma";
import Board from "@/components/Board";
import Head from "next/head"; // Import the Head component

const page = async () => {
  const { userId }: { userId: string | null } = auth();

  const board = await prisma.kanbanBoard.findFirst({
    where: {
      userId: userId!,
    },
    include: {
      tasks: true,
    },
  });

  return (
    <>
      {/* Add the viewport meta tag within the Head component */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Render the Board component */}
      <Board board={board} />
    </>
  );
};

export default page;
