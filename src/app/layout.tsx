// @ts-nocheck
import "styles/globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";
import { Source_Code_Pro } from "next/font/google";
import { LandingPageWrapper } from "components/LandingPageWrapper";
import { ClerkProvider } from "@clerk/nextjs";
// export const metadata = {
//   title: "Lockedin AI - Resume Builder",
//   // description:
//   //   "OpenResume is a free, open-source, and powerful resume builder that allows anyone to create a modern professional resume in 3 simple steps. For those who have an existing resume, OpenResume also provides a resume parser to help test and confirm its ATS readability.",
// };

// @ts-ignore
export const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${source_code_pro.variable}`}>
        {/* <TopNavBar /> */}
        <ClerkProvider
          isSatellite={true}
          domain={"localhost:3001"}
          signInUrl="http://localhost:3000/sign-in"
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <LandingPageWrapper>{children}</LandingPageWrapper>
        </ClerkProvider>

        {/* <Analytics /> */}
      </body>
    </html>
  );
}
