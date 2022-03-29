require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan rescue sad equip give another army ghost'; 
let testAccounts = [
"0xd377564ee557d24b97add0758a95d954d2383e18822c6657ed34bed9f075eb0e",
"0x7c4eb72d49b9036af8fa4224f8d87d226b770ddad11959e90d765ab4dbd0dc1a",
"0x750882fbe65ebeb878e0218c79c9b744621e4174d1bd8aba4ceb4b56c02aa928",
"0x25c33cb1c954dd7a68db9cc5c61a1acedc3f7bff667f6f972548f52cd607e6ee",
"0x71b163f74e28139f351dada1fa1236e7bc27a2278f955b664b6c1ada569b393c",
"0x22c1745d41598ec959af5e89bd3fb709dc08762560823adf5586d8084ab37bca",
"0xb9aad46b43d7ecaaa6103dd7ecf60aa10bc5ee1914df553c513d88957dc855f3",
"0x15ec7cf0621c90e4f12107944b1d49c1c714a81a34113c369893a7be78b8350d",
"0xa62e7f6e7f5ead5f6fbd87dad94bbbebb07d12d17a4aedb4aba527aa11595fce",
"0xa8b7f59fb429b5c05088b04728984506da89045aae3852acc067fc42835bd1be"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

