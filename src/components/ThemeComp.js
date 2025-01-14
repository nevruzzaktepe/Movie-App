"use client";
import React, { useState, useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === "system" ? systemTheme : theme;
  console.log(themeMode, "themeMode");


  if (!mounted) return null;

  return (
    <div>
      {themeMode === "light" ? (
        <CiDark onClick={() => setTheme('dark')} className='cursor-pointer' size={25} />
      ) : (
        <CiLight onClick={() => setTheme('light')} className='cursor-pointer' size={25} />
      )}
    </div>
  );
};

export default ThemeComp;
