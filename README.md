## Solution

- Loading and error states should communicate to the user when data is being fetched and if an error occurs.
- User should be able to filter transactions by date, tags, and teams. The date filter UI should be user-friendly, such as a calendar. Tags and teams UI should be dropdowns and allow multiple selections.
- Date filter should have an initial value (e.g., one year).
- Tags and teams filters should have an initial value (e.g., all).
- Line chart should be responsive, work across different devices/screens and using assistive technology such as a screen reader.
- Each type of data (tags, teams, transactions) should get its own “table” in the state:

```shell
tags: {
  isPending: false,
  isFailure: false,
  tagsData: [],
},
teams: {
  isPending: false,
  isFailure: false,
  teamsData: [],
},
transactions: {
  isPending: false,
  isFailure: false,
  transactionsData: [],
},
```

- Tags and teams data will populate the filter dropdown options.
- On page load, fetch tags, teams, and transactions.
- Filter data on the backend using the transaction endpoint params.

## Gameplan

1. Review requirements, data types, and API contracts. Look into suggested packages. I decided to use Next.js instead of Create React App to deploy the app as a static asset to S3 and Tailwind instead of Ant Design, as I am more familiar with Tailwind. Also, I decided to use vanilla JavaScript instead of Moment.js.
2. Ask questions.
3. Decide on architecture (Next.js, AWS for SSG).
4. Create a repo and commit my personal Next.js boilerplate/starter.
5. Create stories/branches:

```shell
feat/add-mock-api
feat/add-state-and-ui
feat/add-graph
```

6. Start with mocking API endpoints using https://mswjs.io/ (after spending ~30 min, decided to use Next.js API routes/deploy to Vercel for SSR support) (PR: https://github.com/karlpawlowicz/float-test-app/pull/1).
7. Add state using context and dropdown UI using Tailwind (PR: https://github.com/karlpawlowicz/float-test-app/pull/2).
8. Add line chart using Recharts and the https://recharts.org/en-US/examples example (PR: https://github.com/karlpawlowicz/float-test-app/pull/3).

## TODO

- Better loading states (e.g., spinner).
- Error states.
- Match to the mockup (missing amount spent, date filter, dropdown active state).
- Unit (React Testing Library)/e2e tests (Cypress).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
