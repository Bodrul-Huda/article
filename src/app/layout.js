import "./globals.css";

import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "News App",
  description: "24X7 news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#E60000" speed={200} height={2} />

        {children}
      </body>
    </html>
  );
}
