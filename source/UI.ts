declare var Percenter: any;

class UI {
	private hdlInputValue1: HTMLInputElement;
	private hdlInputValue2: HTMLInputElement;
	private hdlInputMultiplier: HTMLInputElement;
	private hdlButtonRun: HTMLButtonElement;
	private hdlOutput: HTMLDivElement;

	constructor() {
		this.hdlInputValue1 = <HTMLInputElement>document.getElementById("InputValue1");
		this.hdlInputValue2 = <HTMLInputElement>document.getElementById("InputValue2");
		this.hdlInputMultiplier = <HTMLInputElement>document.getElementById("InputMultiplier");
		this.hdlButtonRun = <HTMLButtonElement>document.getElementById("ButtonRun");
		this.hdlOutput = <HTMLDivElement>document.getElementById("Output");

		// Bind the events that trigger a recalculation		
		this.hdlButtonRun.addEventListener("click", () => { this.executeCalculation(); });
		this.hdlInputValue1.addEventListener("keypress", () => { this.executeCalculation(); });
		this.hdlInputValue1.addEventListener("keyup", () => { this.executeCalculation(); });
		this.hdlInputValue1.addEventListener("change", () => { this.executeCalculation(); });
		this.hdlInputValue2.addEventListener("keypress", () => { this.executeCalculation(); });
		this.hdlInputValue2.addEventListener("keyup", () => { this.executeCalculation(); });
		this.hdlInputValue2.addEventListener("change", () => { this.executeCalculation(); });
		this.hdlInputMultiplier.addEventListener("keypress", () => { this.executeCalculation(); });
		this.hdlInputMultiplier.addEventListener("keyup", () => { this.executeCalculation(); });
		this.hdlInputMultiplier.addEventListener("change", () => { this.executeCalculation(); });

		console.log("UI ready...");
	}

	private executeCalculation(): void {
		// Read the current inputs from the UI and calculate the percentage.
		Percenter.Calc.Value1 = this.getValue1() || "nope";
		Percenter.Calc.Value2 = this.getValue2() || "nope";
		Percenter.Calc.ResultAugmentation = this.getResultAugmentation() || 1;
		var percentage = Percenter.Calc.getPercentage();
			
		// Set the result in the UI.
		this.setOutput(percentage);
	}

	private getValue1(): number {
		return Number(this.cleanDecimal(this.hdlInputValue1.value));
	}

	private getValue2(): number {
		return Number(this.cleanDecimal(this.hdlInputValue2.value));
	}

	private getResultAugmentation(): number {
		return Number(this.hdlInputMultiplier.value);
	}

	private setOutput(value: number): void {
		this.hdlOutput.textContent = (value.toFixed(2).replace(".00", "") + "%").replace("NaN%", "").replace("Infinity%", "");
	}

	private cleanDecimal(value: string): string {
		if (value.indexOf(",") !== -1) {
			return value.replace(",", ".");
		}
		return value;
	}
}

Percenter.UI = new UI();