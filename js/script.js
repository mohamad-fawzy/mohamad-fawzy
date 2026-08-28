/* Mohamed Alborolusy — Personal Portfolio (Static)
   Lightweight scroll-reveal, no external dependencies. */
(function () {
    "use strict";

    function initReveal() {
        var items = document.querySelectorAll(".po-reveal");
        if (!items.length) return;
        if (!("IntersectionObserver" in window)) {
            items.forEach(function (el) { el.classList.add("po-in-view"); });
            return;
        }
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("po-in-view");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );
        items.forEach(function (el) { observer.observe(el); });
    }

    function setYear() {
        var el = document.getElementById("po-year");
        if (el) el.textContent = new Date().getFullYear();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () {
            initReveal();
            setYear();
        });
    } else {
        initReveal();
        setYear();
    }
})();