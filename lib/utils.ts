import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString( 'en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function parseServerActionResponse<T>(response: T){
  return JSON.parse(JSON.stringify((response)))
}

// Alternatively, if you want a simpler version:
export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

// lib/utils.ts
export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}