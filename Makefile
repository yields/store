
build.js: test/test.js index.js
	@duo $< > build.js

clean:
	rm -fr build.js components

test: build.js
	@duo-test -c make browser

.PHONY: clean test
