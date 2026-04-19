export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/expenses",
    "/expenses/:path*",
    "/budget",
    "/budget/:path*",
    "/insights",
    "/insights/:path*",
  ],
};
