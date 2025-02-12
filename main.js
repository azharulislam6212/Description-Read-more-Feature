

function AddReadMore() {
    document.querySelectorAll(".add-read-more").forEach(function (element) {
        var carLmt = element.getAttribute("data-char-limit") ? parseInt(element.getAttribute("data-char-limit")) : 300;
        var readMoreTxt = " ...read more";
        var readLessTxt = " read less";

        if (element.querySelector(".first-section")) return;

        var allstr = element.textContent.trim();
        if (allstr.length > carLmt) {
            var firstSet = allstr.substring(0, carLmt);
            var secdHalf = allstr.substring(carLmt);
            var strtoadd = `${firstSet}<span class='second-section' style='display:none;'>${secdHalf}</span>
                <span class='read-more' style='color:blue; cursor:pointer;'>${readMoreTxt}</span>
                <span class='read-less' style='color:blue; cursor:pointer; display:none;'>${readLessTxt}</span>`;
            
            element.innerHTML = strtoadd;
        }
    });

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("read-more")) {
            var parent = event.target.closest(".add-read-more");
            parent.querySelector(".second-section").style.display = "inline";
            event.target.style.display = "none";
            parent.querySelector(".read-less").style.display = "inline";
        } else if (event.target.classList.contains("read-less")) {
            var parent = event.target.closest(".add-read-more");
            parent.querySelector(".second-section").style.display = "none";
            event.target.style.display = "none";
            parent.querySelector(".read-more").style.display = "inline";
        }
    });
}

AddReadMore();
