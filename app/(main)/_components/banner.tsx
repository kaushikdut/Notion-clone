"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { useMutation } from "convex/react";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modal/confirm-modal";

interface BannerProps {
  documentId: Id<"document">;
}

const Banner = ({ documentId }: BannerProps) => {
  const restore = useMutation(api.documents.restore);
  const remove = useMutation(api.documents.remove);
  const router = useRouter();

  const onRestore = () => {
    const promoise = restore({ id: documentId });

    toast.promise(promoise, {
      loading: "Restoring note...",
      success: "Note Restored!",
      error: "Failed to restore note.",
    });
  };
  const onRemove = () => {
    const promoise = remove({ id: documentId });

    toast.promise(promoise, {
      loading: "Deleting note...",
      success: "Note deleted!",
      error: "Failed to delete note.",
    });
    router.push("/documents");
  };

  return (
    <div className="w-full bg-rose-500 text-center text-sm p-2 text-white  flex items-center gap-x-2 justify-center">
      <p>This page is in the Trash</p>
      <Button
        size={"sm"}
        onClick={onRestore}
        variant={"outline"}
        className="border-white bg-transparent hover:bg-primary/5 text-white"
      >
        Restore page
      </Button>
      <ConfirmModal onConfirm={onRemove}>
        <Button
          size={"sm"}
          variant={"outline"}
          className="border-white bg-transparent hover:bg-primary/5 text-white"
        >
          Delete forever
        </Button>
      </ConfirmModal>
    </div>
  );
};

export default Banner;
