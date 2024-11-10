import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const RecentSales = () => {
  return (
    <div className="space-y-8">
    <div className="flex items-center">
      <Avatar className="h-9 w-9">
        <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60" alt="Avatar" />
        <AvatarFallback>SD</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">Sarah Davis</p>
        <p className="text-sm text-muted-foreground">sarah@example.com</p>
      </div>
      <div className="ml-auto font-medium">+$1,999.00</div>
    </div>
    <div className="flex items-center">
      <Avatar className="h-9 w-9">
        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60" alt="Avatar" />
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">Michael Kim</p>
        <p className="text-sm text-muted-foreground">michael@example.com</p>
      </div>
      <div className="ml-auto font-medium">+$39.00</div>
    </div>
    <div className="flex items-center">
      <Avatar className="h-9 w-9">
        <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60" alt="Avatar" />
        <AvatarFallback>LA</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">Lisa Anderson</p>
        <p className="text-sm text-muted-foreground">lisa@example.com</p>
      </div>
      <div className="ml-auto font-medium">+$299.00</div>
    </div>
    <div className="flex items-center">
      <Avatar className="h-9 w-9">
        <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60" alt="Avatar" />
        <AvatarFallback>JM</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">James Miller</p>
        <p className="text-sm text-muted-foreground">james@example.com</p>
      </div>
      <div className="ml-auto font-medium">+$99.00</div>
    </div>
    <div className="flex items-center">
      <Avatar className="h-9 w-9">
        <AvatarImage src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60" alt="Avatar" />
        <AvatarFallback>EN</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">Emma Nelson</p>
        <p className="text-sm text-muted-foreground">emma@example.com</p>
      </div>
      <div className="ml-auto font-medium">+$849.00</div>
    </div>
  </div>
  )
}

export default RecentSales

