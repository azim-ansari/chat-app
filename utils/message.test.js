import expect from "expect";
import { generateMessage } from "./message";

describe("Generate Message", () => {
	it("should generate correct message object", () => {
		let from = "Ajay",
			text = "Some random text",
			message = generateMessage(from, text);

		expect(typeof message.createdAt).toBe("number");
		expect(message).toMatchObject({ from, text });
	});
});
