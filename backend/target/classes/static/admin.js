const CATEGORY_META = {
    pothole: { label: "Pothole", icon: "🛣️", department: "Public Works Department (PWD)" },
    garbage: { label: "Garbage Dump", icon: "🗑️", department: "Municipal Corporation" },
    streetlight: { label: "Broken Streetlight", icon: "💡", department: "Electricity Department" },
    water_leak: { label: "Water Leak", icon: "💧", department: "Water Supply Board" },
    sewer: { label: "Sewer Problem", icon: "🚰", department: "Water Supply Board" },
    road_damage: { label: "Road Damage", icon: "🚧", department: "Public Works Department (PWD)" },
    drainage: { label: "Drainage Issue", icon: "🌊", department: "Municipal Corporation" },
    tree: { label: "Tree Care", icon: "🌳", department: "Parks & Gardens Department" }
};

const LANGUAGE_STORAGE_KEY = "civicsense_lang_pref_v2";

const SITE_TRANSLATIONS = {
    en: {
        option_all_categories: "All categories",
        option_all_districts: "All districts",
        fallback_department: "General",
        admin_login_eyebrow: "Admin Access",
        admin_login_title: "Track, filter and resolve complaints",
        admin_login_text: "Use the simple Spring Boot login to manage civic issues securely.",
        admin_label_username: "Username",
        admin_label_password: "Password",
        admin_button_login: "Login",
        admin_demo_credentials: "Demo credentials:",
        admin_dashboard_eyebrow: "Operational View",
        admin_dashboard_title: "Complaint routing and resolution dashboard",
        admin_dashboard_text: "Filter issues by category, city, area, and status, then update them with authenticated admin actions.",
        admin_metric_total: "Total",
        admin_metric_pending: "Pending",
        admin_metric_progress: "In Progress",
        admin_metric_resolved: "Resolved",
        admin_filter_category: "Category",
        admin_filter_city: "City",
        admin_filter_status: "Status",
        admin_status_all: "All statuses",
        admin_status_pending: "Pending",
        admin_status_progress: "In Progress",
        admin_status_resolved: "Resolved",
        admin_filter_area: "Area",
        admin_placeholder_area: "Search by locality",
        admin_queue_title: "Complaint queue",
        admin_queue_count: "items",
        admin_map_title: "Issue map",
        admin_map_subtitle: "Filtered locations",
        admin_login_success: "Admin login successful.",
        admin_login_failed: "Login failed.",
        admin_load_failed: "Failed to load issues.",
        admin_update_success: "Complaint updated to {status}.",
        admin_update_failed: "Status update failed.",
        admin_session_expired: "Your admin session expired.",
        admin_modal_city: "City",
        admin_modal_area: "Area",
        admin_modal_department: "Department",
        admin_modal_status: "Status",
        admin_modal_reporter: "Reporter",
        admin_modal_phone: "Phone",
        admin_modal_no_description: "No description provided.",
        admin_button_mark_pending: "Mark Pending",
        admin_button_start_work: "Start Work",
        admin_button_resolve: "Resolve",
        admin_no_complaints: "No complaints match the current filters."
    },
    hi: {
        option_all_categories: "सभी श्रेणियाँ",
        option_all_districts: "सभी जिले",
        fallback_department: "सामान्य",
        admin_login_eyebrow: "एडमिन एक्सेस",
        admin_login_title: "शिकायतों को ट्रैक, फ़िल्टर और समाधान करें",
        admin_login_text: "नागरिक समस्याओं को सुरक्षित रूप से प्रबंधित करने के लिए सरल Spring Boot लॉगिन का उपयोग करें।",
        admin_label_username: "यूजरनेम",
        admin_label_password: "पासवर्ड",
        admin_button_login: "लॉगिन",
        admin_demo_credentials: "डेमो क्रेडेंशियल्स:",
        admin_dashboard_eyebrow: "ऑपरेशनल व्यू",
        admin_dashboard_title: "शिकायत रूटिंग और समाधान डैशबोर्ड",
        admin_dashboard_text: "श्रेणी, शहर, क्षेत्र और स्थिति के आधार पर समस्याओं को फ़िल्टर करें, फिर प्रमाणित एडमिन कार्यों के साथ अपडेट करें।",
        admin_metric_total: "कुल",
        admin_metric_pending: "लंबित",
        admin_metric_progress: "प्रगति में",
        admin_metric_resolved: "समाधान हुआ",
        admin_filter_category: "श्रेणी",
        admin_filter_city: "शहर",
        admin_filter_status: "स्थिति",
        admin_status_all: "सभी स्थितियाँ",
        admin_status_pending: "लंबित",
        admin_status_progress: "प्रगति में",
        admin_status_resolved: "समाधान हुआ",
        admin_filter_area: "क्षेत्र",
        admin_placeholder_area: "स्थान के अनुसार खोजें",
        admin_queue_title: "शिकायत कतार",
        admin_queue_count: "आइटम",
        admin_map_title: "समस्या मानचित्र",
        admin_map_subtitle: "फ़िल्टर किए गए स्थान",
        admin_login_success: "एडमिन लॉगिन सफल।",
        admin_login_failed: "लॉगिन विफल।",
        admin_load_failed: "समस्याएं लोड करने में विफल।",
        admin_update_success: "शिकायत {status} को अपडेट किया गया।",
        admin_update_failed: "स्थिति अपडेट विफल।",
        admin_session_expired: "आपका एडमिन सेशन समाप्त हो गया।",
        admin_modal_city: "शहर",
        admin_modal_area: "क्षेत्र",
        admin_modal_department: "विभाग",
        admin_modal_status: "स्थिति",
        admin_modal_reporter: "रिपोर्टर",
        admin_modal_phone: "फोन",
        admin_modal_no_description: "कोई विवरण नहीं दिया गया।",
        admin_button_mark_pending: "लंबित चिह्नित करें",
        admin_button_start_work: "कार्य शुरू करें",
        admin_button_resolve: "समाधान करें",
        admin_no_complaints: "वर्तमान फ़िल्टर से मेल खाने वाली कोई शिकायतें नहीं।"
    }
};

let adminMap;
let adminMarkers = [];
let currentIssues = [];
let currentLanguage = "en";

document.addEventListener("DOMContentLoaded", async () => {
    initializeLanguageToggle();
    initRevealAnimations();
    initFilters();
    initModal();
    initMap();
    initAuth();
});

function initFilters() {
    const category = document.getElementById("filter-category");
    const city = document.getElementById("filter-city");

    category.innerHTML = `<option value="all">${translate("option_all_categories")}</option>`;
    city.innerHTML = `<option value="all">${translate("option_all_districts")}</option>`;

    Object.entries(CATEGORY_META).forEach(([value, meta]) => {
        category.insertAdjacentHTML("beforeend", `<option value="${value}">${meta.icon} ${meta.label}</option>`);
    });

    Object.entries(DISTRICT_COORDS).forEach(([value, info]) => {
        city.insertAdjacentHTML("beforeend", `<option value="${value}">${info.label}</option>`);
    });

    ["filter-category", "filter-city", "filter-status"].forEach(id => {
        document.getElementById(id).addEventListener("change", loadIssues);
    });

    document.getElementById("filter-area").addEventListener("input", debounce(loadIssues, 300));
}

function initializeLanguageToggle() {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";
    const langToggle = document.getElementById("lang-toggle");
    const langMenu = document.getElementById("lang-menu");
    const langCurrent = document.getElementById("lang-current");
    const langOptions = document.querySelectorAll(".lang-option");

    applyLanguage(savedLanguage);
    updateLangDisplay(savedLanguage);

    if (langToggle && langMenu) {
        langToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            langMenu.classList.toggle("show");
            langToggle.classList.toggle("open");
        });

        document.addEventListener("click", (e) => {
            if (!langMenu.contains(e.target) && !langToggle.contains(e.target)) {
                langMenu.classList.remove("show");
                langToggle.classList.remove("open");
            }
        });

        langOptions.forEach(option => {
            option.addEventListener("click", () => {
                const nextLanguage = option.dataset.lang || "en";
                localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
                applyLanguage(nextLanguage);
                updateLangDisplay(nextLanguage);
                langMenu.classList.remove("show");
                langToggle.classList.remove("open");
            });
        });
    }
}

function updateLangDisplay(language) {
    const langCurrent = document.getElementById("lang-current");
    if (langCurrent) {
        langCurrent.textContent = language === "hi" ? "हिंदी" : "English";
    }
}

function applyLanguage(language) {
    currentLanguage = SITE_TRANSLATIONS[language] ? language : "en";
    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const value = translate(key);
        if (value) {
            element.textContent = value;
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.dataset.i18nPlaceholder;
        const value = translate(key);
        if (value) {
            element.setAttribute("placeholder", value);
        }
    });

    initFilters();
}

function translate(key) {
    return SITE_TRANSLATIONS[currentLanguage]?.[key] ?? SITE_TRANSLATIONS.en[key] ?? key;
}

function initModal() {
    document.getElementById("close-modal").addEventListener("click", closeModal);
    document.getElementById("issue-modal").addEventListener("click", event => {
        if (event.target.id === "issue-modal") {
            closeModal();
        }
    });
}

function initMap() {
    adminMap = L.map("admin-map").setView([20.5937, 78.9629], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(adminMap);
}

function initAuth() {
    document.getElementById("login-form").addEventListener("submit", login);
    document.getElementById("logout-button").addEventListener("click", logout);
    validateExistingToken();
}

async function validateExistingToken() {
    const token = localStorage.getItem("civic_admin_token");
    if (!token) {
        showLogin();
        return;
    }

    try {
        const response = await fetch("/api/auth/validate", {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` }
        });

        if (!response.ok) {
            throw new Error("Invalid token");
        }

        showDashboard();
        await loadIssues();
    } catch {
        logout();
    }
}

async function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || translate("admin_login_failed"));
        }

        localStorage.setItem("civic_admin_token", data.token);
        showDashboard();
        await loadIssues();
        showToast(translate("admin_login_success"));
    } catch (error) {
        showToast(error.message || translate("admin_login_failed"), true);
    }
}

function logout() {
    localStorage.removeItem("civic_admin_token");
    currentIssues = [];
    renderList([]);
    updateMetrics([]);
    clearMap([]);
    closeModal();
    showLogin();
}

function showLogin() {
    document.getElementById("login-view").classList.remove("hidden");
    document.getElementById("dashboard-view").classList.add("hidden");
    document.getElementById("logout-button").classList.add("hidden");
}

function showDashboard() {
    document.getElementById("login-view").classList.add("hidden");
    document.getElementById("dashboard-view").classList.remove("hidden");
    document.getElementById("logout-button").classList.remove("hidden");
}

async function loadIssues() {
    const params = new URLSearchParams({
        category: document.getElementById("filter-category").value,
        city: document.getElementById("filter-city").value,
        status: document.getElementById("filter-status").value,
        area: document.getElementById("filter-area").value.trim()
    });

    try {
        const response = await fetch(`/api/issues/filter?${params.toString()}`);
        if (!response.ok) {
            throw new Error(translate("admin_load_failed"));
        }

        currentIssues = await response.json();
        renderList(currentIssues);
        updateMetrics(currentIssues);
        renderMap(currentIssues);
    } catch {
        showToast(translate("admin_load_failed"), true);
    }
}

function renderList(issues) {
    const list = document.getElementById("complaint-list");
    const count = document.getElementById("admin-count");
    count.textContent = `${issues.length} ${translate("admin_queue_count").split(" ")[1]}`;

    if (!issues.length) {
        list.innerHTML = `<p class='muted'>${translate("admin_no_complaints")}</p>`;
        return;
    }

    list.innerHTML = issues.map(issue => `
        <article class="complaint-card" data-id="${issue.id}">
            <div class="panel-head">
                <strong>${escapeHtml(issue.complaintId)}</strong>
                <span class="status-badge ${issue.status}">${formatStatus(issue.status)}</span>
            </div>
            <p><strong>${CATEGORY_META[issue.category]?.icon ?? "📍"} ${CATEGORY_META[issue.category]?.label ?? issue.category}</strong></p>
            <div class="complaint-meta">
                <span class="pill">${escapeHtml(issue.city)}</span>
                <span class="pill">${escapeHtml(issue.area)}</span>
                <span class="pill">${escapeHtml(issue.department ?? CATEGORY_META[issue.category]?.department ?? translate("fallback_department"))}</span>
            </div>
            <p>${escapeHtml(issue.address)}</p>
        </article>
    `).join("");

    Array.from(list.querySelectorAll(".complaint-card")).forEach(card => {
        card.addEventListener("click", () => openModal(Number(card.dataset.id)));
    });
}

function updateMetrics(issues) {
    document.getElementById("metric-total").textContent = issues.length;
    document.getElementById("metric-pending").textContent = issues.filter(issue => issue.status === "pending").length;
    document.getElementById("metric-progress").textContent = issues.filter(issue => issue.status === "in_progress").length;
    document.getElementById("metric-resolved").textContent = issues.filter(issue => issue.status === "resolved").length;
}

function renderMap(issues) {
    clearMap();

    if (!issues.length) {
        adminMap.setView([20.5937, 78.9629], 5);
        return;
    }

    issues.forEach(issue => {
        const marker = L.circleMarker([issue.latitude, issue.longitude], {
            radius: 8,
            color: "#ffffff",
            weight: 2,
            fillColor: issue.status === "resolved" ? "#16a34a" : issue.status === "in_progress" ? "#2563eb" : "#f59e0b",
            fillOpacity: 0.95
        }).bindPopup(`
            <strong>${escapeHtml(issue.complaintId)}</strong><br>
            ${CATEGORY_META[issue.category]?.icon ?? "📍"} ${CATEGORY_META[issue.category]?.label ?? issue.category}<br>
            ${escapeHtml(issue.area)}, ${escapeHtml(issue.city)}<br>
            ${escapeHtml(issue.address)}
        `);

        marker.addTo(adminMap);
        adminMarkers.push(marker);
    });

    const bounds = L.latLngBounds(issues.map(issue => [issue.latitude, issue.longitude]));
    adminMap.fitBounds(bounds, { padding: [30, 30] });
}

function clearMap() {
    adminMarkers.forEach(marker => adminMap.removeLayer(marker));
    adminMarkers = [];
}

function openModal(id) {
    const issue = currentIssues.find(item => item.id === id);
    if (!issue) {
        return;
    }

    document.getElementById("modal-content").innerHTML = `
        <h2>${escapeHtml(issue.complaintId)} · ${CATEGORY_META[issue.category]?.icon ?? "📍"} ${CATEGORY_META[issue.category]?.label ?? issue.category}</h2>
        <p class="muted">${escapeHtml(issue.address)}</p>
        <div class="detail-grid">
            <article><span>${translate("admin_modal_city")}</span><strong>${escapeHtml(issue.city)}</strong></article>
            <article><span>${translate("admin_modal_area")}</span><strong>${escapeHtml(issue.area)}</strong></article>
            <article><span>${translate("admin_modal_department")}</span><strong>${escapeHtml(issue.department ?? CATEGORY_META[issue.category]?.department ?? translate("fallback_department"))}</strong></article>
            <article><span>${translate("admin_modal_status")}</span><strong>${formatStatus(issue.status)}</strong></article>
            <article><span>${translate("admin_modal_reporter")}</span><strong>${escapeHtml(issue.reporterName)}</strong></article>
            <article><span>${translate("admin_modal_phone")}</span><strong>${escapeHtml(issue.reporterPhone)}</strong></article>
        </div>
        <p>${escapeHtml(issue.description || translate("admin_modal_no_description"))}</p>
        ${issue.photoUrl ? `<img class="modal-photo" src="${issue.photoUrl}" alt="Issue evidence">` : ""}
        <div class="status-row" style="margin-top:20px;">
            <button class="button button-secondary" data-status="pending">${translate("admin_button_mark_pending")}</button>
            <button class="button button-secondary" data-status="in_progress">${translate("admin_button_start_work")}</button>
            <button class="button button-primary" data-status="resolved">${translate("admin_button_resolve")}</button>
        </div>
    `;

    Array.from(document.querySelectorAll("[data-status]")).forEach(button => {
        button.addEventListener("click", () => updateStatus(issue.id, button.dataset.status));
    });

    document.getElementById("issue-modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("issue-modal").classList.add("hidden");
}

async function updateStatus(id, status) {
    const token = localStorage.getItem("civic_admin_token");
    if (!token) {
        showToast(translate("admin_session_expired"), true);
        logout();
        return;
    }

    try {
        const response = await fetch(`/api/issues/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ status })
        });

        if (response.status === 401 || response.status === 403) {
            throw new Error(translate("admin_session_expired"));
        }

        if (!response.ok) {
            throw new Error(translate("admin_update_failed"));
        }

        await loadIssues();
        closeModal();
        showToast(translate("admin_update_success").replace("{status}", formatStatus(status)));
    } catch (error) {
        showToast(error.message || translate("admin_update_failed"), true);
    }
}

function debounce(callback, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => callback(...args), delay);
    };
}

function formatStatus(status) {
    return String(status ?? "").replace("_", " ").replace(/\b\w/g, letter => letter.toUpperCase());
}

function escapeHtml(text) {
    return String(text ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function showToast(message, isError = false) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = `toast show ${isError ? "error" : "success"}`;
    setTimeout(() => toast.className = "toast", 3500);
}

function initRevealAnimations() {
    document.querySelectorAll(".reveal").forEach((element, index) => {
        element.style.animationDelay = `${index * 0.08}s`;
        requestAnimationFrame(() => element.classList.add("revealed"));
    });
}
