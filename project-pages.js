document.addEventListener("DOMContentLoaded", async () => {
  if (window.mermaid) {
    window.mermaid.initialize({
      startOnLoad: true,
      theme: "base",
      securityLevel: "loose",
      themeVariables: {
        primaryColor: "#f6f1ea",
        primaryTextColor: "#1d2430",
        primaryBorderColor: "#2e4a66",
        lineColor: "#586376",
        secondaryColor: "#ffffff",
        tertiaryColor: "#f7f4ef",
        fontFamily: "Avenir Next, Helvetica Neue, Noto Sans TC, sans-serif"
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: "basis"
      }
    });
    await window.mermaid.run({ querySelector: ".mermaid" });
  }

  const modal = document.querySelector("[data-diagram-modal]");
  if (!modal) return;

  const modalContent = modal.querySelector("[data-diagram-modal-content]");
  const closeModal = () => {
    modal.classList.remove("is-open");
    modalContent.innerHTML = "";
  };

  document.querySelectorAll(".zoomable-diagram").forEach((diagram) => {
    diagram.addEventListener("click", () => {
      const svg = diagram.querySelector("svg");
      if (!svg) return;
      modalContent.innerHTML = svg.outerHTML;
      modal.classList.add("is-open");
    });
  });

  modal.querySelector("[data-diagram-modal-close]").addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
});
