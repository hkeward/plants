# plants

This is a website for Heather to store and access information she has gained while growing plants.

The website can be accessed at [plants.heatherward.dev](https://plants.heatherward.dev).

Plant information files are written and edited in markdown, and are automatically formatted and displayed on the webpage.


## Project setup

### Requirements

- [docker](https://docs.docker.com/get-docker/)
- [docker-compose](https://docs.docker.com/compose/install/)
- [a configured and running traefik container](https://doc.traefik.io/traefik/getting-started/quick-start/)
- `make`


### Installation and running

1. Create an `.env` file in the root directory that defines the following values:
- `PLANTS_FRONTEND_IMAGE`
- `PLANTS_SRV_BASE`

The `PLANTS_FRONTEND_IMAGE` can be set to `plants:latest`, which is what the `make` command will automatically tag the latest version to, or to a specific short git hash to run a specific version. `PLANTS_SRV_BASE` specifies the root of the path that contains a valid nginx configuration file at `$PLANTS_SRV_BASE/sites-available/nginx_config_file`.


2. Create an nginx config file at `$PLANTS_SRV_BASE/sites-available/nginx_config_file`.

Example config:
```bash
server {
	listen 80;

	server_name	plants.heatherward.dev www.plants.heatherward.dev;

	index index.html index.htm index.nginx-debian.html;

	location / {
		root /var/www/html;
		try_files $uri $uri/ /index.html;
	}
}
```


3. Build the docker image; this will also set the `latest` tag to the most recent version.

```bash
make
```

4. Up the frontend in detached mode. If the container is currently running, first run `docker-compose down`.

```bash
docker-compose up -d
```

The traefik labels you have added will determine where the app is being served.


### Adding plants

Plant file should be written in markdown format and stored in [src/assets/plants](src/assets/plants). Files *must* end in `.md` to be recognized and loaded. When new plants are added, the image must be rebuilt using `make` and the `docker-compose` commands must be rerun.

I have plants sync into this directory using a cronjob, and another cronjob periodically rebuilds and reups the container.


## Local development

### Install dependencies
```bash
npm install
```

### Compiles and hot-reloads for development
```bash
npm run serve
```

### Compiles and minifies for production
```bash
npm run build
```

### Run your unit tests
```bash
npm run test:unit
```

### Lints and fixes files
```bash
npm run lint
```
