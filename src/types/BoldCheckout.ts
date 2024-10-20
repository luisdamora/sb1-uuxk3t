export interface BoldCheckoutConfig {
  orderId: string;
  currency: string;
  amount: string;
  apiKey: string;
  integritySignature: string;
  description: string;
  // tax: string;
  redirectionUrl: string;
}

declare global {
  class BoldCheckout {
    constructor(config: BoldCheckoutConfig);

    open(): void;
    // Add any methods that BoldCheckout might have
  }
}
