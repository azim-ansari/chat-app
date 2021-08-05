import moment from "moment";
let generateMessage = (from, text) => {
	return {
		from,
		text,
		createdAt: moment().valueOf(),
	};
};

let generateMessageLocation = (from, lat, lng) => {
	return {
		from,
		url: `https://www.google.com/maps?q=${lat},${lng}`,
		createdAt: moment().valueOf(),
	};
};

module.exports = { generateMessage, generateMessageLocation };
