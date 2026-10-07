const blockedPopupRoutes = ['/contact', '/privacy-policy', '/terms-and-condition'];

export function shouldShowPopup(pathname) {
  return !blockedPopupRoutes.includes(pathname);
}
