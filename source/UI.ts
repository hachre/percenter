class UI {
	private hdlInputPercent1: HTMLElement;
	private hdlInputPercent2: HTMLElement;
	private hdlButtonRun: HTMLElement;
	private hdlOutput: HTMLElement;

	constructor() {
		this.hdlInputPercent1 = document.getElementById("InputPercent1");
		this.hdlInputPercent2 = document.getElementById("InputPercent2");
		this.hdlButtonRun = document.getElementById("ButtonRun");
		this.hdlOutput = document.getElementById("Output");

		this.hdlButtonRun.addEventListener("click", function() {
			Percenter.Run();
		});

		console.log("UI ready...");
	}
}

new UI();
