# Định nghĩa biến DOCKER_COMPOSE_CMD để chọn đúng lệnh dựa vào hệ điều hành
ifeq ($(shell uname), Darwin)
    DOCKER_COMPOSE_CMD = docker compose
else
    DOCKER_COMPOSE_CMD = docker-compose
endif

# Tên của tệp Docker Compose chính
DOCKER_COMPOSE_FILE = docker-compose.yaml

# Tên của tệp Docker Compose cho môi trường phát triển
DOCKER_COMPOSE_DEV_FILE = docker-compose.dev.yaml

# Biến môi trường cho tên dịch vụ (tùy chỉnh theo dự án của bạn)
SERVICE_NAME = ai-translation

# Cờ để chạy Docker Compose
DOCKER_COMPOSE_RUN = ${DOCKER_COMPOSE_CMD} -f $(DOCKER_COMPOSE_FILE)
DOCKER_COMPOSE_RUN_DEV = ${DOCKER_COMPOSE_CMD} -f $(DOCKER_COMPOSE_FILE) -f $(DOCKER_COMPOSE_DEV_FILE)

# Khởi động môi trường production
.PHONY: prod
prod:
	$(DOCKER_COMPOSE_RUN) up -d

# Khởi động môi trường development
.PHONY: dev
dev:
	$(DOCKER_COMPOSE_RUN_DEV) up -d

# Dừng tất cả các container (chỉ production)
.PHONY: stop
stop:
	$(DOCKER_COMPOSE_RUN) down

# Dừng và xóa tất cả các container (cả dev và prod)
.PHONY: clean
clean:
	$(DOCKER_COMPOSE_RUN_DEV) down --volumes --remove-orphans

# Kiểm tra logs của dịch vụ chính
.PHONY: logs
logs:
	$(DOCKER_COMPOSE_RUN) logs -f $(SERVICE_NAME)

# Xây dựng lại các container cho production
.PHONY: build
build:
	$(DOCKER_COMPOSE_RUN) build

# Xây dựng lại các container cho môi trường development
.PHONY: build-dev
build-dev:
	$(DOCKER_COMPOSE_RUN_DEV) build

# Kiểm tra trạng thái của các container
.PHONY: status
status:
	$(DOCKER_COMPOSE_RUN) ps
