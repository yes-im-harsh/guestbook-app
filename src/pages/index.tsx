import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main>Loading...</main>;
  }

  return (
    <main>
      <h1>Guestbook App</h1>
      <div>
        {session ? (
          <>
            <p>hi {session.user?.name}</p>
            <button onClick={() => signOut()}>Logout</button>
          </>
        ) : (
          <button
            onClick={() => signIn("discord")}
            className="rounded-lg bg-blue-500 p-2"
          >
            Login with Discord
          </button>
        )}
      </div>
    </main>
  );
};

export default Home;
