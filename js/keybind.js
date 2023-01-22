
const validKeys = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "{", "]", "}", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "-"]
let errorCreated = false;
let chosenCmd = "";
let chosenKey = "";
let output = "";

function addError(msg) {
	if(errorCreated === false) {
		errorCreated = true;
		
		console.log("Created error");

		const el = document.querySelector(".info-container");

		const preHtml = el.innerHTML;

		el.innerHTML = `${msg}`;

		setTimeout(() => {
			el.innerHTML = preHtml;
			errorCreated = false;
		}, 3000);
	}
}

document.querySelectorAll(".keybind-dropdown-item").forEach((v) => {
	v.addEventListener("click", (e) => {
		document.querySelector(".keybind-chosen-cmd").innerText = "Command: " + v.innerText;
		chosenCmd = v.attributes["data-command"].value;
	})
})

document.querySelector(".keybind-button").addEventListener("click", (e) => {
	const input = document.querySelector(".keybind-input").value;
	chosenKey = input;
	if(input === "") return addError(`No keybind given`)
	if(chosenCmd === "") return addError(`No command given`)
	if(validKeys.includes(input)) {
		document.querySelector(".keybind-input").value = "";
		document.querySelector(".keybind-chosen-cmd").innerText = "Chosen Command";
		output += `bind ${chosenKey} "${chosenCmd}";`;
		document.querySelector(".output").innerHTML = `
		<div class="card w-50">
			<div class="card-header">
				Output
			</div>
			<div class="card-body">
				${output}
			</div>
		</div>
		`;
	} else {
		addError(`${chosenKey} is not a key`);
	}
})