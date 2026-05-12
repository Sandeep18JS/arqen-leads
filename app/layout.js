import "./globals.css";

export const metadata = {
  title: "Arqen",
  description: "Arqen Properties is a leading real estate agency in Dubai specializing in luxury homes for sale, apartments for rent, and off-plan properties across prime locations like Dubai Marina, Palm Jumeirah, Dubai Land and Downtown Dubai",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
