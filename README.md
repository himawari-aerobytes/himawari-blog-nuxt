# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview



# bun
bun run preview


```

# 環境変数(.envファイル)
You must set environment arguments.  
LINE_CHANNEL_ID is LINE Developer tools channel id.   
LINK_LINE_SIGN_IN is AWS Lambda link. It works for getting LINE service token.  
CONTACT_LINK is AWS Lambda link. It works for sending e-mail to admin.  

```
LINE_CHANNEL_ID=
LINK_LINE_SIGN_IN=
CONTACT_LINK=
```
Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Architecture Image
![ArchitectureImage](https://github.com/himawari-aerobytes/himawari-blog-nuxt/assets/72549519/f4a30e66-c920-4d26-9c1a-fe286e66f870)