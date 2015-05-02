declare var Percenter: any;

class Calc {
	public static Value1: number = 1;
	public static Value2: number = 1;
	public static ResultAugmentation: number = 1;
	public static getPercentage(): number {
		var result = ((this.Value2 * 100 / this.Value1) - 100) * this.ResultAugmentation;
		console.log("Calculating percentage with inputs '%s' and '%s'... Result: '%s'", this.Value1, this.Value2, result);
		return result;
	}
}

Percenter.Calc = Calc;