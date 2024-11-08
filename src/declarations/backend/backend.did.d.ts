import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Company {
  'name' : string,
  'description' : string,
  'stage' : string,
  'imageUrl' : string,
  'yearFounded' : string,
  'category' : string,
}
export interface TeamMember {
  'bio' : string,
  'title' : string,
  'name' : string,
  'imageUrl' : string,
}
export interface _SERVICE {
  'getCompaniesByCategory' : ActorMethod<[string], Array<Company>>,
  'getPortfolio' : ActorMethod<[], Array<Company>>,
  'getTeam' : ActorMethod<[], Array<TeamMember>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
