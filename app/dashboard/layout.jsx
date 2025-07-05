import Sidebar from "../components/shared/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Sidebar />
      {/* Main content with left padding on desktop */}
      <main className="md:pl-64 bg-gradient-to-tr from-slate-900 via-gray-900 to-emerald-950 py-6 min-h-screen overflow-x-hidden">
        {children}
      </main>
    </>
  );
}
