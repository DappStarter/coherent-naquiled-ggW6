require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remember slow imitate prize force skirt'; 
let testAccounts = [
"0x743a3f1c12ff6e74aa12837e2f6050ecef892c217720d38f4c28ac218f8a38dc",
"0xe6b52ab43bea36e0835bfd57fc293383edf86c68ea946892051c815d973de9b4",
"0xfe27150afcc68f84dea7d05a4d1d2c16a362fecef9a05fd19cb16e991ef3be04",
"0x7225d7543fb6576c99801713a36711c73826cf7f11f5e233a3a557140ae6ca08",
"0x744416316ee77c816e30cae8867cde31b8bca8e486ad9c26770ae6baad6c6c60",
"0xc35c2a42597a6ace619335be80b2e7a6c5413f1d4dfb247196d4acde07272898",
"0xa0a2782f6475a68202aa942e0cee801fb0b019a6f7db78132cee8a0b1f091464",
"0x07e396a49a1c0cc1319620b798168dd037dd36c68afcc64d2ab6f007559e5c3f",
"0x0491fa5301b2edba0975b1105f6fae1286c433fd9ab08e3076eb4e75cc77a4fa",
"0x2ed57ce13c33edf770a445e47602699de507b0e90de52b5658b5860cae54dd51"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


