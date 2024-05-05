build:
	docker compose build next --no-cache
	docker compose build strapi --no-cache

start:
	docker compose up -d

stop:
	docker compose down
	
