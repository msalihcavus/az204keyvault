const {ClientSecretCredential} = require('@azure/identity')
const {SecretClient} = require('@azure/keyvault-secrets')

const credential = new ClientSecretCredential(
    '27287a8c-b44a-40a0-a8cd-a5be11977eef', //tenant id
    'd87aead6-eb88-4fbc-9bd3-6bbac3774094',  //client id
    'VdT8Q~MMmDz5e8i6FIO5bLYQVRiDXH~xX8zZcc.i'   //client secret
    )

const client = new SecretClient('https://salovault204.vault.azure.net/', credential)

client.getSecret('mysecret2')
.then((response) => {
    console.log(response)
})
.catch((err) => {
    console.log('error', err)
})