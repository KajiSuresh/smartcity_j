import { AdjustableSidebar } from "./layout/adjustable-sidebar"
import { Header } from "./layout/header"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen overflow-hidden">
      <AdjustableSidebar>
        <Header />
        <main className="h-[calc(100vh-4rem)] overflow-y-auto">
          {children}
        </main>
      </AdjustableSidebar>
    </div>
  )
}