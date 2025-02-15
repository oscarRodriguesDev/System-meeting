import Provider from "./components/sessionProvider";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
