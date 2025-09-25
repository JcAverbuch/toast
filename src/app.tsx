import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import {
  Activity,
  ExternalLink,
  Globe,
  Code,
  Database,
  Palette,
  type LucideIcon,
} from "lucide-react"

type Status = "Live" | "Beta" | "WIP" | "Coming Soon"

type WebApp = {
  name: string
  description: string
  icon: LucideIcon        // store the component type
  status: Status
  url: string
}

const webapps: WebApp[] = [
  { name: "SoCal Sailer", description: "Forecasting adverse weather patterns on a multi-day sailing trip", icon: Database, status: "WIP", url: "#" },
  { name: "TukTuk Revolution", description: "Predictive maintence for my tuktuk", icon: Palette, status: "Coming Soon", url: "#" },
  { name: "Shark Bait", description: "Idk how tech will save me here... thinking", icon: Code, status: "Coming Soon", url: "#" },
  { name: "TBD", description: "What crazy crash out will be next...", icon: Globe, status: "Coming Soon", url: "#" },
]

function getStatusColor(status: Status) {
  switch (status) {
    case "Live":
      return "bg-green-100 text-green-800 border-green-200"
    case "Beta":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "WIP":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "Coming Soon":
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <h1 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-extrabold text-transparent">
              Expedition Hacking
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              after being asked a few too many times how i'm not dead yet, i'm building mini-projects with a market of 1 to keep it that way.            </p>
          </div>

          {/* Status Card */}
          <Card className="mb-12 border-0 bg-white/60 p-8 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                <span className="text-muted-foreground">Status:</span>
                <Badge variant="secondary" className="border-green-200 bg-green-100 text-green-800">
                  Still alive
                </Badge>
              </div>
            </div>
          </Card>

          {/* Web Apps Grid */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {webapps.map((app, index) => {
              const Icon = app.icon
              return (
                <Card
                  key={index}
                  className="group border-0 bg-white/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-gray-100 p-2 transition-colors group-hover:bg-gray-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-foreground font-semibold">{app.name}</h3>
                        <p className="text-muted-foreground">{app.description}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className={getStatusColor(app.status)}>
                      {app.status}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full justify-between transition-colors hover:bg-gray-50"
                    onClick={() => window.open(app.url, "_blank")}
                  >
                    <span>Launch App</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Card>
              )
            })}
          </div>

          {/* Footer */}
          <div className="text-center text-muted-foreground">
            <p>More projects coming soon. Stay tuned for updates.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
