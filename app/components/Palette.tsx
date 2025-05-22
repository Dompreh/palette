"use client"
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {colors} from '../utils/Data'
import {toast} from "sonner"

function Palette() {
  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex)
    toast.success('Copied!')
  }

  return (
    <>  
        <div className="max-w-3xl text-center mb-16  font-inter">
        <p className="text-lg text-gray-700 leading-relaxed">
          Colors once used by Renaissance masters, now they're yours. Each with a bitesized backstory. Click any shade
          to copy its hex code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl pb-8 md:pb-16">
        <TooltipProvider>
          {colors.map((color) => (
            <div key={color.name} className="flex flex-col items-center">
              <Tooltip defaultOpen={false}>
                <TooltipTrigger asChild>
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard(color.hex)}
                      className="pen-shape w-64 transition-transform hover:scale-101 focus:outline-none"
                      style={{
                        backgroundColor: color.hex,
                        borderLeftColor: color.hex,
                      }}
                      aria-label={`Copy ${color.name} color: ${color.hex}`}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-md text-sm p-3 bg-white shadow-lg border border-gray-200">
                  <p className="text-gray-700">{color.description}</p>
                </TooltipContent>
              </Tooltip>
              <p className="capitalize mt-3 text-sm font-medium">{color.name}</p>
            </div>
          ))}
        </TooltipProvider>
      </div>
    
    </>
  )
}

export default Palette