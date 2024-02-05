"use client";

import { useState } from "react";
import copy from "clipboard-copy";
import Button from "./Button";
import { FaPhoneAlt } from "react-icons/fa";

export default function CopyPhoneNoButton({ number }: { number: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await copy("+91-7990582647");
      setIsCopied(true);

      // Reset the copy state after 3 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (error) {
      console.error("Error copying to clipboard", error);
    }
  };

  return (
    <>
      <Button
        text={`Phone: ${number}`}
        icon={<FaPhoneAlt />}
        onClick={handleCopyToClipboard}
      />
      {isCopied && (
        <span className="px-4 py-2 rounded-3xl bg-green-600 text-white">
          Copied!
        </span>
      )}
    </>
  );
}
