import { headers } from "next/headers";
import PricingCardsClient, { Currency } from "@/components/ui/pricing-cards.client";

const INR_COUNTRIES = new Set(["IN"]);

async function detectCurrencyFromHeaders(): Promise<Currency> {
  try {
    // Get headers in a way that works during SSR
    const headersList = await headers();

    // Check common geo headers
    const countryCode =
      headersList.get("x-vercel-ip-country") ||
      headersList.get("cf-ipcountry") ||
      headersList.get("x-country-code");

    if (countryCode && INR_COUNTRIES.has(countryCode.toUpperCase())) {
      return "INR";
    }

    // Check Accept-Language for region hints
    const acceptLanguage = headersList.get("accept-language");
    if (acceptLanguage) {
      const languages = acceptLanguage.split(",");
      for (const lang of languages) {
        const locale = lang.split(";")[0]?.trim();
        if (locale && locale.toLowerCase().includes("en-in")) {
          return "INR";
        }
      }
    }

    return "USD";
  } catch {
    // Fallback to USD if headers aren't available (during build, etc.)
    return "USD";
  }
}

export default async function PricingCards() {
  const defaultCurrency = await detectCurrencyFromHeaders();
  return <PricingCardsClient defaultCurrency={defaultCurrency} />;
}
