/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MetadataRenderAdminCheck,
  MetadataRenderAdminCheckInterface,
} from "../../MetadataRenderAdminCheck.sol/MetadataRenderAdminCheck";

const _abi = [
  {
    inputs: [],
    name: "Access_OnlyAdmin",
    type: "error",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212204248d488e946bd37e503903a13d89e4e2e978b944a3985eb31db6a9e15c93a6564736f6c634300080a0033";

type MetadataRenderAdminCheckConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MetadataRenderAdminCheckConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MetadataRenderAdminCheck__factory extends ContractFactory {
  constructor(...args: MetadataRenderAdminCheckConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MetadataRenderAdminCheck> {
    return super.deploy(overrides || {}) as Promise<MetadataRenderAdminCheck>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MetadataRenderAdminCheck {
    return super.attach(address) as MetadataRenderAdminCheck;
  }
  override connect(signer: Signer): MetadataRenderAdminCheck__factory {
    return super.connect(signer) as MetadataRenderAdminCheck__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MetadataRenderAdminCheckInterface {
    return new utils.Interface(_abi) as MetadataRenderAdminCheckInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MetadataRenderAdminCheck {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MetadataRenderAdminCheck;
  }
}