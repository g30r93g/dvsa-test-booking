import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "DVSA Test Booking",
  description: "Book your DVSA driving test with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl="/"
      signUpFallbackRedirectUrl="/onboarding"
      signInForceRedirectUrl="/"
      signUpForceRedirectUrl="/onboarding"
    >
      <html
        lang="en"
        suppressHydrationWarning
    >
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
