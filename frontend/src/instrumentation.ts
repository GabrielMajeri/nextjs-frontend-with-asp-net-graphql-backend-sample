export async function register() {
  if (
    (process.env.NODE_ENV === "production" || !!process.env.NEXT_LOGGING) &&
    process.env.NEXT_RUNTIME === "nodejs"
  ) {
    await import("pino");
    await import("next-logger");
  }
}
