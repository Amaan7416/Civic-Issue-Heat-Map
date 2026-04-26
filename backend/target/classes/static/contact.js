const SITE_TRANSLATIONS = {
    en: {
        contact_brand_subtitle: "Contact the Team",
        contact_nav_home: "Home",
        contact_nav_admin: "Admin",
        contact_eyebrow: "Contact Us",
        contact_title: "Get in touch with the CivicSense team.",
        contact_text: "For project feedback, collaboration, or demo-related queries, reach out through email or Instagram.",
        contact_email_button: "Email",
        contact_instagram_button: "Instagram",
        contact_primary_label: "Primary Contact",
        dev_eyebrow: "Developers",
        dev_title: "Development Team",
        dev_text: "The people behind the product and implementation.",
        dev_role_lead: "Lead Developer",
        dev_role_lead_short: "Lead Developer",
        dev_role_dev: "Developer",
        dev_role_dev_short: "Developer",
        dev_yusuf_text: "Led product direction and overall CivicSense implementation.",
        dev_amaan_text: "Supported implementation and feature delivery.",
        contact_footer_text: "Citizen issue reporting and civic intelligence for Indian cities.",
        contact_footer_home: "Home",
        contact_footer_admin: "Admin",
        contact_footer_email: "Email"
    },
    hi: {
        contact_brand_subtitle: "टीम से संपर्क करें",
        contact_nav_home: "होम",
        contact_nav_admin: "एडमिन",
        contact_eyebrow: "संपर्क करें",
        contact_title: "CivicSense टीम से जुड़ें।",
        contact_text: "प्रोजेक्ट फीडबैक, सहयोग या डेमो से जुड़ी जानकारी के लिए ईमेल या इंस्टाग्राम के माध्यम से संपर्क करें।",
        contact_email_button: "ईमेल",
        contact_instagram_button: "इंस्टाग्राम",
        contact_primary_label: "मुख्य संपर्क",
        dev_eyebrow: "डेवलपर्स",
        dev_title: "डेवलपमेंट टीम",
        dev_text: "प्रोडक्ट और इम्प्लीमेंटेशन के पीछे काम करने वाली टीम।",
        dev_role_lead: "लीड डेवलपर",
        dev_role_lead_short: "लीड डेवलपर",
        dev_role_dev: "डेवलपर",
        dev_role_dev_short: "डेवलपर",
        dev_yusuf_text: "प्रोडक्ट दिशा और CivicSense के समग्र इम्प्लीमेंटेशन का नेतृत्व किया।",
        dev_amaan_text: "इम्प्लीमेंटेशन और फीचर डिलीवरी में सहयोग दिया।",
        contact_footer_text: "भारतीय शहरों के लिए नागरिक शिकायत और सिविक इंटेलिजेंस प्लेटफ़ॉर्म।",
        contact_footer_home: "होम",
        contact_footer_admin: "एडमिन",
        contact_footer_email: "ईमेल"
    }
};

const LANGUAGE_STORAGE_KEY = "civicsense_lang_pref_v2";
let currentLanguage = "en";

document.addEventListener("DOMContentLoaded", () => {
    initializeLanguageToggle();
    initRevealItems();
});

function initRevealItems() {
    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    revealItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.12}s`;
        observer.observe(item);
    });
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
}

function translate(key) {
    return SITE_TRANSLATIONS[currentLanguage]?.[key] ?? SITE_TRANSLATIONS.en[key] ?? key;
}
