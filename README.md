# 🪙Crypto-DToken

Crypto DToken, is a crypto token built on the Internet Computer (IC) where  user can get free tokens and transfer them with their friends using their principal ID like a bank. 

The Frontend is implemented using React.js, Material Ui and Backend using DFINITY's Motoko language.

The user can claim free 10000 tokens, but just for once. Then the ability to see the balance of the tokens, as well as transfering the amount of tokens from wallet to another wallet.

<i>***The page design is inspired from the old operating system interface design.***</i>
<hr>
<img alt="GIF" src="https://github.com/Mayurdhamgunde/Cryto-DToken/blob/master/snaps/img-1.png?raw=true" width="90%"/>
<br>
<img alt="GIF" src="https://github.com/Mayurdhamgunde/Cryto-DToken/blob/master/snaps/img-2.png?raw=true" width="90%"/>


# To Deploy

1. Find out your principal id:

```
dfx identity get-principal
```

2. Replace the <REPLACE WITH YOUR PRINCIPAL> in main.mo with the principal you got from step 1.

```
  let owner : Principal = Principal.fromText("<REPLACE WITH YOUR PRINCIPAL>");
```

3. Open up a new terminal in this VSCode project and deploy the token canister:

```
dfx deploy
```

4. Start the frontend:

```
npm start
```

5. Set the canister id to a local variable:

```
CANISTER_PUBLIC_KEY="principal \"$( \dfx canister id token )\""
```

6. Transfer half a billion tokens to the canister Principal ID:

```
dfx canister call token transfer "($CANISTER_PUBLIC_KEY, 500_000_000)"
```

7. Claim the tokens from the faucet on the frontend website.

8. Get token canister id:

```
dfx canister id token
```
