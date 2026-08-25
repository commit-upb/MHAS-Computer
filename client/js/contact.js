// === Contact Page Logic ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const successMsg = document.getElementById("success-msg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearErrors();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    let valid = true;

    if (!name) { showError("name", "Nama wajib diisi"); valid = false; }
    if (!email) { showError("email", "Email wajib diisi"); valid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError("email", "Format email tidak valid"); valid = false; }
    if (!subject) { showError("subject", "Subjek wajib diisi"); valid = false; }
    if (!message) { showError("message", "Pesan wajib diisi"); valid = false; }

    if (!valid) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Mengirim...';
    lucide.createIcons();

    await new Promise(r => setTimeout(r, 1500));

    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i data-lucide="send" class="w-4 h-4"></i> Kirim Pesan';
    lucide.createIcons();

    form.reset();
    successMsg.classList.remove("hidden");
    successMsg.classList.add("flex");
    lucide.createIcons();

    setTimeout(() => {
      successMsg.classList.add("hidden");
      successMsg.classList.remove("flex");
    }, 5000);
  });

  function showError(field, msg) {
    const input = form[field];
    const errorEl = document.getElementById("error-" + field);
    if (input) input.classList.add("error");
    if (errorEl) { errorEl.textContent = msg; errorEl.classList.remove("hidden"); }
  }

  function clearErrors() {
    form.querySelectorAll(".form-input").forEach(el => el.classList.remove("error"));
    form.querySelectorAll("[id^='error-']").forEach(el => { el.textContent = ""; el.classList.add("hidden"); });
  }
});
