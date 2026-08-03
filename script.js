// ============================================
// MECHIND MIND – COMPLETE JAVASCRIPT
// ============================================

// ----- SEARCH -----
function searchProblems() {
    const query = document.getElementById('searchInput').value;
    if (query.trim() === '') {
        alert('Please enter a keyword.');
        return;
    }
    window.location.href = `problems.html?search=${encodeURIComponent(query)}`;
}

// ----- MODALS -----
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');

loginBtn.addEventListener('click', function() {
    loginModal.classList.add('show');
    loginModal.style.display = 'flex';
});

signupBtn.addEventListener('click', function() {
    signupModal.classList.add('show');
    signupModal.style.display = 'flex';
});

closeLogin.addEventListener('click', function() {
    loginModal.classList.remove('show');
    loginModal.style.display = 'none';
});

closeSignup.addEventListener('click', function() {
    signupModal.classList.remove('show');
    signupModal.style.display = 'none';
});

switchToSignup.addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.style.display = 'none';
    signupModal.classList.add('show');
    signupModal.style.display = 'flex';
});

switchToLogin.addEventListener('click', function(e) {
    e.preventDefault();
    signupModal.style.display = 'none';
    loginModal.classList.add('show');
    loginModal.style.display = 'flex';
});

window.addEventListener('click', function(e) {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

function loginUser(e) {
    e.preventDefault();
    alert('✅ Logged in successfully!');
    loginModal.style.display = 'none';
}

function signupUser(e) {
    e.preventDefault();
    alert('🎉 Account created successfully!');
    signupModal.style.display = 'none';
}

// ============================================
// SOLUTION MODAL FUNCTIONS (Aesthetic Pop-up)
// ============================================

function openSolution(id) {
    const modal = document.getElementById('solutionModal');
    const title = document.getElementById('solutionTitle');
    const given = document.getElementById('solutionGiven');
    const required = document.getElementById('solutionRequired');
    const steps = document.getElementById('solutionSteps');
    const finalAnswer = document.getElementById('solutionFinalAnswer');
    const tips = document.getElementById('solutionTips');
    const realWorld = document.getElementById('solutionRealWorld');

    // Sample data for each problem (expand as needed)
    const solutions = {
        1: {
            title: 'Thermodynamics – Ideal Gas Law',
            given: ['Mass = 5 kg', 'Initial Pressure (P₁) = 300 kPa', 'Initial Temperature (T₁) = 400 K', 'Final Temperature (T₂) = 600 K', 'Volume is constant (rigid tank)'],
            required: ['Final Pressure (P₂)'],
            steps: [
                'Step 1: Since volume is constant, use Gay-Lussac\'s Law: P₁/T₁ = P₂/T₂',
                'Step 2: Rearrange to solve for P₂: P₂ = (P₁ × T₂) / T₁',
                'Step 3: Substitute values: P₂ = (300 kPa × 600 K) / 400 K',
                'Step 4: Calculate: P₂ = 450 kPa'
            ],
            finalAnswer: 'P₂ = 450 kPa',
            tips: [
                'Always convert temperature to Kelvin for gas law problems',
                'Check if volume is constant before using Gay-Lussac\'s Law'
            ],
            realWorld: 'Used in designing pressure vessels, engines, and HVAC systems.'
        },
        2: {
            title: 'Operations Research – Linear Programming',
            given: ['Labor: Product A = 2 hrs, Product B = 1 hr (100 hrs available)', 'Machine: Product A = 1 hr, Product B = 3 hrs (80 hrs available)', 'Profit: Product A = $40, Product B = $30'],
            required: ['Number of units of Product A and B to maximize profit'],
            steps: [
                'Step 1: Define variables: Let x = units of A, y = units of B',
                'Step 2: Objective function: Maximize Z = 40x + 30y',
                'Step 3: Constraints: 2x + y ≤ 100 (labor), x + 3y ≤ 80 (machine), x ≥ 0, y ≥ 0',
                'Step 4: Solve using graphical method or simplex method',
                'Step 5: Optimal solution: x = 40, y = 20'
            ],
            finalAnswer: 'Product A = 40 units, Product B = 20 units, Max Profit = $2,200',
            tips: [
                'Check all corner points of the feasible region',
                'Make sure constraints are correctly formulated'
            ],
            realWorld: 'Used in production planning, logistics, and resource allocation.'
        },
        3: {
            title: 'Fluid Mechanics – Bernoulli\'s Equation',
            given: ['Velocity at A = 3 m/s', 'Pressure at A = 150 kPa', 'Pipe narrows to half the diameter at B', 'No losses assumed'],
            required: ['Velocity at B', 'Pressure at B'],
            steps: [
                'Step 1: Use continuity equation: A₁V₁ = A₂V₂',
                'Step 2: Since diameter is halved, area is quartered: V₂ = 4 × V₁ = 12 m/s',
                'Step 3: Use Bernoulli\'s equation: P₁/ρg + V₁²/2g + z₁ = P₂/ρg + V₂²/2g + z₂',
                'Step 4: Solve for P₂: P₂ = P₁ + ½ρ(V₁² - V₂²)',
                'Step 5: P₂ = 150 kPa + ½(1000)(9 - 144) = 150 kPa - 67.5 kPa = 82.5 kPa'
            ],
            finalAnswer: 'Velocity at B = 12 m/s, Pressure at B = 82.5 kPa',
            tips: [
                'Remember that when pipe narrows, velocity increases and pressure decreases',
                'Use consistent units (SI units recommended)'
            ],
            realWorld: 'Used in pipe flow design, carburetors, and aircraft wing design.'
        },
        4: {
            title: 'Industrial Statistics – Control Charts',
            given: ['Target diameter = 50 mm', 'Sample mean = 50.2 mm', 'Standard deviation = 0.5 mm', '3-sigma limits'],
            required: ['Determine if process is in control'],
            steps: [
                'Step 1: Calculate Upper Control Limit (UCL) = Target + 3σ = 50 + 3(0.5) = 51.5 mm',
                'Step 2: Calculate Lower Control Limit (LCL) = Target - 3σ = 50 - 3(0.5) = 48.5 mm',
                'Step 3: Check if sample mean (50.2 mm) falls within UCL and LCL',
                'Step 4: 48.5 ≤ 50.2 ≤ 51.5 → Process is IN CONTROL'
            ],
            finalAnswer: 'Process is in control. UCL = 51.5 mm, LCL = 48.5 mm',
            tips: [
                'Always use 3-sigma limits for standard control charts',
                'Check for trends or patterns even if within limits'
            ],
            realWorld: 'Used in quality control, manufacturing, and Six Sigma projects.'
        }
    };

    const data = solutions[id] || solutions[1];

    title.textContent = data.title;
    given.innerHTML = data.given.map(item => `<li>${item}</li>`).join('');
    required.innerHTML = data.required.map(item => `<li>${item}</li>`).join('');
    steps.innerHTML = data.steps.map(item => `<li>${item}</li>`).join('');
    finalAnswer.innerHTML = `<strong>Final Answer:</strong> ${data.finalAnswer}`;
    tips.innerHTML = `<strong>💡 Tips & Common Mistakes:</strong><ul>${data.tips.map(item => `<li>${item}</li>`).join('')}</ul>`;
    realWorld.innerHTML = `<strong>🌍 Real-World Application:</strong><p>${data.realWorld}</p>`;

    modal.classList.add('show');
    modal.style.display = 'flex';
}

function closeSolution() {
    const modal = document.getElementById('solutionModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('solutionModal');
    if (e.target === modal) {
        closeSolution();
    }
});

// ============================================
// PROFILE PICTURE UPLOAD
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const profileUpload = document.getElementById('profileUpload');
    const profilePic = document.getElementById('profilePic');

    // Load saved profile picture from localStorage
    const savedPic = localStorage.getItem('profilePic');
    if (savedPic) {
        profilePic.src = savedPic;
    }

    // Handle file upload
    profileUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const imageData = event.target.result;
                profilePic.src = imageData;
                // Save to localStorage so it persists
                localStorage.setItem('profilePic', imageData);
            };
            reader.readAsDataURL(file);
        }
    });
});