const blockedPopupRoutes = ['/contact', '/privacy-policy', '/terms-and-condition'];

export function shouldShowPopup(pathname) {
  const isBlogAdmin = pathname === "/blog-admin" || pathname.startsWith("/blog-admin/");
  return !isBlogAdmin && !blockedPopupRoutes.includes(pathname);
}
