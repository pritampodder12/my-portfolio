export function downloadFile(url, filename) {
  fetch(url)
    .then(function (t) {
      t.blob()
        .then((b) => {
          var a = document.createElement("a");
          a.href = URL.createObjectURL(b);
          a.setAttribute("download", filename);
          a.click();
        })
        .catch((err) => console.log("Error while dowinloading", err));
    })
    .catch((err) => console.log("Fetch error", err));
}

export function calculateExperience() {
  const doj = new Date(2020, 6, 16);
  const timeDifMs = Date.now() - doj;
  const timeDifYear = timeDifMs / (1000 * 60 * 60 * 24 * 365);
  return Math.round(timeDifYear * 100) / 100;
}
