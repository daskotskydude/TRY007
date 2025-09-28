import '../styles/globals.css';
import '../styles/components/navbar.css';
import '../styles/components/sidebar.css';
import '../styles/components/button.css';
import '../styles/components/card.css';
import '../styles/components/toast.css';
import '../styles/components/logo.css';
import '../styles/components/notification-bell.css';
import '../styles/components/profile-dropdown.css';
import '../styles/components/tabs.css';
import '../styles/components/home.css';
import '../styles/components/create-admin.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}