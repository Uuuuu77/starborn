import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines and optimizes Tailwind CSS classes with design system utilities
 * 
 * Merges multiple class values while ensuring proper class precedence for the 
 * Starborn Dominion design system. Handles conditional styling for cosmic and 
 * stellar variants while preventing conflicting Tailwind utilities.
 * 
 * This utility is essential for maintaining design system consistency across
 * all components in the constitutional framework.
 * 
 * @param inputs - Array of class strings, objects, or conditional expressions
 * @returns Optimized className string for component styling
 * 
 * @example
 * // Basic usage with design system classes
 * cn('stellar-text', 'card-interactive', isActive && 'bg-cosmic-500')
 * 
 * @example
 * // Combining conditional cosmic theming
 * cn(
 *   'constitution-section',
 *   variant === 'featured' && 'stellar-text cosmic-glow',
 *   disabled && 'opacity-50'
 * )
 * 
 * @example
 * // Complex conditional styling with Starborn tokens
 * cn(
 *   'nav-link',
 *   isActive ? 'text-stellar-400 border-stellar-400' : 'text-foreground/70',
 *   className
 * )
 * 
 * @performance
 * - Optimizes bundle size by removing duplicate classes
 * - Ensures correct CSS specificity for design system
 * - Handles complex conditional logic efficiently
 * 
 * @design
 * - Maintains cosmic color palette consistency
 * - Preserves stellar animation class precedence
 * - Supports glassmorphism and backdrop effects
 * - Compatible with responsive design patterns
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
