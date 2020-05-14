const badwords = require("..");
const test = require("tap").test;

test("badwords", function (t) {
  t.ok(Array.isArray(badwords), "should be an array")
  t.ok((badwords.length > 10), "should have at least 10 badwords")
  t.end()
});