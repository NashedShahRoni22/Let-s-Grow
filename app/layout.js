import "./globals.css";

export const metadata = {
  title: "Let's Grow",
  description: "Let's Grow Togather Guys!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
