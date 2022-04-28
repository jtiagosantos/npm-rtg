<div align="center">
  <img alt="Random Token Generator" src=".github/title.png" />
</div>

<h1></h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jtiagosantos/npm-rtg?color=%green">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jtiagosantos/npm-rtg?color=blue">
  <a href="https://github.com/jtiagosantos/npm-rtg/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jtiagosantos/npm-rtg?color=purple">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=orange">
   <a href="https://github.com/jtiagosantos/npm-rtg/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jtiagosantos/npm-rtg?style=social">
  </a>
</p>

<br>

### 🚀 Install package

```
npm i npm-rtg
```

or

```
yarn add npm-rtg
```
<br>

### 💻 Usage

🟢 import package:

```ts
import { generateToken } from 'npm-rtg';
```

or

```ts
const { generateToken } = require('npm-rtg');
```

<br>

⚡ Examples:

1. Random generic token:

```ts
const randomToken = generateToken(40);
console.log(randomToken);


// Output example:
// AjIH9EUtxQX7IsFBg5pf0gJXXPBMUvdprTHjBo3W
```

2. Random token just letters:

```ts
const token = generateToken(40, {
  justLetters: true,
});
console.log(token);


// Output example:
// fSLVmOtDEGArSSqThjuEpeXlhlovaBhHkghunYoO
```

3. Random token just lowercase letters:

```ts
const token = generateToken(40, {
  justLowercaseLetters: true,
});
console.log(token);


// Output example:
// fmdtvyetjbktpdygovywkqznvtmwckrzdnqotgrl
```

4. Random token just uppercase letters:

```ts
const token = generateToken(40, {
  justUppercaseLetters: true,
});
console.log(token);


// Output example:
// ETSKSNRTIJCIYJWLSAVOFJPGHDTXWNNGFSEFXQRV
```

5. Random token just numbers:

```ts
const token = generateToken(40, {
  justNumbers: true,
});
console.log(token);


// Output example:
// 1587385939407518647197201929918727461338
```