export type VersionParts = number[];

/**
 * Convert version string into numeric parts.
 * Invalid segments are returned as -1.
 *
 * @param value - version string
 * @returns array of numeric parts
 */
export function toVersionParts(value: string): VersionParts {
  return value
    .split(".")
    .map((part) => {
      const trimmed = part.trim();

      if (trimmed === "") {
        return -1;
      }

      const num = Number(trimmed);

      return Number.isFinite(num) && num >= 0 ? num : -1;
    });
}

/**
 * Check if a version is less than or equal to the threshold version.
 * Invalid or missing versions are treated as old.
 *
 * @param version - version to check
 * @param threshold - minimum supported version
 * @returns true when version is <= threshold
 */
export function isVersionLessThanOrEqual(version: string | null, threshold: string): boolean {
  if (!version) {
    return true;
  }

  const versionParts = toVersionParts(version);
  const thresholdParts = toVersionParts(threshold);
  const maxLength = Math.max(versionParts.length, thresholdParts.length);

  for (let i = 0; i < maxLength; i++) {
    const left = versionParts[i] ?? 0;
    const right = thresholdParts[i] ?? 0;

    if (left === -1 || right === -1) {
      return true;
    }

    if (left < right) {
      return true;
    }

    if (left > right) {
      return false;
    }
  }

  return true;
}
