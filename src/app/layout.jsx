import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/animate.css";
import "../assets/css/jquery-ui.min.css";
import "../assets/css/style.css";
import Script from "next/script";

import { ProviderComponent } from "@/components/provider/Provider";

export const metadata = {
  title: "Pakistan International School Jeddah - English Section",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <div id="google_translate_element" style={{ display: "none" }} />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: "en" },
                "google_translate_element"
              );
            }
            window.googleTranslateElementInit = googleTranslateElementInit;
          `}
        </Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <ProviderComponent>{children}</ProviderComponent>
      </body>
    </html>
  );
}