import "./index.css"
import { ThemeProvider } from "./components/theme-provider"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { HashRouter as Router } from "react-router"
import { PostHogProvider } from "posthog-js/react"
import { applyColorPreset, COLOR_PRESETS } from "./lib/utils"

const options = {
  api_host: "https://us.i.posthog.com",
  defaults: "2025-05-24"
}

const params = new URLSearchParams(window.location.search)
const isOverlay = params.get("overlay") === "1"

if (isOverlay) {
  document.body.style.background = "transparent"
}

// Apply saved color preset on app startup
const savedColor = localStorage.getItem("colorPreset") || "lime"
applyColorPreset(savedColor as keyof typeof COLOR_PRESETS)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system">
      <Router>
        <PostHogProvider
          apiKey={"phc_yrKFrR0A214eflXwdPzDQ1Esf7qtw7USy0Zg8TdbqCT"}
          //@ts-ignore
          options={options}
        >
          <App />
        </PostHogProvider>
      </Router>
    </ThemeProvider>
  </StrictMode>
)
