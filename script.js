const servicesData = [
    {
        icon: '💻',
        title: 'Programming',
        description: 'Sistem digital yang dirancang khusus untuk efisiensi operasional sekolah dan institusi Anda.',
        features: ['Website Instansi Professional', 'Sistem Informasi Akademik', 'Portal E-Learning Terpadu', 'Aplikasi Manajemen Data']
    },
    {
        icon: '🌐',
        title: 'Networking',
        description: 'Konektivitas stabil dan cepat untuk mendukung aktivitas belajar mengajar tanpa hambatan.',
        features: ['Jaringan WiFi Kampus Stabil', 'Manajemen Bandwidth', 'Instalasi Lab Komputer', 'Keamanan Jaringan Intranet']
    },
    {
        icon: '🖥️',
        title: 'IT Infrastructure',
        description: 'Pondasi teknologi yang kuat agar investasi hardware Anda awet dan bekerja optimal.',
        features: ['Pemeliharaan Server', 'Sistem Backup Otomatis', 'Peremajaan Perangkat', 'Manajemen Aset IT']
    },
    {
        icon: '📹',
        title: 'CCTV & Security',
        description: 'Rasa aman maksimal dengan sistem pemantauan modern yang bisa diakses dari mana saja.',
        features: ['CCTV Online 24 Jam', 'Akses Pantau via HP', 'Instalasi Rapi & Aman', 'Sistem Alarm Terintegrasi']
    }
];

const pricingData = [
    {
        name: 'Jasa Per Jam',
        badge: 'Flexible',
        price: 'Mulai Rp 25.000',
        period: '/jam',
        features: [
            'Konsultasi IT pendidikan',
            'Troubleshooting masalah',
            'Setup device per unit',
            'Software installation',
            'Technical support',
            'Minimum 2 jam'
        ],
        featured: false
    },
    {
        name: 'Jasa Project',
        badge: 'Paling Laris',
        price: 'Mulai Rp 1.000.000',
        period: '/project',
        features: [
            'Website sekolah/kampus',
            'Network setup complete',
            'CCTV installation',
            'Server setup',
            'Lab komputer setup',
            'Garansi 3-6 bulan',
            'Documentation lengkap'
        ],
        featured: true
    },
    {
        name: 'Kontrak Tahunan',
        badge: 'Best Value',
        price: 'Mulai Rp 5.000.000',
        period: '/tahun',
        features: [
            'Maintenance routine',
            '24/7 priority support',
            'System monitoring',
            'Backup automation',
            'Security updates',
            'Training staff',
            'Hardware replacement',
            'Performance optimization'
        ],
        featured: false
    }
];

const portfolioData = [
    {
        title: 'Portal Berita Online Madura News',
        description: 'Portal berita online dengan sistem CMS, multi-author, real-time publishing, SEO optimization, dan mobile responsive design untuk media di Jawa Timur.',
        category: 'Programming',
        image: '📰',
        liveLink: '#demo-berita',
        repoLink: '#case-study-berita'
    },
    {
        title: 'Jaringan Intranet Sekolah',
        description: 'Instalasi jaringan intranet lengkap untuk SMA dengan 100+ workstation, server lokal, file sharing, dan sistem keamanan berlapis.',
        category: 'Networking',
        image: '🏫',
        liveLink: '#demo-intranet',
        repoLink: '#case-study-intranet'
    },
    {
        title: 'CCTV Installation SMA Pamekasan',
        description: 'Instalasi CCTV 16 channel di SMA Pamekasan, Madura dengan coverage area sekolah, remote monitoring mobile, dan backup sistem 30 hari.',
        category: 'CCTV',
        image: '📹',
        liveLink: '#demo-cctv',
        repoLink: '#case-study-cctv'
    },
    {
        title: 'Sistem Informasi Akademik',
        description: 'Aplikasi SIAKAD untuk kelola data siswa, nilai, absensi, dan laporan semester dengan dashboard real-time untuk sekolah.',
        category: 'Programming',
        image: '📊',
        liveLink: '#demo-siakad',
        repoLink: '#case-study-siakad'
    },
    {
        title: 'Network Infrastructure Campus',
        description: 'Setup infrastruktur jaringan kampus dengan fiber optic, WiFi mesh, VPN access, dan load balancing untuk 500+ users.',
        category: 'Networking',
        image: '🌐',
        liveLink: '#demo-campus-network',
        repoLink: '#case-study-campus'
    },
    {
        title: 'Security System SD Pamekasan',
        description: 'Sistem keamanan komprehensif dengan CCTV 12 channel di SD Pamekasan, Madura. Coverage area lengkap, remote monitoring, dan alarm system.',
        category: 'CCTV',
        image: '🛡️',
        liveLink: '#demo-security',
        repoLink: '#case-study-security'
    }
];

const testimonialsData = [
    {
        name: 'Kepala Sekolah SMA Negeri 1',
        position: 'Pamekasan, Madura',
        avatar: 'KS',
        content: 'Website sekolah dan sistem akademik dari TAP-SERVICE sangat membantu operasional kami. Orang tua murah jadi mudah akses informasi nilai dan kegiatan sekolah. Tim support lokal sangat responsif.'
    },
    {
        name: 'Manager Media Online',
        position: 'Surabaya, Jawa Timur',
        avatar: 'MO',
        content: 'Portal berita online yang dikembangkan TAP-SERVICE sangat profesional. Loading cepat, mobile-friendly, dan sistem management konten yang mudah digunakan untuk tim redaksi kami.'
    },
    {
        name: 'Pemilik Usaha Retail',
        position: 'Pamekasan, Madura',
        avatar: 'PU',
        content: 'Sistem POS dan inventory management dari TAP-SERVICE sangat membantu operasional toko kami. Tim lokal dari Madura memahami kebutuhan UMKM dengan baik dan harga sangat terjangkau.'
    }
];

const faqData = [
    {
        question: 'Bagaimana sistem pembayaran untuk jasa per jam?',
        answer: 'Jasa per jam dibayar setelah selesai pengerjaan via transfer atau e-wallet. Minimum 2 jam per kunjungan. Untuk request darurat di luar jam kerja (malam/weekend) ada tambahan charge 50%. Invoice dikirimkan setelah service selesai.'
    },
    {
        question: 'Bagaimana tahapan pembayaran untuk project-based?',
        answer: 'Project < Rp 2 juta: DP 50% dimuka, pelunasan 50% setelah selesai. Project > Rp 2 juta: DP 40% dimuka, 40% pada progress 50%, 20% setelah UAT. Pembayaran dapat cicil hingga 3x dengan syarat dan ketentuan berlaku.'
    },
    {
        question: 'Apa saja yang termasuk dalam kontrak tahunan?',
        answer: 'Kontrak tahunan mencakup: maintenance rutin (1x/bulan), emergency support 24/7, system monitoring, backup otomatis, security update, training staff basic IT, dan replacement hardware untuk kerusakan normal. Tidak termasuk upgrade sistem atau penambahan fitur baru.'
    },
    {
        question: 'Apakah ada garansi untuk setiap layanan?',
        answer: 'Ya! Jasa per jam ada garansi 7 hari untuk masalah yang sama. Project-based garansi 3-6 bulan tergantung jenis project. Kontrak tahunan automatic dapat garansi selama kontrak berlangsung. Garansi mencakup perbaikan dan support tanpa biaya tambahan.'
    },
    {
        question: 'Berapa lama estimasi pengerjaan untuk project?',
        answer: 'Website sekolah: 2-4 minggu. Network setup: 3-7 hari. CCTV installation: 2-5 hari. Server setup: 1-2 minggu. Lab komputer: 1 minggu. Estimasi akan disesuaikan setelah survey dan diskusi kebutuhan detail.'
    },
    {
        question: 'Apakah melayani konsultasi IT untuk sekolah?',
        answer: 'Ya, kami menyediakan jasa konsultasi IT per jam atau berlangganan. Konsultasi meliputi: perencanaan infrastruktur IT, audit sistem existing, rekomendasi teknologi, budget planning, dan roadmap digital transformation untuk institusi pendidikan.'
    },
    {
        question: 'Apakah melayani instalasi di Pamekasan, Madura?',
        answer: 'Ya! Kami memiliki tim khusus yang melayani instalasi jaringan dan CCTV di area Pamekasan, Madura, Jawa Timur. Sudah berpengalaman mengerjakan proyek di sekolah-sekolah sekitar Pamekasan dengan pelayanan langsung dan hasil memuaskan.'
    },
    {
        question: 'Bagaimana sistem layanan untuk luar Jabodetabek?',
        answer: 'Untuk layanan di luar Jabodetabek (termasuk Pamekasan, Madura): 1) Survey dan instalasi langsung tim kami datang ke lokasi. 2) Konsultasi dan programming bisa dilakukan online. 3) Biaya transportasi disesuaikan dengan jarak lokasi.'
    }
];

// DOM Elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const servicesGrid = document.getElementById('servicesGrid');
const pricingTable = document.getElementById('pricingTable');
const portfolioGrid = document.getElementById('portfolioGrid');
const testimonialContainer = document.getElementById('testimonialContainer');
const testimonialDots = document.getElementById('testimonialDots');
const faqContainer = document.getElementById('faqContainer');
const contactForm = document.getElementById('contactForm');

// State
let currentTestimonial = 0;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Update Year First
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    initializeTheme();
    try { initializeNavigation(); } catch(e) { console.log('Nav init failed', e); }
    renderServices();
    renderPricing();
    renderPortfolio();
    initializeTestimonials();
    renderFAQ();
    initializeContactForm();
    try { initializeScrollAnimations(); } catch(e) { console.log('Scroll init failed', e); }
});

// Theme Toggle Logic
function initializeTheme() {
    const themeToggleBtn = document.getElementById('themeToggle');
    if (!themeToggleBtn) return;

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'light');
        updateThemeIcon(false);
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon(true);
    }

    themeToggleBtn.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeIcon(newTheme === 'dark');
}

function updateThemeIcon(isDark) {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    // Simple SVG icons
    const sunIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    const moonIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

    btn.innerHTML = isDark ? sunIcon : moonIcon;
    btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
}

// Navigation
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Toggle body scroll
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Active navigation on scroll
    window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Render Services
function renderServices() {
    if (!servicesGrid) return;

    servicesGrid.innerHTML = servicesData.map(service => `
        <div class="service-card fade-in">
            <div class="service-header">
                <div class="service-icon">${service.icon}</div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
            </div>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Render Pricing
function renderPricing() {
    if (!pricingTable) return;

    pricingTable.innerHTML = pricingData.map((plan, index) => `
        <div class="pricing-card fade-in ${plan.featured ? 'featured' : ''}">
            <div class="pricing-header">
                ${plan.badge ? `<span class="pricing-badge">${plan.badge}</span>` : ''}
                <h3 class="pricing-name">${plan.name}</h3>
                <div class="pricing-price">${plan.price}<span class="pricing-period">${plan.period}</span></div>
            </div>
            <div class="pricing-features">
                ${plan.features.map(feature => `
                    <div class="pricing-feature">${feature}</div>
                `).join('')}
            </div>
            <div class="pricing-action">
                <a href="#contact" class="btn btn-primary" style="width: 100%">Pesan Paket</a>
            </div>
        </div>
    `).join('');
}

// Render Portfolio
function renderPortfolio() {
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = portfolioData.map((project, index) => `
        <div class="portfolio-card fade-in">
            <div class="portfolio-image">
                <span style="font-size: 4rem">${project.image}</span>
            </div>
            <div class="portfolio-content">
                <h3 class="portfolio-title">${project.title}</h3>
                <div class="portfolio-category">${project.category}</div>
                <p class="portfolio-description">${project.description}</p>
                <div class="portfolio-links">
                    <a href="${project.liveLink}" class="portfolio-link">Live Demo</a>
                    <a href="${project.repoLink}" class="portfolio-link">Case Study</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Testimonials
function initializeTestimonials() {
    if (!testimonialContainer) return;

    renderTestimonial(currentTestimonial);
    renderTestimonialDots();

    // Controls
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonialsData.length) % testimonialsData.length;
            renderTestimonial(currentTestimonial);
            updateTestimonialDots();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonialsData.length;
            renderTestimonial(currentTestimonial);
            updateTestimonialDots();
        });
    }

    // Auto-play
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialsData.length;
        renderTestimonial(currentTestimonial);
        updateTestimonialDots();
    }, 5000);
}

function renderTestimonial(index) {
    if (!testimonialContainer) return;

    const testimonial = testimonialsData[index];

    testimonialContainer.innerHTML = `
        <div class="testimonial-track">
            <div class="testimonial-item">
                <div class="testimonial-card">
                    <p class="testimonial-content">"${testimonial.content}"</p>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">${testimonial.avatar}</div>
                        <div class="testimonial-info">
                            <div class="testimonial-name">${testimonial.name}</div>
                            <div class="testimonial-position">${testimonial.position}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderTestimonialDots() {
    if (!testimonialDots) return;

    testimonialDots.innerHTML = testimonialsData.map((_, index) => `
        <button class="testimonial-dot ${index === 0 ? 'active' : ''}"
                onclick="goToTestimonial(${index})"
                aria-label="Go to testimonial ${index + 1}">
        </button>
    `).join('');
}

function updateTestimonialDots() {
    const dots = testimonialDots.querySelectorAll('.testimonial-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
}

function goToTestimonial(index) {
    currentTestimonial = index;
    renderTestimonial(currentTestimonial);
    updateTestimonialDots();
}

// FAQ
function renderFAQ() {
    if (!faqContainer) return;

    faqContainer.innerHTML = faqData.map((item, index) => `
        <div class="faq-item">
            <button class="faq-header" onclick="toggleFAQ(${index})">
                <h3 class="faq-question">${item.question}</h3>
                <span class="faq-toggle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6,9 12,15 18,9"/>
                    </svg>
                </span>
            </button>
            <div class="faq-content">
                <div class="faq-answer">${item.answer}</div>
            </div>
        </div>
    `).join('');
}

function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const currentItem = faqItems[index];

    // Close all other items
    faqItems.forEach((item, i) => {
        if (i !== index) {
            item.classList.remove('active');
        }
    });

    // Toggle current item
    currentItem.classList.toggle('active');
}

// Contact Form
function initializeContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Validate form
        if (!validateContactForm(data)) {
            return;
        }

        // Show success message
        alert('Terima kasih! Pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda.');

        // Reset form
        this.reset();
    });
}

function validateContactForm(data) {
    let isValid = true;

    // Name validation
    if (data.name.trim().length < 3) {
        alert('Nama minimal 3 karakter');
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Email tidak valid');
        isValid = false;
    }

    // Phone validation
    const phoneRegex = /^[+]?[0-9]{10,15}$/;
    if (!phoneRegex.test(data.phone.replace(/[^0-9]/g, ''))) {
        alert('Nomor telepon tidak valid (minimal 10 digit)');
        isValid = false;
    }

    // Needs validation
    if (data.needs.trim().length < 10) {
        alert('Mohon jelaskan kebutuhan Anda minimal 10 karakter');
        isValid = false;
    }

    return isValid;
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Utility Functions
function sanitizeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const optimizedScroll = debounce(updateActiveNav, 100);
window.addEventListener('scroll', optimizedScroll);

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }

    // Arrow keys for testimonials
    if (e.key === 'ArrowLeft') {
        document.getElementById('prevTestimonial')?.click();
    } else if (e.key === 'ArrowRight') {
        document.getElementById('nextTestimonial')?.click();
    }
});

// Accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels dynamically
    const testimonialBtns = document.querySelectorAll('.testimonial-btn');
    testimonialBtns.forEach((btn, index) => {
        btn.setAttribute('aria-label', `${index === 0 ? 'Previous' : 'Next'} testimonial`);
    });

    // Focus management for mobile menu
    navToggle.addEventListener('click', function() {
        const isOpen = navMenu.classList.contains('active');
        if (isOpen) {
            navMenu.querySelector('a').focus();
        } else {
            this.focus();
        }
    });
});

// Lazy loading simulation for better performance
document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading states
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
    }, 100);
});

// Business Model Canvas Modal Functions
function openBMCModal() {
    const modal = document.getElementById('bmcModal');
    if (!modal) return;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus management
    setTimeout(() => {
        modal.querySelector('.modal-close').focus();
    }, 100);
}

function closeBMCModal() {
    const modal = document.getElementById('bmcModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';

    // Return focus to trigger button if it exists
    const btn = document.getElementById('bmcBtn');
    if (btn) btn.focus();
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('bmcModal');
        if (modal && modal.classList.contains('active')) {
            closeBMCModal();
        }
    }
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // You can add error reporting here
});

// Service Worker registration (optional - for PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when you have a service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

// PDF Export Functionality
function exportBMCtoPDF() {
    // Show loading indicator
    const exportBtn = document.querySelector('.btn-export-pdf');
    if (!exportBtn) return;

    const originalContent = exportBtn.innerHTML;
    exportBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
            <circle cx="12" cy="12" r="10"/>
            <path d="m4 12 8-4v8z"/>
        </svg>
        <span>Generating...</span>
    `;
    exportBtn.disabled = true;
    exportBtn.style.cursor = 'not-allowed';

    // Load the required libraries dynamically
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', () => {
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js', () => {
            generatePDF();
        });
    });

    function loadScript(src, callback) {
        const script = document.createElement('script');
        script.src = src;
        script.onload = callback;
        script.onerror = () => {
            console.error('Failed to load script:', src);
            alert('Failed to load PDF export library. Please check your internet connection and try again.');
            resetExportButton();
        };
        document.head.appendChild(script);
    }

    function generatePDF() {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');

        // PDF Dimensions
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 20;
        let yPosition = margin;

        // Helper function to add new page if needed
        function checkPageBreak(requiredHeight, addToNewPage = false) {
            const safeBottom = pageHeight - margin - 10; // 10mm extra safety margin
            if (yPosition + requiredHeight > safeBottom) {
                pdf.addPage();
                yPosition = margin;
                if (addToNewPage) {
                    return true; // Indicate that we're on a new page
                }
            }
            return false;
        }

        // Helper function to add text with word wrap
        function addText(text, fontSize = 12, fontStyle = 'normal', lineHeight = 7) {
            pdf.setFontSize(fontSize);
            pdf.setFont('helvetica', fontStyle);
            const maxWidth = pageWidth - 2 * margin;
            const lines = pdf.splitTextToSize(text, maxWidth);

            // Calculate required height before adding text
            const requiredHeight = lines.length * lineHeight;
            checkPageBreak(requiredHeight);

            lines.forEach(line => {
                pdf.text(line, margin, yPosition);
                yPosition += lineHeight;
            });

            return yPosition;
        }

        // Helper function to add a section header
        function addSectionHeader(title, fontSize = 14) {
            checkPageBreak(20);
            pdf.setFontSize(fontSize);
            pdf.setFont('helvetica', 'bold');
            pdf.text(title, margin, yPosition);
            yPosition += 15;
            return yPosition;
        }

        // Helper function to add a numbered stage item
        function addStageItem(number, title, description) {
            const totalRequiredHeight = 35; // Estimate for number + title + description + spacing
            checkPageBreak(totalRequiredHeight);

            // Draw stage number in a circle
            pdf.setFillColor(34, 197, 94);
            pdf.circle(margin + 8, yPosition + 8, 6, 'F');

            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(10);
            pdf.setFont('helvetica', 'bold');
            pdf.text(number.toString(), margin + 8, yPosition + 12, { align: 'center' });

            // Draw title next to the circle
            pdf.setTextColor(0, 0, 0);
            pdf.setFontSize(13);
            pdf.setFont('helvetica', 'bold');
            pdf.text(title, margin + 20, yPosition + 12);

            yPosition += 20;

            // Add description with proper wrapping
            pdf.setFontSize(10);
            pdf.setFont('helvetica', 'normal');
            const descriptionLines = pdf.splitTextToSize(description, pageWidth - 2 * margin - 20);
            descriptionLines.forEach(line => {
                pdf.text(line, margin + 20, yPosition);
                yPosition += 6;
            });

            yPosition += 10; // Spacing between stages
            return yPosition;
        }

        // Helper function to add a modal asset section
        function addModalAssetSection(title, description, items) {
            const estimatedHeight = 15 + (description.length / 80) * 6 + (items.length * 6) + 10; // Rough calculation
            checkPageBreak(estimatedHeight);

            // Draw header box
            pdf.setFillColor(34, 197, 94);
            pdf.rect(margin, yPosition, pageWidth - 2 * margin, 12, 'F');

            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(12);
            pdf.setFont('helvetica', 'bold');
            pdf.text(title, margin + 6, yPosition + 8);

            yPosition += 12;

            // Add description
            pdf.setTextColor(60, 60, 60); // Dark gray for description
            pdf.setFontSize(9);
            pdf.setFont('helvetica', 'italic');

            const descriptionLines = pdf.splitTextToSize(description, pageWidth - 2 * margin - 12);
            descriptionLines.forEach(line => {
                pdf.text(line, margin + 6, yPosition);
                yPosition += 5;
            });

            yPosition += 5;

            // Add bullet points
            pdf.setTextColor(0, 0, 0);
            pdf.setFontSize(10);
            pdf.setFont('helvetica', 'normal');

            items.forEach(item => {
                // Check if bullet point fits, if not, create new page
                if (yPosition > pageHeight - margin - 15) {
                    pdf.addPage();
                    yPosition = margin;
                }

                pdf.text('•', margin + 6, yPosition);
                const itemText = ` ${item}`;
                const itemLines = pdf.splitTextToSize(itemText, pageWidth - 2 * margin - 20);
                itemLines.forEach((line, index) => {
                    if (index === 0) {
                        pdf.text(line, margin + 12, yPosition);
                    } else {
                        pdf.text(`   ${line}`, margin + 12, yPosition);
                    }
                    yPosition += 5;
                });
                yPosition += 2; // Small spacing between items
            });

            yPosition += 8; // Spacing between modal sections
            return yPosition;
        }

        // Helper function to add a box content
        function addBoxedContent(title, content, titleHeight = 10, contentHeight = 20) {
            const totalHeight = titleHeight + contentHeight + 5; // 5mm spacing
            checkPageBreak(totalHeight);

            // Draw box header
            pdf.setFillColor(34, 197, 94);
            pdf.rect(margin, yPosition, pageWidth - 2 * margin, titleHeight, 'F');
            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'bold');
            pdf.text(title, margin + 5, yPosition + 6);
            yPosition += titleHeight;

            // Draw box content with background
            pdf.setFillColor(248, 248, 248);
            pdf.rect(margin, yPosition, pageWidth - 2 * margin, contentHeight, 'F');
            pdf.setDrawColor(200, 200, 200);
            pdf.rect(margin, yPosition, pageWidth - 2 * margin, contentHeight);

            pdf.setTextColor(0, 0, 0);
            pdf.setFontSize(10);
            pdf.setFont('helvetica', 'normal');

            const maxWidth = pageWidth - 2 * margin - 10; // 5mm padding each side
            const lines = pdf.splitTextToSize(content, maxWidth);
            const lineHeight = 5;
            const startY = yPosition + 5;

            lines.forEach((line, index) => {
                if (startY + (index * lineHeight) < yPosition + contentHeight - 3) {
                    pdf.text(line, margin + 5, startY + (index * lineHeight));
                }
            });

            yPosition += contentHeight + 8; // Add spacing after box
            return yPosition;
        }

        // Helper function to add a boxed content with multiple items (like modal assets)
        function addBoxedContentMulti(title, items, titleHeight = 10, contentHeight = 30) {
            const totalHeight = titleHeight + contentHeight + 5;
            checkPageBreak(totalHeight);

            // Draw box header
            pdf.setFillColor(34, 197, 94);
            pdf.rect(margin, yPosition, pageWidth - 2 * margin, titleHeight, 'F');
            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'bold');
            pdf.text(title, margin + 5, yPosition + 6);
            yPosition += titleHeight;

            // Draw box content with background
            pdf.setFillColor(248, 248, 248);
            pdf.rect(margin, yPosition, pageWidth - 2 * margin, contentHeight, 'F');
            pdf.setDrawColor(200, 200, 200);
            pdf.rect(margin, yPosition, pageWidth - 2 * margin, contentHeight);

            pdf.setTextColor(0, 0, 0);
            pdf.setFontSize(9);
            pdf.setFont('helvetica', 'normal');

            // Add items as bullet points
            const startX = margin + 8;
            const startY = yPosition + 6;
            const lineHeight = 5;
            const itemSpacing = 5;

            items.forEach((item, index) => {
                const currentY = startY + (index * itemSpacing);
                if (currentY < yPosition + contentHeight - 3) {
                    pdf.text(`• ${item}`, startX, currentY);
                }
            });

            yPosition += contentHeight + 8;
            return yPosition;
        }

        // Document Header
        pdf.setFillColor(34, 197, 94); // Primary color
        pdf.rect(0, 0, pageWidth, 40, 'F');

        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(24);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Business Model Canvas', margin, 25);

        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'normal');
        pdf.text('TAP-SERVICE - Solusi IT untuk Pendidikan', margin, 32);

        // Reset text color for content
        pdf.setTextColor(0, 0, 0);
        yPosition = 50;

        // Document Information
        pdf.setFontSize(10);
        pdf.text(`Dibuat: ${new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`, margin, yPosition);
        yPosition += 10;

        // Introduction Section
        pdf.setFontSize(16);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Ringkasan Eksekutif', margin, yPosition);
        yPosition += 10;

        const executiveSummary = `Business Model Canvas ini menggambarkan kerangka strategis TAP-SERVICE, perusahaan solusi IT yang berspesialisasi dalam institusi pendidikan. Pendekatan komprehensif kami mengintegrasikan keahlian teknis dengan kebutuhan pendidikan untuk menghadirkan solusi teknologi inovatif yang meningkatkan lingkungan belajar dan efisiensi operasional.`;
        yPosition = addText(executiveSummary, 11, 'normal', 6);
        yPosition += 5;

        // BMC Section Header
        yPosition = addSectionHeader('Komponen Business Model Canvas', 14);
        yPosition += 5;

        // BMC Grid Explanation
        const bmcExplanation = `Business Model Canvas terdiri dari sembilan blok bangunan penting yang menjelaskan bagaimana perusahaan kami menciptakan, mengantarkan, dan menangkap nilai. Setiap komponen mengatasi aspek kritis dari strategi bisnis dan kerangka operasional kami.`;
        yPosition = addText(bmcExplanation, 10, 'italic', 5);
        yPosition += 8;

        // BMC Content
        const bmcData = [
            {
                title: 'Key Partners',
                content: 'Supplier perangkat keras, Vendor software, Penyedia internet, Layanan cloud'
            },
            {
                title: 'Key Activities',
                content: 'Pengembangan sistem, Setup jaringan, Instalasi hardware, Maintenance'
            },
            {
                title: 'Key Resources',
                content: 'Tim teknis, Peralatan, Lisensi software, Kemitraan, Pengalaman'
            },
            {
                title: 'Value Propositions',
                content: 'Solusi IT terpadu, Respon cepat, Harga terjangkau, Support lokal'
            },
            {
                title: 'Customer Relationships',
                content: 'Support dedicated, Kemitraan jangka panjang, Maintenance rutin'
            },
            {
                title: 'Channels',
                content: 'Website, Social media, Penjualan langsung, Referral'
            },
            {
                title: 'Customer Segments',
                content: 'Institusi pendidikan, Perusahaan kecil-menengah, Bisnis retail'
            },
            {
                title: 'Cost Structure',
                content: 'Biaya peralatan, Gaji karyawan, Pemasaran, Operasional'
            },
            {
                title: 'Revenue Streams',
                content: 'Biaya project, Maintenance bulanan, Penjualan hardware, Fee konsultasi'
            }
        ];

        // Add BMC Boxes using the new helper function
        bmcData.forEach((item) => {
            yPosition = addBoxedContent(item.title, item.content, 10, 18);
        });

        // Tahapan Pengembangan Bisnis - New Page
        pdf.addPage();
        yPosition = margin;

        yPosition = addSectionHeader('Tahapan Pengembangan Bisnis', 14);
        yPosition += 5;

        const stagesIntro = 'Pengembangan bisnis kami mengikuti pendekatan terstruktur melalui tujuh tahapan kunci, memastikan pertumbuhan sistematis dan operasi yang berkelanjutan.';
        yPosition = addText(stagesIntro, 10, 'normal', 5);
        yPosition += 8;

        // Tahapan Bisnis dengan layout boxed seperti BMC
        const stagesData = [
            {
                title: 'Tahap 1: Perencanaan',
                content: 'Riset pasar, analisis kompetitor, definisi portofolio layanan, perencanaan strategis'
            },
            {
                title: 'Tahap 2: Pembentukan Tim',
                content: 'Rekrutmen talenta, pelatihan teknis, penugasan peran, pembangunan tim yang solid'
            },
            {
                title: 'Tahap 3: Branding & Pemasaran',
                content: 'Pengembangan brand identitas, pembuatan website, setup media sosial, strategi pemasaran digital'
            },
            {
                title: 'Tahap 4: Proyek Percontohan',
                content: 'Pembangunan portofolio, studi kasus, pengumpulan testimoni klien, dokumentasi proyek'
            },
            {
                title: 'Tahap 5: Akuisisi Klien',
                content: 'Pengembangan pipeline penjualan, lead generation, pembuatan proposal, negosiasi kontrak'
            },
            {
                title: 'Tahap 6: Eksekusi & Maintenance',
                content: 'Pengantaran proyek, jaminan kualitas, manajemen SLA, dukungan teknis berkelanjutan'
            },
            {
                title: 'Tahap 7: Evaluasi',
                content: 'Review kinerja, feedback klien, perbaikan berkelanjutan, pengembangan layanan'
            }
        ];

        // Add each stage using boxed layout
        stagesData.forEach(stage => {
            yPosition = addBoxedContent(stage.title, stage.content, 10, 22);
        });

        // Modal Non-Tunai Section - New Page
        pdf.addPage();
        yPosition = margin;

        yPosition = addSectionHeader('Aset Strategis Non-Tunai', 14);
        yPosition += 5;

        const modalIntro = 'Di luar sumber daya finansial, perusahaan kami memanfaatkan aset non-tunai strategis yang memberikan keunggulan kompetitif dan penciptaan nilai berkelanjutan. Aset berwujud dan tidak berwujud ini membentuk fondasi dari keunggulan operasional dan diferensiasi pasar kami.';
        yPosition = addText(modalIntro, 10, 'normal', 5);
        yPosition += 10;

        // Modal Non-Tunai dengan layout boxed
        const modalData = [
            {
                title: 'Modal Intelektual',
                items: ['Keahlian teknis yang mendalam', 'Kemampuan pemecahan masalah', 'Pengetahuan industri pendidikan', 'Praktik terbaik dalam IT']
            },
            {
                title: 'Modal Sosial',
                items: ['Hubungan baik dengan klien', 'Jaringan mitra bisnis', 'Reputasi perusahaan yang kuat', 'Loyalitas pelanggan']
            },
            {
                title: 'Modal Fisik',
                items: ['Laptop dan peralatan IT', 'Peralatan testing jaringan', 'Tools instalasi kabel', 'Peralatan diagnostic network']
            },
            {
                title: 'Modal Digital',
                items: ['Website perusahaan', 'Keaktifan di media sosial', 'Dokumentasi portofolio proyek', 'Database klien terkelola']
            },
            {
                title: 'Modal Waktu & Tenaga',
                items: ['Jam kerja tim teknis', 'Waktu manajemen proyek', 'Program pelatihan & pengembangan', 'Aktivitas riset & inovasi']
            }
        ];

        // Add each modal asset using boxed layout with multiple items
        modalData.forEach(modal => {
            yPosition = addBoxedContentMulti(modal.title, modal.items, 10, 30);
        });

        // Footer and Contact Information
        const footerY = pageHeight - 30;
        pdf.setFillColor(240, 240, 240);
        pdf.rect(0, footerY, pageWidth, 30, 'F');

        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'bold');
        pdf.text('TAP-SERVICE', margin, footerY + 10);

        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        pdf.text('Solusi IT untuk Institusi Pendidikan', margin, footerY + 15);
        pdf.text('Kontak: info@tap-service.com | Telepon: +62 XXX-XXXX-XXXX', margin, footerY + 20);

        pdf.setFontSize(8);
        pdf.text(`Dokumen dibuat pada ${new Date().toLocaleDateString('id-ID')} - Rahasia & Proprietari`, margin, footerY + 25);

        // Add metadata
        pdf.setProperties({
            title: 'Business Model Canvas & Aset Strategis - TAP-SERVICE',
            subject: 'Dokumentasi Komprehensif Business Model dan Aset Strategis',
            author: 'TAP-SERVICE',
            keywords: 'Business Model Canvas, Aset Strategis, Solusi IT, Teknologi Pendidikan',
            creator: 'Sistem Dokumentasi Bisnis TAP-SERVICE'
        });

        // Save the PDF with professional naming
        const fileName = `TAP_SERVICE_Business_Model_Canvas_${new Date().toISOString().split('T')[0]}.pdf`;
        pdf.save(fileName);

        resetExportButton();
        showNotification('Dokumen bisnis berhasil diekspor!');
    }

    function resetExportButton() {
        exportBtn.innerHTML = originalContent;
        exportBtn.disabled = false;
        exportBtn.style.cursor = '';
    }
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.innerHTML = `
        <div class="notification-content">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}