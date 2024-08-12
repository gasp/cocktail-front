'use client'

import { socket } from '@/app/socket'
import { useEffect, useState } from 'react'

export function SocketDebug() {
  const [isConnected, setIsConnected] = useState(false)
  const [transport, setTransport] = useState('N/A')

  useEffect(() => {
    if (socket.connected) {
      onConnect()
    }

    function onConnect() {
      setIsConnected(true)
      setTransport(socket.io.engine.transport.name)

      socket.io.engine.on('upgrade', transport => {
        setTransport(transport.name)
      })
    }

    function onDisconnect() {
      setIsConnected(false)
      setTransport('N/A')
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
    }
  }, [])

  return (
    <div>
      socket:{' '}
      <span className="font-semibold">
        {isConnected ? 'connected' : 'disconnected'}
      </span>{' '}
      with <span className="font-semibold">{transport}</span>
    </div>
  )
}
