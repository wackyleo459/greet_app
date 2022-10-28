import { Actor, HttpAgent } from "@dfinity/agent";
import { blsVerify } from '@dfinity/bls-verify';
// Imports and re-exports candid interface
import { idlFactory } from './greet_dapp.did.js';
export { idlFactory } from './greet_dapp.did.js';
// CANISTER_ID is replaced by webpack based on node environment
export const canisterID = "rrkah-fqaaa-aaaaa-aaaaq-cai";

/**
 *
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./greet_dapp.did.js")._SERVICE>}
 */
export const createActor = (canisterId, options) => {
  const agent = new HttpAgent(
    options
      ? {...options.agentOptions}
      : {
          // Identity,
          host: "http://localhost:8000/",
        },
  );
  console.log("my NODE_ENV", process.env.NODE_ENV);
  console.log("created agent", agent);

  // Fetch root key for certificate validation during development
  if (process.env.NODE_ENV !== "production") {
    agent.fetchRootKey().catch(err => {
      console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...(options ? options.actorOptions : {}),
  });
};
  
/**
 * A ready-to-use agent for the greet_dapp canister
 * @type {import("@dfinity/agent").ActorSubclass<import("./greet_dapp.did.js")._SERVICE>}
 */
export const greet_dapp = createActor(canisterID, {
  agentOptions: {
    fetchOptions: {
      reactNative: {
        __nativeResponseType: "base64",
      },
    },
    callOptions: {
      reactNative: {
        textStreaming: true,
      },
    },
    host: "http://localhost:8000",
  },
});
