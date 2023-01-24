import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mud's Blog</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.</p>
        <p>
          <a href="./about">about</a>
        </p>
        <p>
          <a href="./countdown">countdown</a>
        </p>
        <p>
          <a href="./html">html</a>
        </p>
        <p>
          <a href="./plain">plain</a>
        </p>
        <p>
          <a href="./search">search</a>
        </p>
        <p>
          <a href="./greets/mud">greets</a>
        </p>
        <p>
          <a href="./github/mud-the-developer">github</a>
        </p>        
        
        <Counter start={3} />
      </div>
      
    </>
  );
}
