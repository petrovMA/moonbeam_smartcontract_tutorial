## Moonbeam simple smart-contract tutorial:

### 1. Install and configure docker in one command:
```sh
curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh
```
[Docker official instructions]

### 2. Install and configure docker in one command:
```sh
docker pull purestake/moonbeam:tutorial-v7
```
[Last version of moonbeam node docker image you can find here]

### 3. Run moonbeam local node:
```sh
docker run --rm --name moonbeam_development --network host \
purestake/moonbeam:tutorial-v7 \
--dev
```

### 4. Open new terminal window
### 5. install node js:
```sh
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt-get install -y nodejs
```
[More about node js]

### 6. Create hardhat directory and go to hardhat directory:
```sh
mkdir hardhat-tutorial && cd hardhat-tutorial
```

### 7. Create npm project and add hardhat library:
```sh
npm init --yes
npm install --save-dev hard hardhat
```

### 8. Configure and compile hardhat project:
```sh
npx hardhat
npx hardhat compile
```

### 9. Add dev network and key to config file:
```sh
nano hardhat.config.js
```
#### 9.1. add private key
```json
const { privateKey } = require('./secrets.json');
```
#### 9.2. add network
```json
networks: {
  dev: {
    url: "http://127.0.0.1:9933",
    chainId: 1281,
    accounts: [privateKey]
  }
}
```
#### 9.3. add private key to file "secrets.json" 
[You can find privateKey for devNet in Pre-funded Development Accounts]

### 10. Run deploy script:
```sh
npx hardhat run scripts/deploy.js --network dev
```


[Docker official instructions]: <https://docs.docker.com/engine/install>
[Last version of moonbeam node docker image you can find here]: <https://docs.moonbeam.network/builders/get-started/moonbeam-dev/>
[More about node js]: <https://github.com/nodesource/distributions/blob/master/README.md>
[You can find privateKey for devNet in Pre-funded Development Accounts]: <https://docs.moonbeam.network/builders/get-started/moonbeam-dev/>