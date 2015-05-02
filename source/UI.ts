declare var Percenter: any;

class UI {
	private hdlInputPercent1: HTMLInputElement;
	private hdlInputPercent2: HTMLInputElement;
	private hdlButtonRun: HTMLButtonElement;
	private hdlOutput: HTMLDivElement;

	constructor() {
		this.hdlInputPercent1 = <HTMLInputElement>document.getElementById("InputPercent1");
		this.hdlInputPercent2 = <HTMLInputElement>document.getElementById("InputPercent2");
		this.hdlButtonRun = <HTMLButtonElement>document.getElementById("ButtonRun");
		this.hdlOutput = <HTMLDivElement>document.getElementById("Output");

		this.hdlButtonRun.addEventListener("click", () => {
			// Read the current inputs from the UI and calculate the percentage.
			Percenter.Calc.Value1 = this.getValue1();
			Percenter.Calc.Value2 = this.getValue2();
			var percentage = Percenter.Calc.getPercentage();
			
			// Set the result in the UI.
			this.setOutput(percentage);
		});

		console.log("UI ready...");
	}

	private getValue1(): number {
		return Number(this.cleanDecimal(this.hdlInputPercent1.value));
	}

	private getValue2(): number {
		return Number(this.cleanDecimal(this.hdlInputPercent2.value));
	}

	private setOutput(value: number): void {
		this.hdlOutput.textContent = value.toFixed(2).replace(".00","") + "%";
	}

	private cleanDecimal(value: string): string {
		if (value.indexOf(",") !== -1) {
			return value.replace(",", ".");
		}
		return value;
	}
}

Percenter.UI = new UI();