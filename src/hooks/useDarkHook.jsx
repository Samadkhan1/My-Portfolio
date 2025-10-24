import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for existing preference
    if (typeof window !== 'undefined') {
      const savedPreference = localStorage.getItem('darkMode');
      if (savedPreference !== null) {
        return savedPreference === 'true';
      }
      // Fallback to OS preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
useEffect(()=>{
    document.documentElement.classList.toggle('dark',isDarkMode)
},[isDarkMode])
return [isDarkMode,setIsDarkMode]
}