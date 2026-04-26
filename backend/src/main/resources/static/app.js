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
        brand_subtitle: "Indian City Issue Tracker",
        nav_how: "How It Works",
        nav_report: "Report",
        nav_heatmap: "Heatmap",
        nav_contact: "Contact",
        nav_admin: "Admin",
        hero_eyebrow: "PS-A04 Full Stack Demo",
        hero_title: "Turn scattered civic complaints into a live city heatmap.",
        hero_text: "Citizens can report potholes, garbage dumps, broken streetlights, water leaks and more with photo evidence and exact location. Authorities can spot density, filter by district and area, and route each issue to the right department.",
        hero_cta_report: "Report an Issue",
        hero_cta_heatmap: "View Heatmap",
        stats_tracked: "issues tracked",
        stats_pending: "awaiting action",
        stats_resolved: "resolved",
        routing_title: "Live department routing",
        route_roads_title: "Potholes and road damage",
        route_roads_dept: "Public Works Department",
        route_garbage_title: "Garbage and drainage",
        route_garbage_dept: "Municipal Corporation",
        route_light_title: "Broken streetlights",
        route_light_dept: "Electricity Department",
        route_water_title: "Water and sewer issues",
        route_water_dept: "Water Supply Board",
        feature_1_title: "1. Capture the issue",
        feature_1_text: "Upload a photo, choose a category, mark the location with GPS or map pin, and submit the complaint in seconds.",
        feature_2_title: "2. See problem density",
        feature_2_text: "The public heatmap turns individual complaints into city-level insight so hotspots are obvious at a glance.",
        feature_3_title: "3. Route and resolve",
        feature_3_text: "Each complaint is automatically mapped to a department and can be tracked by admins through resolution.",
        report_eyebrow: "Citizen Portal",
        report_title: "Report a civic issue with real location capture",
        report_text: "Works with a simple Spring Boot backend and MySQL/H2 storage. No React required.",
        label_category: "Issue category",
        label_district: "District / Uttar Pradesh",
        label_area: "Area / locality",
        label_address: "Landmark / address",
        label_description: "Description",
        label_name: "Your name",
        label_phone: "Phone number",
        label_email: "Email",
        label_department: "Assigned department",
        label_photo: "Issue photo",
        photo_help: "Capture or upload a photo from your device.",
        photo_preview: "Photo preview will appear here",
        location_title: "Location capture",
        location_help: "Use GPS or click the map to place the issue.",
        gps_button: "Use GPS",
        location_none: "No coordinates selected yet.",
        submit_button: "Submit Complaint",
        tips_title: "Better reports get faster action",
        tips_1: "Use a landmark that local authorities can identify quickly.",
        tips_2: "Choose the exact issue category so routing is correct.",
        tips_3: "Add a clear photo when it is safe to do so.",
        tips_4: "Pin the exact location for reliable heatmap density.",
        heatmap_eyebrow: "Issue Density",
        heatmap_title: "Interactive civic issue heatmap",
        heatmap_text: "Filter by category and district to reveal hotspots and recurring infrastructure pain points.",
        filter_category: "Category",
        filter_district: "District / Uttar Pradesh",
        filter_area: "Area search",
        legend_title: "Density scale",
        legend_low: "Low",
        legend_high: "High",
        footer_text: "Single Spring Boot web app with citizen and admin views for hackathon demo delivery.",
        footer_report: "Report",
        footer_heatmap: "Heatmap",
        footer_contact: "Contact Us",
        footer_admin: "Admin Dashboard",
        placeholder_area: "Eg. Hazratganj, Civil Lines",
        placeholder_address: "Nearest road, landmark, or colony",
        placeholder_description: "Tell us what happened, how severe it is, and anything authorities should know.",
        placeholder_name: "Citizen name",
        placeholder_phone: "10 digit mobile number",
        placeholder_email: "Optional email for updates",
        placeholder_department: "Choose a category first",
        placeholder_filter_area: "Filter by locality",
        heatmap_count_suffix: "issues shown",
        toast_required: "Please fill all required fields.",
        toast_location: "Please capture the issue location using GPS or the map.",
        toast_submit_success: "Complaint submitted and routed to {department}.",
        toast_submit_error: "Complaint submission failed. Please try again.",
        toast_gps_error: "Geolocation is not supported on this device.",
        toast_gps_loading: "Getting your live location...",
        toast_gps_success: "GPS location captured successfully.",
        toast_gps_failed: "Unable to capture GPS location.",
        toast_pin_success: "Location pinned on map.",
        popup_status: "Status",
        popup_department: "Department",
        fallback_department: "General",
        option_select_category: "Select category",
        option_all_categories: "All categories",
        option_select_district: "Select district",
        option_all_districts: "All districts"
    },
    hi: {
        brand_subtitle: "भारतीय शहर समस्या ट्रैकर",
        nav_how: "कैसे काम करता है",
        nav_report: "रिपोर्ट करें",
        nav_heatmap: "हीटमैप",
        nav_contact: "संपर्क",
        nav_admin: "एडमिन",
        hero_eyebrow: "PS-A04 फुल स्टैक डेमो",
        hero_title: "बिखरी हुई नागरिक शिकायतों को लाइव सिटी हीटमैप में बदलें।",
        hero_text: "नागरिक गड्ढे, कूड़ा, खराब स्ट्रीटलाइट, पानी लीकेज जैसी समस्याएँ फोटो और सही लोकेशन के साथ रिपोर्ट कर सकते हैं। अधिकारी घनत्व देखकर जिला और क्षेत्र के आधार पर समस्या समझ सकते हैं और सही विभाग तक भेज सकते हैं।",
        hero_cta_report: "समस्या दर्ज करें",
        hero_cta_heatmap: "हीटमैप देखें",
        stats_tracked: "कुल दर्ज शिकायतें",
        stats_pending: "कार्यवाही लंबित",
        stats_resolved: "समाधान हुआ",
        routing_title: "लाइव विभाग रूटिंग",
        route_roads_title: "गड्ढे और सड़क क्षति",
        route_roads_dept: "लोक निर्माण विभाग",
        route_garbage_title: "कूड़ा और नाली",
        route_garbage_dept: "नगर निगम",
        route_light_title: "खराब स्ट्रीटलाइट",
        route_light_dept: "बिजली विभाग",
        route_water_title: "पानी और सीवर समस्या",
        route_water_dept: "जल आपूर्ति बोर्ड",
        feature_1_title: "1. समस्या कैप्चर करें",
        feature_1_text: "फोटो अपलोड करें, श्रेणी चुनें, GPS या मैप पिन से लोकेशन चुनें और शिकायत दर्ज करें।",
        feature_2_title: "2. समस्या घनत्व देखें",
        feature_2_text: "पब्लिक हीटमैप अलग-अलग शिकायतों को शहर-स्तर की समझ में बदलता है।",
        feature_3_title: "3. सही विभाग तक भेजें",
        feature_3_text: "हर शिकायत स्वतः सही विभाग से जुड़ती है और एडमिन द्वारा ट्रैक की जा सकती है।",
        report_eyebrow: "नागरिक पोर्टल",
        report_title: "वास्तविक लोकेशन के साथ नागरिक समस्या दर्ज करें",
        report_text: "सरल Spring Boot बैकएंड और MySQL/H2 स्टोरेज पर आधारित। React की आवश्यकता नहीं।",
        label_category: "समस्या श्रेणी",
        label_district: "जिला / उत्तर प्रदेश",
        label_area: "क्षेत्र / मोहल्ला",
        label_address: "लैंडमार्क / पता",
        label_description: "विवरण",
        label_name: "आपका नाम",
        label_phone: "फोन नंबर",
        label_email: "ईमेल",
        label_department: "संबंधित विभाग",
        label_photo: "समस्या की फोटो",
        photo_help: "अपने डिवाइस से फोटो लें या अपलोड करें।",
        photo_preview: "फोटो प्रीव्यू यहाँ दिखेगा",
        location_title: "लोकेशन कैप्चर",
        location_help: "GPS इस्तेमाल करें या मैप पर क्लिक करके लोकेशन चुनें।",
        gps_button: "GPS उपयोग करें",
        location_none: "अभी तक कोई लोकेशन नहीं चुनी गई है।",
        submit_button: "शिकायत जमा करें",
        tips_title: "बेहतर शिकायत से तेज कार्रवाई होती है",
        tips_1: "ऐसा लैंडमार्क लिखें जिसे अधिकारी जल्दी पहचान सकें।",
        tips_2: "सही श्रेणी चुनें ताकि शिकायत सही विभाग तक जाए।",
        tips_3: "सुरक्षित होने पर स्पष्ट फोटो जोड़ें।",
        tips_4: "सही लोकेशन पिन करें ताकि हीटमैप विश्वसनीय रहे।",
        heatmap_eyebrow: "समस्या घनत्व",
        heatmap_title: "इंटरएक्टिव नागरिक हीटमैप",
        heatmap_text: "श्रेणी और जिले के आधार पर फ़िल्टर करके समस्या वाले हॉटस्पॉट देखें।",
        filter_category: "श्रेणी",
        filter_district: "जिला / उत्तर प्रदेश",
        filter_area: "क्षेत्र खोजें",
        legend_title: "घनत्व स्तर",
        legend_low: "कम",
        legend_high: "अधिक",
        footer_text: "हैकाथॉन डेमो के लिए नागरिक और एडमिन व्यू वाला एकल Spring Boot वेब ऐप।",
        footer_report: "रिपोर्ट",
        footer_heatmap: "हीटमैप",
        footer_contact: "संपर्क करें",
        footer_admin: "एडमिन डैशबोर्ड",
        placeholder_area: "जैसे हजरतगंज, सिविल लाइन्स",
        placeholder_address: "निकटतम सड़क, लैंडमार्क या कॉलोनी",
        placeholder_description: "क्या हुआ, कितना गंभीर है, और अधिकारियों को क्या जानना चाहिए, लिखें।",
        placeholder_name: "नागरिक का नाम",
        placeholder_phone: "10 अंकों का मोबाइल नंबर",
        placeholder_email: "अपडेट के लिए वैकल्पिक ईमेल",
        placeholder_department: "पहले श्रेणी चुनें",
        placeholder_filter_area: "क्षेत्र के अनुसार फ़िल्टर करें",
        heatmap_count_suffix: "शिकायतें दिखाई गईं",
        toast_required: "कृपया सभी आवश्यक फ़ील्ड भरें।",
        toast_location: "कृपया GPS या मैप से लोकेशन चुनें।",
        toast_submit_success: "शिकायत दर्ज हो गई और {department} को भेज दी गई।",
        toast_submit_error: "शिकायत जमा नहीं हो सकी। कृपया फिर से प्रयास करें।",
        toast_gps_error: "इस डिवाइस पर जियोलोकेशन उपलब्ध नहीं है।",
        toast_gps_loading: "आपकी लोकेशन प्राप्त की जा रही है...",
        toast_gps_success: "GPS लोकेशन सफलतापूर्वक प्राप्त हुई।",
        toast_gps_failed: "GPS लोकेशन प्राप्त नहीं हो सकी।",
        toast_pin_success: "मैप पर लोकेशन चुनी गई।",
        popup_status: "स्थिति",
        popup_department: "विभाग",
        fallback_department: "सामान्य",
        option_select_category: "श्रेणी चुनें",
        option_all_categories: "सभी श्रेणियाँ",
        option_select_district: "जिला चुनें",
        option_all_districts: "सभी जिले"
    }
};

let issues = [];
let heatmapMap;
let pickerMap;
let heatLayer;
let pickerMarker;
let heatMarkers = [];
let currentLanguage = "en";

document.addEventListener("DOMContentLoaded", async () => {
    initializeLanguageToggle();
    initNav();
    initRevealAnimations();
    populateSelects();
    initIssuePills();
    initPhotoPreview();
    initPickerMap();
    initHeatmapMap();
    initForm();
    initFilters();
    await refreshStatsAndHeatmap();
});

function initNav() {
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");

    toggle.addEventListener("click", () => links.classList.toggle("open"));
}

function populateSelects() {
    const categorySelect = document.getElementById("category");
    const heatCategory = document.getElementById("heatmap-category-filter");
    const citySelect = document.getElementById("city");
    const heatCity = document.getElementById("heatmap-city-filter");

    if (!categorySelect || !heatCategory || !citySelect || !heatCity) {
        console.warn("Some select elements not found yet");
        return;
    }

    categorySelect.innerHTML = `<option value="">${translate("option_select_category")}</option>`;
    heatCategory.innerHTML = `<option value="all">${translate("option_all_categories")}</option>`;

    Object.entries(CATEGORY_META).forEach(([value, meta]) => {
        const categoryLabel = `${meta.icon} ${meta.label}`;
        categorySelect.insertAdjacentHTML("beforeend", `<option value="${value}">${categoryLabel}</option>`);
        heatCategory.insertAdjacentHTML("beforeend", `<option value="${value}">${categoryLabel}</option>`);
    });

    citySelect.innerHTML = `<option value="">${translate("option_select_district")}</option>`;
    heatCity.innerHTML = `<option value="all">${translate("option_all_districts")}</option>`;

    Object.entries(DISTRICT_COORDS).forEach(([value, city]) => {
        citySelect.insertAdjacentHTML("beforeend", `<option value="${value}">${city.label}</option>`);
        heatCity.insertAdjacentHTML("beforeend", `<option value="${value}">${city.label}</option>`);
    });

    // Only add event listeners once
    if (!categorySelect.dataset.listenersAdded) {
        categorySelect.addEventListener("change", updateDepartmentPreview);
        citySelect.addEventListener("change", handleCityChange);
        categorySelect.dataset.listenersAdded = "true";
    }
}

function initIssuePills() {
    const pills = document.getElementById("issue-pills");
    pills.innerHTML = Object.values(CATEGORY_META)
        .map(meta => `<div class="issue-pill"><span>${meta.icon}</span><div><strong>${meta.label}</strong><small>${meta.department}</small></div></div>`)
        .join("");
}

function initPhotoPreview() {
    const input = document.getElementById("photo");
    const preview = document.getElementById("photo-preview");

    input.addEventListener("change", async (event) => {
        const file = event.target.files[0];
        if (!file) {
            preview.innerHTML = '<i class="fa-regular fa-image"></i><span>Photo preview will appear here</span>';
            return;
        }

        const dataUrl = await fileToDataUrl(file);
        preview.innerHTML = `<img src="${dataUrl}" alt="Issue preview">`;
    });
}

function initPickerMap() {
    pickerMap = L.map("picker-map").setView([20.5937, 78.9629], 5);
    addBaseLayer(pickerMap);

    pickerMap.on("click", (event) => setPickedLocation(event.latlng.lat, event.latlng.lng, translate("toast_pin_success")));
    document.getElementById("gps-button").addEventListener("click", captureGPSLocation);
}

function initHeatmapMap() {
    heatmapMap = L.map("heatmap-map").setView([20.5937, 78.9629], 5);
    addBaseLayer(heatmapMap);
}

function addBaseLayer(map) {
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
}

function initForm() {
    const form = document.getElementById("report-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const category = document.getElementById("category").value;
        const city = document.getElementById("city").value;
        const area = document.getElementById("area").value.trim();
        const address = document.getElementById("address").value.trim();
        const reporterName = document.getElementById("reporterName").value.trim();
        const reporterPhone = document.getElementById("reporterPhone").value.trim();
        const reporterEmail = document.getElementById("reporterEmail").value.trim();
        const description = document.getElementById("description").value.trim();
        const latitude = parseFloat(document.getElementById("latitude").value);
        const longitude = parseFloat(document.getElementById("longitude").value);

        if (!category || !city || !area || !address || !reporterName || !reporterPhone) {
            showToast(translate("toast_required"), true);
            return;
        }

        if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
            showToast("Please capture the issue location using GPS or the map.", true);
            return;
        }

        const file = document.getElementById("photo").files[0];
        const photoUrl = file ? await fileToDataUrl(file) : null;

        const payload = {
            complaintId: generateComplaintId(),
            category,
            city,
            area,
            address,
            description,
            reporterName,
            reporterPhone,
            reporterEmail,
            latitude,
            longitude,
            photoUrl,
            status: "pending",
            date: new Date().toISOString().split("T")[0]
        };

        try {
            const response = await fetch("/api/issues", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(translate("toast_submit_error"));
            }

            form.reset();
            updateDepartmentPreview();
            document.getElementById("latitude").value = "";
            document.getElementById("longitude").value = "";
            document.getElementById("location-status").textContent = "No coordinates selected yet.";
            document.getElementById("photo-preview").innerHTML = '<i class="fa-regular fa-image"></i><span>Photo preview will appear here</span>';

            if (pickerMarker) {
                pickerMap.removeLayer(pickerMarker);
                pickerMarker = null;
            }

            await refreshStatsAndHeatmap();
            showToast(translate("toast_submit_success").replace("{department}", CATEGORY_META[category].department));
        } catch (error) {
            showToast(translate("toast_submit_error"), true);
        }
    });
}

function initFilters() {
    document.getElementById("heatmap-category-filter").addEventListener("change", renderHeatmap);
    document.getElementById("heatmap-city-filter").addEventListener("change", renderHeatmap);
    document.getElementById("heatmap-area-filter").addEventListener("input", renderHeatmap);
}

async function refreshStatsAndHeatmap() {
    const [statsResponse, issuesResponse] = await Promise.all([
        fetch("/api/issues/stats"),
        fetch("/api/issues")
    ]);

    const stats = statsResponse.ok ? await statsResponse.json() : { total: 0, pending: 0, resolved: 0 };
    issues = issuesResponse.ok ? await issuesResponse.json() : [];

    document.getElementById("stat-total").textContent = stats.total ?? issues.length;
    document.getElementById("stat-pending").textContent = stats.pending ?? 0;
    document.getElementById("stat-resolved").textContent = stats.resolved ?? 0;

    renderHeatmap();
}

function renderHeatmap() {
    // Safety check: ensure map is initialized
    if (!heatmapMap) {
        return;
    }

    const category = document.getElementById("heatmap-category-filter").value;
    const city = document.getElementById("heatmap-city-filter").value;
    const areaQuery = document.getElementById("heatmap-area-filter").value.trim().toLowerCase();

    const filtered = issues.filter(issue => {
        const matchesCategory = category === "all" || issue.category === category;
        const matchesCity = city === "all" || issue.city === city;
        const areaText = `${issue.area ?? ""} ${issue.address ?? ""}`.toLowerCase();
        const matchesArea = !areaQuery || areaText.includes(areaQuery);
        return matchesCategory && matchesCity && matchesArea;
    });

    if (heatLayer) {
        heatmapMap.removeLayer(heatLayer);
    }

    heatMarkers.forEach(marker => heatmapMap.removeLayer(marker));
    heatMarkers = [];

    const heatPoints = filtered.map(issue => [issue.latitude, issue.longitude, 0.85]);

    if (heatPoints.length) {
        heatLayer = L.heatLayer(heatPoints, {
            radius: 30,
            blur: 24,
            maxZoom: 16,
            gradient: {
                0.2: "#34d399",
                0.5: "#fde047",
                0.75: "#fb923c",
                1: "#ef4444"
            }
        }).addTo(heatmapMap);
    }

    filtered.forEach(issue => {
        const marker = L.circleMarker([issue.latitude, issue.longitude], {
            radius: 7,
            color: "#ffffff",
            weight: 2,
            fillColor: "#0f766e",
            fillOpacity: 0.95
        }).bindPopup(`
            <strong>${CATEGORY_META[issue.category]?.icon ?? "📍"} ${CATEGORY_META[issue.category]?.label ?? issue.category}</strong><br>
            ${escapeHtml(issue.area ?? "")}, ${escapeHtml(issue.city ?? "")}<br>
            ${escapeHtml(issue.address ?? "")}<br>
            ${translate("popup_status")}: ${formatStatus(issue.status)}<br>
            ${translate("popup_department")}: ${escapeHtml(issue.department ?? CATEGORY_META[issue.category]?.department ?? translate("fallback_department"))}
        `);

        marker.addTo(heatmapMap);
        heatMarkers.push(marker);
    });

    document.getElementById("heatmap-count").textContent = `${filtered.length} ${translate("heatmap_count_suffix")}`;

    if (filtered.length === 1) {
        heatmapMap.setView([filtered[0].latitude, filtered[0].longitude], 14);
    } else if (filtered.length > 1) {
        const bounds = L.latLngBounds(filtered.map(issue => [issue.latitude, issue.longitude]));
        heatmapMap.fitBounds(bounds, { padding: [30, 30] });
    } else {
        heatmapMap.setView([20.5937, 78.9629], 5);
    }
}

function updateDepartmentPreview() {
    const category = document.getElementById("category").value;
    document.getElementById("departmentPreview").value = category ? CATEGORY_META[category].department : "";
}

function handleCityChange() {
    const city = document.getElementById("city").value;
    if (!city || !DISTRICT_COORDS[city]) {
        return;
    }

    const { lat, lng, zoom } = DISTRICT_COORDS[city];
    pickerMap.setView([lat, lng], zoom);
}

function initRevealAnimations() {
    document.querySelectorAll(".reveal").forEach((element, index) => {
        element.style.animationDelay = `${index * 0.08}s`;
        requestAnimationFrame(() => element.classList.add("revealed"));
    });
}

function captureGPSLocation() {
    if (!navigator.geolocation) {
        showToast(translate("toast_gps_error"), true);
        return;
    }

    document.getElementById("location-status").textContent = translate("toast_gps_loading");

    navigator.geolocation.getCurrentPosition(
        position => {
            setPickedLocation(position.coords.latitude, position.coords.longitude, translate("toast_gps_success"));
            pickerMap.setView([position.coords.latitude, position.coords.longitude], 16);
        },
        () => showToast(translate("toast_gps_failed"), true),
        { enableHighAccuracy: true, timeout: 10000 }
    );
}

function setPickedLocation(lat, lng, message) {
    document.getElementById("latitude").value = lat.toFixed(6);
    document.getElementById("longitude").value = lng.toFixed(6);
    document.getElementById("location-status").textContent = `${message} (${lat.toFixed(5)}, ${lng.toFixed(5)})`;

    if (pickerMarker) {
        pickerMap.removeLayer(pickerMarker);
    }

    pickerMarker = L.marker([lat, lng]).addTo(pickerMap);
}

function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = event => resolve(event.target.result);
        reader.onerror = () => reject(new Error("File could not be read"));
        reader.readAsDataURL(file);
    });
}

function generateComplaintId() {
    return `CV-${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

function formatStatus(status) {
    return status ? status.replace("_", " ").replace(/\b\w/g, match => match.toUpperCase()) : "Pending";
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

function initializeLanguageToggle() {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";
    const langToggle = document.getElementById("lang-toggle");
    const langMenu = document.getElementById("lang-menu");
    const langCurrent = document.getElementById("lang-current");
    const langOptions = document.querySelectorAll(".lang-option");

    console.log("Language Toggle Init:", {
        langToggle: !!langToggle,
        langMenu: !!langMenu,
        langCurrent: !!langCurrent,
        langOptionsCount: langOptions.length,
        savedLanguage
    });

    applyLanguage(savedLanguage);
    updateLangDisplay(savedLanguage);

    if (langToggle && langMenu) {
        // Toggle button click
        langToggle.addEventListener("click", (e) => {
            console.log("Lang toggle clicked");
            e.stopPropagation();
            langMenu.classList.toggle("show");
            langToggle.classList.toggle("open");
            console.log("Menu show:", langMenu.classList.contains("show"));
        });

        // Close menu on outside click
        document.addEventListener("click", (e) => {
            if (!langMenu.contains(e.target) && !langToggle.contains(e.target)) {
                if (langMenu.classList.contains("show")) {
                    langMenu.classList.remove("show");
                    langToggle.classList.remove("open");
                    console.log("Menu closed by outside click");
                }
            }
        });

        // Language option clicks
        langOptions.forEach((option, index) => {
            option.addEventListener("click", () => {
                const nextLanguage = option.dataset.lang || "en";
                console.log("Language option clicked:", nextLanguage, "Index:", index);
                localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
                applyLanguage(nextLanguage);
                updateLangDisplay(nextLanguage);
                langMenu.classList.remove("show");
                langToggle.classList.remove("open");
                console.log("Language changed to:", nextLanguage);
            });
        });
    } else {
        console.error("Language toggle elements not found!", {
            langToggle,
            langMenu
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
    try {
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

        populateSelects();
        updateDepartmentPreview();

        const preview = document.querySelector("#photo-preview span");
        if (preview && !document.querySelector("#photo-preview img")) {
            preview.textContent = translate("photo_preview");
        }

        if (document.getElementById("latitude") && document.getElementById("longitude")) {
            if (!document.getElementById("latitude").value || !document.getElementById("longitude").value) {
                document.getElementById("location-status").textContent = translate("location_none");
            }
        }

        // Only update heatmap if it's initialized and visible
        if (heatmapMap && document.getElementById("heatmap-map")) {
            if (issues.length) {
                try {
                    renderHeatmap();
                } catch (error) {
                    console.error("Error updating heatmap on language change:", error);
                }
            } else {
                const heatmapCount = document.getElementById("heatmap-count");
                if (heatmapCount) {
                    heatmapCount.textContent = `0 ${translate("heatmap_count_suffix")}`;
                }
            }
        }

        console.log("Language applied:", currentLanguage);
    } catch (error) {
        console.error("Error in applyLanguage:", error);
    }
}

function translate(key) {
    return SITE_TRANSLATIONS[currentLanguage]?.[key] ?? SITE_TRANSLATIONS.en[key] ?? key;
}
