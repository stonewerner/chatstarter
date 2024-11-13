import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Id } from "../../../../../convex/_generated/dataModel";

export function CreateInvite() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Create Invite
        </Button>
      </DialogTrigger>
    </Dialog>
  );
}

const EXPIRES_AT_OPTIONS = [
  { label: "Never", value: 0 },
  { label: "1 hour", value: 1 },
  { label: "6 hours", value: 6 },
  { label: "12 hours", value: 12 },
  { label: "24 hours", value: 24 },
  { label: "3 days", value: 72 },
  { label: "7 days", value: 168 },
];

const MAX_USES_OPTIONS = [
  { label: "Unlimited", value: 0 },
  { label: "1 Use", value: 1 },
  { label: "5 Uses", value: 5 },
  { label: "10 Uses", value: 10 },
  { label: "25 Uses", value: 25 },
  { label: "50 Uses", value: 50 },
  { label: "100 Uses", value: 100 },
];

function CreateInviteForm() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create Invite</DialogTitle>
      </DialogHeader>
      <form className="contents">
        <div className="flex flex-col gap-2">
          <Label htmlFor="expiresAt">Expires At</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select expiration" />
            </SelectTrigger>
            <SelectContent>
              {EXPIRES_AT_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value.toString()}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="maxUses">Max Uses</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select max uses" />
            </SelectTrigger>
            <SelectContent>
              {MAX_USES_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value.toString()}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button>Create Invite</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

function CreatedInvite({ inviteId }: { inviteId: Id<"invites"> }) {
  const url = new URL(`/join/${inviteId}`, window.location.href).toString();
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Invite Created</DialogTitle>
        <DialogDescription>
          You can send this invite link to your friends.
        </DialogDescription>
      </DialogHeader>
      <div className="flex gap-2">
        <Label htmlFor="url">Invite URL</Label>
        <Input id="url" type="text" value={url} readOnly />{" "}
      </div>
      <DialogFooter>
        <Button variant="secondary">Back</Button>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(url);
            toast.success("Copied invite URL");
          }}
        >
          Copy
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
