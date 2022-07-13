import type { NextPage } from "next";
import { foo } from "@nextjs-alias-test-lib/testpkg";
import { bar } from "@nextjs-alias-test-lib/testpkg-internal";

const Home: NextPage = () => {
  return (
    <>
      <div>{foo()}</div>
      <div>{bar()}</div>
    </>
  );
};

export default Home;
