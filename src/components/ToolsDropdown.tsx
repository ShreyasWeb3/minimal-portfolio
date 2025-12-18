import { useState } from "react";
import { Wrench, X } from "lucide-react"; // Added X icon import
import mxMouse from "@/assets/mouse.png";
import macbook from "@/assets/macbook.png";
import chair from "@/assets/chair.png";

interface Tool {
  name: string;
  image: string;
  delay: number;
}

const tools: Tool[] = [
  { name: "Logitech MX Master 3S", image: mxMouse, delay: 0 },
  { name: "IKEA Chair", image: chair, delay: 0.2 },
  { name: "MacBook Pro M3", image: macbook, delay: 0.4 },
];

export function ToolsDropdown() {
  const [showTools, setShowTools] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setShowTools(!showTools);
  };

  return (
    <>
      {/* Button */}
      <div className="mt-6">
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative px-4 py-2 bg-secondary text-foreground rounded-lg font-medium
                     transition-all duration-300 hover:bg-secondary/80 hover:scale-105
                     flex items-center gap-2 z-30" 
        >
          <Wrench className="w-4 h-4" />
          <span>Tools</span>
          
          {isHovered && !showTools && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 
                          bg-foreground text-background text-sm rounded-md whitespace-nowrap
                          animate-fade-in">
              Click to reveal the tools I use
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
            </div>
          )}
        </button>
      </div>

      {showTools && (
        <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none flex flex-col items-center pb-4">    

          <div className="flex mb-10 justify-center items-end gap-8">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="animate-drop-tool pointer-events-auto"
                style={{ 
                  animationDelay: `${tool.delay}s`,
                  opacity: 0
                }}
              >
                <div className="relative group">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl
                             transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 
                                bg-foreground text-background text-xs rounded-full
                                opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tool.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowTools(false)}
            className="pointer-events-auto p-2 mt-10 rounded-full text-muted-foreground bg-[#c65d1c]
                       hover:text-foreground hover:bg-secondary/30 transition-all duration-200 animate-fade-in"
            aria-label="Close tools"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
        
      )}
    </>
  );
}