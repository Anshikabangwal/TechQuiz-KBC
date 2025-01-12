const questionBank = [
    {
        sno:1,
        question: "Which of the following is not a fundamental data type in C++?",
        options: [" float", "boolean", "char", "string"],
        correctAnswer: "string"
    },
    {
        sno:2,
        question: "Which of the following is not a valid JavaScript data type?",
        options: ["number", "array", "object", "character"],
        correctAnswer: "character"
    },
    {
        sno:3,
        question: "In Java, what does the 'super' keyword refer to?",
        options: ["It refers to the superclass of the current class", "It refers to the subclass of the current class", "It refers to the parent package of the current package", "It refers to the child package of the current package"],
        correctAnswer: "It refers to the superclass of the current class"
    },
    {
        sno:4,
        question: "Which operating system uses the Linux kernel?",
        options: ["macOS ", "Windows", "Ubuntu", "iOS"],
        correctAnswer: "Ubuntu"
    },
    {
        sno:5,
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: [" It refers to the current class instance", "It refers to the parent class", "It refers to the global scope", "It refers to the previous element"],
        correctAnswer: " It refers to the current class instance"
    },
    {
        sno:6,
        question: "What is the purpose of the 'margin' property in CSS?",
        options: [" It sets the space between the border and the content", "It sets the space between elements", "It sets the space outside the border of an element", "It sets the space between lines of text"],
        correctAnswer: "It sets the space outside the border of an element"
    },
    {
        sno:7,
        question: "Which scheduling algorithm in operating systems assigns priority to each process and selects the process with the highest priority for execution?",
        options: ["Round Robin", "First Come First Serve (FCFS)", "Shortest Job Next (SJN)", "Priority Scheduling"],
        correctAnswer: "Priority Scheduling"
    },
    {
        sno:8,
        question: "Which keyword is used to declare a constant variable in Java?",
        options: ["constant ", "final", "const", "static"],
        correctAnswer: "final"
    },
    {
        sno:9,
        question: "What is the output of the following Python code? print(3 * '7')",
        options: ["21 ", "777", "7", "7777"],
        correctAnswer: "777"
    },
    {
        sno:10,
        question: "Which of the following statements is true about Python dictionaries?",
        options: ["Dictionaries are ordered collections of elements. ", "Keys in a dictionary must be unique.", "Dictionary values can be accessed using indices.", "Dictionaries in Python are immutable."],
        correctAnswer: "Keys in a dictionary must be unique."
    },
    {
        sno:11,
        question: "In CSS, which property is used to change the background color of an element?",
        options: ["color", "background-color", " bgcolor", "background"],
        correctAnswer: "background-color"
    },
    {
        sno: 12,
        question: "What is the purpose of the 'break' statement in a switch-case construct in C?",
        options: [
            "It terminates the loop.",
            "It exits the switch-case construct.",
            "It skips the current iteration of the loop.",
            "It jumps to a specific label within the loop."
        ],
        correctAnswer: "It exits the switch-case construct."
    },
    {
        sno:13,
        question: "Which HTML tag is used to define an unordered list?",
        options: [
            "ol",
            "li",
            "ul",
            "dl"
        ],
        correctAnswer: "ul"
    },
    {
        sno:14,
        question: "Which of the following is true about pointers in C?",
        options: [
            "Pointers cannot be used with arrays.",
            "Pointers cannot be passed as function arguments.",
            "Pointers cannot point to another pointer.",
            "Pointers can be used to manipulate data directly in memory."
        ],
        correctAnswer: "Pointers can be used to manipulate data directly in memory."
    },
    {
        sno:15,
        question: "What is the role of a DNS server?",
        options: [
            "To encrypt data transmission.",
            "To provide domain name resolution to IP addresses.",
            "To authenticate users.",
            "To manage network security."
        ],
        correctAnswer: "To provide domain name resolution to IP addresses."
    },
    {
        sno:16,
        question: "What is the purpose of the 'DOCTYPE' declaration in HTML?",
        options: [
            "To declare the document type and version of HTML.",
            "To specify the character encoding of the document.",
            "To define the structure of the document.",
            "To include external scripts and stylesheets."
        ],
        correctAnswer: "To declare the document type and version of HTML."
    },
    {
        sno:17,
        question: "What is the difference between 'let' and 'var' in JavaScript?",
        options: [
            "'let' is block-scoped, while 'var' is function-scoped.",
            "'let' is function-scoped, while 'var' is block-scoped.",
            "'let' is used for constant variables, while 'var' is used for mutable variables.",
            "There is no difference between 'let' and 'var'."
        ],
        correctAnswer: "'let' is block-scoped, while 'var' is function-scoped."
    },
    {
        sno:18,
        question: "What is the purpose of the 'z-index' property in CSS?",
        options: [
            "To specify the vertical position of an element.",
            "To specify the stacking order of elements along the z-axis.",
            "To control the spacing between elements.",
            "To specify the opacity of an element."
        ],
        correctAnswer: "To specify the stacking order of elements along the z-axis."
    },
    {
        sno:19,
        question: "What is the purpose of the 'transition' property in CSS?",
        options: [
            "To specify the duration of an animation.",
            "To define the appearance of an element when it is hovered over.",
            "To create smooth transitions between different property values.",
            "To rotate an element around its axis."
        ],
        correctAnswer: "To create smooth transitions between different property values."
    },
    {
        sno:20,
        question: "What is the purpose of the 'background-image' property in CSS?",
        options: [
            "To specify the background color of an element.",
            "To set the size of an element.",
            "To define an image to be used as the background of an element.",
            "To position an element within its containing element."
        ],
        correctAnswer: "To define an image to be used as the background of an element."
    }
];

const totalQues = [];
const prizeAmounts = [5000, 10000, 20000, 40000, 80000, 160000, 320000, 640000, 1250000, 2500000, 5000000, 10000000,30000000,70000000]; 
let countdownInterval;
let correctAnswersCount = 0;
let currentPrizeAmount = 0;
const questionDiv = document.querySelector(".question button");
let optionsButtons = document.querySelectorAll(".options button");
const lifelineButton = document.querySelector(".lifeline button:nth-of-type(2)");
const fiftyFiftyButton = document.querySelector(".lifeline button:nth-of-type(1)");
const swapButton = document.querySelector(".lifeline button:nth-of-type(3)");
const quitButton = document.querySelector(".lifeline button:nth-of-type(4)");
let swapUsed = false; 
let fiftyFiftyUsed = false;
let quitClicked = false;

//to end the quiz
function endQuiz() {
    console.log("End of quiz by the user");
    console.log(`Quiz ended. You have won ${currentPrizeAmount}!`);
    displayPopup(currentPrizeAmount);

    // Disable all event listeners on options buttons
    optionsButtons.forEach(button => {
        button.removeEventListener("click", handleOptionClick);
    });

    // Clear the countdown interval
    clearInterval(countdownInterval);

    // Disable the quit button
    quitButton.disabled = true;

    // Disable other lifeline buttons if they are not used yet
    if (!swapUsed) {
        swapButton.disabled = true;
    }
    if (!fiftyFiftyUsed) {
        fiftyFiftyButton.disabled = true;
    }
}

quitButton.addEventListener("click", () => {
    endQuiz();
});
// Function to handle OK button click and redirect to instruction page
function handleOkButtonClick() {
    window.location.href = "kbc_instruction.html"; 
}
// Add event listener to OK button
document.getElementById("okButton").addEventListener("click", handleOkButtonClick);

//for using swap lifeline
function swapQuestion() {
    // Check if the lifeline has already been used
    if (swapButton.disabled) {
        return; // Exit the function if lifeline already used
    }
    // Call the displayQuestion function to display the new question
    displayQuestion();
    swapButton.disabled = true;
}
swapButton.addEventListener("click", () => {
    swapQuestion();
});

//for using50-50 lifeline
function fiftyFiftyLifeline() {
    // Check if lifeline is already used
    if (fiftyFiftyUsed) {
        return; // Do nothing if lifeline is already used
    }
    
    // Get the current question's options
    const currentQuestion = questionBank[totalQues[totalQues.length - 1]];
    const options = currentQuestion.options;

    // Get indices of correct and incorrect options
    const correctIndex = options.findIndex(option => option === currentQuestion.correctAnswer);
    const incorrectIndices = options
        .map((option, index) => ({ option, index }))
        .filter(item => item.index !== correctIndex)
        .map(item => item.index);

    // Randomly select two incorrect options to remove
    const indicesToRemove = [];
    while (indicesToRemove.length < 2) {
        const randomIndex = Math.floor(Math.random() * incorrectIndices.length);
        const indexToRemove = incorrectIndices[randomIndex];
        if (!indicesToRemove.includes(indexToRemove)) {
            indicesToRemove.push(indexToRemove);
        }
    }

    // Disable the lifeline button
    fiftyFiftyButton.disabled = true;
    fiftyFiftyUsed = true; // Mark lifeline as used

    // Hide the selected incorrect options
    indicesToRemove.forEach(index => {
        optionsButtons[index].textContent = "";
    });
}
fiftyFiftyButton.addEventListener("click", () => {
    fiftyFiftyLifeline();
});

//60sec timer
function startTimer() {
    let secondsLeft = 60;
    lifelineButton.textContent = `${secondsLeft}`;
    countdownInterval = setInterval(() => {
        secondsLeft--;
        if (secondsLeft >= 0) {
            lifelineButton.textContent = `${secondsLeft} `;
        } else {
            clearInterval(countdownInterval);
            lifelineButton.style.backgroundColor = "red";
            lifelineButton.disabled = true;
            endQuiz(); // Call quitGame function when timer reaches zero
        }
    }, 1000);
}

//price glow up code
function glowPriceButtons(count) {
    const priceButtons = document.querySelectorAll(".price button");
    const totalButtons = priceButtons.length;
    priceButtons.forEach(button => {
        button.classList.remove("glow"); // Remove glow class from all buttons
    });
    // Calculate the index of the button to start glowing based on the number of correct answers
    let glowIndex;
    if (count >= 0 && count <= totalButtons) {
        glowIndex = totalButtons - count;
    } else {
        // If count exceeds totalButtons, glow the last button
        glowIndex = 0;
    }
    // Add glow class to the button
    priceButtons[glowIndex].classList.add("glow");
    priceButtons[glowIndex].style.backgroundColor = "orangered";
    priceButtons[glowIndex].style.color = "black";
    // Update the current prize amount
    currentPrizeAmount = prizeAmounts[count-1];
}

//handling options button
function handleOptionClick(event) {
    const button = event.target;
    optionsButtons.forEach(btn => {
        btn.disabled = true; // Disable all options buttons
    });

    const selectedOption = button.textContent;
    const currentQuestion = questionBank[totalQues[totalQues.length - 1]];

    if (selectedOption === currentQuestion.correctAnswer) {
        correctAnswersCount++;
        glowPriceButtons(correctAnswersCount);
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "red";
        optionsButtons.forEach(btn => {
            if (btn.textContent === currentQuestion.correctAnswer) {
                btn.style.backgroundColor = "green";
            }
        });
        endQuiz(); // End the quiz if the answer is incorrect
        return; // Exit the function early to prevent moving to the next question
    }

    if (correctAnswersCount === 14 || totalQues.length >= 14) {
        endQuiz(); // End the quiz if all questions have been answered correctly
    } else {
        setTimeout(() => {
            displayQuestion(); // Move to the next question after a delay
        }, 2000);
    }
}

//to display random question
function displayQuestion() {
    clearInterval(countdownInterval);
    startTimer();
    if (totalQues.length >= 14 || quitClicked) { // Check if the total number of questions displayed is 14 or if the game has ended
        endQuiz();
        return;
    }
    let quesNo;
    do {
        quesNo = Math.floor(Math.random() * questionBank.length);
    } while (totalQues.includes(quesNo));

    totalQues.push(quesNo);

    let currentQuestion = questionBank[quesNo];
    questionDiv.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        optionsButtons[index].innerHTML = option;
    });

    optionsButtons.forEach(button => {
        button.style.backgroundColor = "";
        button.disabled = false;

        // Remove any existing event listeners
        button.removeEventListener("click", handleOptionClick);
        // Add new event listener
        button.addEventListener("click", handleOptionClick);
    });
}

// to display the popup
function displayPopup(amount) {
    var popup = document.getElementById("popup");
    var earnedAmount = document.getElementById("earnedAmount");
    earnedAmount.textContent = amount;
    popup.style.display = "block";
}

// to close the popup
function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

//to start the quiz or display the first question
displayQuestion();