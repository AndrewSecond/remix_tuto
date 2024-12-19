import type { LoaderFunctionArgs, } from "@remix-run/node";
import Movie from "./db";

export const loader = async({request}: LoaderFunctionArgs) => {
  Movie
    .find()
    .
  return json({contacts, q});
};

export default function Index() {
  return (
    <p id="index-page">
      This is a demo for Remix.
      <br />
      Check out{" "}
      <a href="https://remix.run">the docs at remix.run</a>.
    </p>
  );
}