export PLANTS_VERSION=$$(git rev-parse --short HEAD)
export PLANTS_IMAGE="plants:${PLANTS_VERSION}"

build:
	rm -rf docker/target
	mkdir -p docker/target
	cp -r package.json src tests *.js docker/target
	cd docker && docker build --rm -t ${PLANTS_IMAGE} .
	docker tag ${PLANTS_IMAGE} plants:latest
