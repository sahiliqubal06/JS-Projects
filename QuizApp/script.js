document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "Which data structure uses LIFO (Last In First Out) principle?",
      choices: ["Queue", "Stack", "Linked List", "Tree"],
      answer: "Stack",
    },
    {
      question: "What does 'HTTP' stand for?",
      choices: [
        "HyperText Transfer Protocol",
        "Hyper Terminal Transfer Protocol",
        "High Transfer Text Protocol",
        "HyperText Transmission Protocol",
      ],
      answer: "HyperText Transfer Protocol",
    },
    {
      question: "Which of the following is not a programming language?",
      choices: ["Python", "HTML", "C++", "Java"],
      answer: "HTML",
    },
    {
      question:
        "Which sorting algorithm is the most efficient in the average case?",
      choices: [
        "Bubble Sort",
        "Insertion Sort",
        "Selection Sort",
        "Merge Sort",
      ],
      answer: "Merge Sort",
    },
    {
      question: "In databases, what does SQL stand for?",
      choices: [
        "Structured Question Language",
        "Structured Query Language",
        "Simple Query Language",
        "Server Query Language",
      ],
      answer: "Structured Query Language",
    },
    {
      question:
        "What is the time complexity of binary search in a sorted array?",
      choices: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
      answer: "O(log n)",
    },
    {
      question: "Which of the following is a type of operating system?",
      choices: ["MySQL", "Linux", "Python", "Oracle"],
      answer: "Linux",
    },
    {
      question: "Which protocol is used to assign IP addresses automatically?",
      choices: ["FTP", "HTTP", "DHCP", "DNS"],
      answer: "DHCP",
    },
    {
      question: "Which gate outputs HIGH only when all inputs are HIGH?",
      choices: ["OR", "NAND", "AND", "XOR"],
      answer: "AND",
    },
    {
      question: "Which layer in the OSI model is responsible for routing?",
      choices: [
        "Transport Layer",
        "Network Layer",
        "Data Link Layer",
        "Session Layer",
      ],
      answer: "Network Layer",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; //clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});
