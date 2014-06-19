MOCHA?=node_modules/.bin/mocha
REPORTER?=spec
GROWL?=--growl
EXTRA?=
BAIL=--bail
FLAGS=$(GROWL) --reporter $(REPORTER) --colors $(BAIL) $(EXTRA)

clean:
	@echo "-----> remove node_modules folder"
	@rm -rf node_modules || true
	@echo "       node_modules removed"

build-production:
	@echo "-----> npm install --production"
	@npm install --silent --production
	@echo "       npm install complete"

build:
	@npm install

test:
	@NODE_ENV="test" \
	$(MOCHA) $(shell find test -name "*-test.js") $(FLAGS)

one:
	@NODE_ENV="test" \
	$(MOCHA) $(NAME) $(FLAGS)

unit:
	@NODE_ENV="test" \
	$(MOCHA) $(shell find test/unit -name "*.js") $(FLAGS)

integration:
	@NODE_ENV="test" \
	$(MOCHA) $(shell find test/integration -name "*-test.js") $(FLAGS)

.PHONY: test config
