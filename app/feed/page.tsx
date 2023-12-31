import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Aside from "@/components/feed/Aside";
import Feed from "@/components/feed/Feed";
import Follow from "@/components/feed/Follow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feed",
};

export default function page() {
  return (
    <MaxWidthWrapper className="grid grid-cols-3">
      <Aside />
      <Feed />
      <Follow />
    </MaxWidthWrapper>
  );
}
