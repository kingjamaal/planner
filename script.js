// Pregnancy Planner PDF Generator
class PregnancyPlannerGenerator {
    constructor() {
        this.weeks = [];
        this.babySize = {
            4: { size: "Poppy seed", length: "2mm" },
            5: { size: "Sesame seed", length: "3mm" },
            6: { size: "Lentil", length: "5mm" },
            7: { size: "Blueberry", length: "10mm" },
            8: { size: "Kidney bean", length: "16mm" },
            9: { size: "Grape", length: "23mm" },
            10: { size: "Kumquat", length: "31mm" },
            11: { size: "Fig", length: "41mm" },
            12: { size: "Lime", length: "54mm" },
            13: { size: "Shrimp", length: "74mm" },
            14: { size: "Lemon", length: "87mm" },
            15: { size: "Apple", length: "10cm" },
            16: { size: "Avocado", length: "12cm" },
            17: { size: "Turnip", length: "13cm" },
            18: { size: "Bell pepper", length: "14cm" },
            19: { size: "Tomato", length: "15cm" },
            20: { size: "Banana", length: "16cm" },
            21: { size: "Carrot", length: "27cm" },
            22: { size: "Spaghetti squash", length: "28cm" },
            23: { size: "Large mango", length: "29cm" },
            24: { size: "Corn", length: "30cm" },
            25: { size: "Rutabaga", length: "34cm" },
            26: { size: "Scallion", length: "35cm" },
            27: { size: "Cauliflower", length: "36cm" },
            28: { size: "Eggplant", length: "37cm" },
            29: { size: "Butternut squash", length: "38cm" },
            30: { size: "Cabbage", length: "40cm" },
            31: { size: "Coconut", length: "41cm" },
            32: { size: "Jicama", length: "42cm" },
            33: { size: "Pineapple", length: "44cm" },
            34: { size: "Cantaloupe", length: "45cm" },
            35: { size: "Honeydew melon", length: "46cm" },
            36: { size: "Romaine lettuce", length: "47cm" },
            37: { size: "Swiss chard", length: "48cm" },
            38: { size: "Leek", length: "49cm" },
            39: { size: "Mini watermelon", length: "50cm" },
            40: { size: "Small pumpkin", length: "51cm" }
        };
        
        this.symptoms = {
            1: ["Missed period", "Tender breasts", "Fatigue", "Nausea"],
            2: ["Morning sickness", "Food aversions", "Frequent urination", "Mood swings"],
            3: ["Continued nausea", "Breast changes", "Increased appetite", "Energy boost"]
        };
        
        this.init();
    }
    
    init() {
        // Automatically generate the planner on page load
        this.generatePlanner();
    }
    
    generatePlanner() {
        const preview = document.getElementById('plannerPreview');
        if (!preview) {
            console.error('plannerPreview element not found!');
            return;
        }
        preview.style.display = 'block';
        preview.innerHTML = '';
        
        // Generate all pages
        this.createCoverPage(preview);
        this.createWelcomePage(preview);
        this.createTrimesterDividers(preview);
        this.createWeeklyPages(preview);
        this.createSpecialSections(preview);
        
        // Add PDF generation button
        const pdfButton = document.createElement('div');
        pdfButton.style.cssText = 'text-align: center; margin: 30px 0; padding: 20px;';
        pdfButton.innerHTML = `
            <button onclick="plannerGenerator.generatePDF()" style="
                background: var(--dusty-rose);
                color: white;
                border: none;
                padding: 15px 30px;
                border-radius: 25px;
                font-size: 1.1rem;
                font-family: 'Playfair Display', serif;
                cursor: pointer;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.3)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.2)';">
                📄 Generate PDF Planner
            </button>
            <p style="margin-top: 10px; color: var(--text-soft); font-style: italic;">Fill in your details above, then click to generate your PDF!</p>
        `;
        preview.appendChild(pdfButton);
        
        // Scroll to preview
        preview.scrollIntoView({ behavior: 'smooth' });
    }
    
    createCoverPage(container) {
        const coverPage = document.createElement('div');
        coverPage.className = 'page cover-page';
        coverPage.innerHTML = `
            <div class="floral-border">
                <div class="title-section">
                    <h1 class="brand-title">Dear Mama</h1>
                    <h2 class="brand-subtitle">PLANNERS</h2>
                </div>
                <h1 class="title-script">My Pregnancy Journey</h1>
                <div class="subtitle">A keepsake to treasure forever</div>
                <div class="input-group">
                    <label>Mother's Name:</label>
                    <input type="text" class="editable-field" placeholder="Your beautiful name" id="motherName">
                </div>
                <div class="input-group">
                    <label>Due Date:</label>
                    <input type="date" class="editable-field" id="dueDate">
                </div>
                <div class="floral-accent bottom"></div>
            </div>
        `;
        container.appendChild(coverPage);
        
        // Add event listeners to ensure inputs are interactive
        setTimeout(() => {
            const nameInput = document.getElementById('motherName');
            const dateInput = document.getElementById('dueDate');
            
            if (nameInput) {
                nameInput.addEventListener('click', () => nameInput.focus());
                nameInput.addEventListener('focus', () => console.log('Name input focused'));
            }
            
            if (dateInput) {
                dateInput.addEventListener('click', () => dateInput.focus());
                dateInput.addEventListener('focus', () => console.log('Date input focused'));
            }
        }, 100);
    }
    
    createWelcomePage(container) {
        const welcomePage = document.createElement('div');
        welcomePage.className = 'page welcome-page';
        welcomePage.innerHTML = `
            <div class="page-content">
                <h2 class="section-title">A Letter to You, Beautiful Mama</h2>
                <div class="letter-content">
                    <p>Dear Mama,</p>
                    <p>Right now, your whole world is changing.<br>
                    Inside you, a tiny heartbeat is already filling your life with love, hope, and a little nervous flutter.</p>
                    <p>This isn't just a planner.<br>
                    It's your safe place to hold the moments you'll never get back — the first kick, the daydreams about their little face, the promises you whisper before you even meet.</p>
                    <p>You already are everything your baby needs.<br>
                    Let's capture every precious moment together.</p>
                    <p class="signature">With love ♡</p>
                </div>
                <div class="floral-accent corner"></div>
            </div>
        `;
        container.appendChild(welcomePage);
    }
    
    createTrimesterDividers(container) {
        const trimesters = [
            { name: "First Trimester", weeks: "Weeks 4-13", quote: "You are already everything your baby needs." },
            { name: "Second Trimester", weeks: "Weeks 14-27", quote: "Your baby can hear your voice and feel your love." },
            { name: "Third Trimester", weeks: "Weeks 28-40", quote: "Soon you'll hold the miracle you've been growing." }
        ];
        
        trimesters.forEach(trimester => {
            const dividerPage = document.createElement('div');
            dividerPage.className = 'page divider-page';
            dividerPage.innerHTML = `
                <div class="divider-content">
                    <div class="trimester-number">${trimester.name}</div>
                    <h2 class="motivational-quote">"${trimester.quote}"</h2>
                    <div class="pregnant-silhouette"></div>
                    <div class="weeks-range">${trimester.weeks}</div>
                </div>
            `;
            container.appendChild(dividerPage);
        });
    }
    
    createWeeklyPages(container) {
        for (let week = 4; week <= 40; week++) {
            this.createWeeklySpread(container, week);
        }
    }
    
    createWeeklySpread(container, week) {
        const baby = this.babySize[week];
        const trimester = week <= 13 ? 1 : week <= 27 ? 2 : 3;
        const symptoms = this.getRandomSymptoms(trimester);
        
        // Left page - Baby info and medical
        const leftPage = document.createElement('div');
        leftPage.className = 'page weekly-left';
        leftPage.innerHTML = `
            <div class="page-content">
                <div class="week-header">
                    <h2 class="week-title">Week ${week}</h2>
                    <div class="week-subtitle">You're doing amazing, mama!</div>
                </div>
                
                <div class="baby-size-section">
                    <h3>Your Baby This Week</h3>
                    <div class="size-comparison">
                        <div class="size-icon">🍎</div>
                        <div class="size-text">
                            <strong>Size of a ${baby.size}</strong><br>
                            Length: ${baby.length}
                        </div>
                    </div>
                </div>
                
                <div class="symptoms-section">
                    <h3>Common Symptoms</h3>
                    <ul class="symptoms-list">
                        ${symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="health-tip">
                    <h3>Health Tip</h3>
                    <p>${this.getHealthTip(week)}</p>
                </div>
                
                <div class="doctor-notes">
                    <h3>Doctor's Notes</h3>
                    <textarea class="editable-field large" placeholder="Notes from your appointment..."></textarea>
                </div>
                
                <div class="floral-accent corner"></div>
            </div>
        `;
        
        // Right page - Personal reflections
        const rightPage = document.createElement('div');
        rightPage.className = 'page weekly-right';
        rightPage.innerHTML = `
            <div class="page-content">
                <div class="week-header">
                    <h2 class="week-title">Week ${week} Memories</h2>
                    <div class="encouragement">One week closer to holding your baby ♡</div>
                </div>
                
                <div class="feelings-section">
                    <h3>This Week I Felt...</h3>
                    <textarea class="editable-field extra-large" placeholder="Describe your emotions, physical changes, excitement, worries..."></textarea>
                </div>
                
                <div class="highlights-section">
                    <h3>Highlights & Milestones</h3>
                    <div class="bullet-points">
                        <textarea class="editable-field medium" placeholder="• First kick\n• Bought baby clothes\n• Told family the news\n• ..."></textarea>
                    </div>
                </div>
                
                <div class="treasured-moments">
                    <h3>Moments I'll Treasure</h3>
                    <textarea class="editable-field large" placeholder="The special moments from this week that you want to remember forever..."></textarea>
                </div>
                
                <div class="floral-accent corner"></div>
            </div>
        `;
        
        container.appendChild(leftPage);
        container.appendChild(rightPage);
    }
    
    createSpecialSections(container) {
        // Kick Count Tracker
        this.createKickCountPages(container);
        
        // Baby Name Brainstorm
        this.createBabyNamePages(container);
        
        // Hospital Bag Checklist
        this.createHospitalBagPage(container);
        
        // Doctor Appointment Log
        this.createDoctorLogPages(container);
        
        // Ultrasound Photo Pages
        this.createUltrasoundPages(container);
        
        // Birth Plan
        this.createBirthPlanPage(container);
        
        // Positive Affirmations
        this.createPositiveAffirmationsPage(container);
        
        // Baby Predictions
        this.createBabyPredictionsPage(container);
        
        // Letters to Baby
        this.createLetterPages(container);
    }
    
    createKickCountPages(container) {
        for (let i = 0; i < 2; i++) {
            const page = document.createElement('div');
            page.className = 'page kick-count-page';
            page.innerHTML = `
                <div class="page-content">
                    <h2 class="section-title">Kick Count Tracker</h2>
                    <p class="instruction">Count 10 kicks, rolls, or movements. Time how long it takes.</p>
                    
                    <div class="kick-count-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Total Time</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${Array(13).fill().map(() => `
                                    <tr>
                                        <td><input type="date" class="table-input"></td>
                                        <td><input type="time" class="table-input"></td>
                                        <td><input type="time" class="table-input"></td>
                                        <td><input type="text" class="table-input" placeholder="mins"></td>
                                        <td><input type="text" class="table-input" placeholder="Active/quiet"></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="floral-accent corner"></div>
                </div>
            `;
            container.appendChild(page);
        }
    }
    
    createBabyNamePages(container) {
        // Girl Names Page
        const girlNamesPage = document.createElement('div');
        girlNamesPage.className = 'page baby-names-page';
        girlNamesPage.innerHTML = `
            <div class="page-content">
                <h2 class="section-title">Girl Name Ideas</h2>
                <p class="subtitle">Dreaming of the perfect name for your little princess</p>
                
                <div class="single-gender-names">
                    ${Array(25).fill().map(() => `
                        <div class="name-row">
                            <input type="text" class="name-input" placeholder="First name">
                            <input type="text" class="name-input" placeholder="Middle">
                            <input type="text" class="meaning-input" placeholder="Meaning">
                        </div>
                    `).join('')}
                </div>
                
                <div class="floral-accent corner"></div>
            </div>
        `;
        container.appendChild(girlNamesPage);
        
        // Boy Names Page
        const boyNamesPage = document.createElement('div');
        boyNamesPage.className = 'page baby-names-page';
        boyNamesPage.innerHTML = `
            <div class="page-content">
                <h2 class="section-title">Boy Name Ideas</h2>
                <p class="subtitle">Dreaming of the perfect name for your little prince</p>
                
                <div class="single-gender-names">
                    ${Array(25).fill().map(() => `
                        <div class="name-row">
                            <input type="text" class="name-input" placeholder="First name">
                            <input type="text" class="name-input" placeholder="Middle">
                            <input type="text" class="meaning-input" placeholder="Meaning">
                        </div>
                    `).join('')}
                </div>
                
                <div class="floral-accent corner"></div>
            </div>
        `;
        container.appendChild(boyNamesPage);
    }
    
    createHospitalBagPage(container) {
        const page = document.createElement('div');
        page.className = 'page hospital-bag-page';
        page.innerHTML = `
            <div class="page-content">
                <h2 class="section-title">Hospital Bag Checklist</h2>
                <p class="subtitle">Everything you'll need for your special day</p>
                
                <div class="checklist-grid">
                    <div class="checklist-column">
                        <h3>For Mama</h3>
                        <div class="checklist-items">
                            ${[
                                'Comfortable going-home outfit',
                                'Nursing bras (2-3)',
                                'Comfortable underwear',
                                'Nursing pads',
                                'Maternity pads',
                                'Toiletries & skincare',
                                'Phone charger',
                                'Camera',
                                'Snacks',
                                'Lip balm',
                                'Hair ties',
                                'Slippers',
                                'Robe',
                                'Pillow from home'
                            ].map(item => `
                                <label class="checkbox-item">
                                    <input type="checkbox"> ${item}
                                </label>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="checklist-column">
                        <h3>For Baby</h3>
                        <div class="checklist-items">
                            ${[
                                'Going-home outfit (2 sizes)',
                                'Onesies (newborn & 0-3m)',
                                'Sleepers',
                                'Socks/booties',
                                'Swaddle blankets',
                                'Hat',
                                'Mittens',
                                'Car seat (installed!)',
                                'Burp cloths',
                                'Pacifiers',
                                'Baby blanket'
                            ].map(item => `
                                <label class="checkbox-item">
                                    <input type="checkbox"> ${item}
                                </label>
                            `).join('')}
                        </div>
                        
                        <h3>For Partner</h3>
                        <div class="checklist-items">
                            ${[
                                'Change of clothes',
                                'Toiletries',
                                'Snacks',
                                'Phone charger',
                                'Pillow & blanket',
                                'Entertainment'
                            ].map(item => `
                                <label class="checkbox-item">
                                    <input type="checkbox"> ${item}
                                </label>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="floral-accent corner"></div>
            </div>
        `;
        container.appendChild(page);
    }
    
    createDoctorLogPages(container) {
        const page = document.createElement('div');
        page.className = 'page doctor-log-page';
        page.innerHTML = `
            <div class="page-content">
                <h2 class="section-title">Doctor Appointment Log</h2>
                
                <div class="appointment-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Week</th>
                                <th>Weight</th>
                                <th>Blood Pressure</th>
                                <th>Notes & Questions</th>
                                <th>Next Steps</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Array(12).fill().map(() => `
                                <tr>
                                    <td><input type="date" class="table-input"></td>
                                    <td><input type="text" class="table-input small" placeholder="##"></td>
                                    <td><input type="text" class="table-input small" placeholder="lbs"></td>
                                    <td><input type="text" class="table-input small" placeholder="##/##"></td>
                                    <td><textarea class="table-textarea" placeholder="Notes..."></textarea></td>
                                    <td><textarea class="table-textarea" placeholder="Next visit..."></textarea></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                
                <div class="floral-accent corner"></div>
            </div>
        `;
        container.appendChild(page);
    }
    
    createUltrasoundPages(container) {
        for (let i = 0; i < 4; i++) {
            const page = document.createElement('div');
            page.className = 'page ultrasound-page';
            page.innerHTML = `
                <div class="page-content">
                    <h2 class="section-title">Ultrasound Memories</h2>
                    
                    <div class="ultrasound-grid">
                        <div class="ultrasound-slot">
                            <div class="photo-frame">
                                <div class="photo-placeholder">First glimpse of you ♡</div>
                            </div>
                            <div class="photo-details">
                                <input type="date" class="detail-input" placeholder="Date">
                                <input type="text" class="detail-input" placeholder="Weeks">
                                <textarea class="detail-textarea" placeholder="What I thought when I saw you..."></textarea>
                            </div>
                        </div>
                        
                        <div class="ultrasound-slot">
                            <div class="photo-frame">
                                <div class="photo-placeholder">Growing so beautifully ♡</div>
                            </div>
                            <div class="photo-details">
                                <input type="date" class="detail-input" placeholder="Date">
                                <input type="text" class="detail-input" placeholder="Weeks">
                                <textarea class="detail-textarea" placeholder="What I noticed this time..."></textarea>
                            </div>
                        </div>
                    </div>
                    
                    <div class="floral-accent corner"></div>
                </div>
            `;
            container.appendChild(page);
        }
    }
    
    createBirthPlanPage(container) {
        const page = document.createElement('div');
        page.className = 'page birth-plan-page';
        page.innerHTML = `
            <div class="page-content">
                <h2 class="section-title">My Birth Plan</h2>
                <p class="subtitle">Your preferences for your special day</p>
                
                <div class="birth-plan-sections">
                    <div class="plan-section">
                        <h3>Labor Preferences</h3>
                        <div class="checkbox-group">
                            <label><input type="checkbox"> Natural birth</label>
                            <label><input type="checkbox"> Epidural</label>
                            <label><input type="checkbox"> Water birth</label>
                            <label><input type="checkbox"> Movement during labor</label>
                            <label><input type="checkbox"> Music</label>
                            <label><input type="checkbox"> Dimmed lights</label>
                        </div>
                    </div>
                    
                    <div class="plan-section">
                        <h3>Support People</h3>
                        <textarea class="editable-field medium" placeholder="Who do you want present during labor and delivery?"></textarea>
                    </div>
                    
                    <div class="plan-section">
                        <h3>After Birth</h3>
                        <div class="checkbox-group">
                            <label><input type="checkbox"> Immediate skin-to-skin</label>
                            <label><input type="checkbox"> Delayed cord clamping</label>
                            <label><input type="checkbox"> Breastfeeding immediately</label>
                            <label><input type="checkbox"> Partner cuts cord</label>
                        </div>
                    </div>
                    
                    <div class="plan-section">
                        <h3>Special Requests</h3>
                        <textarea class="editable-field large" placeholder="Any other preferences or special requests..."></textarea>
                    </div>
                </div>
                
                <div class="floral-accent corner"></div>
            </div>
        `;
        container.appendChild(page);
    }
    
    createLetterPages(container) {
        const letterPrompts = [
            "A letter to my baby before we meet",
            "My hopes and dreams for you",
            "What I want you to know about your mama",
            "The story of how much you were wanted"
        ];
        
        letterPrompts.forEach(prompt => {
            const page = document.createElement('div');
            page.className = 'page letter-page';
            page.innerHTML = `
                <div class="page-content">
                    <h2 class="section-title">${prompt}</h2>
                    
                    <div class="letter-writing-area">
                        <textarea class="editable-field full-page" placeholder="My dearest baby...\n\nWrite your heart out to your little one. These words will be treasured forever."></textarea>
                    </div>
                    
                    <div class="letter-signature">
                        <p>All my love,</p>
                        <div class="signature-line">Mama ♡</div>
                    </div>
                    
                    <div class="floral-accent corner"></div>
                </div>
            `;
            container.appendChild(page);
        });
    }
    
    createPositiveAffirmationsPage(container) {
        const page = document.createElement('div');
        page.className = 'page affirmations-page';
        page.innerHTML = `
            <div class="page-content">
                <h2 class="section-title">Positive Affirmations for Mama</h2>
                
                <div class="affirmations-intro">
                    <p class="intro-text">Speak these beautiful truths over yourself during your pregnancy journey. You are strong, capable, and perfectly designed for this miracle.</p>
                </div>
                
                <div class="affirmations-grid">
                    <div class="affirmation-box">
                        <div class="affirmation-icon">💕</div>
                        <p>My body knows exactly how to grow and nurture my baby</p>
                    </div>
                    <div class="affirmation-box">
                        <div class="affirmation-icon">🌸</div>
                        <p>I trust my body's wisdom and strength</p>
                    </div>
                    <div class="affirmation-box">
                        <div class="affirmation-icon">✨</div>
                        <p>I am creating a miracle with love and grace</p>
                    </div>
                    <div class="affirmation-box">
                        <div class="affirmation-icon">🦋</div>
                        <p>Each day brings me closer to meeting my precious baby</p>
                    </div>
                    <div class="affirmation-box">
                        <div class="affirmation-icon">🌺</div>
                        <p>I am exactly the mother my baby needs</p>
                    </div>
                    <div class="affirmation-box">
                        <div class="affirmation-icon">💖</div>
                        <p>My love for my baby grows stronger every day</p>
                    </div>
                </div>
                
                <div class="personal-affirmations">
                    <h3>My Personal Affirmations</h3>
                    <textarea class="personal-affirmations-textarea" placeholder="Write your own personal affirmations and mantras here..."></textarea>
                </div>
                
                <div class="floral-accent corner"></div>
            </div>
        `;
        container.appendChild(page);
    }

    createBabyPredictionsPage(container) {
        const page = document.createElement('div');
        page.className = 'page predictions-page';
        page.innerHTML = `
            <div class="page-content">
                <h2 class="section-title">Baby Predictions & Wishes</h2>
                
                <div class="predictions-intro">
                    <p class="intro-text">Dream about your little one and capture your hopes, wishes, and sweet predictions for your baby's future.</p>
                </div>
                
                <div class="predictions-grid">
                    <div class="prediction-section">
                        <h3>Physical Features</h3>
                        <div class="prediction-row">
                            <label>Eye Color:</label>
                            <input type="text" class="prediction-input" placeholder="Blue, brown, green...">
                        </div>
                        <div class="prediction-row">
                            <label>Hair Color:</label>
                            <input type="text" class="prediction-input" placeholder="Blonde, brunette, red...">
                        </div>
                        <div class="prediction-row">
                            <label>Who will baby look like:</label>
                            <input type="text" class="prediction-input" placeholder="Mama, daddy, grandma...">
                        </div>
                    </div>
                    
                    <div class="prediction-section">
                        <h3>Personality Traits</h3>
                        <div class="prediction-row">
                            <label>Baby will be:</label>
                            <input type="text" class="prediction-input" placeholder="Calm, energetic, curious...">
                        </div>
                        <div class="prediction-row">
                            <label>Favorite activity:</label>
                            <input type="text" class="prediction-input" placeholder="Music, books, outdoors...">
                        </div>
                        <div class="prediction-row">
                            <label>Special talent:</label>
                            <input type="text" class="prediction-input" placeholder="Art, sports, music...">
                        </div>
                    </div>
                </div>
                
                <div class="wishes-section">
                    <h3>My Wishes for You, Sweet Baby</h3>
                    <textarea class="wishes-textarea" placeholder="My dearest baby, I wish for you to be happy, healthy, and loved beyond measure. I hope you will..."></textarea>
                </div>
                
                <div class="floral-accent corner"></div>
            </div>
        `;
        container.appendChild(page);
    }
    
    getRandomSymptoms(trimester) {
        const allSymptoms = {
            1: ["Morning sickness", "Tender breasts", "Fatigue", "Food aversions", "Frequent urination", "Mood swings", "Bloating", "Mild cramping"],
            2: ["Energy boost", "Growing belly", "Baby movements", "Heartburn", "Constipation", "Skin changes", "Vivid dreams", "Round ligament pain"],
            3: ["Back pain", "Shortness of breath", "Swelling", "Braxton Hicks", "Nesting instinct", "Trouble sleeping", "Frequent urination returns", "Pelvic pressure"]
        };
        
        const symptoms = allSymptoms[trimester] || [];
        return symptoms.slice(0, 4);
    }
    
    getHealthTip(week) {
        const tips = [
            "Stay hydrated and eat small, frequent meals.",
            "Take your prenatal vitamins daily.",
            "Get plenty of rest when your body needs it.",
            "Gentle exercise like walking is great for you and baby.",
            "Practice relaxation techniques for stress management.",
            "Eat plenty of fruits and vegetables for nutrients.",
            "Listen to your body and don't overdo it.",
            "Start thinking about your birth plan preferences.",
            "Consider taking a childbirth class.",
            "Pack your hospital bag and keep it ready."
        ];
        
        return tips[week % tips.length];
    }
    
    async generatePDF() {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'in',
            format: 'letter'
        });
        
        const pages = document.querySelectorAll('.page');
        
        for (let i = 0; i < pages.length; i++) {
            if (i > 0) {
                pdf.addPage();
            }
            
            try {
                const canvas = await html2canvas(pages[i], {
                    scale: 2,
                    useCORS: true,
                    backgroundColor: '#ffffff'
                });
                
                const imgData = canvas.toDataURL('image/png');
                pdf.addImage(imgData, 'PNG', 0, 0, 8.5, 11);
            } catch (error) {
                console.error('Error generating page:', error);
            }
        }
        
        pdf.save('My-Pregnancy-Journey-Planner.pdf');
    }
}

// Initialize the planner generator when the page loads
let plannerGenerator;

document.addEventListener('DOMContentLoaded', () => {
    plannerGenerator = new PregnancyPlannerGenerator();
    plannerGenerator.init();
});

// Add additional CSS for the new page types
const additionalStyles = `
.weekly-left, .weekly-right {
    background: var(--warm-cream);
}

.week-header {
    text-align: center;
    margin-bottom: 30px;
    border-bottom: 2px solid var(--blush-pink);
    padding-bottom: 15px;
}

.week-title {
    font-family: 'Dancing Script', cursive;
    font-size: 2.5rem;
    color: var(--dusty-rose);
    margin-bottom: 5px;
}

.week-subtitle, .encouragement {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    color: var(--text-soft);
    font-size: 1rem;
}

.baby-size-section, .symptoms-section, .health-tip, .doctor-notes,
.feelings-section, .highlights-section, .treasured-moments {
    margin-bottom: 25px;
}

.baby-size-section h3, .symptoms-section h3, .health-tip h3, .doctor-notes h3,
.feelings-section h3, .highlights-section h3, .treasured-moments h3 {
    font-family: 'Playfair Display', serif;
    color: var(--dusty-rose);
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.size-comparison {
    display: flex;
    align-items: center;
    background: rgba(244, 194, 194, 0.1);
    padding: 15px;
    border-radius: 10px;
}

.size-icon {
    font-size: 2rem;
    margin-right: 15px;
}

.symptoms-list {
    list-style: none;
    padding: 0;
}

.symptoms-list li {
    background: rgba(230, 215, 230, 0.3);
    padding: 8px 15px;
    margin: 5px 0;
    border-radius: 20px;
    font-size: 0.9rem;
}

.editable-field.large {
    height: 120px;
    resize: vertical;
}

.editable-field.extra-large {
    height: 150px;
    resize: vertical;
}

.editable-field.medium {
    height: 80px;
    resize: vertical;
}

.editable-field.full-page {
    height: 500px;
    resize: vertical;
}

.kick-count-table table, .appointment-table table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.kick-count-table th, .appointment-table th {
    background: var(--blush-pink);
    color: white;
    padding: 10px;
    text-align: left;
    font-family: 'Playfair Display', serif;
}

.kick-count-table td, .appointment-table td {
    padding: 8px;
    border-bottom: 1px solid var(--gentle-gray);
}

.table-input {
    width: 100%;
    border: 1px solid var(--blush-pink);
    padding: 5px;
    border-radius: 5px;
    font-size: 0.9rem;
}

.table-input.small {
    width: 60px;
}

.table-textarea {
    width: 100%;
    height: 40px;
    border: 1px solid var(--blush-pink);
    padding: 5px;
    border-radius: 5px;
    font-size: 0.9rem;
    resize: vertical;
}

.names-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 20px;
}

.names-column h3 {
    font-family: 'Dancing Script', cursive;
    font-size: 1.8rem;
    color: var(--dusty-rose);
    text-align: center;
    margin-bottom: 15px;
}

.name-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
    margin-bottom: 8px;
}

.name-input, .meaning-input {
    padding: 5px 8px;
    border: 1px solid var(--blush-pink);
    border-radius: 5px;
    font-size: 0.9rem;
}

.checklist-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 20px;
}

.checklist-column h3 {
    font-family: 'Dancing Script', cursive;
    font-size: 1.5rem;
    color: var(--dusty-rose);
    margin-bottom: 15px;
}

.checkbox-item {
    display: block;
    margin: 8px 0;
    font-size: 0.9rem;
    cursor: pointer;
}

.checkbox-item input[type="checkbox"] {
    margin-right: 8px;
    accent-color: var(--dusty-rose);
}

.ultrasound-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 20px;
}

.photo-frame {
    width: 200px;
    height: 150px;
    border: 3px solid var(--blush-pink);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gentle-gray);
    margin-bottom: 15px;
}

.photo-placeholder {
    font-family: 'Dancing Script', cursive;
    color: var(--dusty-rose);
    text-align: center;
    font-size: 1.1rem;
}

.photo-details {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.detail-input {
    padding: 5px 8px;
    border: 1px solid var(--blush-pink);
    border-radius: 5px;
    font-size: 0.9rem;
}

.detail-textarea {
    height: 60px;
    padding: 5px 8px;
    border: 1px solid var(--blush-pink);
    border-radius: 5px;
    font-size: 0.9rem;
    resize: vertical;
}

.birth-plan-sections {
    margin-top: 20px;
}

.plan-section {
    margin-bottom: 25px;
}

.plan-section h3 {
    font-family: 'Playfair Display', serif;
    color: var(--dusty-rose);
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.checkbox-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.checkbox-group label {
    font-size: 0.9rem;
    cursor: pointer;
}

.checkbox-group input[type="checkbox"] {
    margin-right: 8px;
    accent-color: var(--dusty-rose);
}

.letter-writing-area {
    margin: 30px 0;
}

.letter-signature {
    margin-top: 40px;
    text-align: right;
}

.letter-signature p {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    color: var(--text-soft);
    margin-bottom: 10px;
}

.signature-line {
    font-family: 'Dancing Script', cursive;
    font-size: 1.3rem;
    color: var(--dusty-rose);
}

.instruction {
    font-style: italic;
    color: var(--text-soft);
    text-align: center;
    margin-bottom: 20px;
}
`;

// Add the additional styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);