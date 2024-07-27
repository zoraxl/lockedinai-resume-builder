// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // Set the homepage as a public route
// const isPublicRoute = createRouteMatcher(["/"]);

// // Set the necessary options for a satellite application
// const options = {
//   isSatellite: true,
//   // signInUrl: 'https://primary.dev/sign-in',
//   // Or, in development:
//   signInUrl: "http:localhost:3000/sign-in",
//   // domain: 'https://primary.dev',
//   // Or, in development:
//   domain: "http:localhost:3000",
// };

// export default clerkMiddleware((auth, req) => {
//   if (isPublicRoute(req)) return; // if it's a public route, do nothing
//   auth().protect(); // for any other route, require auth
// }, options);

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };
