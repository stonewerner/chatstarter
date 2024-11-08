import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export function useImageUpload() {
  const generateUploadUrl = useMutation(
    api.functions.storage.generateUploadUrl
  );

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const url = await generateUploadUrl();
    const res = await fetch(url, {
      method: "POST",
      body: file,
    });
  };
}
