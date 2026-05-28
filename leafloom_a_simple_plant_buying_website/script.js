const plantDataset = {
    "monstera": { 
        id: "monstera", 
        title: "Monstera Deliciosa", 
        tag: "Popular",
        subtitle: "Large | Easy Care", 
        price: "₹899", 
        priceNum: 899, 
        img: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=600",
        desc: "Famous for its dramatic look and iconic perforated leaves, the Monstera Deliciosa is a statement addition to any minimalist layout. It scales effortlessly given proper moss climbing supports, transforming standard walls into lush jungle displays.",
        w: "Every 7-10 Days",
        l: "Bright Indirect Sunlight",
        p: "Living Room Areas",
        care: "Thrives best when allowed to completely dry between watering routines. Wipe down leaf structures systematically using a damp microfiber cloth to wash down sediment layers and ensure optimized natural structural growth."
    },
    "snake": { 
        id: "snake", 
        title: "Snake Plant", 
        tag: "Air Purifier",
        subtitle: "Medium | Air Purifier", 
        price: "₹699", 
        priceNum: 699, 
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=600",
        desc: "Featuring clean vertical lines, the Sansevieria functions beautifully as an architectural element. Exceptionally robust, it filters indoor air contaminants continuously and thrives in minimal lighting frameworks.",
        w: "Every 2-3 Weeks",
        l: "Low to High Indirect",
        p: "Bedrooms & Workspaces",
        care: "Extremely susceptible to over-saturation. Ensure soil medium dries thoroughly down through the root base before supplying light watering additions. Use gritty, coarse structural sand substrates."
    },
    "peace-lily": { 
        id: "peace-lily", 
        title: "Peace Lily", 
        tag: "Trending",
        subtitle: "Small | Flowering", 
        price: "₹999", 
        priceNum: 999, 
        img: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&q=80&w=600",
        desc: "The Peace Lily presents clean dark emerald foliage paired with elegant crisp white canvas blooms. Highly communicative, its stems soften gracefully to indicate when moisture layers have dropped completely.",
        w: "Twice Weekly Cycles",
        l: "Medium Filtered Ambient",
        p: "Study Desk / Counters",
        care: "Maintain consistent moisture within structural potting channels without creating saturation pools. Prefers humified air currents; implement water pebble trays during cold winter periods."
    },
    "fiddle-leaf": { 
        id: "fiddle-leaf", 
        title: "Fiddle Leaf Fig", 
        tag: "Premium Decor",
        subtitle: "XL | Premium Decor", 
        price: "₹1,499", 
        priceNum: 1499, 
        img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=600",
        desc: "The interior decorator's supreme standard. Ficus Lyrata boasts large, leathery structural leaves shaped like violins. It works perfectly as a focal installation point within modern open space architectural drafts.",
        w: "Every 10 Days regularly",
        l: "Consistent High Indirect",
        p: "Well-Lit Living Hubs",
        care: "Keep in a permanent, fixed location as structural orientation modifications can shock growth performance. Rotate the base container slightly each month to encourage vertical balance."
    },
    "zz-plant": { 
        id: "zz-plant", 
        title: "ZZ Plant", 
        tag: "Best Seller",
        subtitle: "Low Maintenance", 
        price: "₹799", 
        priceNum: 799, 
        img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=600",
        desc: "Boasting natural glass-like waxy finishes across its stems, the ZZ plant grows steadily across standard low-light corridors or under corporate commercial interior illumination arrangements.",
        w: "Every 3-4 Weeks sparingly",
        l: "Low Minimal to Bright",
        p: "Hallways & Entryway Display",
        care: "Underlying underground rhizome units efficiently retain structural fluid balances. Prevent continuous wet soil states completely. Neglecting watering is superior to adding excessive amounts."
    },
    "areca-palm": { 
        id: "areca-palm", 
        title: "Areca Palm", 
        tag: "Indoor Tropical",
        subtitle: "Indoor Tropical", 
        price: "₹1,199", 
        priceNum: 1199, 
        img: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&q=80&w=600",
        desc: "An organic room air cleaner, the Areca Palm provides sweeping tropical fronds that filter indoor air while working gracefully as a soft visual screening element inside modern dining areas.",
        w: "Regularly on dry check",
        l: "Dappled Bright Sunlight",
        p: "Open Living / Dining Rooms",
        care: "Keep underlying root balls evenly moist during active spring vegetative surges. Ensure pots feature unblocked drainage holes to prevent pooling near root tips."
    },
    "pothos": { 
        id: "pothos", 
        title: "Pothos", 
        tag: "Trailing Vine",
        subtitle: "Trailing Vine", 
        price: "₹549", 
        priceNum: 549, 
        img: "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?auto=format&fit=crop&q=80&w=600",
        desc: "Featuring dynamic heart-shaped leaves that cascade downwards elegantly from high modern bookshelves, the Epipremnum Aureum grows rapidly and propagates easily in fresh tap water.",
        w: "Weekly on surface check",
        l: "Low to Moderate Indirect",
        p: "Bookshelves & Wall Racks",
        care: "Trim trailing tips occasionally using clean shears to maximize canopy thickness near the base. Leaves curl slightly as a clear request for moisture inputs."
    },
    "rubber-plant": { 
        id: "rubber-plant", 
        title: "Rubber Plant", 
        tag: "New Arrival",
        subtitle: "Glossy Foliage", 
        price: "₹899", 
        priceNum: 899, 
        img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&q=80&w=600",
        desc: "The Ficus Elastica showcases thick, robust, burgundy-tinted leaves that elevate neutral wall finishes. Its clean vertical silhouette adds sophisticated structure to minimalist floor plans.",
        w: "Every 7-12 Days",
        l: "Substantial Bright Indirect",
        p: "Main Lounges / Entryways",
        care: "Provide thorough watering until moisture drains clear out from the container base, then allow the top substrate profile to completely dry out before watering again."
    },
    "boston-fern": { 
        id: "boston-fern", 
        title: "Boston Fern", 
        tag: "Soft Greenery",
        subtitle: "Soft Indoor Greenery", 
        price: "₹749", 
        priceNum: 749, 
        img: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&q=80&w=600",
        desc: "Lush, graceful fronds packed with classic architectural leaflets give this fern an elegant profile. It introduces rich texture and organic softness to modern styling setups.",
        w: "Frequent balanced checking",
        l: "Partial Filtered Shade",
        p: "Bathrooms / Humid Patios",
        care: "Requires high humidity to thrive. It fits beautifully inside washroom configurations where ambient daily shower steam protects leaf tips from turning crisp."
    },
    "aloe-vera": { 
        id: "aloe-vera", 
        title: "Aloe Vera", 
        tag: "Organic",
        subtitle: "Medicinal Plant", 
        price: "₹499", 
        priceNum: 499, 
        img: "https://images.unsplash.com/photo-1463154545680-d59320fd685d?auto=format&fit=crop&q=80&w=600",
        desc: "A timeless, functional succulent that combines sculptural rosettes with a soothing, skin-healing gel. It provides clean geometric lines that accent kitchen workspaces beautifully.",
        w: "Sparingly on strict dry out",
        l: "Direct Intense Sunlight",
        p: "Kitchen Windowsills",
        care: "Plant exclusively within sandy, fast-draining cactus soil bases. Provide hours of direct sunlight to maintain thick, self-supporting structural walls."
    },
    "calathea": { 
        id: "calathea", 
        title: "Calathea", 
        tag: "Artistic Leaf",
        subtitle: "Patterned Leaves", 
        price: "₹1,299", 
        priceNum: 1299, 
        img: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&q=80&w=600",
        desc: "Often called 'Prayer Plants' due to their leaves folding upwards at night, Calatheas display gorgeous, painted leaf patterns that add sophisticated character to interior styles.",
        w: "Consistently controlled",
        l: "Filtered Soft Shade Only",
        p: "Bedroom Dressers / Desks",
        care: "Sensitive to chlorine and fluoride minerals found in tap water. Use filtered, distilled, or rainwater variants to avoid crisping leaf perimeter details."
    },
    "jade-plant": { 
        id: "jade-plant", 
        title: "Jade Plant", 
        tag: "Lucky Plant",
        subtitle: "Succulent Decor", 
        price: "₹599", 
        priceNum: 599, 
        img: "https://images.unsplash.com/photo-1509423350716-97f2360af9e4?auto=format&fit=crop&q=80&w=600",
        desc: "An auspicious token of prosperity and positive energy. This miniature succulent tree features round, plump leaves and thick woody trunks that mature beautifully over time.",
        w: "Minimal periodic input",
        l: "Bright Light / Direct Sun",
        p: "Study / Executive Desks",
        care: "Treat as a typical arid succulent. Prune back rogue branch extensions to retain a dense, artistic, bonsai-like structural profile across growth seasons."
    },
    "philodendron": { 
        id: "philodendron", 
        title: "Philodendron", 
        tag: "Classic Choice",
        subtitle: "Leafy Indoor Plant", 
        price: "₹899", 
        priceNum: 899, 
        img: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=600",
        desc: "A highly versatile interior classic featuring rich, heart-shaped emerald leaves. It trails gracefully along open shelving frameworks or climbs moss poles with ease.",
        w: "Weekly standard cycle",
        l: "Moderate Indirect Lighting",
        p: "Shelving Units & Bookcases",
        care: "Extremely forgiving of occasional skipped care routines. Stems drooping slightly provides a clear signal that the soil profile requires a fresh watering."
    },
    "succulent-mix": { 
        id: "succulent-mix", 
        title: "Succulent Mix", 
        tag: "Minimalist",
        subtitle: "Desk Decor Plants", 
        price: "₹649", 
        priceNum: 649, 
        img: "https://images.unsplash.com/photo-1470165518248-ff8a7d5d447c?auto=format&fit=crop&q=80&w=600",
        desc: "A carefully curated arrangement of slow-growing, geometric desert succulents. It forms an elegant natural micro-landscape that accents office workstations perfectly.",
        w: "Rarely on full bone-dry",
        l: "High Intensity Brightness",
        p: "Office Workspace Monitors",
        care: "Soak the structural soil bed completely only when it has turned thoroughly bone-dry. Place near open light sources to retain bright accent color details."
    },
    "bonsai-tree": { 
        id: "bonsai-tree", 
        title: "Bonsai Tree", 
        tag: "Premium",
        subtitle: "Artistic Indoor Tree", 
        price: "₹1,899", 
        priceNum: 1899, 
        img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=600",
        desc: "An exquisite living sculpture shaped over years of deliberate care. It brings an aura of focus, mindful harmony, and structured Zen timelessness to focal spaces.",
        w: "Carefully checked daily",
        l: "Substantial Filtered Light",
        p: "Center Tables / Accent Pedestals",
        care: "Requires attentive moisture checking. Submerge the shallow root pot structure completely inside water channels for a few minutes whenever surface soil elements lose hydration."
    }
};
let currentSelectedPaymentMode = "card-pane";
window.addEventListener('DOMContentLoaded', () => {
    updateLiveCartCount();
    initializeWishlistVisualStates();
    const urlString = window.location.href.toLowerCase();
    if (urlString.includes('product_details') || document.getElementById('primaryImgNode')) {
        initProductDetailsPage();
    }
    else if (urlString.includes('cart') || document.getElementById('items-injection-target')) {
        initCartPage();
    }
    else if (urlString.includes('wishlist') || document.getElementById('wishlist-grid-root')) {
        initWishlistPage();
    } 
    else if (urlString.includes('checkout') || document.getElementById('manifestListTarget')) {
        initCheckoutPage();
    }
    const statsBanner = document.querySelector('.stats-banner');
    if (statsBanner) {
        initStatsCounterModule(statsBanner);
    }
    initLoginValidation();
    initRegisterValidation();
});
function updateLiveCartCount() {
    const currentCart = JSON.parse(localStorage.getItem('leafloom_cart')) || [];
    const totalCount = currentCart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = totalCount;
    }
}
function initializeWishlistVisualStates() {
    const activeWishlist = JSON.parse(localStorage.getItem('leafloom_wishlist')) || [];
    document.querySelectorAll('.product-card').forEach(card => {
        const itemKey = card.getAttribute('data-key');
        if (itemKey && activeWishlist.includes(itemKey)) {
            const heartBtn = card.querySelector('.wishlist-btn');
            if (heartBtn) heartBtn.classList.add('active');
        }
    });
    const navHeart = document.getElementById('nav-wishlist-heart');
    if (navHeart) {
        const heartSvg = navHeart.querySelector('svg');
        if (activeWishlist.length > 0) {
            navHeart.style.color = '#dc3545';
            if (heartSvg) heartSvg.style.fill = '#dc3545';
        } else {
            navHeart.style.color = '';
            if (heartSvg) heartSvg.style.fill = 'none';
        }
    }
}
function addDirectToCart(plantId) {
    const itemData = plantDataset[plantId];
    if (!itemData) return;
    let cartList = JSON.parse(localStorage.getItem('leafloom_cart')) || [];
    const existingIndex = cartList.findIndex(entry => entry.id === plantId);
    if (existingIndex > -1) {
        cartList[existingIndex].quantity += 1;
    } else {
        cartList.push({
            id: plantId,
            title: itemData.title,
            subtitle: itemData.subtitle,
            priceStr: itemData.price,
            priceNum: itemData.priceNum,
            img: itemData.img,
            quantity: 1
        });
    }
    localStorage.setItem('leafloom_cart', JSON.stringify(cartList));
    updateLiveCartCount();
    alert(`${itemData.title} added to your cart successfully.`);
}
function toggleLocalWishlist(heartBtn, plantId) {
    heartBtn.classList.toggle('active');
    let wishlist = JSON.parse(localStorage.getItem('leafloom_wishlist')) || [];
    const itemIndex = wishlist.indexOf(plantId);
    const itemData = plantDataset[plantId];
    if (heartBtn.classList.contains('active')) {
        if (itemIndex === -1) {
            wishlist.push(plantId);
        }
        if (itemData) alert(`${itemData.title} saved to your wishlist portfolio.`);
    } else {
        if (itemIndex > -1) {
            wishlist.splice(itemIndex, 1);
        }
        if (itemData) alert(`${itemData.title} removed from your wishlist.`);
    }
    localStorage.setItem('leafloom_wishlist', JSON.stringify(wishlist));
    initializeWishlistVisualStates();
}
function initStatsCounterModule(bannerNode) {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace('+', ''); // Strip clean
                const inc = target / speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCount();
        });
    };
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            startCounters();
            observer.unobserve(bannerNode);
        }
    }, { threshold: 0.1 });
    observer.observe(bannerNode);
}
function initProductDetailsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const plantToken = urlParams.get('plant');
    if (!plantToken || !plantDataset[plantToken]) {
        renderProductFallbackUI();
        return;
    }
    const data = plantDataset[plantToken];
    const bindingTargets = {
        'badgeNode': data.tag,
        'titleNode': data.title,
        'subtitleNode': data.subtitle,
        'priceNode': data.price,
        'descNode': data.desc,
        'waterMetric': data.w,
        'lightMetric': data.l,
        'placementMetric': data.p,
        'extendedCareNode': data.care
    };
    for (const [id, value] of Object.entries(bindingTargets)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    }
    const masterImg = document.getElementById('primaryImgNode');
    if (masterImg) {
        masterImg.src = data.img;
        masterImg.alt = data.title;
    }
    const detailsWishBtn = document.getElementById('wishBtnNode');
    if (detailsWishBtn) {
        const activeWish = JSON.parse(localStorage.getItem('leafloom_wishlist')) || [];
        if (activeWish.includes(plantToken)) {
            detailsWishBtn.classList.add('active');
        }
        detailsWishBtn.onclick = () => {
            toggleLocalWishlist(detailsWishBtn, plantToken);
        };
    }
    const thumbsContainer = document.getElementById('railThumbsRoot');
    if (thumbsContainer) {
        thumbsContainer.innerHTML = "";
        const mockGallery = [
            data.img,
            "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&q=80&w=600"
        ];
        mockGallery.forEach((url, index) => {
            const img = document.createElement('img');
            img.src = url;
            img.className = `rail-thumb-unit ${index === 0 ? 'active' : ''}`;
            img.alt = `${data.title} Alternate Angle ${index + 1}`;
            img.onclick = () => {
                document.querySelectorAll('.rail-thumb-unit').forEach(t => t.classList.remove('active'));
                img.classList.add('active');
                if (masterImg) {
                    masterImg.style.opacity = '0.4';
                    setTimeout(() => {
                        masterImg.src = url;
                        masterImg.style.opacity = '1';
                    }, 150);
                }
            };
            thumbsContainer.appendChild(img);
        });
    }
    let selectedQuantity = 1;
    const stepperDisplay = document.getElementById('stepperCount');
    window.adjustCount = (amount) => {
        selectedQuantity += amount;
        if (selectedQuantity < 1) selectedQuantity = 1;
        if (stepperDisplay) stepperDisplay.value = selectedQuantity;
    };
    const addToCartCTA = document.querySelector('.bag-submission-cta');
    if (addToCartCTA) {
        addToCartCTA.onclick = () => {
            let currentCart = JSON.parse(localStorage.getItem('leafloom_cart')) || [];
            const existingIndex = currentCart.findIndex(e => e.id === plantToken);
            if (existingIndex > -1) {
                currentCart[existingIndex].quantity += selectedQuantity;
            } else {
                currentCart.push({
                    id: plantToken,
                    title: data.title,
                    subtitle: data.subtitle,
                    priceStr: data.price,
                    priceNum: data.priceNum,
                    img: data.img,
                    quantity: selectedQuantity
                });
            }
            localStorage.setItem('leafloom_cart', JSON.stringify(currentCart));
            updateLiveCartCount();
            alert(`Added ${selectedQuantity} unit(s) of ${data.title} to your Cart.`);
        };
    }
}
function renderProductFallbackUI() {
    const root = document.getElementById('dynamic-content-root');
    if (root) {
        root.innerHTML = `
            <div class="fallback-error-wrapper" style="text-align: center; padding: 120px 20px;">
                <h2>Specimen Location Error</h2>
                <p>The botanical index token provided is missing from our registry.</p>
                <br><br>
                <a href="collections.html" style="color: var(--text-dark); font-weight:600; text-decoration: none; border-bottom: 2px solid var(--primary-color);">Return to Collections Catalog</a>
            </div>
        `;
    }
}
function renderCartUI() {
    const activeCart = JSON.parse(localStorage.getItem('leafloom_cart')) || [];
    const itemsTargetNode = document.getElementById('items-injection-target');
    const gridContainer = document.getElementById('cart-grid-root');
    if (activeCart.length === 0) {
        if (gridContainer) {
            gridContainer.innerHTML = `
                <div class="empty-cart-view" style="text-align: center; padding: 80px 20px; grid-column: 1 / -1;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); margin-bottom: 20px; opacity: 0.6;"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    <h3 style="font-size: 22px; margin-bottom: 10px; font-weight: 500;">Your cart feels light.</h3>
                    <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 30px;">Explore our curated collections of healthy, premium indoor greenery to breathe life into your interior spaces.</p>
                    <a href="collections.html" class="continue-shopping-btn" style="display: inline-block; background: var(--primary-color); color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 25px; font-size: 14px; font-weight: 500;">Explore Collections</a>
                </div>
            `;
        }
        return;
    }
    if (itemsTargetNode) {
        itemsTargetNode.innerHTML = ""; 
        let calculatedSubtotal = 0;
        activeCart.forEach((itemRecord) => {
            const rowTotalPrice = itemRecord.priceNum * itemRecord.quantity;
            calculatedSubtotal += rowTotalPrice;
            const itemRowHTML = `
                <div class="cart-item-card" data-id="${itemRecord.id}">
                    <img src="${itemRecord.img}" alt="${itemRecord.title}" class="cart-item-img">
                    <div class="cart-item-details">
                        <a href="product_details.html?plant=${itemRecord.id}" class="item-title-link">${itemRecord.title}</a>
                        <span class="item-subtitle">${itemRecord.subtitle}</span>
                        <div class="cart-qty-row">
                            <div class="cart-stepper">
                                <button class="cart-stepper-btn" onclick="modifyItemVolume('${itemRecord.id}', -1)">–</button>
                                <input type="text" class="cart-stepper-val" value="${itemRecord.quantity}" readonly>
                                <button class="cart-stepper-btn" onclick="modifyItemVolume('${itemRecord.id}', 1)">+</button>
                            </div>
                            <button class="cart-remove-trigger" onclick="purgeCartRowItem('${itemRecord.id}')">Remove</button>
                        </div>
                    </div>
                    <div class="cart-item-price-block">
                        ₹${rowTotalPrice.toLocaleString('en-IN')}
                    </div>
                </div>
            `;
            itemsTargetNode.insertAdjacentHTML('beforeend', itemRowHTML);
        });
        const calculatedTax = Math.round(calculatedSubtotal * 0.18);
        const totalGrandSum = calculatedSubtotal + calculatedTax;
        document.getElementById('summary-subtotal').textContent = `₹${calculatedSubtotal.toLocaleString('en-IN')}`;
        document.getElementById('summary-tax').textContent = `₹${calculatedTax.toLocaleString('en-IN')}`;
        document.getElementById('summary-grand-total').textContent = `₹${totalGrandSum.toLocaleString('en-IN')}`;
    }
}
function initCartPage() {
    renderCartUI();
    window.modifyItemVolume = (targetProductId, directionalVector) => {
        let workingCartArray = JSON.parse(localStorage.getItem('leafloom_cart')) || [];
        const targetedMatchIndex = workingCartArray.findIndex(item => item.id === targetProductId);
        if (targetedMatchIndex > -1) {
            workingCartArray[targetedMatchIndex].quantity += directionalVector;
            if (workingCartArray[targetedMatchIndex].quantity < 1) {
                workingCartArray.splice(targetedMatchIndex, 1);
            }              
            localStorage.setItem('leafloom_cart', JSON.stringify(workingCartArray));
            renderCartUI();
            updateLiveCartCount();
        }
    };
    window.purgeCartRowItem = (targetProductId) => {
        let workingCartArray = JSON.parse(localStorage.getItem('leafloom_cart')) || [];
        const sanitizedFilteredArray = workingCartArray.filter(item => item.id !== targetProductId);
        localStorage.setItem('leafloom_cart', JSON.stringify(sanitizedFilteredArray));
        renderCartUI();
        updateLiveCartCount();
    };

    window.processCheckoutFinal = () => {
        window.location.href = "checkout.html";
    };
}
function compileCheckoutManifest() {
    const activeCheckoutItems = JSON.parse(localStorage.getItem('leafloom_cart')) || [];
    if (activeCheckoutItems.length === 0) {
        alert("Your checkout queue is empty. Redirecting to our catalog gallery.");
        window.location.href = "collections.html";
        return;
    }
    const manifestContainer = document.getElementById('manifestListTarget');
    if (manifestContainer) {
        manifestContainer.innerHTML = "";
        let rollingSumSubtotal = 0;
        activeCheckoutItems.forEach(item => {
            const calculatedItemTotal = item.priceNum * item.quantity;
            rollingSumSubtotal += calculatedItemTotal;
            const manifestRowHTML = `
                <div class="manifest-item">
                    <div class="manifest-item-info">
                        <span class="manifest-item-name">${item.title}</span>
                        <span class="manifest-item-qty">Qty: ${item.quantity}</span>
                    </div>
                    <span class="manifest-item-price">₹${calculatedItemTotal.toLocaleString('en-IN')}</span>
                </div>
            `;
            manifestContainer.insertAdjacentHTML('beforeend', manifestRowHTML);
        });
        const dynamicTaxSum = Math.round(rollingSumSubtotal * 0.18);
        const absoluteGrandTotalSum = rollingSumSubtotal + dynamicTaxSum;
        document.getElementById('reviewSubtotal').textContent = `₹${rollingSumSubtotal.toLocaleString('en-IN')}`;
        document.getElementById('reviewTax').textContent = `₹${dynamicTaxSum.toLocaleString('en-IN')}`;
        document.getElementById('reviewGrandTotal').textContent = `₹${absoluteGrandTotalSum.toLocaleString('en-IN')}`;
    }
}
function initCheckoutPage() {
    compileCheckoutManifest();
    window.switchPaymentPane = (clickEvent, targetPaneId) => {
        currentSelectedPaymentMode = targetPaneId;
        document.querySelectorAll('.payment-tab-trigger').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.payment-pane').forEach(pane => pane.classList.remove('active'));
        clickEvent.currentTarget.classList.add('active');
        document.getElementById(targetPaneId).classList.add('active');
        if(targetPaneId === 'card-pane') {
            document.querySelectorAll('.card-input-node').forEach(node => node.setAttribute('required', 'true'));
            document.querySelectorAll('.upi-input-node').forEach(node => node.removeAttribute('required'));
        } else {
            document.querySelectorAll('.upi-input-node').forEach(node => node.setAttribute('required', 'true'));
            document.querySelectorAll('.card-input-node').forEach(node => node.removeAttribute('required'));
        }
    };
    window.executeOrderFinalization = (formSubmitEvent) => {
        formSubmitEvent.preventDefault(); 
        const customerName = document.getElementById('firstName').value + " " + document.getElementById('lastName').value;
        const targetedBillAmount = document.getElementById('reviewGrandTotal').textContent;
        alert(`Payment Authorized Successfully!\n\nThank you ${customerName}. Your transaction totaling ${targetedBillAmount} has cleared securely. A live tracking shipment dashboard route link is being dispatched to your email coordinates.`);
        localStorage.removeItem('leafloom_cart');
        window.location.href = "home.html";
    };
}
function renderWishlistPage(gridRoot) {
    const wishlistKeys = JSON.parse(localStorage.getItem('leafloom_wishlist')) || [];
    if (wishlistKeys.length === 0) {
        gridRoot.innerHTML = `
            <div class="empty-wish-canvas" style="text-align: center; padding: 80px 20px; grid-column: 1 / -1;">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: var(--text-muted); margin-bottom: 20px; opacity: 0.5;"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                <h3 style="font-size: 24px; font-weight: 500; margin-bottom: 12px;">Your Wishlist is Empty</h3>
                <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 30px; max-width: 500px; margin-left: auto; margin-right: auto;">Save your favorite architectural houseplants here while designing your home or workspace landscape.</p>
                <a href="collections.html" class="explore-link" style="display: inline-block; background: var(--primary-color); color: #ffffff; text-decoration: none; padding: 12px 35px; border-radius: 25px; font-size: 14px; font-weight: 500;">Explore Collections</a>
            </div>
        `;
        return;
    }
    gridRoot.innerHTML = "";
    wishlistKeys.forEach(key => {
        const item = plantDataset[key];
        if (!item) return;
        const cardHTML = `
            <article class="product-card" data-key="${key}">
                <div class="img-container" style="position: relative;">
                    <button class="purge-btn" onclick="directPurgeWishlist('${key}')" aria-label="Remove item" style="position: absolute; top: 15px; right: 15px; background: #ffffff; border: none; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.08); color: #cc3344; z-index: 10;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <a href="product_details.html?plant=${key}">
                        <img src="${item.img}" alt="${item.title}" style="width:100%; height:100%; object-fit:cover;">
                    </a>
                </div>
                <div class="product-info" style="padding: 20px 5px;">
                    <h3 style="font-size:18px; font-weight:600; margin-bottom:4px;"><a href="product_details.html?plant=${key}" style="color:inherit; text-decoration:none;">${item.title}</a></h3>
                    <p style="color:#888; font-size:14px">${item.subtitle}</p>
                    <div class="product-meta" style="display:flex; justify-content:space-between; align-items:center; margin-top:15px;">
                        <span class="price" style="font-size:18px; font-weight:600; color:var(--primary-color);">${item.price}</span>
                        <button class="add-btn" onclick="addDirectToCart('${key}')" style="background: var(--primary-color); color:#ffffff; border:none; width:36px; height:36px; border-radius:50%; cursor:pointer; font-size:20px; font-weight:300; display:flex; align-items:center; justify-content:center;">+</button>
                    </div>
                </div>
            </article>
        `;
        gridRoot.insertAdjacentHTML('beforeend', cardHTML);
    });
}
function initWishlistPage() {
    const gridRoot = document.getElementById('wishlist-grid-root');
    if (gridRoot) {
        renderWishlistPage(gridRoot);
    }
    window.directPurgeWishlist = (key) => {
        let wishlist = JSON.parse(localStorage.getItem('leafloom_wishlist')) || [];
        wishlist = wishlist.filter(itemKey => itemKey !== key);
        localStorage.setItem('leafloom_wishlist', JSON.stringify(wishlist));
        if (gridRoot) {
            renderWishlistPage(gridRoot);
        }
        initializeWishlistVisualStates();
    };
}
function initLoginValidation() {
    const loginForm = document.querySelector('.login-form');
    if (!loginForm || window.location.href.indexOf('login.html') === -1) {
        return;
    }
    const emailInput = loginForm.querySelector('input[type="text"]');
    const passwordInput = loginForm.querySelector('input[type="text"]');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            alert("Email field cannot be empty.");
            emailInput.focus();
            return;
        }
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }
        if (password === "") {
            alert("Password field cannot be empty.");
            passwordInput.focus();
            return;
        }
        if (password.length < 6) {
            alert("Password must contain at least 6 characters.");
            passwordInput.focus();
            return;
        }
        alert("Login successful.");
        loginForm.reset();
    });
}
function initRegisterValidation() {
    const registerForm = document.querySelector('.register-form');
    if (!registerForm || window.location.href.indexOf('register.html') === -1) {
        return;
    }
    const fullName = registerForm.querySelector('input[type="text"]');
    const dob = registerForm.querySelector('input[type="date"]');
    const phone = registerForm.querySelector('input[type="text"]');
    const email = registerForm.querySelector('input[type="text"]');
    const address = registerForm.querySelector('textarea');
    const password = registerForm.querySelector('input[type="text"]');
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const fullNameValue = fullName.value.trim();
        const dobValue = dob.value;
        const phoneValue = phone.value.trim();
        const emailValue = email.value.trim();
        const addressValue = address.value.trim();
        const passwordValue = password.value.trim();
        const namePattern = /^[A-Za-z\s]+$/;
        const phonePattern = /^[0-9]{10}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&*!]).{8,}$/;
        if (fullNameValue === "") {
            alert("Full name is required.");
            fullName.focus();
            return;
        }
        if (!namePattern.test(fullNameValue)) {
            alert("Full name should contain only alphabets.");
            fullName.focus();
            return;
        }
        if (dobValue === "") {
            alert("Please select your date of birth.");
            dob.focus();
            return;
        }
        if (!phonePattern.test(phoneValue)) {
            alert("Phone number must contain exactly 10 digits.");
            phone.focus();
            return;
        }
        if (!emailPattern.test(emailValue)) {
            alert("Please enter a valid email address.");
            email.focus();
            return;
        }
        if (addressValue.length < 10) {
            alert("Address must contain at least 10 characters.");
            address.focus();
            return;
        }
        if (!passwordPattern.test(passwordValue)) {
            alert(
                "Password must contain:\n\n- 8 characters\n- One uppercase letter\n- One lowercase letter\n- One number\n- One special character"
            );
            password.focus();
            return;
        }
        alert("Registration successful.");
        registerForm.reset();
    });
}