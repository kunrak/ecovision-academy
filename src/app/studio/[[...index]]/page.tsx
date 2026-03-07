/* 
  Embedded Sanity Studio Page
  This page renders the actual dashboard where you manage courses.
*/

import Studio from "./Studio";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <Studio />;
}
