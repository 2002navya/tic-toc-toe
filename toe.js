let a = document.querySelectorAll(".box");
let b = document.querySelector("#reset");
let c = document.querySelector("#replay");
let d = document.querySelector(".msgcontainer");
let e = document.querySelector("#msg");
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    d.classList.add("hide");
}

a.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.classList.contains("clicked")) {
            return; // Prevent further clicks on this box
        }

        console.log("box was clicked");

        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        
        box.classList.add("clicked");  // Mark this box as clicked

        checkWinner();
    });
});

const disableBoxes = () => {
    a.forEach(box => {
        box.classList.add("clicked"); // Mark all boxes as clicked (disabled)
    });
}

const enableBoxes = () => {
    a.forEach(box => {
        box.classList.remove("clicked");  // Unmark all boxes
        box.innerText = "";               // Clear the text
    });
}

const showWinner = (winner) => {
    e.innerText = `Congratulations!! The winner is ${winner}`;
    d.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = a[pattern[0]].innerText;
        let pos2val = a[pattern[1]].innerText;
        let pos3val = a[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};

c.addEventListener("click", resetGame);
b.addEventListener("click", resetGame);
