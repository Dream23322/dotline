import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const COLOR_PRESETS = {
  lime: {
    label: 'Lime',
    primary: 'oklch(0.6271 0.1699 149.2138)',
    primaryForeground: 'oklch(0.9851 0 0)',
    chart1: 'oklch(0.7227 0.192 149.5793)',
    sidebarPrimary: 'oklch(0.6271 0.1699 149.2138)',
    sidebarPrimaryForeground: 'oklch(0.9851 0 0)',
    accent: 'oklch(0.9819 0.0181 155.8263)',
    accentForeground: 'oklch(0.4479 0.1083 151.3277)',
    ring: 'oklch(0.6271 0.1699 149.2138)',
    sidebarRing: 'oklch(0.6271 0.1699 149.2138)',
    darkPrimary: 'oklch(0.7227 0.192 149.5793)',
    darkPrimaryForeground: 'oklch(0.2664 0.0628 152.9343)',
    darkChart1: 'oklch(0.8003 0.1821 151.711)',
    darkSidebarPrimary: 'oklch(0.7227 0.192 149.5793)',
    darkSidebarPrimaryForeground: 'oklch(0.2664 0.0628 152.9343)',
    darkAccent: 'oklch(0.2716 0.0287 152.4732)',
    darkAccentForeground: 'oklch(0.8003 0.1821 151.711)',
    darkRing: 'oklch(0.7227 0.192 149.5793)',
    darkSidebarRing: 'oklch(0.7227 0.192 149.5793)',
  },
  blue: {
    label: 'Blue',
    primary: 'oklch(0.5874 0.1926 254.0379)',
    primaryForeground: 'oklch(0.9851 0 0)',
    chart1: 'oklch(0.6956 0.2007 254.6699)',
    sidebarPrimary: 'oklch(0.5874 0.1926 254.0379)',
    sidebarPrimaryForeground: 'oklch(0.9851 0 0)',
    accent: 'oklch(0.9819 0.0181 255.0)',
    accentForeground: 'oklch(0.3479 0.1283 254.3277)',
    ring: 'oklch(0.5874 0.1926 254.0379)',
    sidebarRing: 'oklch(0.5874 0.1926 254.0379)',
    darkPrimary: 'oklch(0.6956 0.2007 254.6699)',
    darkPrimaryForeground: 'oklch(0.2664 0.0828 254.9343)',
    darkChart1: 'oklch(0.8003 0.1821 254.711)',
    darkSidebarPrimary: 'oklch(0.6956 0.2007 254.6699)',
    darkSidebarPrimaryForeground: 'oklch(0.2664 0.0828 254.9343)',
    darkAccent: 'oklch(0.2716 0.0287 254.4732)',
    darkAccentForeground: 'oklch(0.8003 0.1821 254.711)',
    darkRing: 'oklch(0.6956 0.2007 254.6699)',
    darkSidebarRing: 'oklch(0.6956 0.2007 254.6699)',
  },
  purple: {
    label: 'Purple',
    primary: 'oklch(0.5874 0.1926 290.0379)',
    primaryForeground: 'oklch(0.9851 0 0)',
    chart1: 'oklch(0.6956 0.2007 290.6699)',
    sidebarPrimary: 'oklch(0.5874 0.1926 290.0379)',
    sidebarPrimaryForeground: 'oklch(0.9851 0 0)',
    accent: 'oklch(0.9819 0.0181 290.0)',
    accentForeground: 'oklch(0.3479 0.1283 290.3277)',
    ring: 'oklch(0.5874 0.1926 290.0379)',
    sidebarRing: 'oklch(0.5874 0.1926 290.0379)',
    darkPrimary: 'oklch(0.6956 0.2007 290.6699)',
    darkPrimaryForeground: 'oklch(0.2664 0.0828 290.9343)',
    darkChart1: 'oklch(0.8003 0.1821 290.711)',
    darkSidebarPrimary: 'oklch(0.6956 0.2007 290.6699)',
    darkSidebarPrimaryForeground: 'oklch(0.2664 0.0828 290.9343)',
    darkAccent: 'oklch(0.2716 0.0287 290.4732)',
    darkAccentForeground: 'oklch(0.8003 0.1821 290.711)',
    darkRing: 'oklch(0.6956 0.2007 290.6699)',
    darkSidebarRing: 'oklch(0.6956 0.2007 290.6699)',
  },
  red: {
    label: 'Red',
    primary: 'oklch(0.5874 0.1926 25.0379)',
    primaryForeground: 'oklch(0.9851 0 0)',
    chart1: 'oklch(0.6956 0.2007 25.6699)',
    sidebarPrimary: 'oklch(0.5874 0.1926 25.0379)',
    sidebarPrimaryForeground: 'oklch(0.9851 0 0)',
    accent: 'oklch(0.9819 0.0181 25.0)',
    accentForeground: 'oklch(0.3479 0.1283 25.3277)',
    ring: 'oklch(0.5874 0.1926 25.0379)',
    sidebarRing: 'oklch(0.5874 0.1926 25.0379)',
    darkPrimary: 'oklch(0.6956 0.2007 25.6699)',
    darkPrimaryForeground: 'oklch(0.2664 0.0828 25.9343)',
    darkChart1: 'oklch(0.8003 0.1821 25.711)',
    darkSidebarPrimary: 'oklch(0.6956 0.2007 25.6699)',
    darkSidebarPrimaryForeground: 'oklch(0.2664 0.0828 25.9343)',
    darkAccent: 'oklch(0.2716 0.0287 25.4732)',
    darkAccentForeground: 'oklch(0.8003 0.1821 25.711)',
    darkRing: 'oklch(0.6956 0.2007 25.6699)',
    darkSidebarRing: 'oklch(0.6956 0.2007 25.6699)',
  },
  orange: {
    label: 'Orange',
    primary: 'oklch(0.5874 0.1926 45.0379)',
    primaryForeground: 'oklch(0.9851 0 0)',
    chart1: 'oklch(0.6956 0.2007 45.6699)',
    sidebarPrimary: 'oklch(0.5874 0.1926 45.0379)',
    sidebarPrimaryForeground: 'oklch(0.9851 0 0)',
    accent: 'oklch(0.9819 0.0181 45.0)',
    accentForeground: 'oklch(0.3479 0.1283 45.3277)',
    ring: 'oklch(0.5874 0.1926 45.0379)',
    sidebarRing: 'oklch(0.5874 0.1926 45.0379)',
    darkPrimary: 'oklch(0.6956 0.2007 45.6699)',
    darkPrimaryForeground: 'oklch(0.2664 0.0828 45.9343)',
    darkChart1: 'oklch(0.8003 0.1821 45.711)',
    darkSidebarPrimary: 'oklch(0.6956 0.2007 45.6699)',
    darkSidebarPrimaryForeground: 'oklch(0.2664 0.0828 45.9343)',
    darkAccent: 'oklch(0.2716 0.0287 45.4732)',
    darkAccentForeground: 'oklch(0.8003 0.1821 45.711)',
    darkRing: 'oklch(0.6956 0.2007 45.6699)',
    darkSidebarRing: 'oklch(0.6956 0.2007 45.6699)',
  },
  cyan: {
    label: 'Cyan',
    primary: 'oklch(0.5874 0.1926 180.0379)',
    primaryForeground: 'oklch(0.9851 0 0)',
    chart1: 'oklch(0.6956 0.2007 180.6699)',
    sidebarPrimary: 'oklch(0.5874 0.1926 180.0379)',
    sidebarPrimaryForeground: 'oklch(0.9851 0 0)',
    accent: 'oklch(0.9819 0.0181 180.0)',
    accentForeground: 'oklch(0.3479 0.1283 180.3277)',
    ring: 'oklch(0.5874 0.1926 180.0379)',
    sidebarRing: 'oklch(0.5874 0.1926 180.0379)',
    darkPrimary: 'oklch(0.6956 0.2007 180.6699)',
    darkPrimaryForeground: 'oklch(0.2664 0.0828 180.9343)',
    darkChart1: 'oklch(0.8003 0.1821 180.711)',
    darkSidebarPrimary: 'oklch(0.6956 0.2007 180.6699)',
    darkSidebarPrimaryForeground: 'oklch(0.2664 0.0828 180.9343)',
    darkAccent: 'oklch(0.2716 0.0287 180.4732)',
    darkAccentForeground: 'oklch(0.8003 0.1821 180.711)',
    darkRing: 'oklch(0.6956 0.2007 180.6699)',
    darkSidebarRing: 'oklch(0.6956 0.2007 180.6699)',
  },
}

export function applyColorPreset(colorName: keyof typeof COLOR_PRESETS) {
  const preset = COLOR_PRESETS[colorName]
  if (!preset) return

  const root = document.documentElement

  // Light mode
  root.style.setProperty('--primary', preset.primary)
  root.style.setProperty('--primary-foreground', preset.primaryForeground)
  root.style.setProperty('--chart-1', preset.chart1)
  root.style.setProperty('--sidebar-primary', preset.sidebarPrimary)
  root.style.setProperty('--sidebar-primary-foreground', preset.sidebarPrimaryForeground)
  root.style.setProperty('--accent', preset.accent)
  root.style.setProperty('--accent-foreground', preset.accentForeground)
  root.style.setProperty('--ring', preset.ring)
  root.style.setProperty('--sidebar-ring', preset.sidebarRing)

  // Dark mode
  const darkRoot = document.documentElement.classList.contains('dark')
  if (darkRoot) {
    root.style.setProperty('--primary', preset.darkPrimary)
    root.style.setProperty('--primary-foreground', preset.darkPrimaryForeground)
    root.style.setProperty('--chart-1', preset.darkChart1)
    root.style.setProperty('--sidebar-primary', preset.darkSidebarPrimary)
    root.style.setProperty('--sidebar-primary-foreground', preset.darkSidebarPrimaryForeground)
    root.style.setProperty('--accent', preset.darkAccent)
    root.style.setProperty('--accent-foreground', preset.darkAccentForeground)
    root.style.setProperty('--ring', preset.darkRing)
    root.style.setProperty('--sidebar-ring', preset.darkSidebarRing)
  }

  // Save preference
  localStorage.setItem('colorPreset', colorName)
}
