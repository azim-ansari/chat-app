let socket = io();
socket.on("connect", () => {
	console.log("connected to server.");

	socket.emit("createMessage", {
		from: "Azim",
		text: "Whats going on !!",
	});
});
socket.on("disconnect", () => {
	console.log("diconnected from server.");
});
socket.on("newMessage", message => {
	console.log("newMessage.", message);
});
