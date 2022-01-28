import { PublicKeyCredentialCreationOptionsJSON, PublicKeyCredentialRequestOptionsJSON }
  from '@simplewebauthn/typescript-types';

export interface UserInfo {
  user_id: string
  name: string
  picture: string
}

export interface WebAuthnRegistrationObject extends Omit<PublicKeyCredentialCreationOptionsJSON, 'rp' | 'pubKeyCredParams'> {
  credentialsToExclude?: string[]
  customTimeout?: number
  abortTimeout?: number
}

export interface WebAuthnAuthenticationObject extends PublicKeyCredentialRequestOptionsJSON {
  credentialsToAllow?: string[]
  customTimeout?: number
  abortTimeout?: number
}
