"use client";

import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className="flex-center h-[52px] min-w-[54px] items-center rounded-full bg-brand/10 dark:bg-dark-200 p-0 text-brand dark:text-light-300 shadow-none transition-all hover:bg-brand/20 dark:hover:bg-dark-100"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-6 h-6" />
      ) : (
        <Sun className="w-6 h-6" />
      )}
    </Button>
  );
};

export default ThemeToggle;
