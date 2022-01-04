TELEGRAM_BOT_TOKEN=????
TELEGRAM_CHAT_ID=????

DOCKER_IMAGE=jprando/vuejsbrasilvagas
SRV_NAME=vuejsvagas-bot-srv
LAST_DATE=2020-07-30T12:00:00Z

##@ DOCKER

pull: ## baixa ou atualiza a imagem jprando/vuejsbrasilvagas
	docker pull ${DOCKER_IMAGE}

run: ## cria um container, a partir da imagem jprando/vuejsbrasilvagas, e o inicializa
	docker run --name ${SRV_NAME} \
		--restart=always \
		-e TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN} \
		-e TELEGRAM_CHAT_ID=${TELEGRAM_CHAT_ID} \
	-d ${DOCKER_IMAGE}

devrun: ## cria o container, inicializa-o e envia logs para o console
	docker run --name ${SRV_NAME} \
		--restart=always \
		-e TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN} \
		-e TELEGRAM_CHAT_ID=${TELEGRAM_CHAT_ID} \
	${DOCKER_IMAGE}

daterun: ## inicia o container e busca vagas a partir de uma data especificada
	docker run --name ${SRV_NAME} \
		--restart=always \
		-e TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN} \
		-e TELEGRAM_CHAT_ID=${TELEGRAM_CHAT_ID} \
		-e LAST_DATE_REQUEST=${LAST_DATE} \
	-d ${DOCKER_IMAGE}

start: ## inicia o container
	docker start ${SRV_NAME}

stop: ## para a execucao do container
	docker stop ${SRV_NAME}

restart: ## reinicia o container
	docker restart ${SRV_NAME}

log: ## exibe o log de execucao do container
	docker logs --tail 50 --follow ${SRV_NAME}

_rm: ## para a execucao do container e o destroi
	-docker stop ${SRV_NAME}
	docker rm ${SRV_NAME}

_recreate: ## destroi o container e cria ele novamente
	-make _rm
	make run

deploy: ## atualiza a imagem, recria o container e o inicia
	make pull
	make _recreate

##@ GERAL

.DEFAULT_GOAL := help
.PHONY: help

help:  ## exibe essa ajuda
	@awk 'BEGIN {FS = ":.*##"; printf "\nUtilizacao:\n  make \033[36m<opcao>\033[0m [\033[36m<opcao>\033[0m] [\033[36m<opcao>\033[0m] [...]\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
	@echo "\nVoce deve configurar as variaveis TELEGRAM_BOT_TOKEN e TELEGRAM_CHAT_ID no arquivo makefile"
