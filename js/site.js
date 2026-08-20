(function () {
  const LANGS = ["fr", "am", "en"];
  const storageKey = "eotc-giorgis-lang";

  function currentLang() {
    const stored = localStorage.getItem(storageKey);
    if (LANGS.includes(stored)) return stored;
    const nav = (navigator.language || "fr").toLowerCase();
    if (nav.startsWith("am")) return "am";
    if (nav.startsWith("en")) return "en";
    return "fr";
  }

  function t(lang, key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.fr[key] || key;
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === "am" ? "am" : lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(lang, key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(lang, el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
    const titleKey = document.body.getAttribute("data-title");
    const parish = SITE.name[lang];
    if (titleKey) {
      document.title = t(lang, titleKey) + " · " + parish;
    } else {
      document.title = parish + " · Paris";
    }
    renderDynamic(lang);
  }

  function formatDate(iso, lang) {
    const d = new Date(iso + "T12:00:00");
    const locale = lang === "am" ? "am-ET" : lang === "en" ? "en-GB" : "fr-FR";
    return d.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
  }

  function renderHours(lang) {
    const table = document.getElementById("hours-table");
    if (!table) return;
    table.innerHTML = SITE.hours.map(function (row) {
      return "<tr><th>" + row.when[lang] + "</th><td>" + row.what[lang] + "</td></tr>";
    }).join("");
  }

  function renderFeasts(lang) {
    const box = document.getElementById("feast-list");
    if (!box) return;
    box.innerHTML = SITE.feasts.map(function (f) {
      return (
        '<article class="feast"><div class="feast-date">' + f.date[lang] +
        "</div><div><strong>" + f.name[lang] + "</strong></div></article>"
      );
    }).join("");
  }

  function renderNews(lang) {
    const box = document.getElementById("news-list");
    if (!box) return;
    if (!SITE.news.length) {
      box.innerHTML = '<p class="empty-news" data-i18n="news_empty">' + t(lang, "news_empty") + "</p>";
      return;
    }
    box.innerHTML = SITE.news.map(function (item) {
      return (
        '<article class="news-item"><div class="news-date">' + formatDate(item.date, lang) +
        "</div><h3>" + item.title[lang] + "</h3><p>" + item.body[lang] + "</p></article>"
      );
    }).join("");
  }

  function renderContact(lang) {
    const details = document.getElementById("contact-details");
    if (!details) return;
    const lines = [];
    lines.push("<p><strong>" + t(lang, "city_label") + ":</strong> " + SITE.city + "</p>");
    if (SITE.address) lines.push("<p><strong>Adresse:</strong> " + SITE.address + "</p>");
    if (SITE.phone) {
      lines.push('<p><strong>Tél. :</strong> <a href="tel:' + SITE.phone.replace(/\s/g, "") + '">' + SITE.phone + "</a></p>");
    }
    if (SITE.email) {
      lines.push('<p><strong>E-mail :</strong> <a href="mailto:' + SITE.email + '">' + SITE.email + "</a></p>");
    }
    if (SITE.facebook) {
      lines.push('<p><a href="' + SITE.facebook + '" rel="noopener" target="_blank">Facebook</a></p>');
    }
    if (SITE.telegram) {
      lines.push('<p><a href="' + SITE.telegram + '" rel="noopener" target="_blank">Telegram</a></p>');
    }
    if (!SITE.address && !SITE.phone && !SITE.email) {
      lines.push('<p class="notice">' + t(lang, "contact_pending") + "</p>");
    }
    details.innerHTML = lines.join("");

    const map = document.getElementById("map-frame");
    if (map) {
      const q = encodeURIComponent(SITE.address || SITE.mapQuery || SITE.city);
      map.src = "https://maps.google.com/maps?q=" + q + "&z=12&output=embed";
    }
  }

  function renderDynamic(lang) {
    renderHours(lang);
    renderFeasts(lang);
    renderNews(lang);
    renderContact(lang);
  }

  function setupNav() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
      });
    }
    const page = document.body.getAttribute("data-page");
    document.querySelectorAll(".nav a[data-page]").forEach(function (link) {
      if (link.getAttribute("data-page") === page) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function setupLang() {
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const lang = btn.dataset.lang;
        localStorage.setItem(storageKey, lang);
        applyLang(lang);
      });
    });
  }

  function setupForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if (!SITE.email) {
        alert(t(currentLang(), "form_hint"));
        return;
      }
      const subject = encodeURIComponent("Message paroisse Debre Giorgis — " + name);
      const body = encodeURIComponent(message + "\n\n" + name + " <" + email + ">");
      window.location.href = "mailto:" + SITE.email + "?subject=" + subject + "&body=" + body;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupNav();
    setupLang();
    setupForm();
    applyLang(currentLang());
  });
})();
