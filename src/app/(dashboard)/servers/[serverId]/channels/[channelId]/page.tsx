"use client";

import { use } from "react";
import { Id } from "../../../../../../../convex/_generated/dataModel";
import { Messages } from "@/components/messages";

export default function ChannelPage({
  params,
}: {
  params: Promise<{ channelId: Id<"channels"> }>;
}) {
  const { channelId } = use(params);
  return (
    <div className="flex flex-col flex-1">
      <Messages id={channelId} />
    </div>
  );
}
