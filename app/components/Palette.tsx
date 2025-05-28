"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { colors } from "../utils/Data";
import { toast } from "sonner";

type Color = {
  name: string;
  hex: string;
  description: string;
};

function Palette() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(18);
  const [recent, setRecent] = useState<Color[]>([]);
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  const isMobile = useRef(false);


  useEffect(() => {
    setRecent(colors);
  }, []);

  useEffect(() => {
    // Detect mobile once on mount
    isMobile.current = window.innerWidth < 768;

    // Close tooltip on outside click (mobile only)
    const handleClickOutside = (e: MouseEvent) => {
      if (openTooltip) {
        setOpenTooltip(null);
      }
    };

    if (isMobile.current) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      if (isMobile.current) {
        document.removeEventListener("click", handleClickOutside);
      }
    };
  }, [openTooltip]);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    toast.success("Copied!");
  };

  const loadMore = () => {
    setLoading(true);

    setTimeout(() => {
      setCount((prev) => Math.min(prev + 18, recent.length));
    }, 900);
  };

  const visibleColors = recent.slice(0, count);

  const hasMoreColors = count < recent?.length;
  
  const handleClick = (
    e: React.MouseEvent,
    color: Color
  ) => {
    e.stopPropagation(); // Prevent global click from closing it
    copyToClipboard(color.hex);

    if (isMobile.current) {
      setOpenTooltip((prev) => (prev === color.name ? null : color.name));
    }
  };

  return (
    <>
      <div className="max-w-3xl text-center mb-16  font-inter">
        <p className="text-lg text-gray-700 leading-relaxed">
          Colors once used by Renaissance masters, now they're yours. Each with
          a bitesized backstory. Click any shade to copy its hex code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl pb-8 md:pb-16">
        <TooltipProvider>
          {visibleColors.map((color) => (
            <div key={color.name} className="flex flex-col items-center">
              <Tooltip  open={isMobile.current ? openTooltip === color.name : undefined}>
                <TooltipTrigger asChild>
                  <div
                    className="relative"
                  >
                    <button
                     onClick={(e) => handleClick(e, color)}
                      className="pen-shape w-64 transition-transform hover:scale-101 focus:outline-none"
                      style={{
                        backgroundColor: color.hex,
                        borderLeftColor: color.hex,
                      }}
                      aria-label={`Copy ${color.name} color: ${color.hex}`}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="max-w-md text-sm p-3 bg-white shadow-lg border border-gray-200"
                >
                  <p className="text-gray-700">{color.description}</p>
                </TooltipContent>
              </Tooltip>
              <p className="capitalize mt-3 text-sm font-medium">
                {color.name}
              </p>
            </div>
          ))}
        </TooltipProvider>
      </div>
      <div className="flex justify-center items-center">
        {hasMoreColors && (
          <div className="text-center ">
            <Button
              className="cursor-pointer bg-[#F3C122] hover:bg-[#F3C122/90] relative"
              onClick={loadMore}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="opacity-0">Load More</span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </span>
                </>
              ) : (
                "Load More"
              )}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default Palette;
