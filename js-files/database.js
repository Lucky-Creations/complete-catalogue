import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getDatabase, ref, runTransaction } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvWlnAUx3hFEkksLzvTTnUWsn90OVPqFI",
  authDomain: "lph-server-website.firebaseapp.com",
  databaseURL: "https://lph-server-website-default-rtdb.firebaseio.com",
  projectId: "lph-server-website",
  storageBucket: "lph-server-website.firebasestorage.app",
  messagingSenderId: "200401032111",
  appId: "1:200401032111:web:d0ccd06a0415e97657955a",
  measurementId: "G-9B9SR4TZVY"
};

window.addEventListener("DOMContentLoaded", () => {
  try {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getDatabase(app);

    // Detects current page
    const path = window.location.pathname;

    if (path.endsWith("index.html") || path === "/without-database/") {
      logEvent(analytics, "site_visit", { source: "home_page" });
      runTransaction(ref(db, "crochet_stats/crochet_visits"), n => (n || 0) + 1);
    }

    else if (path.endsWith("centerpieces.html")) {
      logEvent(analytics, "site_visit", { source: "centerpieces_page" });
      runTransaction(ref(db, "crochet_stats/centerpieces_visits"), n => (n || 0) + 1);
    }

    else if (path.endsWith("coaster-sets.html")) {
      logEvent(analytics, "site_visit", { source: "coasterSets_page" });
      runTransaction(ref(db, "crochet_stats/coaster_visits"), n => (n || 0) + 1);
    }

    else if (path.endsWith("doilies.html")) {
      logEvent(analytics, "site_visit", { source: "doilies_page" });
      runTransaction(ref(db, "crochet_stats/doilies_visits"), n => (n || 0) + 1);
    }

    else if (path.endsWith("earrings.html")) {
      logEvent(analytics, "site_visit", { source: "earrings_page" });
      runTransaction(ref(db, "crochet_stats/earrings_visits"), n => (n || 0) + 1);
    }

    else if (path.endsWith("good-omen.html")) {
      logEvent(analytics, "site_visit", { source: "goodOmen_page" });
      runTransaction(ref(db, "crochet_stats/good_visits"), n => (n || 0) + 1);
    }

    else if (path.endsWith("handkerchiefs.html")) {
      logEvent(analytics, "site_visit", { source: "handkerchiefs_page" });
      runTransaction(ref(db, "crochet_stats/handkerchiefs_visits"), n => (n || 0) + 1);
    }

    else if (path.endsWith("keychains.html")) {
      logEvent(analytics, "site_visit", { source: "keychains_page" });
      runTransaction(ref(db, "crochet_stats/keychains_visits"), n => (n || 0) + 1);
    }

    else if (path.endsWith("mini-bags.html")) {
      logEvent(analytics, "site_visit", { source: "miniBags_page" });
      runTransaction(ref(db, "crochet_stats/mini_visits"), n => (n || 0) + 1);
    }

    else if (path.endsWith("phone-pouches.html")) {
      logEvent(analytics, "site_visit", { source: "phonePouches_page" });
      runTransaction(ref(db, "crochet_stats/phone_visits"), n => (n || 0) + 1);
    }

    else if (path.endsWith("rakhis.html")) {
      logEvent(analytics, "site_visit", { source: "rakhis_page" });
      runTransaction(ref(db, "crochet_stats/rakhis_visits"), n => (n || 0) + 1);
    }

    else if (path.endsWith("scrunchies.html")) {
      logEvent(analytics, "site_visit", { source: "scrunchies_page" });
      runTransaction(ref(db, "crochet_stats/scrunchies_visits"), n => (n || 0) + 1);
    }

    else if (path.endsWith("tie-backs.html")) {
      logEvent(analytics, "site_visit", { source: "tie_page" });
      runTransaction(ref(db, "crochet_stats/tie_visits"), n => (n || 0) + 1);
    }

    else if (path.endsWith("tricolour.html")) {
      logEvent(analytics, "site_visit", { source: "tricolour_page" });
      runTransaction(ref(db, "crochet_stats/tricolour_visits"), n => (n || 0) + 1);
    }

    } catch (e) {
        console.warn("Firebase init error:", e);
      }
});