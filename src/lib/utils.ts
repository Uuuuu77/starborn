import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines Tailwind classes with design system utilities
 * 
 * Ensures proper class precedence for the Starborn theme while maintaining
 * Tailwind's utility-first approach. Handles conditional styling for cosmic
 * and stellar variants with proper merge resolution, preventing duplicate
 * classes and maintaining design system consistency.
 * 
 * @param inputs - Array of class strings, objects, or conditional expressions
 * @returns Optimized className string for component styling
 * 
 * @example
 * ```tsx
 * cn(
 *   "base-component-classes",
 *   isActive && "stellar-text",
 *   variant === "cosmic" && "cosmic-gradient",
 *   className
 * )
 * ```
 * 
 * @example
 * ```tsx
 * cn(
 *   "card-interactive animate-fade-in-up",
 *   {
 *     "stellar-text": variant === "stellar",
 *     "cosmic-text": variant === "cosmic"
 *   },
 *   className
 * )
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
