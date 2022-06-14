module.exports=(function(input){return require("crypto").createHash("sha512").update(input).digest("hex")})
