// Program Namespace, needs to be declared in every file that wants access
declare var Percenter: any;

class Program {
	constructor() {
		console.log("Percenter launching...");
	}
}

// Sign up with the Namespace, needs to be added to each file that wants to be reachable
Percenter = new Program();