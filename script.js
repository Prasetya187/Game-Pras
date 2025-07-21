const levels = [
    {
        title: "Level 1: Labirin Pertama",
        maze: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['S', 'P', 'P', 'P', 'W', 'P', 'W'],
            ['W', 'W', 'W', 'P', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'P', 'W'],
            ['W', 'P', 'W', 'W', 'W', 'W', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'P', 'E'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        start: { row: 1, col: 0 },
        end: { row: 5, col: 6 },
        obstacles: [] // Tidak ada penghalang di level ini
    },
    {
        title: "Level 2: Gerbang Misteri",
        maze: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['S', 'P', 'P', 'P', 'W', 'P', 'W'],
            ['W', 'W', 'W', 'P', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'O', 'P', 'P', 'W'], // 'O' for Obstacle Gate
            ['W', 'W', 'W', 'W', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'P', 'E'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        start: { row: 1, col: 0 },
        end: { row: 5, col: 6 },
        obstacles: [
            {
                type: "question",
                row: 3, col: 3, // Posisi gerbang penghalang
                question: "Berapa 7 + 8?",
                options: ["14", "15", "16"],
                answer: "15"
            }
        ]
    },
    // Tambahkan level 3 hingga 10 di sini
    // Contoh Level 3: Labirin dengan lebih banyak belokan
    {
        title: "Level 3: Labirin Berliku",
        maze: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['S', 'P', 'P', 'W', 'P', 'P', 'P', 'W'],
            ['W', 'W', 'P', 'W', 'P', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'W', 'P', 'W'],
            ['W', 'P', 'W', 'W', 'W', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'P', 'P', 'W'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'P', 'E'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        start: { row: 1, col: 0 },
        end: { row: 6, col: 7 },
        obstacles: []
    },
    // Contoh Level 4: Penghalang dengan soal kata
    {
        title: "Level 4: Tebak Kata!",
        maze: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['S', 'P', 'P', 'W', 'P', 'P', 'W'],
            ['W', 'W', 'P', 'W', 'P', 'W', 'W'],
            ['W', 'P', 'P', 'O', 'P', 'P', 'W'],
            ['W', 'P', 'W', 'W', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'P', 'E'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        start: { row: 1, col: 0 },
        end: { row: 5, col: 6 },
        obstacles: [
            {
                type: "question",
                row: 3, col: 3,
                question: "Aku punya leher panjang dan suka makan daun. Siapakah aku?",
                options: ["Gajah", "Jerapah", "Kuda"],
                answer: "Jerapah"
            }
        ]
    },
    // Level 5: Labirin lebih besar dengan 2 penghalang
    {
        title: "Level 5: Dua Tantangan",
        maze: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['S', 'P', 'P', 'W', 'P', 'P', 'P', 'P', 'W'],
            ['W', 'W', 'P', 'W', 'P', 'W', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'O', 'P', 'P', 'W', 'P', 'W'], // Obstacle 1
            ['W', 'P', 'W', 'W', 'W', 'P', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'P', 'W', 'O', 'W'], // Obstacle 2
            ['W', 'W', 'W', 'W', 'W', 'P', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'E'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        start: { row: 1, col: 0 },
        end: { row: 7, col: 8 },
        obstacles: [
            {
                type: "question",
                row: 3, col: 3,
                question: "Berapa 10 + 12?",
                options: ["20", "21", "22"],
                answer: "22"
            },
            {
                type: "question",
                row: 5, col: 7,
                question: "Apa warna langit di siang hari?",
                options: ["Merah", "Hijau", "Biru"],
                answer: "Biru"
            }
        ]
    },
    // Level 6-10: Tingkatkan kompleksitas labirin dan jenis penghalang
    // Contoh Level 6: Labirin dengan jalur sempit
    {
        title: "Level 6: Jalur Sempit",
        maze: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['S', 'P', 'P', 'P', 'W', 'P', 'P', 'P', 'W'],
            ['W', 'W', 'W', 'P', 'W', 'P', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'P', 'W', 'P', 'W'],
            ['W', 'P', 'W', 'W', 'W', 'W', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'W'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'E'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        start: { row: 1, col: 0 },
        end: { row: 7, col: 8 },
        obstacles: []
    },
    // Contoh Level 7: Penghalang dengan soal pengurangan
    {
        title: "Level 7: Kurangkan Angka!",
        maze: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['S', 'P', 'P', 'W', 'P', 'P', 'P', 'W'],
            ['W', 'W', 'P', 'W', 'P', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'O', 'P', 'P', 'P', 'W'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'P', 'P', 'W'],
            ['W', 'P', 'W', 'W', 'W', 'W', 'W', 'E'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        start: { row: 1, col: 0 },
        end: { row: 6, col: 7 },
        obstacles: [
            {
                type: "question",
                row: 3, col: 3,
                question: "Berapa 15 - 7?",
                options: ["6", "7", "8"],
                answer: "8"
            }
        ]
    },
    // Contoh Level 8: Labirin dengan lebih banyak cabang
    {
        title: "Level 8: Labirin Bercabang",
        maze: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['S', 'P', 'P', 'W', 'P', 'P', 'P', 'P', 'W'],
            ['W', 'W', 'P', 'W', 'P', 'W', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'W', 'P', 'P', 'W'],
            ['W', 'P', 'W', 'W', 'W', 'W', 'P', 'W', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'W'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'E'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        start: { row: 1, col: 0 },
        end: { row: 7, col: 8 },
        obstacles: []
    },
    // Contoh Level 9: Penghalang dengan soal perkalian sederhana (jika sudah diajarkan)
    {
        title: "Level 9: Perkalian Kecil",
        maze: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['S', 'P', 'P', 'W', 'P', 'P', 'P', 'W'],
            ['W', 'W', 'P', 'W', 'P', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'O', 'P', 'P', 'P', 'W'],
            ['W', 'P', 'W', 'W', 'W', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'P', 'P', 'W'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'P', 'E'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        start: { row: 1, col: 0 },
        end: { row: 6, col: 7 },
        obstacles: [
            {
                type: "question",
                row: 3, col: 3,
                question: "Berapa 3 x 4?",
                options: ["10", "12", "14"],
                answer: "12"
            }
        ]
    },
    // Contoh Level 10: Labirin Terakhir dengan penghalang kompleks (misal: 2 soal atau soal cerita lebih panjang)
    {
        title: "Level 10: Tantangan Terakhir!",
        maze: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['S', 'P', 'P', 'W', 'P', 'P', 'P', 'W', 'P', 'W'],
            ['W', 'W', 'P', 'W', 'P', 'W', 'P', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'O', 'P', 'P', 'P', 'W', 'P', 'W'], // Obstacle 1
            ['W', 'P', 'W', 'W', 'W', 'W', 'P', 'W', 'P', 'W'],
            ['W', 'P', 'P', 'P', 'P', 'P', 'P', 'W', 'P', 'W'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'P', 'W', 'O', 'W'], // Obstacle 2
            ['W', 'P', 'P', 'P', 'P', 'P', 'P', 'W', 'P', 'W'],
            ['W', 'P', 'W', 'W', 'W', 'W', 'W', 'W', 'P', 'E'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        start: { row: 1, col: 0 },
        end: { row: 8, col: 9 },
        obstacles: [
            {
                type: "question",
                row: 3, col: 3,
                question: "Jika kamu punya 12 pensil dan temanmu meminjam 5, berapa sisa pensilmu?",
                options: ["6", "7", "8"],
                answer: "7"
            },
            {
                type: "question",
                row: 6, col: 8,
                question: "Aku bisa terbang tapi bukan burung, aku punya sayap tapi bukan pesawat. Siapakah aku?",
                options: ["Kupu-kupu", "Lebah", "Capung"],
                answer: "Kupu-kupu"
            }
        ]
    }
];

let currentLevelIndex = 0;
let playerPos = { row: 0, col: 0 };
let mazeGridElement;
let currentMaze = [];
let obstacleGates = {}; // Menyimpan status gerbang penghalang

const progressBar = document.getElementById('progressBar');
const levelTitle = document.getElementById('levelTitle');
const feedbackArea = document.getElementById('feedback-area');
const levelCompleteMessage = document.getElementById('level-complete-message');
const gameOverMessage = document.getElementById('game-over-message');
const nextLevelBtn = document.getElementById('nextLevelBtn');
const playAgainBtn = document.getElementById('playAgainBtn');

// Modal elements
const questionModal = new bootstrap.Modal(document.getElementById('questionModal'));
const modalQuestionText = document.getElementById('modalQuestionText');
const modalOptionsArea = document.getElementById('modalOptionsArea');
const modalFeedback = document.getElementById('modalFeedback');

function loadLevel() {
    if (currentLevelIndex >= levels.length) {
        showGameOver();
        return;
    }

    const levelData = levels[currentLevelIndex];
    currentMaze = JSON.parse(JSON.stringify(levelData.maze)); // Buat salinan maze
    playerPos = { ...levelData.start }; // Reset posisi pemain
    obstacleGates = {}; // Reset status gerbang

    levelTitle.textContent = levelData.title;
    feedbackArea.textContent = '';
    levelCompleteMessage.classList.add('d-none');

    renderMaze();
    updateProgressBar();
    document.addEventListener('keydown', handleKeyPress);
}

function renderMaze() {
    mazeGridElement = document.getElementById('maze-grid');
    mazeGridElement.innerHTML = '';
    mazeGridElement.style.gridTemplateColumns = `repeat(${currentMaze[0].length}, 40px)`; // Sesuaikan ukuran sel

    for (let r = 0; r < currentMaze.length; r++) {
        for (let c = 0; c < currentMaze[r].length; c++) {
            const cell = document.createElement('div');
            cell.classList.add('maze-cell');
            cell.dataset.row = r;
            cell.dataset.col = c;

            const cellType = currentMaze[r][c];
            if (cellType === 'W') {
                cell.classList.add('wall');
            } else if (cellType === 'P') {
                cell.classList.add('path');
            } else if (cellType === 'S') {
                cell.classList.add('start-cell');
                cell.classList.add('path'); // Start is also a path
            } else if (cellType === 'E') {
                cell.classList.add('end-cell');
                cell.classList.add('path'); // End is also a path
            } else if (cellType === 'O') {
                cell.classList.add('obstacle-gate');
                obstacleGates[`${r}-${c}`] = false; // Gerbang tertutup
            }

            mazeGridElement.appendChild(cell);
        }
    }
    updatePlayerPosition();
}

function updatePlayerPosition() {
    // Hapus kelas 'player' dari posisi sebelumnya
    const oldPlayerCell = mazeGridElement.querySelector('.player');
    if (oldPlayerCell) {
        oldPlayerCell.classList.remove('player');
    }

    // Tambahkan kelas 'player' ke posisi baru
    const newPlayerCell = mazeGridElement.querySelector(`[data-row="${playerPos.row}"][data-col="${playerPos.col}"]`);
    if (newPlayerCell) {
        newPlayerCell.classList.add('player');
    }
}

function handleKeyPress(event) {
    let newRow = playerPos.row;
    let newCol = playerPos.col;

    switch (event.key) {
        case 'ArrowUp':
            newRow--;
            break;
        case 'ArrowDown':
            newRow++;
            break;
        case 'ArrowLeft':
            newCol--;
            break;
        case 'ArrowRight':
            newCol++;
            break;
        default:
            return; // Abaikan tombol selain panah
    }

    movePlayer(newRow, newCol);
}

function movePlayer(newRow, newCol) {
    const mazeHeight = currentMaze.length;
    const mazeWidth = currentMaze[0].length;

    // Cek batas labirin
    if (newRow < 0 || newRow >= mazeHeight || newCol < 0 || newCol >= mazeWidth) {
        return;
    }

    const targetCellType = currentMaze[newRow][newCol];

    // Cek apakah sel tujuan adalah dinding
    if (targetCellType === 'W') {
        feedbackArea.textContent = "Itu dinding! Tidak bisa lewat.";
        setTimeout(() => feedbackArea.textContent = '', 1000);
        return;
    }

    // Cek apakah sel tujuan adalah penghalang
    if (targetCellType === 'O') {
        const obstacle = levels[currentLevelIndex].obstacles.find(o => o.row === newRow && o.col === newCol);
        if (obstacle && !obstacleGates[`${newRow}-${newCol}`]) { // Jika gerbang tertutup
            showQuestionModal(obstacle, newRow, newCol);
            return; // Jangan bergerak sampai pertanyaan terjawab
        }
    }

    // Pindahkan pemain
    playerPos.row = newRow;
    playerPos.col = newCol;
    updatePlayerPosition();

    // Cek apakah sudah sampai tujuan
    const end = levels[currentLevelIndex].end;
    if (playerPos.row === end.row && playerPos.col === end.col) {
        document.removeEventListener('keydown', handleKeyPress);
        showLevelComplete();
    }
}

function showQuestionModal(obstacle, obsRow, obsCol) {
    modalQuestionText.textContent = obstacle.question;
    modalOptionsArea.innerHTML = '';
    modalFeedback.textContent = '';

    const shuffledOptions = shuffleArray([...obstacle.options]);

    shuffledOptions.forEach(option => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-12 mb-2';

        const button = document.createElement('button');
        button.className = 'btn btn-info modal-option-button';
        button.textContent = option;
        button.onclick = () => checkModalAnswer(option, obstacle.answer, obsRow, obsCol);
        colDiv.appendChild(button);
        modalOptionsArea.appendChild(colDiv);
    });

    questionModal.show();
}

function checkModalAnswer(selectedOption, correctAnswer, obsRow, obsCol) {
    const optionButtons = modalOptionsArea.querySelectorAll('.modal-option-button');
    optionButtons.forEach(button => button.disabled = true);

    if (selectedOption === correctAnswer) {
        modalFeedback.textContent = "Benar! Gerbang terbuka!";
        modalFeedback.className = 'text-success font-weight-bold';
        setTimeout(() => {
            questionModal.hide();
            openGate(obsRow, obsCol);
            // Pindahkan pemain setelah gerbang terbuka
            playerPos.row = obsRow;
            playerPos.col = obsCol;
            updatePlayerPosition();
            optionButtons.forEach(button => {
                button.disabled = false;
                button.classList.remove('correct', 'wrong');
            });
        }, 1000);
    } else {
        modalFeedback.textContent = "Salah. Coba lagi!";
        modalFeedback.className = 'text-danger font-weight-bold';
        setTimeout(() => {
            modalFeedback.textContent = '';
            optionButtons.forEach(button => {
                button.disabled = false;
                button.classList.remove('correct', 'wrong');
            });
        }, 1500);
    }
}

function openGate(row, col) {
    const gateCell = mazeGridElement.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    if (gateCell) {
        gateCell.classList.remove('obstacle-gate');
        gateCell.classList.add('open-gate');
        obstacleGates[`${row}-${col}`] = true; // Tandai gerbang sebagai terbuka
    }
}

function showLevelComplete() {
    levelCompleteMessage.classList.remove('d-none');
    nextLevelBtn.onclick = () => {
        currentLevelIndex++;
        loadLevel();
    };
}

function showGameOver() {
    document.getElementById('game-container').classList.add('d-none'); // Sembunyikan game
    gameOverMessage.classList.remove('d-none');
    playAgainBtn.onclick = () => {
        currentLevelIndex = 0;
        document.getElementById('game-container').classList.remove('d-none');
        gameOverMessage.classList.add('d-none');
        loadLevel();
    };
}

function updateProgressBar() {
    const progress = (currentLevelIndex / levels.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Mulai game
document.addEventListener('DOMContentLoaded', loadLevel);