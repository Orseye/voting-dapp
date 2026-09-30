# Децентрализованное голосование (Scaffold-ETH 2)

dApp для голосования: владелец контракта создаёт варианты,
пользователи голосуют один раз, результаты хранятся в блокчейне.

## Что умеет

- Владелец создаёт варианты голосования
- Пользователь голосует один раз (защита от повторов)
- Результаты видны всем и не подделываются

## Стек

Scaffold-ETH 2, Hardhat, Next.js, Wagmi, Viem, TypeScript, Solidity

## Установка и запуск

\`\`\`bash
yarn install
yarn chain     # терминал 1
yarn deploy    # терминал 2
yarn start     # терминал 3
\`\`\`

## Деплой

- Адрес контракта в Sepolia: `0x...`
- Etherscan: https://sepolia.etherscan.io/address/0x...
- Приложение (Vercel): https://...

## Тесты

\`\`\`bash
yarn hardhat:test
\`\`\`

## Скриншоты

![Интерфейс голосования](./docs/screenshot-ui.png)
![Запуск тестов](./docs/screenshot-tests.png)

## Автор

Орехов Сергей Андреевич
