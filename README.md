# Cocktail.ai
## Features

- [Next.js](https://nextjs.org) App Router
- React Server Components (RSCs), Suspense, and Server Actions
- [fuse.js](https://www.fusejs.io/) for fuzzy search
- [framer motion](https://www.framer.com/motion/) for animations
- [socket.io](https://socket.io/) for websockets
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com) for headless component primitives
  - Icons from [Phosphor Icons](https://phosphoricons.com)


## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example). An `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various OpenAI and authentication provider accounts.


```bash
yarn
yarn dev
```

Your app template should now be running on [localhost:3000](http://localhost:3000/).
