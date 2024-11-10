"use client"

import { Sidebar } from "./sidebar"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

interface AdjustableSidebarProps {
  defaultSize?: number
  defaultCollapsed?: boolean
  children: React.ReactNode
}

export function AdjustableSidebar({ 
  defaultSize = 20,
  children 
}: AdjustableSidebarProps) {
  return (
    <ResizablePanelGroup direction="horizontal" className="h-full">
      <ResizablePanel
        defaultSize={defaultSize}
        collapsible={true}
        minSize={12}
        maxSize={30}
        className="hidden md:block"
      >
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle withHandle className="hidden md:flex" />
      <ResizablePanel defaultSize={100 - defaultSize} minSize={30}>
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}