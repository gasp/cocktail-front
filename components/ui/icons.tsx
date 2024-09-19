'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

function IconLogo({
  className,
  inverted,
  strokeWidth = 25,
  ...props
}: React.ComponentProps<'svg'> & { inverted?: boolean; strokeWidth?: number }) {
  const strokeColor = inverted ? 'black' : 'white'

  return (
    <svg
      viewBox="0 0 620 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        id="outer"
        fill={inverted ? 'white' : 'black'}
        stroke={strokeColor}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        d="
	M605.467,564.986c0,15.656-12.691,28.346-28.346,28.346H58.381c-15.656,0-28.347-12.689-28.347-28.346V46.247
	c0-15.656,12.691-28.347,28.347-28.347h518.741c15.654,0,28.346,12.691,28.346,28.347V564.986z"
      />
      <g>
        <line
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="121.5"
          y1="78.5"
          x2="178"
          y2="135"
        />

        <line
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="455.562"
          y1="78.501"
          x2="430.564"
          y2="103.5"
        />

        <line
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="178.77"
          y1="77.232"
          x2="193.53"
          y2="91.993"
        />

        <line
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="512.627"
          y1="78.873"
          x2="457.14"
          y2="134.36"
        />

        <rect
          x="126.5"
          y="143.5"
          fill="none"
          stroke={strokeColor}
          stroke-width="28"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          width="0"
          height="0"
        />

        <rect
          x="377"
          y="85"
          fill="none"
          stroke={strokeColor}
          stroke-width="28"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          width="0"
          height="0"
        />

        <rect
          x="246"
          y="86.5"
          fill="none"
          stroke={strokeColor}
          stroke-width="30"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          width="0"
          height="0"
        />

        <rect
          x="307.5"
          y="119"
          fill="none"
          stroke={strokeColor}
          stroke-width="32"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          width="0"
          height="0"
        />

        <rect
          x="511"
          y="143"
          fill="none"
          stroke={strokeColor}
          stroke-width="28"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          width="0"
          height="0"
        />

        <rect
          x="514"
          y="206.5"
          fill="none"
          stroke={strokeColor}
          stroke-width="31"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          width="0"
          height="0"
        />

        <rect
          x="515"
          y="297"
          fill="none"
          stroke={strokeColor}
          stroke-width="32"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          width="0"
          height="0"
        />

        <rect
          x="510"
          y="368.5"
          fill="none"
          stroke={strokeColor}
          stroke-width="28"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          width="0"
          height="0"
        />

        <rect
          x="513.5"
          y="433"
          fill="none"
          stroke={strokeColor}
          stroke-width="34"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          width="0"
          height="0"
        />

        <rect
          x="509.5"
          y="500"
          fill="none"
          stroke={strokeColor}
          stroke-width="28"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          width="0"
          height="0"
        />

        <rect
          x="126"
          y="532.5"
          fill="none"
          stroke={strokeColor}
          stroke-width="28"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          width="0"
          height="0"
        />

        <rect
          x="128"
          y="264"
          fill="none"
          stroke={strokeColor}
          stroke-width="28"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          width="0"
          height="0"
        />

        <rect
          x="122.5"
          y="206.5"
          fill="none"
          stroke={strokeColor}
          stroke-width="32"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          width="0"
          height="0"
        />

        <rect
          x="121.5"
          y="321.5"
          fill="none"
          stroke={strokeColor}
          stroke-width="33"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          width="0"
          height="0"
        />

        <line
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="245.5"
          y1="91"
          x2="245.5"
          y2="179"
        />

        <polyline
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="
		286,179.5 286,144.5 308.5,121.5 	"
        />

        <line
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="196.001"
          y1="180"
          x2="439.001"
          y2="180"
        />

        <polygon
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="
		224.5,222 409.501,222 316.5,340 	"
        />
        <path
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="
		M347.5,176c0,0,5.5-33,40.5-33s45.5,35,45.5,35"
        />

        <polyline
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="
		125,207.5 156.5,207.5 250,330 251,401.5 224,431 	"
        />

        <polyline
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="
		212.5,285 185.5,321.5 132,321.5 	"
        />

        <line
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="249.5"
          y1="373"
          x2="120.5"
          y2="373"
        />
        <path
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="
		M248.207,470.026C245.479,495.594,224.042,515.5,198,515.5c-27.891,0-50.5-22.833-50.5-51c0-25.227,18.136-46.176,41.959-50.274"
        />

        <polyline
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="
		512.5,213 486,248 444,249 364,355 413.5,357 445,378.5 508.5,301.5 	"
        />

        <ellipse
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          cx="390"
          cy="432.25"
          rx="22.5"
          ry="22.75"
        />

        <ellipse
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          cx="435.035"
          cy="506.849"
          rx="21.005"
          ry="21.239"
        />

        <line
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="412.5"
          y1="432.25"
          x2="507"
          y2="432.25"
        />

        <line
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="316"
          y1="337"
          x2="316.5"
          y2="530.5"
        />

        <line
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="272"
          y1="534"
          x2="360"
          y2="534"
        />

        <polyline
          fill="none"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="
		293.5,530 316.5,510 339.5,529.5 	"
        />

        <polygon
          fill={strokeColor}
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="
		224.5,222 409.501,222 316.5,340 	"
        />
      </g>
    </svg>
  )
}

function IconNextChat({
  className,
  inverted,
  ...props
}: React.ComponentProps<'svg'> & { inverted?: boolean }) {
  const id = React.useId()

  return (
    <svg
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4', className)}
      {...props}
    >
      <defs>
        <linearGradient
          id={`gradient-${id}-1`}
          x1="10.6889"
          y1="10.3556"
          x2="13.8445"
          y2="14.2667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={inverted ? 'white' : 'black'} />
          <stop
            offset={1}
            stopColor={inverted ? 'white' : 'black'}
            stopOpacity={0}
          />
        </linearGradient>
        <linearGradient
          id={`gradient-${id}-2`}
          x1="11.7555"
          y1="4.8"
          x2="11.7376"
          y2="9.50002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={inverted ? 'white' : 'black'} />
          <stop
            offset={1}
            stopColor={inverted ? 'white' : 'black'}
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
      <path
        d="M1 16L2.58314 11.2506C1.83084 9.74642 1.63835 8.02363 2.04013 6.39052C2.4419 4.75741 3.41171 3.32057 4.776 2.33712C6.1403 1.35367 7.81003 0.887808 9.4864 1.02289C11.1628 1.15798 12.7364 1.8852 13.9256 3.07442C15.1148 4.26363 15.842 5.83723 15.9771 7.5136C16.1122 9.18997 15.6463 10.8597 14.6629 12.224C13.6794 13.5883 12.2426 14.5581 10.6095 14.9599C8.97637 15.3616 7.25358 15.1692 5.74942 14.4169L1 16Z"
        fill={inverted ? 'black' : 'white'}
        stroke={inverted ? 'black' : 'white'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <mask
        id="mask0_91_2047"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={16}
        height={16}
      >
        <circle cx={9} cy={8} r={8} fill={inverted ? 'black' : 'white'} />
      </mask>
      <g mask="url(#mask0_91_2047)">
        <circle cx={9} cy={8} r={8} fill={inverted ? 'black' : 'white'} />
        <path
          d="M14.2896 14.0018L7.146 4.8H5.80005V11.1973H6.87681V6.16743L13.4444 14.6529C13.7407 14.4545 14.0231 14.2369 14.2896 14.0018Z"
          fill={`url(#gradient-${id}-1)`}
        />
        <rect
          x="11.2222"
          y="4.8"
          width="1.06667"
          height="6.4"
          fill={`url(#gradient-${id}-2)`}
        />
      </g>
    </svg>
  )
}

function IconGitHub({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function IconSeparator({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M16.88 3.549L7.12 20.451"></path>
    </svg>
  )
}

function IconArrowDown({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function IconArrowRight({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
    </svg>
  )
}

function IconPlus({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" />
    </svg>
  )
}

function IconArrowElbow({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" />
    </svg>
  )
}

// https://icones8.fr/icons/set/search
function IconSearch({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
    </svg>
  )
}

function IconSpinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4 animate-spin', className)}
      {...props}
    >
      <path d="M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128Z" />
    </svg>
  )
}

function IconSidebar({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM40 56h40v144H40Zm176 144H96V56h120v144Z" />
    </svg>
  )
}

function IconMoon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z" />
    </svg>
  )
}

function IconSun({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
    </svg>
  )
}

function IconExternalLink({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function ImageShaker({
  className,
  fill,
  ...props
}: React.ComponentProps<'svg'> & { inverted?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="black"
      height="800px"
      width="800px"
      className={className}
      viewBox="0 0 458 458"
      {...props}
    >
      <defs>
        <mask id="hole">
          <rect width="100%" height="100%" fill="white" />
          <g>
            <rect x="209.705" y="0" width="68.003" height="49.914" />
            <path d="M363.946,158.213c-7.996-43.854-42.237-79.23-86.926-91.174h-66.627c-44.689,11.944-78.93,47.32-86.927,91.174H363.946z" />
            <path
              d="M119.914,178.213l42.365,302.23c0.59,4.206,4.188,7.336,8.436,7.336H323.84c4.319,0,7.955-3.233,8.46-7.522
			l35.565-302.044H119.914z"
            />
          </g>
        </mask>
      </defs>
      <rect fill="black" width="100%" height="100%" mask="url(#hole)" />
    </svg>
  )
}

export {
  IconArrowDown,
  IconArrowElbow,
  IconArrowRight,
  IconExternalLink,
  IconGitHub,
  IconLogo,
  IconMoon,
  IconNextChat,
  IconPlus,
  IconSearch,
  IconSeparator,
  IconSidebar,
  IconSpinner,
  IconSun,
  ImageShaker
}
