import { Head } from "$fresh/runtime.ts";
import { scriptAsDataURI } from "apps/utils/dataURI.ts";

export default function LogAnalytics() {
  return (
    <Head>
      <script
        defer
        src={scriptAsDataURI(() => {
          window.DECO.events.subscribe((event) => console.log(event));
        })}
      />
    </Head>
  );
}
