import { requireAuth, wireLogoutButton } from './auth.js';
/* ===== Boot ===== */
window.addEventListener('DOMContentLoaded', async () => {
  try {
    await requireAuth();           // redirects to login if not signed in
  } catch { return; }              // stop running this page if we redirected

  wireLogoutButton();

  document.getElementById('filterContracted')?.addEventListener('change', loadDashboard);
  loadDashboard();
  loadClientsList();
  loadClientDetail();

  window.openLogModal = openLogModal;
});
