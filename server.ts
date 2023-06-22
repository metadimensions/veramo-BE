// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import { IDIDCommMessage, IPackDIDCommMessageArgs } from '@veramo/did-comm';
// import { v4 } from 'uuid';

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// const VERIFIABLE_CREDENTIAL_MESSAGE_TYPE = 'https://www.w3.org/2018/credentials#VerifiableCredential';

// interface VerifiableCredential {
//   // Define the shape of your Verifiable Credential here
//   [key: string]: any;
// }

// function createCredentialMessage(
//   credential: VerifiableCredential,
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
//   };
// }

// app.post('/sendCredential', async (req: Request, res: Response) => {
//   const { agent, credential, senderDidUrl, recipientDidUrl } = req.body;
  
//   const credentialMessage = createCredentialMessage(
//     credential,
//     senderDidUrl,
//     recipientDidUrl,
//   );
  
//   const packedCredentialMessage = await agent.packDIDCommMessage({
//     packing: 'authcrypt',
//     message: credentialMessage,
//   } as IPackDIDCommMessageArgs);

//   await agent.sendDIDCommMessage({
//     messageId: credentialMessage.id,
//     packedMessage: packedCredentialMessage,
//     recipientDidUrl: recipientDidUrl,
//   });

//   res.json({ success: true });
// });

// app.listen(3000, () => console.log('Server listening on port 3000'));
