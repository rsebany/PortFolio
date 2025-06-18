document.addEventListener('DOMContentLoaded', function() {
    const terminal = document.getElementById('terminal');
    const commandInput = document.getElementById('command-input');
    
    // Available commands
    const commands = {
        'help': {
            description: 'Show available commands',
            execute: function() {
                return `
Available commands:
<span class="command-text">help</span> - Show this help message
<span class="command-text">about</span> - About me
<span class="command-text">cv</span> - View my CV
<span class="command-text">projects</span> - View my projects
<span class="command-text">skills</span> - View my skills
<span class="command-text">contact</span> - Contact information
<span class="command-text">clear</span> - Clear the terminal
<span class="command-text">welcome</span> - Show welcome message
`;
            }
        },
        'about': {
            description: 'About me',
            execute: function() {
                return `
<span class="command-text">Romualdo SEBANY</span>
AI Enthusiast & Full-Stack Developer

I aim to become an AI expert and design intelligent systems useful to society. 
My passion for developing innovative solutions drives me to contribute to concrete projects. 
I'm ready to bring a creative and technical approach to designing intelligent systems.
`;
            }
        },
        'cv': {
            description: 'View my CV',
            execute: function() {
                return `
<span class="command-text">PROFESSIONAL OBJECTIVE</span>
I aim to become an expert in AI and design intelligent systems useful to society, 
by integrating an internship to strengthen my programming and AI skills.

<span class="command-text">TECHNICAL SKILLS</span>
- Frontend: HTML5, CSS, JavaScript, TypeScript, React.js, Bootstrap
- Backend: Node.js/Express, Python/Django/Flask, PHP/Laravel, Java, MySQL
- Tools: Git/GitHub, Agile, Heroku, TensorFlow

<span class="command-text">PROFESSIONAL EXPERIENCE</span>
- Graphic Design Internship - Mada Digital, Madagascar (Aug 2023 – Dec 2023)
  - Design and creation of graphic designs for diverse clients
  - Development of mockups and user interface prototypes

<span class="command-text">EDUCATION</span>
- Bachelor's Degree in Computer Science - Saad Dahlab-Blida 1 University (Expected 2026)
- Scientific Baccalaureate - Lycée Mixte Nosy Be Hell-Ville, Madagascar (2021-2022)

Type <span class="command-text">cv --full</span> for complete CV details.
`;
            }
        },
        'projects': {
            description: 'View my projects',
            execute: function() {
                return `
<span class="command-text">BonApp Application - Restaurant Discovery</span>
- Web application for discovering restaurants with personalized recommendations
- Technologies: Laravel, TypeScript, React, Machine Learning

<span class="command-text">Book Review RESTful API</span>
- Complete API for managing books and reviews with secure authentication
- Technologies: Node.js, Express, JWT, MySQL

<span class="command-text">Banking Fraud Detection System</span>
- AI system for analyzing and detecting falsified bank transactions
- Technologies: Python, TensorFlow, Data Analysis
`;
            }
        },
        'skills': {
            description: 'View my skills',
            execute: function() {
                return `
<span class="command-text">Technical Skills:</span>
- Frontend Development: HTML5, CSS, JavaScript, TypeScript, React, Bootstrap
- Backend Development: Node.js, Express, Python, Django, Flask, PHP, Laravel
- Database: MySQL, MongoDB, Data Modeling
- Artificial Intelligence: TensorFlow, Machine Learning, Data Analysis
- Tools & Methods: Git, GitHub, Agile, Heroku, RESTful APIs
- Design: Figma, Adobe XD, UI/UX Design
`;
            }
        },
        'contact': {
            description: 'Contact information',
            execute: function() {
                return `
<span class="command-text">Contact Information:</span>
- Email: <a href="mailto:romualdosebany@gmail.com">romualdosebany@gmail.com</a>
- Phone: +213 655 87 18 83
- LinkedIn: <a href="https://www.linkedin.com/in/romualdo-sebany/" target="_blank">linkedin.com/in/romualdo-sebany</a>
- GitHub: <a href="https://github.com/rsebany/" target="_blank">github.com/rsebany</a>

Feel free to reach out for opportunities or collaborations!
`;
            }
        },
        'clear': {
            description: 'Clear the terminal',
            execute: function() {
                document.querySelectorAll('.output').forEach(el => el.remove());
                return '';
            }
        },
        'welcome': {
            description: 'Show welcome message',
            execute: function() {
                return `
<pre class="ascii-art">
  ____                 _          _       _          ____            _        
 |  _ \\ ___  _ __ ___ (_)___  ___| |_   _| |__   ___/ ___|  ___ _ __(_)_______ 
 | |_) / _ \\| '_ \` _ \\| / __|/ _ \\ | | | | '_ \\ / _ \\___ \\ / _ \\ '__| |_  / _ \\
 |  _ < (_) | | | | | | \\__ \\  __/ | |_| | |_) | (_) |__) |  __/ |  | |/ /  __/
 |_| \\_\\___/|_| |_| |_|_|___/\\___|_|\\__, |_.__/ \\___/____/ \\___|_|  |_/___\\___|
                                     |___/                                     
</pre>
Welcome to Romualdo SEBANY's CLI Portfolio
Type <span class="command-text">help</span> to see available commands
`;
            }
        }
    };

    // Handle command input
    commandInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const commandText = commandInput.value.trim();
            commandInput.value = '';
            
            // Create command line display
            const commandLine = document.createElement('div');
            commandLine.className = 'command-line';
            commandLine.innerHTML = `<span class="prompt">romualdosebany:~$</span> <span class="command">${commandText}</span>`;
            
            // Create response container
            const response = document.createElement('div');
            response.className = 'response';
            
            // Process command
            if (commandText in commands) {
                response.innerHTML = commands[commandText].execute();
            } else if (commandText === '') {
                response.innerHTML = '';
            } else {
                response.innerHTML = `<span style="color:#ff5555">Command not found: ${commandText}</span><br>Type <span class="command-text">help</span> for available commands.`;
            }
            
            // Create output container
            const output = document.createElement('div');
            output.className = 'output';
            output.appendChild(commandLine);
            if (response.innerHTML.trim() !== '') {
                output.appendChild(response);
            }
            
            // Add to terminal
            terminal.insertBefore(output, document.querySelector('.input-line'));
            
            // Scroll to bottom
            terminal.scrollTop = terminal.scrollHeight;
        }
    });

    // Initial welcome message
    const welcomeOutput = document.createElement('div');
    welcomeOutput.className = 'output';
    welcomeOutput.innerHTML = `
        <div class="response">${commands['welcome'].execute()}</div>
    `;
    terminal.insertBefore(welcomeOutput, document.querySelector('.input-line'));
});