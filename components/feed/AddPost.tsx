"use client";

import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function AddPost() {
  const { photoURL, displayName } = useAppSelector(
    (state) => state.authReducer
  );
  return (
    <section>
      <div className="flex gap-4 w-full">
        <Image
          src={photoURL || ""}
          alt="profile"
          width={50}
          height={50}
          className="w-11 h-11 rounded-full"
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button className="z-10 bg-transparent dark:bg-transparent dark:hover:bg-transparent outline outline-1 w-full rounded-full justify-start text-black dark:text-white">
              Start a post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>{displayName} </DialogTitle>
            </DialogHeader>
            <div>
              <Textarea
                rows={8}
                placeholder="What do you want to talk about."
              />
              <Input id="picture" type="file" className="cursor-pointer" />
            </div>
            <DialogFooter>
              <Button type="submit">Post</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
