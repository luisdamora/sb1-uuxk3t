import { BoldCheckoutEnvironment } from "@/types/BoldCheckout.ts";

/**
 * The phone number for the WhatsApp contact.
 */
export const VAR_WHATSAPP_PHONE = "573022349573";

/**
 * The phone number for the WhatsApp contact in international format.
 */
export const VAR_WHATSAPP_PHONE_TEXT = "+57 3022349573";

export const VAR_EMAIL_CONTACT = "info@siriocasaestudio.com";

/**
 * The production environment variable for Bold Checkout.
 */
export const VAR_BOLD_PROD: string =
  "mylWcASfATxMtKgpKsukr1ghX4C2L9pHRIesBjRhLII";

/**
 * The development environment variable for Bold Checkout.
 */
export const VAR_BOLD_DEV: string =
  "iqXYuM_5C2WtaOkadMKcIgwH2jD7lLWH_7XF6yA1wz4";

/**
 * Determines the current Bold Checkout environment, either DEVELOPMENT or PRODUCTION.
 */
export const isBoldEnvProdDev: BoldCheckoutEnvironment =
  BoldCheckoutEnvironment.PRODUCTION;
