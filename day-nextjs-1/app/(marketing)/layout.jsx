
export default function RootLayout({ children }) {
  return (
    <>
      <header className="bg-green-900 text-white shadow-lg">
        Header (Marketing)
      </header>
      {children}
      <footer className="bg-yellow-900 text-white shadow-lg">
        Footer (Marketing)
      </footer>
    </>
  );
}
