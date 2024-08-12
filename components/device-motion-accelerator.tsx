// thanks for the paper
// Anupam Das, Gunes Acar, Nikita Borisov, Amogh Pradeep. The Web's Sixth Sense: A Study of Scripts Accessing Smartphone Sensors. In Proceedings of the 25th ACM Conference on Computer and Communications Security (CCS), Toronto, Canada, October 15–19, 2018.
// sensor-js.xyz/webs-sixth-sense-ccs18.pdf
// inspired by https://github.com/alexgibson/shake.js/blob/master/shake.js

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

// what the maximum's acceleration level of a phone?
// it depends on the device model and the holder's strength
const is_ios = /iP(ad|od|hone)/i.test(window.navigator.userAgent)
const is_safari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)
const MAX_THRESOLD = is_ios && is_safari ? 1600 : 70

function colorLevel(thresold: number): string {
  const options = [
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuschia',
    'pink',
    'rose',
    'rouge'
  ]
  const len = options.length
  for (let i = len; i--; ) {
    if (thresold > (MAX_THRESOLD * i) / len) return options[i]
  }
  return options[0]
}

// it seems that on ios this is not linear and would need more investigation
function messagesLevel(thresold: number): string {
  const options = [
    'Cute',
    'Great',
    "That's the way to do it",
    'Awesome',
    'Keep it on',
    "Let's get grooving",
    'Oh my! what a shake'
  ]
  const len = options.length
  for (let i = len; i--; ) {
    if (thresold > (MAX_THRESOLD * i) / len) return options[i]
  }
  return options[0]
}

export function DeviceMotionAccelerator() {
  const [accel, setAccel] = useState<number>(0)
  const [max, setMax] = useState<number>(0)

  const capture = useCallback(
    (ev: DeviceMotionEvent) => {
      const delta = Math.floor(Math.abs(accel - (ev.acceleration?.z ?? 0)))
      if (delta > max) setMax(delta)
      // TODO debounce this would limit the number of re-renders?
      setAccel(delta)
    },
    [max, accel]
  )

  useEffect(() => {
    window.addEventListener('devicemotion', capture)
    return () => {
      window.removeEventListener('devicemotion', capture)
    }
  }, [capture])

  if (max === 0)
    return (
      <div className="absolute size-full top-10 left-0 bg-green-100 p-6">
        <Image
          className="mt-10"
          src="/shake-phone.png"
          alt="shake your phone"
          width={200}
          height={200}
        />
        <div className="text-xl text-black">Shake your phone</div>
        <div className="text-sm text-black">
          Let&apos;s get this cocktail ready
        </div>
      </div>
    )

  return (
    <div
      className={cn(
        `bg-${colorLevel(accel)}-200`,
        'absolute size-full top-10 left-0 p-6'
      )}
    >
      <Image
        className="mt-10"
        src="/shake-phone.png"
        alt="shake your phone"
        width={200}
        height={200}
      />
      <div className="text-xl text-black">Shake your phone</div>
      <div className="text-sm text-black">{messagesLevel(max)}</div>

      <code className="text-xs text-black">
        {max}/{MAX_THRESOLD} - {accel} - {colorLevel(accel)}
      </code>
      <div className="flex mt-10">
        <div className="bg-emerald-200 m-1 p-1 rounded-full" />
        <div className="bg-teal-200 m-1 p-1 rounded-full" />
        <div className="bg-teal-200 m-1 p-1 rounded-full" />
        <div className="bg-cyan-200 m-1 p-1 rounded-full" />
        <div className="bg-sky-200 m-1 p-1 rounded-full" />
        <div className="bg-blue-200 m-1 p-1 rounded-full" />
        <div className="bg-indigo-200 m-1 p-1 rounded-full" />
        <div className="bg-violet-200 m-1 p-1 rounded-full" />
        <div className="bg-purple-200 m-1 p-1 rounded-full" />
        <div className="bg-fuschia-200 m-1 p-1 rounded-full" />
        <div className="bg-pink-200 m-1 p-1 rounded-full" />
        <div className="bg-rose-200 m-1 p-1 rounded-full" />
        <div className="bg-rouge-200 m-1 p-1 rounded-full" />
      </div>
    </div>
  )
}
