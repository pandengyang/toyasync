# sudo npm install -g prettier

.PHONY: fmt

fmt:
	find . -name "*.js" | xargs -I {} prettier --no-semi --single-quote --write {}
