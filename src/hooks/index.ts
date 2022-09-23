import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useCall, useContractFunction } from "@usedapp/core";
import simpleContractAbi from "../abi/SimpleContract.json";
import { simpleContractAddress } from "../contracts";

const simpleContractInterface = new ethers.utils.Interface(simpleContractAbi);
const contract = new Contract(simpleContractAddress, simpleContractInterface);
console.log(contract);

export function useCount() {
  const { value, error } =
    useCall({
      contract: new Contract(simpleContractAddress, simpleContractInterface),
      method: "count",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  console.log(value?.[0]);
  return value?.[0];
}

export function useIncrement() {
  const { state, send } = useContractFunction(contract, "incrementCount", {});
  return { state, send };
}

export function useSetCount() {
  const { state, send } = useContractFunction(contract, "setCount", {});
  return { state, send };
}

export function useContractMethod(methodName: string) {
  const { state, send } = useContractFunction(contract, methodName, {});
  return { state, send };
}
