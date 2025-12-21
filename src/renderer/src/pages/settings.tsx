import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { COLOR_PRESETS, applyColorPreset } from "@/lib/utils"

function Settings() {
  const [rpcEnabled, setRpcEnabled] = useState<boolean>(true)
  const [checking, setChecking] = useState(false)
  const [currentColor, setCurrentColor] = useState<string>("lime")

  useEffect(() => {
    const disabled = localStorage.getItem("discordRpcDisabled")
    setRpcEnabled(!(disabled === "true"))

    const savedColor = localStorage.getItem("colorPreset") || "lime"
    setCurrentColor(savedColor)
    applyColorPreset(savedColor as keyof typeof COLOR_PRESETS)
  }, [])

  const handleToggleRpc = async (checked: boolean) => {
    setRpcEnabled(checked)
    if (checked) {
      localStorage.removeItem("discordRpcDisabled")
      await window.electron.ipcRenderer.invoke("start-discord-rpc")
    } else {
      localStorage.setItem("discordRpcDisabled", "true")
      await window.electron.ipcRenderer.invoke("stop-discord-rpc")
    }
  }

  const handleColorChange = (colorName: string) => {
    setCurrentColor(colorName)
    applyColorPreset(colorName as keyof typeof COLOR_PRESETS)
  }

  // const openLogs = async () => {
  //   await window.electron.ipcRenderer.invoke('app:open-logs')
  // }

  const checkForUpdates = async () => {
    try {
      setChecking(true)
      const res = await window.electron.ipcRenderer.invoke("updater:check")
      if (res?.ok && !res.updateInfo) {
        toast.success("You're up to date")
      }
    } catch (e) {
      toast.error(String(e))
    } finally {
      setChecking(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Discord Rich Presence</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Label>Enable Discord RPC</Label>
            <Switch checked={rpcEnabled} onCheckedChange={(v) => handleToggleRpc(!!v)} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Updates</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Check for updates to Dotline.</p>
          </div>
          <Button variant="outline" onClick={checkForUpdates} disabled={checking}>
            {checking ? "Checking…" : "Check for updates"}
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Support</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Label>Report a issue or Request a feature </Label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  try {
                    window.open("https://discord.com/invite/En5YJYWj3Z", "_blank")
                  } catch {}
                }}
              >
                Support (on Discord)
              </Button>
              <Button
                onClick={() => {
                  try {
                    window.open("https://github.com/Parcoil/dotline/issues/new/choose", "_blank")
                  } catch {}
                }}
              >
                Report / Request (on GitHub)
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Theme Color</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Label>Dotline Theme Color</Label>
            <div className="flex items-center gap-2">
              {Object.entries(COLOR_PRESETS).map(([key, value]) => (
                <Button
                  key={key}
                  variant={currentColor === key ? "default" : "outline"}
                  onClick={() => handleColorChange(key)}
                >
                  {value.label}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* <Card>
        <CardHeader>
          <CardTitle>Logs</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Open the application logs folder.</p>
          </div>
          <Button variant="outline" onClick={openLogs}>
            Open Logs Folder
          </Button>
        </CardContent>
      </Card> */}
    </div>
  )
}

export default Settings
