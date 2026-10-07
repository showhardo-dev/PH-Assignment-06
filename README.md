This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev

```
## Project name: Workout
## Short Description
workout is a simple workout library app where you can browse a collection of lifts, check out how to perform each one, and build your own plan for the day. I built it to keep workouts organized in one place, so you can pick exercises, save the ones you like for later, and see at a glance how many minutes and calories your plan adds up to.

## Technologies Used
- **Next.js 16** (App Router) for routing and server-side data fetching
- **React** with the Context API for sharing plan and saved workouts across pages
- **TypeScript** for type safety
- **Tailwind CSS** and **daisyUI** for styling and UI components
- **CONTEXT API** 
- **Vercel** for deployment

## Key Features
1. **Workout Library:** Browse 12 lifts covering every major muscle group, each card showing difficulty, rating, equipment, time, calories, sets, and reps.
2. **Detailed Workout Pages:** Open any lift to see a full description, the muscle groups it targets, and a step-by-step guide on how to perform it.
3. **Daily Plan Builder:** Add exercises to "Today's Plan" with a cap of five lifts a day, so you finish what you start before loading more.
4. **Save for Later:** Bookmark workouts in a separate "Saved" tab and move back and forth between your plan and your saved list.
5. **Plan Stats and Sorting:** See the total number of exercises, minutes, and calories for your plan, and sort your list by duration, calories, or rating.
