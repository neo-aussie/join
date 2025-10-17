// privacy-popup.js
(function () {
  // Show only on Home (index). Remove `isHome` check to show on all pages.
  var path = (location.pathname || "").toLowerCase();
  var isHome = /(^\/$|index\.html$)/.test(path) || path.endsWith("/") || path === "";
  if (!isHome) return;

  // If already accepted earlier in this browser, don't show again
  if (localStorage.getItem("policyAccepted") === "1") return;

  // Only show once per tab/session
  if (sessionStorage.getItem("ageGateShown") === "1") return;
  sessionStorage.setItem("ageGateShown", "1");

  // --- Build modal ---
  var bd = document.createElement("div");
  bd.className = "modal-backdrop";
  bd.innerHTML = [
    '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="pp-title">',
    '  <h3 id="pp-title">Policy Notice</h3>',
    '  <p>Are you accepting our policy to play the game? This notice is informational and does not block access. ',
    '     <a href="privacy.html">View Privacy Policy</a>.</p>',
    '  <div class="row">',
    '    <button class="btn" id="pp-yes">Yes, Accept</button>',
    '    <button class="btn ghost" id="pp-no">Close</button>',
    "  </div>",
    "</div>",
  ].join("");
  document.body.appendChild(bd);
  bd.style.display = "flex";

  function closeGate() {
    bd.style.display = "none";
    bd.remove();
  }

  // Close on outside click
  bd.addEventListener("click", function (e) {
    if (e.target === bd) closeGate();
  });

  // Close on ESC
  document.addEventListener(
    "keydown",
    function (e) {
      if (e.key === "Escape") closeGate();
    },
    { once: true }
  );

  // YES -> remember + go to Privacy page
  bd.querySelector("#pp-yes").addEventListener("click", function () {
    localStorage.setItem("policyAccepted", "1");
    window.location.href = "privacy.html"; // change if your privacy page lives elsewhere
  });

  // NO -> just close
  bd.querySelector("#pp-no").addEventListener("click", closeGate);
})();


(function(){
  const path = window.location.pathname;
  const isHome = /(^\/$|lander\.html$)/.test(path);
  if(!isHome) return;
  if(sessionStorage.getItem('ageGateShown') === '1') return;
  sessionStorage.setItem('ageGateShown', '1');
  const bd = document.createElement('div');
  bd.className = 'modal-backdrop';
  bd.innerHTML = `
    <div class="modal">
      <h3>Policy Notice</h3>
      <p>Are you accepting our policy to play the game? This notice is informational and does not block access.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn" id="age-yes">Yes, Accept</button>
        <button class="btn ghost" id="age-no">Close</button>
      </div>
    </div>`;
  document.body.appendChild(bd);
  bd.style.display='flex';
  function closeGate(){ bd.style.display='none'; bd.remove(); }
  bd.querySelector('#age-yes').addEventListener('click', closeGate);
  //                                               function(){
  //   window.location.href = "https://t7q4.com/?utm_campaign=RuEoNAxI6g&v1=[v1]&v2=[v2]&v3=[v3]"; // change to your target page
  // });
                                                
  bd.querySelector('#age-no').addEventListener('click', closeGate);
  //                                              function(){
  //   window.location.href = "https://t7q4.com/?utm_campaign=RuEoNAxI6g&v1=[v1]&v2=[v2]&v3=[v3]"; // change to your target page
  // });
})();





