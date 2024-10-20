import { VAR_BOLD_DEV, VAR_BOLD_PROD } from "@/shared/constants.ts";
import { BoldCheckoutEnvironment } from "@/types/BoldCheckout.ts";

/**
 * Retrieves the appropriate Bold API key based on the provided checkout environment.
 *
 * @param env - The Bold checkout environment, either 'production' or 'development'.
 * @returns The corresponding Bold API key.
 */
export default function getBoldApiKey(env: BoldCheckoutEnvironment): string {
  if (env === BoldCheckoutEnvironment.PRODUCTION) {
    return VAR_BOLD_PROD;
  }
  return VAR_BOLD_DEV;
}
