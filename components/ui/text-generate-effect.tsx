"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const renderedRef = useRef(false);

  useEffect(() => {
    if (renderedRef.current) return;
    
    let i = 0;
    let timeout: NodeJS.Timeout;
    
    const typeNextCharacter = () => {
      if (i < words.length) {
        setDisplayedText(words.substring(0, i + 1));
        i++;
        timeout = setTimeout(typeNextCharacter, 40);
      }
    };
    
    timeout = setTimeout(typeNextCharacter, 40);
    renderedRef.current = true;
    
    return () => {
      clearTimeout(timeout);
    };
  }, [words]);

  return (
    <span className={cn("relative inline-block", className)}>
      {displayedText || words}
    </span>
  );
}; 