// ==========================
// Brand name replacement
// ==========================
const BRAND_NAME = "HyperGameZ";
document.querySelectorAll(".brand-name").forEach(e => e.textContent = BRAND_NAME);

// ==========================
// Navigation toggle
// ==========================
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
if (toggle) {
  toggle.addEventListener("click", () => 
    nav.setAttribute("aria-expanded", nav.getAttribute("aria-expanded") === "true" ? "false" : "true")
  );
}

// ==========================
// Footer year update
// ==========================
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// ==========================
// Privacy / Policy Notice Popup
// ==========================
// ==========================
// Privacy / Policy Notice Popup
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ JS loaded, checking policy...");

  if (localStorage.getItem("policyAccepted") === "1") {
    console.log("✅ Policy already accepted, not showing popup");
    return;
  }

  const bd = document.createElement("div");
  bd.className = "modal-backdrop";
  bd.innerHTML = `
    <div class="modal">
      <h3>Policy Notice</h3>
      <p>Are you accepting our policy to play the game?</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
        <button class="btn" id="policy-yes">Yes, Accept</button>
        <button class="btn ghost" id="policy-no">Close</button>
      </div>
    </div>`;
  document.body.appendChild(bd);
  bd.style.display = "flex";

  bd.querySelector("#policy-yes").addEventListener("click", () => {
    localStorage.setItem("policyAccepted", "1");
    bd.remove();
  });
  bd.querySelector("#policy-no").addEventListener("click", () => bd.remove());
});

