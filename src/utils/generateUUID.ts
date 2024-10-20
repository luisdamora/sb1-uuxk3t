import { v4 as uuidv4 } from "uuid";

/**
 * Generates a unique UUID string with underscores instead of hyphens.
 * @returns {string} A unique UUID string.
 */
export function generateUUID(): string {
  return uuidv4().replace(/-/g, "");
}
