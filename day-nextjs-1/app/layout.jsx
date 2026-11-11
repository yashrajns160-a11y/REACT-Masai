import "./globals.css";

export const metadata = {
  title : {
    template : "%s | Technical Agency ",
    default : "Technical Agency"
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <header className="bg-gray-900 text-white shadow-lg">
          My Root Header
        </header> */}
        {children}
        {/* <footer className="bg-gray-900 text-white shadow-lg">
          Footer details
        </footer> */}
      </body>
    </html>
  );
}
