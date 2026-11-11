

export default function RootLayout({ children }) {
  return (
    <>
      <header className="bg-gray-900 text-white shadow-lg">
        Header (Application)
      </header>
      {children}
      <footer className="bg-blue-900 text-white shadow-lg">
        Footer (Application)
      </footer>
    </>
  );
}
