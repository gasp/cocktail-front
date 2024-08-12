import Image from 'next/image'

export function DeviceMotionFullDesktopFallback() {
  return (
    <div className="fixed bg-muted size-full top-0 left-0">
      <div role="none" className="mt-10"></div>
      <div className="p-10 flex">
        <div style={{ width: 540 }} className="m-auto">
          <Image
            src="/cocktail-540x500.gif"
            width="540"
            height="500"
            alt="preparing your cocktail"
          />
          <div className="text-2xl mt-2">
            Please wait: we are prepping your cocktail
          </div>
          <div className="text-sm">
            (you should really try this app on your phone, it is much more fun!)
          </div>
        </div>
      </div>
    </div>
  )
}
