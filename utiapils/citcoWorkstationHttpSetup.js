const syswidecas = require('syswide-cas');
const globalTunnel = require('global-tunnel-ng');

syswidecas.addCAs('./ca.cer');
globalTunnel.initialize({
    connect: 'both', //use proxy for both http and https
    host: 'tor1mwg01.ad.ent.citco.com',
    port: 8080,
    proxyAuth: 'fakeuser:fakepassword',
});