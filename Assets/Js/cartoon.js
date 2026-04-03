// 1. The Data (Acting as your JS Backend)
const cardData = [
  {
    id: 1,
    title: "Adventure Time",
    description: "Whimsical and colorful cartoon style with simple geometric shapes and bold outlines.",
    image: "Assets/Image/cartoon/Adventure_Time.webp" 
  },
  {
    id: 2,
    title: "Pixar Art",
    description: "3D animated style with smooth textures, vibrant colors, and realistic lighting.",
    image: "Assets/Image/cartoon/Pixar.webp"
  },
  {
    id: 3,
    title: "Pop Art",
    description: "Bold, vibrant colors with comic book aesthetics and high contrast effects.",
    image: "Assets/Image/cartoon/Popart.webp"
  },
  {
    id: 4,
    title: "Claymation",
    description: "Stop-motion clay animation style with textured surfaces and playful character design.",
    image: "Assets/Image/cartoon/Claymation.webp"
  }
];

// 3. The function that creates the cards
function generateCards() {
  // Find the empty container in index.html
  const container = document.getElementById("card-container");
  
  let htmlContent = "";

  // Loop through the array and create a card for each item
  cardData.forEach((card) => {
    htmlContent += `
      <div class="col">
        <div class="card h-100 style-display-card border-0 shadow-sm">
          <img
            src="${card.image}"
            class="card-img-top"
            alt="${card.title}"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">${card.title}</h5>
            <p class="card-text text-muted small">
              ${card.description}
            </p>
          </div>
        </div>
      </div>
    `;
  });

  // Inject the final HTML into the page
  container.innerHTML = htmlContent;
}

// FQA:
// 1. Add the FAQ Data
const faqData = [
  {
    id: 1,
    question: "What is the best way to cartoonize a picture?",
    answer: "The best way to cartoonize a picture is by using our AI-powered image to cartoon tool. It automatically converts photos into cartoon-style images with high precision. Just upload your photo, adjust the cartoon effect strength, and get your cartoon avatar in seconds — no manual editing needed."
  },
  {
    id: 2,
    question: "Can I Cartoon My Face Online for Free?",
    answer: "Yes, you can cartoon your face online for free with our image to cartoon converter. Simply upload a selfie or photo, adjust your settings, and download your cartoonized version without signing up or paying any fees."
  },
  {
    id: 3,
    question: "Is It Safe to Use Online Cartoon Converters?",
    answer: "Absolutely. Our cartoon maker runs fully on the client side using secure browser-based technology. Your images are never uploaded to any server, ensuring your privacy and data security while using the tool."
  },
  {
    id: 4,
    question: "Does It Work For Group Photos or Only Portraits?",
    answer: "Yes, our AI cartoonizer supports both portraits and group photos. It detects multiple faces and can cartoonize full-body pictures while maintaining clean outlines and vibrant cartoon styles."
  },
  {
    id: 5,
    question: "Do I Need to Download Any Software to Cartoonize My Photos?",
    answer: "No download is required. Our image to cartoon tool is 100% web-based. You can cartoonize pictures directly in your browser on any device — PC, Mac, tablet, or smartphone."
  },
  {
    id: 6,
    question: "Can I Use Cartoonized Images for Commercial Purposes?",
    answer: "Yes, all cartoon images generated are royalty-free and can be used for personal and commercial purposes. Whether it’s for marketing, branding, or content creation, you have full usage rights."
  },
  {
    id: 7,
    question: "Does the Cartoonizer Support Group Photos or Just Individual Portraits?",
    answer: "Yes, our AI cartoonizer supports both portraits and group photos. It detects multiple faces and can cartoonize full-body pictures while maintaining clean outlines and vibrant cartoon styles."
  },
  {
    id: 8,
    question: "How Long Does It Take to Cartoonize a Photo?",
    answer: "The process is lightning-fast. Once you upload a photo and adjust the effect settings, it usually takes just a few seconds to generate your cartoon image. Our AI is optimized for speed and accuracy."
  },
  {
    id: 9,
    question: "Can I Cartoonize My Pet's Photo Too?",
    answer: "Of course! Our image to cartoon tool works well with animal photos too. You can turn your pet's picture into a cute cartoon-style image with just a click — perfect for custom pet avatars or gifts."
  },
  {
    id: 10,
    question: "Is the Cartoonizer Tool Mobile-Friendly?",
    answer: "Yes, the cartoonizer tool is fully mobile-friendly. Whether you're on an iPhone, Android, or tablet, you can cartoon a picture anytime, anywhere — no app installation needed."
  }
];

// 2. UPDATE your existing DOMContentLoaded listener to call BOTH functions:
document.addEventListener("DOMContentLoaded", () => {
  generateCards(); // Your existing function
  generateFAQs();  // The new FAQ function
});

// 3. Add the function that creates the FAQs
function generateFAQs() {
  const container = document.getElementById("faq-container");
  let htmlContent = "";

  faqData.forEach((faq, index) => {
    // Make the first item open by default, and the rest closed
    const isFirst = index === 0;
    const collapseClass = isFirst ? "collapse show" : "collapse";
    const btnClass = isFirst ? "accordion-button" : "accordion-button collapsed";
    const ariaExpanded = isFirst ? "true" : "false";

    htmlContent += `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="${btnClass}"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq-${faq.id}"
            aria-expanded="${ariaExpanded}"
          >
            ${faq.question}
          </button>
        </h2>
        <div
          id="faq-${faq.id}"
          class="accordion-collapse ${collapseClass}"
          data-bs-parent="#faq-container"
        >
          <div class="accordion-body">
            ${faq.answer}
          </div>
        </div>
      </div>
    `;
  });

  // Inject the final HTML into the page
  container.innerHTML = htmlContent;
}