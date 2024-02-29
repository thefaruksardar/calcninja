"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GoCopy } from "react-icons/go";
import { FaCheck, FaReddit, FaTelegram, FaWhatsapp } from "react-icons/fa6";

import {
  RedditShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import { AnimatePresence, motion } from "framer-motion";
import { MdShare } from "react-icons/md";

export default function Share({ title }: { title?: string }) {
  const [show, setShow] = useState(false);
  let [open, setOpen] = useState(false);

  const handleClick = (url: string) => {
    setShow(true);
    const time = setTimeout(() => {
      setShow(false);
    }, 1300);

    setShow(true);
    navigator.clipboard.writeText(url);
  };

  const shareTitle = title || "https://calcninja.com";

  const shareUrl = "https://calcninja.com";
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <div className="text-xl text-white rounded-full transition-all hover:bg-blue-100">
          <MdShare />
        </div>
      </Dialog.Trigger>

      <Dialog.Overlay className="fixed inset-0 bg-slate-100/30 backdrop-blur-[1px]" />

      <AnimatePresence>
        {open && (
          <Dialog.Content
            className="bg-white absolute top-20 right-3 border pt-3 px-3  rounded-lg origin-top-right md:w-1/3"
            asChild
            forceMount
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <ul className="not-ul list-none flex gap-[1.15rem] text-gray-800/90">
                <li
                  className="flex items-center gap-2 pb-4 border-b cursor-pointer"
                  onClick={() => handleClick(shareTitle)}
                >
                  {show ? (
                    <FaCheck className="text-xl" />
                  ) : (
                    <GoCopy className="text-xl" />
                  )}
                </li>
                <li>
                  <TelegramShareButton
                    url={shareUrl}
                    title={shareTitle}
                    className="flex items-center gap-2"
                  >
                    <FaTelegram className="text-2xl" />
                  </TelegramShareButton>
                </li>
                <li>
                  <RedditShareButton
                    url={shareUrl}
                    title={shareTitle}
                    className="flex items-center gap-2"
                  >
                    <FaReddit className="text-2xl" />
                  </RedditShareButton>
                </li>
                <li>
                  <WhatsappShareButton
                    url={shareUrl}
                    title={shareTitle}
                    className="flex items-center gap-2"
                  >
                    <FaWhatsapp className="text-2xl" />
                  </WhatsappShareButton>
                </li>
              </ul>
            </motion.div>
          </Dialog.Content>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
