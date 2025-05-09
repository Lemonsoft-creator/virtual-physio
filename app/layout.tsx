import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head />
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
