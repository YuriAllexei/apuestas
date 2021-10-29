# 🚧 Gamble Control
==================
> Proyecto realizado para el NCD Bootcamp NEAR Hispano.
# Gamble Control es una Dapp que permite llevar el control de apuestas de cualquier casino de manera descentralizada. En si la Dapp puede llegar a ser un Casino como tal al implementar los juegos.
# ConnectIoT permite realizar las siguientes operaciones:
   1. Dar de alta a Jugador 
   2. Apostar
   3. Solicitar prestamo
   4. Ver jugadores registrados
   5. Ver solicitudes de prestamo

🏁Prerrequisitos
1. node.js >=12 instalado (https://nodejs.org)
2. yarn instalado
    ```bash
    npm install --global yarn
    ```
3. instalar dependencias
    ```bash
    yarn install --frozen-lockfile
    ```
4. crear una cuenta de NEAR en [testnet](https://docs.near.org/docs/develop/basics/create-account#creating-a-testnet-account)   
5. instalar NEAR CLI
    ```bash
    yarn install --global near-cli
    ```
6. autorizar app para dar acceso a la cuenta de NEAR
    ```bash
    near login
     ```

🐑 Clonar el Repositorio
```bash
git clone https://github.com/YuriAllexei/apuestas
cd apuestas
```

🏗 instalar y compilar el contrato
```bash
    yarn install
    yarn build
```

🚀 Deployar el contrato
```bash
yarn dev-deploy ./contract/build/release/greeter.wasm
```

🚂 Correr comandos
Una vez deployado el contrato, cada método tiene sus argumentos de tal forma que hay que ingresarlos dependiendo de este. Se incita a crear una variable global con el nombre del 
contrato con el siguiente comando:
```bash
export CONTRACT= Id_CONTRATO (Id_CONTRATO aparece en la carpeta neardev cuando se depliega el contrato)
```

Utilizaremos PLAYER_ID para identificar el account Id que utilizamos para dar de alta a un Jugador.


### Crear Dispositivo Nuevo
```bash
near call $CONTRACT setState '{"nombre": "PLAYER_NAME","nearID": "PLAYER_ID","prestamo":true}' --accountId PLAYER_ID
```


### Caso de uso: Se puede crear un Casino en la blockchain y crear 100% de transparencia en el control de apuestas de cualquier casino. Los jugadores tiene la ventaja de saber las comisiones en tiempo real, pedir o dar prestamos a otros jugadores, y ver recomendaciones del mismo contrato para saber cuando y donde apostar.

Los diseños de esta aplicación se pueden ver en el siguiente link: https://marvelapp.com/prototype/790g70c/screen/83021148