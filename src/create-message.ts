// import { IDIDCommMessage } from '@veramo/did-comm'
// import { v4 } from 'uuid'

// const VERIFIABLE_CREDENTIAL_MESSAGE_TYPE = 'https://www.w3.org/2018/credentials#VerifiableCredential'

// function createCredentialMessage(
//   credential: any,
//   senderDidUrl: string,
//   recipientDidUrl: string,
// ): IDIDCommMessage {
//   return {
//     id: v4(),
//     type: VERIFIABLE_CREDENTIAL_MESSAGE_TYPE,
//     to: recipientDidUrl,
//     from: senderDidUrl,
//     return_route: 'all',
//     body: credential,
//   }
// }

// async function sendCredential(
//   agent: any,
//   credential: any,
//   senderDidUrl: string,
//   recipientDidUrl: string,
// ): Promise<void> {
//   const credentialMessage = createCredentialMessage(
//     credential,
//     senderDidUrl,
//     recipientDidUrl,
//   )

//   const packedCredentialMessage = await agent.packDIDCommMessage({
//     message: credentialMessage,
//   })

//   await agent.sendDIDCommMessage({
//     messageId: credentialMessage.id,
//     packedMessage: packedCredentialMessage,
//     recipientDidUrl: recipientDidUrl,
//   })
// }

// export { createCredentialMessage, sendCredential }
